import {writable, derived} from 'svelte/store';

export const mapState = writable({
  center: [47.397,19.025644],
  zoom : 14,
  baselayer: "OSM",
  //overlays: ["Taxon", "Geo", "Query"]
  overlays: ["Query", "Temp"]
})


export const metersPerPixel = derived([mapState], ([$mapState]) => {
  let mpp = 40075016.686 * Math.abs(Math.cos($mapState.center[0] * Math.PI/180)) / Math.pow(2, $mapState.zoom+8);
  return parseFloat(mpp.toFixed(3));
});


export const selectedShape = writable('point');
export const pointIndex = writable(null);
export const midPointIndex = writable(null);
export const tempIndex = writable(null);

export const controlGeo = writable({
  "type": "FeatureCollection",
  "features": []
});


export const CT55B2 = writable({
  "type": "FeatureCollection",
  "features": [  
    {  
      "type":"Feature",
      "properties":{
        "name":"CT55B2"
      },
      "geometry":{
        "type": "Polygon",
        "coordinates":[[[19.010101,47.408354],[19.010947,47.385873],[19.04405,47.386443],[19.043218,47.408925],[19.010101,47.408354]]]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0134994657,47.4061643368 ]
      },
      "properties": {
        "name":"CT55B2-1",
        type: 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.020122453,47.4062784394 ]
      },
      "properties": {
        "name":"CT55B2-2",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0267454404,47.4063925418 ]
      },
      "properties": {
        "name":"CT55B2-3",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0333684278,47.406506644 ]
      },
      "properties": {
      "name":"CT55B2-4",
      "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0399924154,47.4066197461 ]
      },
      "properties": {
        "name":"CT55B2-5",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0136686105,47.4016673098 ]
      },
      "properties": {
        "name":"CT55B2-6",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0202905978,47.4017824123 ]
      },
      "properties": {
        "name":"CT55B2-7",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0269135851,47.4018965146 ]
      },
      "properties": {
        "name":"CT55B2-8",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0335365725,47.4020106168 ]
      },
      "properties": {
        "name":"CT55B2-9",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.04015956,47.4021237187 ]
      },
      "properties": {
        "name":"CT55B2-10",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0138377548,47.3971712825 ]
      },
      "properties": {
        "name":"CT55B2-11",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.020459742,47.3972853849 ]
      },
      "properties": {
        "name":"CT55B2-12",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0270817293,47.3973994871 ]
      },
      "properties": {
        "name":"CT55B2-13",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0337037166,47.3975135891 ]
      },
      "properties": {
        "name":"CT55B2-14",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0403257041,47.3976276909 ]
      },
      "properties": {
        "name":"CT55B2-15",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0140058984,47.3926742547 ]
      },
      "properties": {
        "name":"CT55B2-16",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0206278856,47.392789357 ]
      },
      "properties": {
        "name":"CT55B2-17",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0272498728,47.3929034591 ]
      },
      "properties": {
        "name":"CT55B2-18",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0338708602,47.393017561 ]
      },
      "properties": {
        "name":"CT55B2-19",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0404928476,47.3931306627 ]
      },
      "properties": {
        "name":"CT55B2-20",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0207960286,47.3882933288 ]
      },
      "properties": {
        "name":"CT55B2-22",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0274170159,47.3884074307 ]
      },
      "properties": {
        "name":"CT55B2-23",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0340380032,47.3885205325 ]
      },
      "properties": {
        "name":"CT55B2-24",
        "type": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates":  [ 19.0406589905,47.3886346341 ]
      },
      "properties": {
        "name":"CT55B2-25",
        "type": 1
      }
    }    
  ]
})

export const dailyData = writable({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        data: "próba point",
        type: 1,
        id: 12
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.035544,47.386432],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "próba ellipse",
        type: 1,
        id: 13
      },
      "geometry": {
        "type": "Point",
        "ellipse": [[19.035916,47.385133],[19.034875,47.385656]],
        "param": [50,12,76],
        "coordinates": [19.035344,47.385832]
      }
    },
    {
      "type": "Feature",
        "properties": {
          data: "próba line",
          type: 2,
          id: 14,
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [19.035662,47.385353],
          [19.036531,47.385534]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "próba Polygon",
        type: 1,
        id: 15
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [19.037107,47.386306],
            [19.036453,47.385548],
            [19.037793,47.384908],
            [19.039150,47.385606],
            [19.038565,47.386379],
            [19.037107,47.386306]
          ],
          [
            [19.037589,47.386099],
            [19.037316,47.385660],
            [19.038195,47.385838],
            [19.037589,47.386099]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "próba multipolygon",
        type: 1,
        id: 16
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [[19.037779,47.383890],
            [19.037672,47.384529],
            [19.036825,47.384529],
            [19.036439,47.383868],
            [19.037265,47.383483],
            [19.037779,47.383890]],
            
            [[19.03707,47.384296],
            [19.036804,47.384006],
            [19.037168,47.383781],
            [19.037554,47.383991],
            [19.037072,47.384296]]
          ],
          [
            [[19.0369,47.384637],
            [19.037640,47.384637],
            [19.037308,47.385102],
            [19.036900,47.384637]]
          ]
        ]
      }
    }
  ]
  
})

