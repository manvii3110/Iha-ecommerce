from django.http.response import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render

# This is for authentication in production
from django.views.decorators.csrf import ensure_csrf_cookie

# This will import all Static files fro index function
from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage


# This will load a perticular script required to be render
def loadFile(request, filename = 'App'):
    files = list(get_files(StaticFilesStorage(), location='frontend/static/frontend'))
    files = {file.replace('frontend/','/') for file in files if filename in file and '.txt' not in file and 'runtime' not in file}
    print(files)  
    return render(request, 'frontend/template.html', {"files": files})


def home(request):
    return loadFile(request, filename='Home')

def index(request):
    return HttpResponseRedirect(reverse('frontend:home'))


@ensure_csrf_cookie
def signInView(request):
    return loadFile(request, filename='SignInPage')


@ensure_csrf_cookie
def registerView(request):
    return loadFile(request, filename='Register')


@ensure_csrf_cookie
def sellProductPage(request):
    return loadFile(request, filename='sellProductPage')
