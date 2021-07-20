from django.test import TestCase
from .models import User

class UserAuthenticationTestCase(TestCase):
    
    def setUp(self):

        User.objects.create_user(username="abc", password="this is password")
        

    def test_password_encryption(self):
        """
            Checking the user password is encrypted or not
        """
        u = User.objects.get(username="abc")
        self.assertNotEquals(u.password, "this is password")