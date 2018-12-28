---
title: C3 Cambridge
heroImage: /Images/Content/4/867482.jpeg
template: content
card:
  title: C3 Cambridge
  cta: More Details
  description: We meet on Sundays, 9:30am, 11:30am and 5:30pm at the C3 Centre, Cambridge, CB1 3HR.
  image: /Images/Content/4/916434.jpeg
gallery:
  - /nextsteps/growthpath/
  - /newtochurch/gotquestions/
---

<h1 style="text-align: center;">
The C3 Church, Cambridge</h1>

<div style="text-align: center;">
 </div>

<div style="text-align: center;">
C3 Centre<br/>
Brooks Road<br/>
Cambridge<br/>
CB1 3HR</div>

<div>
 </div>

<div style="text-align: center;">
Sunday - 9:30, 11:30 and 17:30</div>

<div>
 <br/>
You can <a href="/Articles/509880/Parking_and_Transport.aspx">find us</a> on the roundabout between Coldhams Lane, Barnwell Road and Brooks Road.</div>
 <div>
<div id="ctl00_ctl00_cphBody_ctl04_ctl01_map_divMap" style="width:100%; height:300px;"/>
<script type="text/javascript">
(function() {
var map,
  mapMarkerData = [],
  shadowIcon = new google.maps.MarkerImage("/Images/mapmarker-shadow.png", new google.maps.Size(40, 34), new google.maps.Point(0, 0), new google.maps.Point(9, 33)),
  currentInfoWindow,
  markers = {};

function getLetterIcon(letter) {
if(typeof(letter) === "undefined") {
letter = "";
}
return new google.maps.MarkerImage("https://www.google.com/mapfiles/marker" + letter + ".png", new google.maps.Size(20, 34), new google.maps.Point(0, 0), new google.maps.Point(9, 34));
}

function addMarker(markerData) {
var marker = new google.maps.Marker({
position: new google.maps.LatLng(markerData.lat, markerData.lng),
map: map
});
marker.setIcon(getLetterIcon(markerData.letter));
marker.setShadow(shadowIcon);

if(markerData.title || markerData.desc) {
var fnClickHandler = function() {
var strHTML = "";
if(markerData.title &amp;&amp; (markerData.title != '')) strHTML += "&lt;b&gt;" + markerData.title + "&lt;/b&gt;";
if(markerData.desc &amp;&amp; (markerData.desc != '')) {
if(strHTML != "") strHTML += "&lt;p/&gt;";
strHTML += markerData.desc;
}
var infoWindow = new google.maps.InfoWindow({
content: "&lt;span class='MarkerText'&gt;" + strHTML + "&lt;/span&gt;"
});

if(currentInfoWindow) {
currentInfoWindow.close();
}
infoWindow.open(map, marker);
currentInfoWindow = infoWindow;
}

marker.clickHandler = fnClickHandler;
google.maps.event.addListener(marker, "click", fnClickHandler);
}

markers[markerData.id] = marker;
}

function init() {
var mapOptions = {
zoom: 16,
center: new google.maps.LatLng(52.200474, 0.156844),
mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true,
panControl: true,
zoomControl: true,
zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
mapTypeControl: false,
scaleControl: false,
streetViewControl: true,
overviewMapControl: false,
scrollwheel: true
},
i;

map = new google.maps.Map(document.getElementById("ctl00_ctl00_cphBody_ctl04_ctl01_map_divMap"), mapOptions);

for(i = 0; i &lt; mapMarkerData.length; i++) {
addMarker(mapMarkerData[i]);
}
}

window.ctl00_ctl00_cphBody_ctl04_ctl01_map_ShowPoint = function(id) {
if(markers[id].clickHandler) {
markers[id].clickHandler();
}
}

init();
})();
</script>

<style type="text/css">
SPAN.MarkerText, SPAN.MarkerText TD {
font-family: Arial;
font-size: 12px;
}
</style>
<style type="text/css">
.map-nearest-results {
    background-color:gray;
}
</style>

</div>
<p>
There is <a href="http://thec3.uk/parking">parking available onsite</a> for new visitors and a <a href="/Articles/509880/Parking_and_Transport.aspx">free minibus</a> available for our 11:30 services.</p>

<p style="text-align: center;">
<span style="text-align: center; font-size: 1.8rem;">Our new location in Bury St. Edmunds is coming soon. </span><a href="/Articles/529859/Bury_St_Edmunds.aspx" style="text-align: center; background-color: white; font-size: 1.8rem;">Find out more HERE</a><span style="text-align: center; font-size: 1.8rem;">.</span></p>

<table class="pagebox" id="tbStyleWrapperTable" style="display: none;">
<tbody>
<tr>
  <td class="body" id="tdStyleWrapperCell">
     </td>
</tr>
</tbody>
</table>
