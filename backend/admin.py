from django.contrib import admin, messages
from .models import Enquiry, Product, ProductImage, User

class UserAdminView(admin.ModelAdmin):
    list_display= ('id','first_name', 'last_name', 'email')

admin.site.register(User, UserAdminView)
admin.site.register(Product)
admin.site.register(ProductImage)


class EnquiryAdminView(admin.ModelAdmin):
    list_display= ('id','name', 'message', 'created', 'read')
    list_filter = ('read', 'created')

    def deleteReadMessages(modeladmin, request, queryset):
        Enquiry.objects.filter(read=True).delete()
        messages.success(request, "Deleted as Read Enquire(s) only.")
    deleteReadMessages.short_description = "Delete Read Enquiry"
    deleteReadMessages.acts_on_all = True

    def markAsRead(modeladmin, request, queryset):
        queryset.update(read=True)
        messages.success(request, "Marked as Read the selected record(s).")
    markAsRead.short_description = "Mark as Read"


    def markAsUnRead(modeladmin, request, queryset):
        queryset.update(read=False)
        messages.success(request, "Marked as UnRead selected record(s).")
    markAsUnRead.short_description = "Mark as UnRead"

    # This will only allow this options to be used by this class
    actions = ["deleteReadMessages","markAsRead", "markAsUnRead"]

admin.site.register(Enquiry,EnquiryAdminView)