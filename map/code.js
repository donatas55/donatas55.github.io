var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

var tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(6074)
});

viewer.scene.primitives.add(tileset);
viewer.zoomTo(tileset);
