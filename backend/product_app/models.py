from django.db import models
import PIL.Image

# product models
class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=150, null=False, blank=False)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField()
    category = models.CharField(max_length=50, null=True, blank=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

# setting default image size before saving
    def save(self, *args, **kwargs): 
        super().save()
        img = PIL.Image.open(self.image.path)
        if img.height > 500 or img.width > 500:
            new_img = (500,500)
            img.thumbnail(new_img)
            img.save(self.image.path)
