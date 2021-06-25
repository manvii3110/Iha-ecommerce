from django.shortcuts import render


# This will import all Static files fro index function
from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage
from django.views.decorators.csrf import  ensure_csrf_cookie


# This will load a perticular script required to be render
def loadFile(request, filename = 'App'):
    files = list(get_files(StaticFilesStorage(), location='frontend'))
    files = {file.replace('frontend/','/static/frontend/') for file in files if filename in file and not any(x in file for x in ['.txt','.gz','runtime'])}
    print(files)  
    return render(request, 'frontend/template.html', {"files": files})


def index(request):
    return loadFile(request, filename='Home')


@ensure_csrf_cookie
def signInView(request):
    return loadFile(request, filename='SignInPage')


@ensure_csrf_cookie
def registerView(request):
    return loadFile(request, filename='Register')


def createProduct(request):
    return loadFile(request, filename='ProductPosting')
