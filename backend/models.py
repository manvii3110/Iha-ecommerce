from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.fields import BLANK_CHOICE_DASH



class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    userImage = models.ImageField(upload_to='userImage/',default='../static/frontend/svg/user.svg')
    
    def __str__(self):
        return f"{self.username} - {self.email}"

    def serialize(self):
        return {
            "id": self.id,
            "owner": self.owner.serialize(),
            "p_message": self.p_message,
            "p_likes": [user.username for user in self.p_likes.all()],
            "p_created": self.p_created.strftime("%b %d %Y, %I:%M %p"),
            "p_modified": self.p_modified.strftime("%b %d %Y, %I:%M %p"),
            "p_adel": self.p_adel
        }

class ProductImage(models.Model):
    id =  models.AutoField(primary_key=True)
    p_img = models.ImageField(upload_to='productImages/')


class Product(models.Model):
    id =  models.AutoField(primary_key=True)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="products", null=False)


    name = models.CharField(max_length=65, blank=False)
    imgs = models.ForeignKey(ProductImage, on_delete=models.CASCADE, null=True)
    description = models.TextField(blank=False)
    
    categories =[
        ('o', 'other'),
        ('e', 'electronic'),
        ('f', 'furniture')
    ]
    category = models.CharField(max_length=3, choices=categories, default='o')

    price  = models.FloatField(default=0.00)
    time = models.DateTimeField(auto_now_add=True)

    keywords = models.TextField(default='', blank=False)

    # These are not directly operated on creation
    in_stock = models.BooleanField(default=True)
    in_stock_time = models.DateTimeField(blank=True)

    # This will allow web adim to block item
    block = models.BooleanField(default=False)
    block_resason = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} {self.price}"


    def serialize(self):
        return {
            "id": self.id,
            "owner": self.owner.serialize(),
            "p_message": self.p_message,
            "p_likes": [user.username for user in self.p_likes.all()],
            "p_created": self.p_created.strftime("%b %d %Y, %I:%M %p"),
            "p_modified": self.p_modified.strftime("%b %d %Y, %I:%M %p"),
            "p_adel": self.p_adel
        }