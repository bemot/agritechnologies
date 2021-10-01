from django.db import models

class Technologie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# add operation
class Operation(models.Model):
  title = models.CharField(max_length=255)
  technologie_id = models.ForeignKey(Technologie, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  activated = models.BooleanField(default=False)
  completed = models.BooleanField(default=False)

  def __str__(self):
    return self.title

# add Variables
class Variable(models.Model):
  title = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  value = models.FloatField(default=0.0)
  od_vymiru = models.CharField(max_length=10)
  activated = models.BooleanField(default=False)

  def __str__(self):
    return self.title
