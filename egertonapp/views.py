from django.shortcuts import render
from egertonapp.forms import ContactForm


# Create your views here.
def index(request):
		return render(request, 'egertonapp/index.html', {})

def home(request):
		return render(request, 'egertonapp/index.html', {})

def elders(request):
		return render(request, 'egertonapp/elders.html', {})

def womenministry(request):
		return render(request, 'egertonapp/womenministry.html', {})

def adventistmen(request):
		return render(request, 'egertonapp/adventistmen.html', {})

def calendar(request):
		return render(request, 'egertonapp/calendar.html', {})   		

def churchhistory(request):
	return render(request, 'egertonapp/churchhistory.html', {})

def ay(request):
		return render(request, 'egertonapp/AY.html', {})

def carlendar(request):
		return render(request, 'egertonapp/carlendar.html', {})

def fundamentalbeliefs(request):
		return render(request, 'egertonapp/fundamentalbeliefs.html', {})

def aboutus(request):
		return render(request, 'egertonapp/aboutus.html', {})   		

def contactus(request):

	form = ContactForm()
	return render(request, 'egertonapp/contactus.html', {'form':form})








