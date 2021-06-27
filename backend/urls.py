from django.urls import path, include
from . import views

# This will be helpful for media files, like user profile image
from django.conf.urls.static import static
from django.conf import settings


app_name = "backend"


urlpatterns = [

    # These are api routes
    path('api/account/signin', views.signIn, name="signIn"),
    path('api/account/signout', views.signOut, name="signOut"),
    path('api/account/check_status', views.check_authentication_status),
    path('api/account/register', views.registerUserApi),
    path('api/check/user/<str:searchParameter>', views.check_database_of_user)
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # This will send user Profile from media Folder


from rest_framework import routers

router = routers.DefaultRouter()
router.register('product', views.ProductViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns += [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/myproduct', views.Product_api)
]