
			//script for church images slide
			function displayNextImage()
			{
				x=(x === images.length-1)? 0 :x+1;
				document.getElementById('img').src=images[x];
			}

			
		function startTimer()
		{
			
			setInterval(displayNextImage,5000);
		}
		var images=[],x=-1;
			images[0]="static/photos/church.jpg";
			images[1]="static/photos/church2.jpg";
			images[2]="static/photos/church3.jpg";
			// end
		
		// script for thw select tags 
		function homeredirection()
		{
			switch(document.getElementById('home').value)
			{
				case "home":
				window.location="../egertonapp/index.html";
				break;
				default:
				window.location="../";
				break;
			}
		}
		function SelectRedirect()
		{
			switch(document.getElementById('dept').value)
			{
				case "departments":
				window.location="egertonapp/index.html";
			    break;
				case "elders":
				window.location="../egertonapp/elders.html";
				break;
				case "women":
				window.location="../egertonapp/womenministry.html";
				break;
				case "men":
				window.location="../egertonapp/adventistmen.html";
				break;
				case "youth":
				window.location="../egertonapp/AY.html";
				break;
				default:
				
				window.location="../egertonapp/index.html";
				break;
			}
		}
		//redirects the contact us tab
		function RedirectUs()
		{
			switch(document.getElementById('us').value)
			{
				
				case "contact":
				window.location="../egertonapp/contactus.html";
				break;
				
				default:
				
				window.location="../egertonapp/index.html";
				break;


			}
			

		}
		//calendar
		function caLendar()
		{
			switch(document.getElementById('kalenda').value)
			{
				case "calendar":
				window.location="../egertonapp/index.html";
				break;
				case "events":
				window.location="../egertonapp/calendar.html";
				break;
				
				
				default:
				
				window.location="../egertonapp/index.html";
				break;
			}
		}
		//redirects about us
		function aboutUs()
		{
			switch(document.getElementById('kuhusu').value)
			{
				
				case "about":
				window.location="../egertonapp/aboutus.html";
				break;
				case "history":
				window.location= "../egertonapp/churchhistory.html";
				break;
				case "beliefs":
				window.location="../egertonapp/fundamentalbeliefs.html";
				break;
				default:
				
				window.location="../egertonapp/index.html";
				break;


			}
			

		}

