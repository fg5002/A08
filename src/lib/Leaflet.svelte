<script>
  import { onMount, onDestroy, setContext } from 'svelte'
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import {mapState} from '$lib/store';

  let map;
  let mapElement;

  onMount(()=> {
    map = L.map(mapElement, {
      center: mapState.center,
      zoom: mapState.zoom
    });

  });

  onDestroy(()=> {
    map?.off('dragend zoomend baselayerchange overlayadd overlayremove');
    map?.remove();
    map = undefined;
  });

  setContext(L.Map, ()=> map);

</script>

<div class="w-full h-full z-1000" bind:this={mapElement}>
  {#if map }
    <slot/>
  {/if}
</div>