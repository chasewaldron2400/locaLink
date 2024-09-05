document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map with a default location
  initMap({ lat: 41.8919, lng: -87.610168 }); // Default: Navy Pier, Chicago

  // Add event listener to the submit button
  document.getElementById("submit").addEventListener("click", function () {
    const address = document.getElementById("address").value;
    geocodeAddress(address);
  });
});

function initMap(location) {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
  
    new google.maps.Marker({
      position: location,
      map: map,
      title: "Location",
    });
  }

  // fetch('/api/projects')
  //       .then(response => response.json())
  //       .then(projects => {
  //         projects.forEach(project => {
  //           const geocoder = new google.maps.Geocoder();

  //           geocoder.geocode({ address: project.address }, function(results, status) {
  //             if (status === 'OK') {
  //               const location = results[0].geometry.location;
  //               map.setCenter(location);
  //               new google.maps.Marker({
  //                 map: map,
  //                 position: location,
  //                 title: project.name
  //               });
  //             } else {
  //               console.error('Geocode was not successful for the following reason: ' + status);
  //             }
  //           });
  //         });
  //       })
  //       .catch(err => console.error(err));