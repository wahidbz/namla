console.log('Interactive World Map');
function renderMap(){
  const mapDiv=document.createElement('div');
  mapDiv.id="map";
  mapDiv.className="map-container";
  document.getElementById('app').appendChild(mapDiv);
  if(typeof L !== 'undefined'){
    const map=L.map('map').setView([20,0],2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
  }
}
