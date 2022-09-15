let alertbox = document.querySelector('#alert')
let presentButton = document.querySelector('#locatebtn')
let locatorinput = document.querySelector('#latitude')

presentButton.addEventListener('click', async ()=> { 

    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } 
    else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
        if(position.coords.latitude == "latitude" && position.coords.longitude == "longitude"){
            
            info = {
                attendanceStatus: '',
            }  
        }
        else{
            console.log('you no dey class stop dey lie')
        }
      }  
  })


      
      console.log(getLocation())