export const geoData = writable({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        data: "K4 kutatóárok",
        type: 2,
        id: 16
      },
      "geometry": {
        "coordinates": [[19.034662,47.384353],[19.03531,47.384534]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
        "properties": {
          data: "K5 kutatóárok",
          type: 2,
          id: 17
        },
        "geometry": {
          "coordinates": [[19.035046,47.384869],[19.034419,47.384703]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "K6 kutatóárok",
        type: 2,
        id: 18
      },
      "geometry": {
        "coordinates": [[19.03476,47.385167],[19.034169,47.384968]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
          data: "K7 kutatóárok",
          type: 2,
          id: 19
        },
      "geometry": {
        "coordinates": [[19.034518,47.385456],[19.034023,47.385218]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "K8 kutatóárok",
        type: 2,
        id: 20
      },
      "geometry": {
        "coordinates": [[19.034273,47.385684],[19.03378,47.385526]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "K9 kutatóárok",
          type: 2,
          id: 21
        },
      "geometry": {
        "coordinates": [[19.033981,47.385967],[19.033467,47.385835]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "K3 kutatóárok",
        type: 2,
          id: 22
        },
      "geometry": {
        "coordinates": [[19.035512,47.384274],[19.035041,47.38411]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "K2 kutatóárok",
          type: 2,
          id: 23
        },
        "geometry": {
        "coordinates": [[19.035153,47.383744],[19.035672,47.384]],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
        "properties": {
          data: "K1 kutatóárok",
          type: 2,
          id: 24
        },
      "geometry": {
        "coordinates": [[19.03579,47.38363],[19.036336,47.383844]],
        "type": "LineString"
      }
    }    
  ]
})

export const queryData = writable({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        data: "Csajkavirág 1",
        type: 0,
        id: 1,
        ord: 1
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [19.00452,47.372911],
          [19.004952,47.372837],
          [19.005068,47.37262],
          [19.004977,47.37238],
          [19.004642,47.37235],
          [19.004136,47.372527],
          [19.004111,47.372865],
          [19.00452,47.372911]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Csajkavirág 2",
        type: 0,
        id: 2,
        ord: 2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [19.005047,47.373532],
          [19.004935,47.373753],
          [19.005034,47.373929],
          [19.005374,47.373915],
          [19.005622,47.37379],
          [19.005801,47.373564],
          [19.005461,47.373396],
          [19.005047,47.373532]
        ]],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Körtefa",
        type: 0,
        id: 3,
        ord: 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.03352,47.3914057],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Birs",
        type: 0,
        id: 4,
        ord: 3
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.03322,47.3910057],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Naspolya",
        type: 0,
        id: 5,
        ord: 4
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.03352,47.3914057],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Meggy",
        type: 0,
        id: 6,
        ord: 2,
      },
      "geometry": {
        "type": "Point",
        "circle": [19.032925,47.3914057],
        "param": [25],
        "coordinates": [19.032521,47.3914057],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Cseresznye",
        type: 0,
        id: 7,
        ord: 2,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.032088,47.392698],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Kivi",
        type: 0,
        id: 8,
        ord: 2,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.030586,47.391792],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Mangó",
        type: 0,
        id: 9,
        ord: 2,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.0289339,47.391005],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Papaya",
        type: 0,
        id: 10,
        ord: 2,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.032238,47.390548],
      }
    },
    {
      "type": "Feature",
      "properties": {
        data: "Licsi",
        type: 0,
        id: 11,
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19.132238,47.370548],
      }
    }    
  ]
});

export const tempGeo = writable({
  "type": "FeatureCollection",
  "features": []
});

export const gpsGeo = writable({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        data: "GPS",
        type: 3,
        id: 'G3000'
      },
      "geometry": {
        "type": "Point",
        "param": [20],
        "coordinates": [19.036195,47.3868],
      }
    }    
  ]
});

export const visibleShapes = derived([mapState, dailyData, geoData, queryData, tempGeo],([$mapState, $dailyData, $geoData, $queryData, $tempGeo]) => {
  let res = $mapState.overlays.map(f=> {
    switch (f) {
      case 'Taxon':
        return $dailyData;
      case 'Geo':
        return $geoData;
      case 'Query':
        return $queryData;
      case 'Temp':
        return $tempGeo;
      default:
        break;
    }
  });
  return res;
});