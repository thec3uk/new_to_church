import React from 'react';

const Search = () => (
  <div className="search-overlay">
    <a className="search-close" href="#">
      &thinsp;
    </a>
    <div>
      <div
        className="search_div"
        // onKeyDown="if(event.keyCode==13){document.getElementById('ctl00_ctl00_cphBody_ctl00_searchSiteGo').click();return false}else{return true}"
      >
        <input
          type="text"
          id="ctl00_ctl00_cphBody_ctl00_searchSite"
          name="searchSite"
          size="22"
          defaultValue="Search the Site"
          // onBlur={() => (if(this.value==''){this.value='Search the Site';})}
          // onFocus="if(this.value=='Search the Site'){this.value='';}"
          className="text"
        />
      </div>
      <input
        type="button"
        id="ctl00_ctl00_cphBody_ctl00_searchSiteGo"
        value="Go"
        className="button"
        // onClick="doSiteSearch(this.id,'Search the Site',false,null,null);"
      />
    </div>
  </div>
);

export default Search;
