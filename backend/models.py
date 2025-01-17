from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    userImage = models.ImageField(upload_to='userImage/',default='../static/frontend/svg/user.svg')
    
    def __str__(self):
        return f"{self.email}"

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "userImage": self.userImage.url,
        }




class Product(models.Model):
    id =  models.AutoField(primary_key=True)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="products", null=False)


    productName = models.CharField(max_length=65, blank=False)
    description = models.TextField(blank=False)
   
    category = models.CharField(max_length=10, default='o')

    price  = models.FloatField(default=0.00)

    keywords = models.TextField(default='', blank=False)


    conditions = [
        ('n', 'new'),
        ('o', 'old')
    ]
    condition = models.CharField(max_length=1, choices=conditions, default='n')


    # These are not directly operated on creation
    no_of_stock = models.IntegerField(default=0)
    in_stock_time = models.DateTimeField(blank=True, auto_now_add=True)


    # This will allow web admin to block item
    block = models.BooleanField(default=False)
    block_reason = models.TextField(blank=True)


    # Automatic Time Stamp    
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.productName} {self.price}"


    def serialize(self):
        return {
            "id": self.id,
            "owner": self.owner.serialize(),
            "productName": self.productName,
            "price": self.price,
            "keywords":self.keywords,
            "no_of_stock": self.no_of_stock,
            "in_stock_time": self.in_stock_time,
            "created": self.created.strftime("%b %d %Y, %I:%M %p"),
            "modified": self.modified.strftime("%b %d %Y, %I:%M %p"),
        }



class ProductImage(models.Model):
    id =  models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='productImages/', null=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name="images", null=False)
 
    def __str__(self):
        return f"{self.image.url}"

    def serialize(self):
        return {
            "id": self.id,
            "url": self.image.url
        }


class View(models.Model):
    id =  models.AutoField(primary_key=True)
    viewer = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="myViews", null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name="views", null=False)

    # Automatic Time Stamp    
    created = models.DateTimeField(auto_now_add=True)

    def serialize(self):
        return {
            "date": self.created.strftime("%b %d %Y"),
            "time": self.created.strftime("%I:%M %p")
        }
        

class Enquiry(models.Model):
    id =  models.AutoField(primary_key=True)
    name = models.CharField(max_length=128, null=False)
    email = models.EmailField(null=False)
    message = models.TextField(null=True)

    # Automatic Time Stamp    
    created = models.DateTimeField(auto_now_add=True)

    read = models.BooleanField(default=False)

    def __str__(self):
        return self.name
