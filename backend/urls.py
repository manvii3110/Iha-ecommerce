from django.urls import path, include
from . import views

# This will be helpful for media files, like user profile image
from django.conf.urls.static import static
from django.conf import settings


app_name = "backend"


urlpatterns = [

    # These are api routes
    path('api/account/signin', views.signIn, name="signIn"),
    path('signout', views.signOut, name="signOut"),
    path('api/account/check_status', views.check_authentication_status),
    path('api/account/register', views.registerUserApi),
    path('api/check/user/<str:searchParameter>', views.check_database_of_user),

    path('api/product/',views.productApi),
    path('api/product/categories',views.prodcutCategoriesAPI),
    path('api/product/<int:pk>',views.productApi),
    path('api/product/myProducts', views.myProductsAPI),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # This will send user Profile from media Folder
