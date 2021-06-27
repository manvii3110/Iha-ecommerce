from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    userImage = models.ImageField(upload_to='userImage/',default='../static/frontend/svg/user.svg')
    
    def __str__(self):
        return f"{self.username} - {self.email}"


class Product(models.Model):
    id =  models.AutoField(primary_key=True)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="products", null=True)

    name = models.CharField(max_length=256, blank=False)
    description = models.TextField(blank=False)
    
    categories =[
        ('o', 'other'),
        ('e', 'electronic'),
        ('f', 'furniture')
    ]
    category = models.CharField(max_length=3, choices=categories, default='o')

    price  = models.FloatField(default=0.00)
    time = models.DateTimeField(auto_now_add=True)

    # These are not directly operated on creation
    in_stock = models.BooleanField(default=True)
    in_stock_time = models.DateTimeField(blank=True)

    # This will allow web adim to block item
    block = models.BooleanField(default=False)
    block_resason = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} {self.price}"