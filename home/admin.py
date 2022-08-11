from django.contrib import admin
from .models import Resource, Task

admin.site.register(Task)
admin.site.register(Resource)

# Register your models here.
