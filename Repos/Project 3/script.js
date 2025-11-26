//Initializes and adds the map
function myMap(){
  var mapProp= {
    center:new google.maps.LatLng(41.8781,-87.6298),
    zoom:16,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //Feature 1, Marker for Chicago
  var marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 }, 
    map: map,
    title: "Chicago!"
  });

  var marker = new google.maps.Marker({
    position: { lat: 40.748817, lng: -73.985428}, //Marker for New York
    map: map,
    title: "Chicago!"
  });

  //Feature 2, Tilt the map with buttons on the bottom right
  //Note: Tilt only works if certain conditions are met (Must zoom in and be in satellite mode)
  map.setTilt(45);
}

function init(){
  //Alert Box
  alert("If you have questions, contact me at: aalvarez17@hawk.illinoistech.edu");
}

//Waits for page to load then sets up event listener for button
window.addEventListener('load', function() {
    let objCreate = document.getElementById("quesButton");
    
    if (objCreate) {
        objCreate.addEventListener("click", init);
    }
});
