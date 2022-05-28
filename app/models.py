from django.db import models

# Create your models here.

#!Posts
class Posts(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()
    
    def __str__(self):
        return str(self.title)