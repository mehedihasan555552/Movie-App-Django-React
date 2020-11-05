from django.db import models
from django.core.validators import MinValueValidator,MaxValueValidator

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])