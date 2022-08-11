from django.conf import settings
from django.db import models


class Task(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=256,
    )
    description = models.TextField()
    hours = models.IntegerField(
        null=True,
        blank=True,
    )
    resource = models.ForeignKey(
        "home.Resource",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="task_resource",
    )


class Resource(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=256,
    )
    description = models.TextField()
    rate = models.FloatField()
