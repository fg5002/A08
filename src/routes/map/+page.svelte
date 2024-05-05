<script>

  let res = "";
  let pon = 0;
  let idx = 0;
  let tx = 0;
  
  const geoLocation = ()=>{
    navigator.geolocation.getCurrentPosition(position => {
      const cor = [ position.coords.latitude, position.coords.longitude ];
      cor.map(s=>parseFloat(s).toFixed(6));
      pon = parseFloat(position.coords.accuracy.toFixed(2));
      switch (true) {
        case pon < 5:
          tx = "Excellent"
          break;
        case pon >5 && pon < 50:
          tx = "GOD"
          break;
        case pon > 50:
          tx = "BAD"
          break;      
        default:
          break;
      }
      if(idx<5){
        res += `${cor[0]},${cor[1]}\n${tx} (${pon})\n`;
      }else{
        res = `${cor[0]},${cor[1]}\n${tx} (${pon})\n`;
        idx = 0;
      }
      idx++
    }, error => {
      res = `${locationError(error)}\n`;
    }, {
      timeout: 15000,
      maximumAge: 1000,
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

<!--div class="flex flex-col justify-start items-center h-[80wh] mt-8">
  <h1 class="font-bold text-xl">CT55B2</h1>

  <div class="flex flex-col mt-8 gap-4 items-start h-[70vh] w-[80vw] overflow-y-auto">
    <textarea 
      class="px-2 py-1 text-lg border-2 border-gray-500 rounded-md row-auto h-full w-full font-bold {tx == "BAD" ? 'text-red-500' : tx === "GOOD" ? 'text-orange-300' : 'text-green-400'}"
    >{res}</textarea>
    <button class=" px-2 py-1 border-2 border-gray-500 rounded-md bg-yellow-200" on:click={geoLocation}>Find position</button>
  </div>
</div-->
