from django.contrib import admin
from .models import Product, ProductImage, User

class UserAdminView(admin.ModelAdmin):
    list_display= ('id','first_name', 'last_name', 'email')

admin.site.register(User, UserAdminView)
admin.site.register(Product)
admin.site.register(ProductImage)
