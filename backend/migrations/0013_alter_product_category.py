# Generated by Django 3.2.4 on 2021-07-13 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_rename_p_img_productimage_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(default='o', max_length=10),
        ),
    ]
