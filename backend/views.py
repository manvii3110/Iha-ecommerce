from django.shortcuts import render, redirect

# This will be helpful for converting a fetch request body to json
import json

# For signIn and signOut Functionality
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import requires_csrf_token, ensure_csrf_cookie

# For user creation
from .models import User


# For check_authentication_status
from django.http import JsonResponse


""" 
                Section Index
    1.  Sign In and Out functionality, with json
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
# And send a JSON reposnse
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
