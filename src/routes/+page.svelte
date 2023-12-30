<script>

  let count = 0;

</script>

<div class="flex flex-col justify-center items-center p-8">
  <h1 class="text-lg font-bold">Count: {count}</h1>
  <div class="p-4">
    <button class="m-2 p-2 border-green-500 border-2 rounded-md" on:click={()=> count++}>Increase</button>
    <button class="m-2 p-2 border-green-500 border-2 rounded-md" on:click={()=> count--}>Decrease</button>
  </div>
  <audio controls loop>
    <source src="sounds/Coturnix coturnix.mp3" type="audio/mpeg">
    Your browser does not support the audio element
  </audio>
</div>
