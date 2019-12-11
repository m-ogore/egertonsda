from django.urls import path
from django.conf.urls import url
from . import views

app_name='egertonapp'
urlpatterns=[
	path('', views.index,name='index'),
	path('egertonapp/index.html', views.home,name='home'),
	path('egertonapp/elders.html', views.elders, name='elders'),
	path('egertonapp/adventistmen.html', views.adventistmen, name='adventistmen'),
	path('egertonapp/womenministry.html', views.womenministry, name='womenministry'),
	path('egertonapp/AY.html', views.ay, name='ay'),
	path('egertonapp/churchhistory.html', views.churchhistory, name='churchhistory'),
	path('egertonapp/contactus.html', views.contactus, name='contactus'),
	path('egertonapp/aboutus.html', views.aboutus, name='aboutus'),
	path('egertonapp/fundamentalbeliefs.html', views.fundamentalbeliefs, name='fundamentalbeliefs'),
	path('egertonapp/calendar.html', views.calendar, name='calendar'),

]