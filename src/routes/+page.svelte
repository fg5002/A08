<script>

  let res = null;

  const geoLocation = ()=>{
    navigator.geolocation.getCurrentPosition(position => {
      const cor = [ position.coords.latitude, position.coords.longitude ];
      cor.map(s=>parseFloat(s).toFixed(6));
      res = `${res}\n${cor[0]},${cor[1]}; ${position.coords.accuracy.toFixed(2)}`;
    }, error => {
      res = `${res}\n${locationError(error)}`;
    }, {
      timeout: 15000,
      maximumAge: 5000,
      enableHighAccuracy: true
    })
  }
    
  function locationError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for geolocation.";
        case error.POSITION_UNAVAILABLE:
            return "Location information is currently unavailable.";
        case error.TIMEOUT:
            return "Request for user location timed out.";
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred.";
    }
}

      
</script>

<div class="flex flex-col justify-start items-center h-screen mt-8">
  <h1 class="font-bold text-5xl">CT55B2</h1>

  <div class="flex mt-8 gap-4 items-start">
    <button class=" px-2 py-1 border-2 border-gray-500 rounded-md bg-yellow-200" on:click={geoLocation}>Geo</button>
    <textarea class="px-2 py-1 border-2 border-gray-500 rounded-md row-auto min-h-72 min-w-80">{res}</textarea>
  </div>
</div>
