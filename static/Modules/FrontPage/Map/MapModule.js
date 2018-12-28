function WheresMyNearest_HookupEvents(strClientID) {
	var tb = document.getElementById(strClientID + "_tbNearest");
	var btn = document.getElementById(strClientID + "_btnFindNearest");
	var img = document.getElementById(strClientID + "_imgThrobber");

	// Intercept ENTER key
	tb.onkeydown = function(e) {
		e = e || window.event;
		var keyCode = e.which || e.keyCode;
		if(keyCode == 13) {
			setTimeout(btn.onclick, 1);
			return false;
		}
	}
	
	btn.onclick = function() {	
		var id = document.getElementById(strClientID+'_hdnModuleID').value;

		if((id == "") || (id == 0))
			alert("This feature does not function during previews.");
		else if(tb.value == "") {
			alert("Please enter your location.");
			tb.focus();
		} else {
			// Show the throbber
		    var btnpos = $e(btn).position();
			img.style.left = btnpos.left + btn.offsetWidth + 3;
			img.style.top = btnpos.top - 1;
			img.style.display = "block";
			
			var filterList = ""
			var filterElements = document.getElementsByName(strClientID + "_filter");
			for (i = 0; i < filterElements.length; i++) {
				if (filterElements[i].checked) {
					if (filterList.length > 0) filterList += ",";
					filterList += filterElements[i].value;
				}
			}
			
			var strLocation = tb.value;
			var url = "/Modules/FrontPage/Map/AjaxWheresMyNearest.aspx?module_id="+id+"&postcode="+escape(strLocation)
			if (filterElements.length > 0) url += "&filter="+escape(filterList);
			tb.blur();
			$e.ajax({
			    url: url,
			    cache: false,
			    type: 'GET',
			    dataType: 'html',
			    success: function (data, status, req) {
			        img.style.display = "none";
			        if (data == "__LOCATION_NOT_FOUND__")
			            alert("Sorry, we could not locate '" + strLocation + "'. Please try a different location.");
			        else {
			            var objResults;
			            try {
			                objResults = eval("(" + data + ")");
			            } catch (e) {
			                alert("Sorry, there was a problem. Please try again later.");
			                return;
			            }
			            WheresMyNearest_ShowResults(strLocation, objResults, btn, strClientID);
			        }
			    },
			    
			    error: function () {
			        img.style.display = "none";
			        alert("Sorry, your location could not be found. Please try again later.");
			    }
			});
		}
	}
}

function WheresMyNearest_ShowResults(strLocation, objResults, btnNearButton, strClientID) {
	var divHolder = btnNearButton;
	while(divHolder.tagName != "DIV") divHolder = divHolder.parentNode;
	
	var div_outer = document.createElement("DIV");
	div_outer.innerHTML = "\
<table border='0' class='gridstyle' cellspacing='0' cellpadding='0'>\
<tr class='gridheader'><td class='Gridheader'><b>Nearest to <i>" + strLocation + "</i></b>...</td><td align='right' style='padding-right:4px;'><a href='#'><img src='/images/close_icon.gif' border='0'/></a></td></tr>\
<tr><td colspan='2'></td></tr></table>\
";
	div_outer.childNodes[0].rows[0].cells[1].childNodes[0].onclick = function() {
		div_outer.parentNode.removeChild(div_outer);
	}
	div_outer.childNodes[0].style.width =  divHolder.offsetWidth;
	
	div_outer.childNodes[0].setAttribute("width", divHolder.offsetWidth);
	div_outer.style.position = "absolute";
	div_outer.style.zIndex = 100000;
	div_outer.style.zOrder = 100000;
	div_outer.style.left = $e(divHolder).position().left;
	
	var div = div_outer.childNodes[0].rows[1].cells[0].appendChild(document.createElement("DIV"));
	div.style.height = 100;
	div.style.overflow = "auto";
	div.innerHTML = "<table border='0' width='100%' class='map-nearest-results'><tbody></tbody></table>";
	var tbl = div.childNodes[0];
	tbl.style.borderCollapse = "collapse";

	var tbody = div.getElementsByTagName("TBODY")[0];
	
	var fn_onclickresult = eval(strClientID + "_map_ShowPoint");
	
	for(var i = 0; i < objResults.Count; i++) {
		var pt = objResults.Points[i];
		WheresMyNearest_AddResult(i, pt, tbody, fn_onclickresult);
	}
	divHolder.insertBefore(div_outer, divHolder.childNodes[0]);
}

function WheresMyNearest_AddResult(index, pt, objTBODY, fn_onclickresult) {
	var tr = document.createElement("TR");
	tr.className = (index % 2 == 0 ? 'griditemrow' : 'altgriditemrow');
	
	var td1 = tr.appendChild(document.createElement("TD"));
	td1.className = "griditem";
	td1.setAttribute("width", "20");
	td1.innerHTML = "<div align='center'>" + (index+1) + "</div>";		
	
	var td2 = tr.appendChild(document.createElement("TD"));
	td2.className = "griditem";
	td2.innerHTML = "<a href='#'><b>" + unescape(pt.title) + "</b></a>";
	if(fn_onclickresult)
		td2.childNodes[0].onclick = function() { fn_onclickresult(pt.id) };
	
	var td3 = tr.appendChild(document.createElement("TD"));
	td3.className = "griditem";
	td3.innerHTML = pt.distance.toFixed(1) + " miles";
	
	objTBODY.appendChild(tr);
}