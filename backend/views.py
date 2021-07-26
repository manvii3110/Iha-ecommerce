
# This will be helpful for converting a fetch request body to json
import json

# For signIn and signOut Functionality
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import requires_csrf_token, ensure_csrf_cookie

# For user creation
from .models import Enquiry, Product, ProductImage, User, View


# For check_authentication_status
from django.http import JsonResponse


""" 
                Section Index
    1.  Sign In and Out functionality, with json
    2.  Product CRUD API
    3.  Contact Us Api
"""


""" 
    1.  Sign In and Out functionality, with json
"""

# This will sign in the user
# This  decorator will ensure that user is logged in from the safest way possible


@requires_csrf_token
def signIn(request):
    if request.method == "POST":

        # converting request data from json to object
        data = json.loads(request.body)
        email = data["email"]
        password = data["password"]

        # Checking if the email is correct
        user = User.objects.filter(email=email)
        if len(user) != 0:
            user = authenticate(
                request, username=user[0].username, password=password)

            # Logging user in, if password is correct
            if user is not None:
                login(request, user)
                return JsonResponse({"authenticated": True}, status=202)
            else:
                return JsonResponse({"authenticated": False, "error": "Wrong Password"}, status=401)

        # This will run if was no user found with that email address
        else:
            return JsonResponse({"authenticated": False, "error": "Account Not Found"}, status=404)

    else:
        return HttpResponseRedirect(reverse("frontend:signInView"))


# This will signOut the user
@login_required
def signOut(request):
    logout(request)
    return HttpResponseRedirect(reverse("frontend:index"))



# This will check if the user is signed in or not
# And send a JSON response
def check_authentication_status(request):
    if request.user.is_authenticated:
        return JsonResponse({"authenticated": True,
                             "userImage": request.user.userImage.url,
                             "email": request.user.email,
                             "first_name": request.user.first_name,
                             "last_name": request.user.last_name}, status=200)
    else:
        return JsonResponse({"authenticated": False}, status=200)


# This will check if the email exist in database or not
@ensure_csrf_cookie
def check_database_of_user(request, searchParameter=None):
    if request.method == 'POST' and searchParameter is not None:

        if searchParameter in ['email']:

            data = json.loads(request.body)

            # This will search for email in database
            if searchParameter == 'email':
                if len(User.objects.filter(email=data['email'])) == 0:
                    return JsonResponse({"check": "Email does not exists"}, status=204)
                else:
                    return JsonResponse({"error": "Email Exists"}, status=406)

        # If searchParameter is not provided
        else:
            return JsonResponse({"Error": "Forbidden"}, status=403)
    else:
        return HttpResponseRedirect(reverse("frontend:index"))


# This will allow only high level user's to create account
@requires_csrf_token
@ensure_csrf_cookie
def registerUserApi(request):

    if request.method == "POST":

        data = json.loads(request.body)
        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        password = data["password"]
        confirmpassword = data["confirmuserpassword"]

        # Checking if the email already exists
        if len(User.objects.filter(username=email)) != 0:
            return JsonResponse({"error": "Email already exists."}, status=409)
            
        # Checking if the password and confirmpassword are same
        if(password != confirmpassword):
            return JsonResponse({"error": "Password and Confirm Password must be same."}, status=409)

        # Creating the user
        else:
            user = User.objects.create_user(email, email, password)
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            login(request, user)
            return JsonResponse({"account": True}, status=201)

    else:
        return HttpResponseRedirect(reverse("frontend:index"))


""" 
    2. Product CRUD API
"""
 
# CAUTION: This variable is related to storing products in database
#          Editing this may affect in crash of the store
categories =[
    ('ma', 'mobile accessories'),
    ('la', 'laptop accessories'),
    ('bty', 'beauty'),
    ('clo', 'clothing'),
    ('dec', 'home decoration'),
    ('ele', 'electronics'),
    ('fur', 'furniture'),
    ('gro', 'grocery and gourmet'),
    ('bp', 'baby products'),
    ('mus', 'musical instruments'),   
    ('jwl', 'jewelry'),
    ('cro', 'crockery'),
    ('cln', 'cleaning products'),
    ('m', 'mobiles'),
    ('n', 'novel'),
    ('pet', 'pet supplies'),
    ('sg', 'sport goods'),
    ('spe','spectacles'),
    ('tab', 'tablets'),
    ('ft','footwear'),
    ('sta', 'stationary'),
    ('w', 'watches'),
    ('fod', 'eatables'),
    ('toy', 'children toys'),
    ('t', 'tools'),
    ('h','health supplements'),
    ('med','medicine'),
    ('gft', 'gift cards'),
    ('ind', 'indian heritage'),
    ('cra', 'handicrafts'),
    ('spk', 'speakers'),
    ('v','vedio games'),
    ('lug', 'luggage'),
    ('ess', 'daily essentials'),
    ('cam', 'cameras'),
    ('sft', 'softwares'),
    ('b', 'e-books'),
    ('car', 'car and motorbikes'),
    ('o', 'other')
]


def prodcutCategoriesAPI(request):
    return JsonResponse({"categories": categories}, status=201)


def productApi(request, pk=None):
    if request.method == "POST" and request.user.is_authenticated:
        
        # Creating Product
        p = Product.objects.create(
            owner=request.user,                         productName=request.POST["productName"], 
            description=request.POST["description"], 
            category=request.POST["category"],          price=int(request.POST["price"]), 
            keywords=request.POST["keywords"],          condition=request.POST["condition"])

        # Creating Product Image (s) objects
        for file_num in range(0, int(request.POST["imageLength"])):
            ProductImage.objects.create(image=request.FILES.get(f"img{file_num}"), product=p)

        # This is will send back to client
        data = p.serialize()
        data["images"] = [i.serialize() for i in p.images.all()]
        return JsonResponse({"Product": "created", "data":data}, status=201)

    # This is get method
    else:
        if pk:
            try:
                product = Product.objects.get(id=pk)
            except: 
                return JsonResponse("Product Not Found", status=404, safe=False)

            # Counting Views
            View.objects.create(viewer= request.user if request.user.is_authenticated else None, product=product)

            d = product.serialize()
            d["description"] = product.description
            d["images"] = [i.serialize() for i in product.images.all()]
            return JsonResponse({"data":d}, status=201)
        else:
            # This will send recently added products
            products = Product.objects.all().order_by("-created")[:15]
            data = []
            for product in products:
                p = product.serialize()
                p["images"] = [i.serialize() for i in product.images.all()]
                data.append(p)
            return JsonResponse({"data":data})


def myProductsAPI(request):
    if request.user.is_authenticated:
        # This will send recently added products
        products = request.user.products.all().order_by("-created")[:15]
        data = []
        for product in products:
            p = product.serialize()
            p["images"] = [i.serialize() for i in product.images.all()]
            p["views"] = product.views.all().count()
            data.append(p)
        return JsonResponse({"data":data})

    # User will not be allowed if they have not logged into the website
    else:
        return JsonResponse("Forbidden", status=403, safe=False)



""" 
    3. Contact Us Api 
"""
 
def ContactUsAPI(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        message = request.POST["message"]

        Enquiry.objects.create(name=name, email=email, message=message)

        return JsonResponse({"message": "We will contact you soon"}, status=202)

    else:
        return JsonResponse("Method not allowed", status=405, safe=False)
