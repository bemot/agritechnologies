from django.db import models
from photologue.models import Photo
from django.utils.html import mark_safe

class OperationType(models.Model):
    title = models.CharField(max_length=40)

    def __str__(self):
        return self.title

class Technologie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# add units
class Unit(models.Model):
  title = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  value = models.CharField(max_length=15)

  def __str__(self):
    return self.value

# add Variables
class Variable(models.Model):
  title = models.CharField(max_length=255)
  unit = models.ForeignKey(Unit,on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  value = models.FloatField(default=0.0)
  activated = models.BooleanField(default=False)

  def __str__(self):
    return self.title

class PowerUnit(models.Model):
    title = models.CharField(max_length=255)
    image = models.ForeignKey(
        'photologue.Photo',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,) 


    def __str__(self):
        return self.title

class Machine(models.Model):
    title=models.CharField(max_length=255)
    operationtype = models.ManyToManyField(OperationType, blank=True)
    image = models.ForeignKey(Photo,null=True,blank=True,on_delete=models.SET_NULL,)

    def image_tag(self):
        return mark_safe('<img src="%s" width="100px" height="100px" />'%(self.image.url))
    image_tag.short_description = 'Image'
    image_tag.allow_tags = True

    def get_operationtypes(self):
        return "\n".join([ot.operatiotypes for ot in self.operationtype.all()])
 
    def __str__(self):
        return self.title

# several machines the same type
class MachineBlock(models.Model):
    title=models.CharField(max_length=255)
    operationtype = models.ManyToManyField(OperationType, blank=True)
    machine=models.ForeignKey(Machine, on_delete=models.CASCADE,blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)

    def get_operationtypes(self):
        return "\n".join([ot.operatiotypes for ot in self.operationtype.all()])

    def __str__(self):
        return self.title

class Agregat(models.Model):
    title=models.CharField(max_length=255)
    operationtype = models.ManyToManyField(OperationType, blank=True)
    powerunit=models.ForeignKey(PowerUnit, on_delete=models.CASCADE,blank=True)
    machine = models.ManyToManyField('Machine',blank=True)
    machineblock = models.ManyToManyField('MachineBlock', blank=True)

    def get_operationtypes(self):
        return "\n".join([ot.operatiotypes for ot in self.operationtype.all()])

    def get_machines(self):
        return "\n".join([m.machines for m in self.machine.all()])

    def get_machineblocks(self):
        return "\n".join([mb.machineblocks for mb in self.machineblock.all()])

    def __str__(self):
        return self.title


# add operation
class Operation(models.Model):
  title = models.CharField(max_length=255)
  operationtype = models.ManyToManyField(OperationType, blank=True)
  technologie = models.ForeignKey(Technologie, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  activated = models.BooleanField(default=False)
  completed = models.BooleanField(default=False)
  agregats = models.ManyToManyField(Agregat,blank=True)

  def get_operationtypes(self):
        return "\n".join([ot.operatiotypes for ot in self.operationtype.all()])

  def get_agregats(self):
        return "\n".join([a.agregats for a in self.agregat.all()])

  def __str__(self):
    return self.title

