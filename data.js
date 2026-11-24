var APP_DATA = {
  "scenes": [
    {
      "id": "0-ira",
      "name": "IRA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.011782120515134054,
          "pitch": -0.052968682660843314,
          "rotation": 0,
          "target": "1-ansiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ansiedad",
      "name": "ANSIEDAD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.027536942204234194,
          "pitch": 0.10211914672870748,
          "rotation": 0,
          "target": "2-felicidad"
        },
        {
          "yaw": -3.1268534628181737,
          "pitch": 0.12546092119558594,
          "rotation": 6.283185307179586,
          "target": "0-ira"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-felicidad",
      "name": "FELICIDAD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04499845843120376,
          "pitch": -0.03394364060748778,
          "rotation": 0,
          "target": "3-amor"
        },
        {
          "yaw": 3.107397916366889,
          "pitch": 0.049852706581745565,
          "rotation": 0,
          "target": "1-ansiedad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-amor",
      "name": "AMOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9461579956779325,
          "pitch": 0.13402337807835352,
          "rotation": 0,
          "target": "2-felicidad"
        },
        {
          "yaw": 2.6644212928279476,
          "pitch": 0.1435396871260668,
          "rotation": 0,
          "target": "4-calma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-calma",
      "name": "CALMA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8685572116326767,
          "pitch": 0.09415977492709438,
          "rotation": 0,
          "target": "3-amor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CARDIFF V1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
