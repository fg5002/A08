<script>
  import Leaflet from "$lib/Leaflet.svelte";
  import Scale from '$lib/Scale.svelte';
  import Layers from "$lib/Layers.svelte";
  import TileLayer from "$lib/TileLayer.svelte";
  import GeoJson from "$lib/GeoJson.svelte";
  import {CT55B2} from '$lib/store';

</script>


<Leaflet>
                  
  <Layers>      
    <TileLayer
      name={'OSM'}
      url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
      options={{ minZoom: 7, maxZoom: 19, attribution: '&copy; OpenstreetMap'}}
      selected
    />          
    <TileLayer
      name={'Esri'}
      url={'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'}
      options={{ minZoom: 7, maxZoom: 19, attribution: '&copy; ESRI'}}
    />
    <TileLayer
      name={'Túristautak'}
      url={'https://{s}.map.turistautak.hu/tiles/turistautak/{z}/{x}/{y}.png'}
      options={{ minZoom:7, maxZoom:18, attribution: '&copy; Túristautak.hu'}}
    />

    <GeoJson name={"GPS"} data={$CT55B2}/>
  
  </Layers>
    
  <Scale/>
    
</Leaflet>
  