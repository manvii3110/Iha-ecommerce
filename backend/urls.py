from django.urls import  path
from . import views


app_name = "backend"


urlpatterns = [

    # These are api routes
    path('api/account/signin', views.signIn, name="signIn"),
    path('api/account/signout', views.signOut, name="signOut"),
    path('api/account/check_status', views.check_authentication_status),
    path('api/register', views.registerUserApi),
    path('api/check/user/<str:searchParameter>', views.check_database_of_user)
]