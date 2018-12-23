import React, { Fragment } from 'react';
import { SEO, Nav, SideLinks, Footer, Hero } from '../components';

const ContentPage = () => (
  <Fragment>
    <SEO />
      <header className="NonHomePage">
        <Nav />
      </header>

      <SideLinks />

      <Hero />

      <section class="slice_content_page">
      	<div class="container">
      		<module alt="Article" module_id="698347" type_id="10" />
      		<module alt="System Page Content" module_id="698348" type_id="82" />
      		<aside class="sidebar">
      			<nav>
      				<module alt="Group Navigation" module_id="698349" type_id="14" />
      			</nav>
      			<module alt="Gallery" module_id="698354" type_id="84" />
      		</aside>
      	</div>
      </section>

      <section class="slice_FilmLightBox2">
      	<div class="FlexWrapper">
      		<div class="LightBox">
      			<div class="FlexRow">
      				<div class="LightBoxTitle">
      					Latest Video From All Nations</div>

      				<div class="CloseIcon">
      					&nbsp;</div>
      			</div>
      			<iframe allowfullscreen="" frameborder="0" height="360" mozallowfullscreen="" src="" webkitallowfullscreen="" width="640"></iframe>

      			<audio controls="controls">
      				<source src="" type="audio/mpeg" /></audio>

      			<video controls="controls">
      				<source src="" type="video/mp4" /></video>
      		</div>
      	</div>
      </section>

  <style type="text/css">
  .slice_FilmLightBox2,
    .slice_FilmLightBox2 iframe {display: none;}
    .slice_FilmLightBox2 { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 3; background-color: rgba(0, 0, 0, 0.6); }
    .slice_FilmLightBox2 .FlexWrapper { display: flex; flex-flow: row nowrap; justify-content: center; align-items: center; height: 100%; }
    .slice_FilmLightBox2 .LightBox { background-color: white; border-radius: 10px; padding: 5px 10px; }
    @media (min-width: 768px) { .slice_FilmLightBox2 .LightBox { padding: 20px 20px; } }
    .slice_FilmLightBox2 .LightBox .FlexRow { display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: flex-start; background-color: white; border-radius: 10px; }
    .slice_FilmLightBox2 .LightBox .LightBoxTitle { font-size: 17px; line-height: 1; padding-bottom:5px; }
    .slice_FilmLightBox2 .LightBox .CloseIcon { font-family: IcoMoon490Icons; font-size: 15px; line-height: 1; color: #f2663a; }
    .slice_FilmLightBox2 .LightBox .CloseIcon::after { content: "\ea0f"; }
    .slice_FilmLightBox2 audio {width:600px;}
    @media (max-width:700px) {.slice_FilmLightBox2 audio {width:400px;} }
    @media (max-width:450px) {.slice_FilmLightBox2 audio {width:300px;} }
  </style>

  <script>
  $(function() {
    var ArticleBody = $('section.slice_content_page div.ArticleBody');

  var Cards = ArticleBody.find('div#lstSermons > span > div');

    Cards.each(function() {
    var ThisCard = $(this);
    var TitleAtag = ThisCard.find('div:nth-child(2) a');
    var DisplayedTitle = TitleAtag.text().trim()
    var TitleText = DisplayedTitle.toLowerCase().replace(/[-_]/g,' ');
    DisplayedTitle = DisplayedTitle.replace(/['"]/g, '');
    var TitleLink = TitleAtag.attr('href');

    arrSplitText = TitleLink.split(',');
    var AudioLink = '';
    var FileFormat = arrSplitText[2].trim();
      if(FileFormat === '0') {
        AudioLink = "javascript:ActivateLightBox2('/Media/PlayMedia.aspx?download=False&file_id=" + arrSplitText[1].trim() + "','','" + DisplayedTitle + "');";
      } else if(FileFormat === '12') {
        AudioLink = "javascript:ActivateLightBox2('','/Media/PlayMedia.aspx?download=False&file_id=" + arrSplitText[1].trim() + "','" + DisplayedTitle + "');";
      }
      if (AudioLink !== '') {
        TitleAtag.attr('href',AudioLink); // Update other audio links to the old player.
        ThisCard.find('div:nth-child(1) a').attr('href',AudioLink);
      }
  });

  });


      // Code for running the Customer/Template lightbox. Has to be outside the load function, as it is referenced from HTML.
    var LightBoxSlice = $('section.slice_FilmLightBox2');

      LightBoxSlice.find('div.CloseIcon').click(function(){
        LightBoxSlice.find('iframe').attr('src','').hide();
        LightBoxSlice.find('audio source').attr('src','');
        LightBoxSlice.find('audio').load().hide();
        LightBoxSlice.find('video source').attr('src','');
        LightBoxSlice.find('video').load().hide();
        LightBoxSlice.hide();
      });

  function ActivateLightBox2(audioFile,videoFile,TitleText) { 'use strict';

  	if (TitleText !== '') {
  		LightBoxSlice.find('div.LightBoxTitle').text(TitleText);
  	}

  	if (videoFile !== '') {

        	LightBoxSlice.find('audio').hide();

  		//var iFrame = LightBoxSlice.find('iframe');
  		//iFrame.attr('src', videoFile);

  		var iFrame = LightBoxSlice.find('video');
  		iFrame.find('source').attr('src', videoFile);
  		iFrame.load().show();

  		// Check screen size.
  		var iFrameWidth = 640; // ideal iframe size.
  		var iFrameHeight = 360;

  		// Check if iframe is too wide.
  		var iWidthNeeded = 640 + 40;
  		var iScreenWidth = window.innerWidth; // Browser window width.
  		if (iScreenWidth < iWidthNeeded) { // Need a smaller iframe, as screen is too small.
  			iFrameWidth = iScreenWidth - 40;
  			iFrameHeight = Math.round(iFrameWidth * 9 / 16); // assume wide screen aspect ratio.
  		}
  		// Check if iframe is too high.
  		var iScreenHeight = window.innerHeight; // Browser window height.
  		if (iScreenHeight < (iFrameHeight + 40)){
  			iFrameHeight = iScreenHeight - 40;
  			iFrameWidth = Math.round(iFrameHeight * 16 / 9); // assume wide screen aspect ratio.
  		}

  		iFrame.attr('width', iFrameWidth);
  		iFrame.attr('height', iFrameHeight);
  		iFrame.show();
  	} else {
      LightBoxSlice.find('video').hide();
  		var AudioTag = LightBoxSlice.find('audio');
  		AudioTag.find('source').attr('src', audioFile);
  		AudioTag.load().show();
  	}
  	LightBoxSlice.show(); // only show at the end, once data is loaded.
  }
  </script>

      <Footer />
  </Fragment>
);

export default ContentPage
