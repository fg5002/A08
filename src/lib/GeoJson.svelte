<script>
  
  import L from 'leaflet';
  import { getContext, onMount, onDestroy} from 'svelte';
  import '$lib/l.ellipse.min';
  
  export let data = [];
  
  let geojson;
  let geojsonElement;

  const map = getContext(L.Map);

  const popupContent = (d)=>{
    if(d){
      return `<div class="p-2 w-auto flex flex-col">
                <span class="font-bold">${d.name}</span>
              </div>`
    }
  }

  const options = {
    onEachFeature: (feature, layer)=> {
      if(feature.properties.type>0){
        layer.bindPopup(popupContent(feature.properties),{
          closeButton: false,
          offset: L.point({x:0, y:-5}),
          maxWidth: 200       
        })
      }
    },

    pointToLayer: (feature, latlng)=>{
      let zindex = feature.properties.type === 0 ? 20000 : 1000
      if(feature.geometry.param){
        let p=feature.geometry.param;
        return p.length>1 ? L.ellipse(latlng, [p[0],p[1]],p[2]) : L.circle(latlng, parseFloat(p[0]));
    }else{
      return L.circleMarker(latlng, {zIndexOffset: zindex});
    }
    },

    style: (feature)=>{
      switch (feature.properties.type) {
        case 1:
          return {
            fillColor: 'yellow',
            radius: 4,
            color: 'green',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.3
          };
        case 2:
          return {
            fillColor: 'red',
            radius: 4,
            color: 'red',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.3
          };
        case 3:
          return {
            fillColor: 'red',
            radius: 4,
            color: 'red',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.6
          };
        case 4:
          return {
            fillColor: 'blue',
            radius: 4,
            color: 'blue',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.2
          };
        case 5:
          return {
            fillColor: 'yellow',
            radius: 4,
            color: 'red',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.5
          };
        case 6:
          return {
            fillColor: 'green',
            radius: 4,
            color: 'green',
            weight: 1,
            opacity: 1.0,
            fillOpacity: 0.3
          };
        default:
          break;
      }
    }

  }

  onMount(()=> {
    if(map()){
      geojson = L.geoJSON(data, options);
      geojson.addTo(map());
    }
  });

  onDestroy(()=>{
    geojson.remove();
    geojson = undefined;
  });

</script>

<div bind:this={geojsonElement}>
  {#if geojson}
    <slot/>
  {/if}
</div>

<style>
  :global(.leaflet-popup-content-wrapper) {
    margin: 0px;
    padding: 0px;
    width:auto;
  }
  :global(.leaflet-popup-content) {
    border-radius: 5px;
    padding: 0px;
    margin: 0px;
    background-color: yellow;
    width: auto;
  }
  :global(.leaflet-popup-tip) {
    background-color: yellow;
  }
</style>