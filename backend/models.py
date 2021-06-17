from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    userImage = models.ImageField(upload_to='userImage/',default='../static/frontend/svg/user.svg')
    
    def __str__(self):
        return f"{self.username} - {self.email}"