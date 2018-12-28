function doSiteSearch(id,def,network,groupid,includesubgroups) {
    var searchboxid = id.substr(0, id.length - 2);
    s = document.getElementById(searchboxid).value;
	if (s == def) {return;}
	var pound_re = /£/;
	s=s.replace(pound_re,'LpoundL');
	var url = '/publisher/search.aspx?searchString='+s+(network?'&searchScope=2':'')+(groupid?'&groupId=' + groupid + '&includeSubGroups=' + includesubgroups:'');
	if (typeof(window['blnOpenAllLinksExternally']) != 'undefined'){
		if(blnOpenAllLinksExternally) window.open(url, 'searchWin'); else window.location.href=url;
	}else{
		window.location.href=url;
	}
}

function doInternetSearch(id,def,engine) {
    var searchboxid = id.substr(0, id.length - 2);
    s = document.getElementById(searchboxid).value;
	if (s != def) {window.open('http://'+engine+s,'searchWin');}
}

function doShopSearch(id) {
    var searchboxid = id.substr(0, id.length - 2);
    s = document.getElementById(searchboxid).value;
	location.href = '/Shop/Search.aspx?q=' + escape(s);
}