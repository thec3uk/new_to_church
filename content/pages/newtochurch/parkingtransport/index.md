---
title: Parking and Transport
heroImage: /Images/Content/4/867482.jpeg
template: content
card:
  title: Parking and Transport
  cta: More Details
gallery:
  - /nextsteps/growthpath/
  - /newtochurch/gotquestions/
---

<h1>
Getting here</h1>

<h4>
<br/>
By car</h4>
If you are new to church and are visiting us by car then you can park at the C3 Centre. If you are a blue badge holder, there are always spaces reserved on-site for you.<br/>
<br/>
There is ample parking only a short walk from the C3 Centre, use the map below for more information on the closest spaces:<br/>
 <div>
<div id="ctl00_ctl00_cphBody_ctl04_ctl01_map_divMap" style="width:100%; height:300px;"/>
<script type="text/javascript">
(function() {
var map,
  mapMarkerData = [{"id":"FP0","desc":"New to Church and Blue Badge parking","letter":"A","lat":52.2001113891602,"title":"C3 Centre","lng":0.156599998474121},{"id":"FP1","desc":"Overflow Parking (3hrs only, requires purchase from store)","letter":"B","lat":52.1999015808105,"title":"Sainsburys","lng":0.158739998936653},{"id":"FP2","desc":"Free street parking (approx. 10 minute walk)","letter":"C","lat":52.2056503295898,"title":"Barnwell Drive","lng":0.164240002632141}],
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
zoom: 15,
center: new google.maps.LatLng(52.20314, 0.16218),
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
<h4>
<br/>
By bus</h4>
We know that for many the challenge of getting to Church can start with transport which is why we operate a free minibus on Sundays.  Our friendly team will pick you up from one of the stops on the route.<br/>
 <br/>
You will arrive in time for our 11:30am service and you will have plenty of time after the service for a coffee and chat, before being taken home.<br/>
 <br/>
Walking through the doors of a church can be a big step.  Our aim is to make the step a little easier. Please see our bus timetable below<br/>
<br/>
<strong>Please ensure you wave to the driver as the bus approaches to alert them of your presence</strong>. <em>All times are approximate:</em><br/>
 
<table align="center" border="1" cellpadding="1" cellspacing="1" style="width:750px;">
<thead>
<tr>
  <th scope="col">
    Time</th>
  <th scope="col">
    Location</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="text-align: center;">
    10:30</td>
  <td>
    Buchan Street bus stop</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:33</td>
  <td>
    Kings Hedges Road, opposite Campkin Road junction</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:34</td>
  <td>
    Campkin Road, opposite the old 'Jenny Wren' pub</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:35</td>
  <td>
    Campkin Road, bus shelter at Arbury Road end</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:36</td>
  <td>
    Arbury Road, bus stop opposite Nicholson Way</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:37</td>
  <td>
    Mere Way, bus stop between Fortescue &amp; Humphreys Road</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:38</td>
  <td>
    Carlton Way, bus stop opposite the 'Carlton Arms' pub</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:40</td>
  <td>
    Histon Road, bus stop on corner of Akeman Street</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:44</td>
  <td>
    Shelly Row, on the corner of Shelly Gardens</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:48</td>
  <td>
    Robinson College, Grange Road</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:51</td>
  <td>
    Corner of Sidgewick Avenue opposite Ridley Hall</td>
</tr>
<tr>
  <td style="text-align: center;">
    10:58</td>
  <td>
    Bus Station - Downing Street at side of John Lewis</td>
</tr>
<tr>
  <td style="text-align: center;">
    11:01</td>
  <td>
    Station Road Corner, bus stop opposite the 'Flying Pig' Pub</td>
</tr>
<tr>
  <td style="text-align: center;">
    11:03</td>
  <td>
    Hills Road Sixth Form College bus stop</td>
</tr>
<tr>
  <td style="text-align: center;">
    11:06</td>
  <td>
    Addenbrooke's Bus Station</td>
</tr>
<tr>
  <td style="text-align: center;">
    11:08</td>
  <td>
    Mowbray Road, bus stop opposite Acacia House</td>
</tr>
<tr>
  <td style="text-align: center;">
    11:11</td>
  <td>
    Bus arrives at C3 Centre</td>
</tr>
<tr>
  <td>
     </td>
  <td>
     </td>
</tr>
<tr>
  <td style="text-align: center;">
    13:30</td>
  <td>
    Bus departs from C3 Centre</td>
</tr>
</tbody>
</table>
 <div>
<div id="ctl00_ctl00_cphBody_ctl04_ctl02_map_divMap" style="width:100%; height:300px;"/>
<script type="text/javascript">
(function() {
var map,
  mapMarkerData = [{"title":"(10.12) Buchan Street bus stop","desc":"","lng":0.122929997742176,"id":"FP0","lat":52.2325286865234},{"title":"(10:15) King's Hedges Road","desc":"Opposite Campkin Road junction","lng":0.142179995775223,"id":"FP1","lat":52.2296981811523},{"title":"(10:16) Campkin Road","desc":"Opposite 'Jenny Wren' Pub","lng":0.136840000748634,"id":"FP2","lat":52.2294807434082},{"title":"(10:17) Campkin Road","desc":"Bus Shelter at Arbury Road end","lng":0.128279998898506,"id":"FP3","lat":52.2262496948242},{"title":"(10:18) Arbury Road","desc":"bus stop opposite Nicholson Way","lng":0.124269999563694,"id":"FP4","lat":52.2279014587402},{"title":"(10:19) Mere Way","desc":"bus stop between Fortescue &amp; Humphreys Road","lng":0.122780002653599,"id":"FP5","lat":52.2270011901855},{"title":"(10:20) Carlton Way","desc":"bus stop opposite the 'Carlton Arms' pub","lng":0.11939000338316,"id":"FP6","lat":52.2220306396484},{"title":"(10:22) Histon Road","desc":"Bus stop on corner of Akeman Street","lng":0.111680001020432,"id":"FP7","lat":52.2196388244629},{"title":"(10:26) Shelly Row","desc":"On the corner of Shelly Gardens","lng":0.111539997160435,"id":"FP8","lat":52.2129211425781},{"title":"(10:30) Robinson College","desc":"Grange Road","lng":0.105760000646114,"id":"FP9","lat":52.2049713134766},{"title":"(10:33) Corner of Sidgewick Avenue","desc":"Opposite Ridley Hall","lng":0.111699998378754,"id":"FP10","lat":52.2003593444824},{"title":"(10:40) Bus Station","desc":"Downing Street at side of John Lewis","lng":0.123170003294945,"id":"FP11","lat":52.2034606933594},{"title":"(10:45) Hills Road Sixth Form College","desc":"","lng":0.136590003967285,"id":"FP12","lat":52.1884803771973},{"title":"(10:48) Addenbrooke's Bus Station","desc":"","lng":0.144989997148514,"id":"FP13","lat":52.1760902404785},{"title":"Mowbray Road","desc":"Bus stop opposite Acacia House","lng":0.152290001511574,"id":"FP14","lat":52.1863212585449}],
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
zoom: 12,
center: new google.maps.LatLng(52.21097, 0.14488),
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

map = new google.maps.Map(document.getElementById("ctl00_ctl00_cphBody_ctl04_ctl02_map_divMap"), mapOptions);

for(i = 0; i &lt; mapMarkerData.length; i++) {
addMarker(mapMarkerData[i]);
}
}

window.ctl00_ctl00_cphBody_ctl04_ctl02_map_ShowPoint = function(id) {
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

</div><br/>
Details of other bus timetables for the area can be obtained from the <a href="https://www.cambridgeshire.gov.uk/residents/travel-roads-and-parking/buses/bus-timetables/">Cambridgeshire County Council</a> website.<br/>
 
<table class="pagebox" id="tbStyleWrapperTable" style="display: none;">
<tbody>
<tr>
  <td class="body" id="tdStyleWrapperCell">
     </td>
</tr>
</tbody>
</table>
