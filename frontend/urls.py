from django.urls import path, re_path
from . import views

# For favicon
from django.views.generic.base import RedirectView
favicon_view = RedirectView.as_view(url='/static/frontend/svg/ihaIcon.svg', permanent=True)


app_name = "frontend"

urlpatterns = [
    # For favicon
    re_path(r'^favicon\.ico$', favicon_view),

    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('contactus/', views.contactUs),

    path('signin/', views.signInView, name='signInView'),
    path('register/', views.registerView),

    path('product/<int:id>/', views.productView),

    path('dashboard/',views.Dashboard),
    path('dashboard/products/', views.ProductDashboard),
    path('dashboard/products/<str:pageName>/', views.ProductDashboard),

    # These are temporary urls
    path('cards', views.cards),
]
