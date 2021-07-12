# Generated by Django 3.2.4 on 2021-07-11 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_alter_product_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='block_resason',
            new_name='block_reason',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='time',
            new_name='created',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='imgs',
            new_name='images',
        ),
        migrations.RemoveField(
            model_name='product',
            name='in_stock',
        ),
        migrations.AddField(
            model_name='product',
            name='modified',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='product',
            name='no_of_stock',
            field=models.IntegerField(default=0),
        ),
    ]
