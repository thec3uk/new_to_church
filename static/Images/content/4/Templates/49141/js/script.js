/*
	Main ChurchInsight template Javascript/JQuery file.
	WARNING - do not edit this file unless you know exactly what you are doing.
	Better to use the scriptOverRide.js file to add local changes to a template.
	If you need advice, contact ChurchInsight Support.
*/

// This file runs after the web-page has loaded, as there is a "defer" attribute on the <script> tag in the HTML header.
// The preloaded JQuery version is V1.10.2.

var LightBoxSlice,
  bLightBoxActive = false;

$(document).ready(function() {
  'use strict';

  var PageName;
  function ProcessPageName(sMineType) {
    PageName = PageName.substring(0, PageName.indexOf('.' + sMineType));
    PageName = PageName.replace(/\//g, '_'); // replace all / to _ Have to use \/ to get a / in the reg-ex. The g denotes a global exchange.
    PageName = PageName + '_' + 'aspx'; // make all pages look like aspx pages.
  }

  // Work out what page we are on.
  PageName = window.location.pathname.toLowerCase(); // on the root, this have the value "/"
  var bOnLocalMachine = PageName.indexOf('.html') !== -1;
  if (!bOnLocalMachine) {
    ProcessPageName('aspx');
  } else {
    // Assume we are debugging on a local machine.
    PageName = PageName.substr(PageName.indexOf('/_') + 1);
    ProcessPageName('html');
  }

  // Work out the file path.
  var sPath = '/Images/Content/4/Templates/49141/images/';
  if (bOnLocalMachine) {
    sPath = 'file:///C:/KENTON_VAULT/Endis/C3/ActiveCode/images/';
  }

  // #################### Define some useful functions #######################

  // We have to put all functions here, as OSX does not allow functions to be inside if statements.

  // function to turn a slice name into a selector reference for the corresponding <section> tag
  function GetSectionTagRef(SliceName) {
    return 'section.' + SliceName + ' ';
  }

  var SectionTag, SectionTags; // will be used to hold required slices
  function SectionTagExists(SliceName) {
    if (SectionTags.hasClass(SliceName)) {
      SectionTag = SectionTags.filter(GetSectionTagRef(SliceName));
      if (SectionTag.length !== 0) {
        // at least one slice exists, great. You could have more than one in theory.
        return true;
      }
    }
    SectionTag = undefined; // remove all data.
    return false;
  }

  function GetRefItem(SectionTag, Ref) {
    if (typeof Ref === 'string') {
      if (Ref === '') {
        // allows us to return the section tag itself.
        return SectionTag;
      } else {
        return SectionTag.find(Ref);
      }
    } else {
      return Ref;
    }
  }

  // A function to easily set JQuery toggles.
  // SectionTag is a $ variable.
  function ApplyToggleVisibilityOnClick(
    SectionTag,
    ClickRef,
    ToggleRef,
    iDelay,
    bShowToggleItemInitially
  ) {
    var ClickItem = GetRefItem(SectionTag, ClickRef);
    var ToggleItem = GetRefItem(SectionTag, ToggleRef);

    if (bShowToggleItemInitially) {
      ToggleItem.show(0);
    } else {
      ToggleItem.hide(0);
    }
    // Note we add a function here. Since we are only using calling function arguements inside the function argument,
    // variable scoping correctly works.
    ClickItem.click(function() {
      ToggleItem.toggle(iDelay);
    });
  }

  function ApplyHideOnClick(SectionTag, ClickRef, ToHideRef) {
    var ClickItem = GetRefItem(SectionTag, ClickRef);
    var ToHideItem = GetRefItem(SectionTag, ToHideRef);

    ClickItem.click(function() {
      ToHideItem.hide(0);
    });
  }

  function ApplyToggleClassOnClick(SectionTag, ClickRef, ToggleRef, ClassName) {
    var ClickItem = GetRefItem(SectionTag, ClickRef);
    var ToggleItem = GetRefItem(SectionTag, ToggleRef);

    // Note we add a function here. Since we are only using calling function arguements inside the function argument,
    // variable scoping correctly works.
    ClickItem.click(function() {
      ToggleItem.toggleClass(ClassName);
    });
  }

  // function to test if text exists.
  var sAttrText, sAttrText2, sAttrText3, sAttrText4; // Results come back in these variables.
  var DollarTextarea = $('<textarea/>'); // store this once.
  function TextExists(attrText, bSplit) {
    if (attrText === undefined) {
      return false;
    }
    if (attrText === null) {
      return false;
    }

    var TextToProcess = attrText.trim();
    if (TextToProcess === '') {
      return false;
    }

    // decode the text, so that &amp;lt; becomes < etc.
    // This works by turning into HTML and then turning back into text.
    if (TextToProcess.indexOf('&') !== -1) {
      // we could use the .includes('&') method, but it is quite new, so some browsers can't cope.
      TextToProcess = DollarTextarea.html(TextToProcess).text();
    }
    if (TextToProcess === '') {
      return false;
    }

    sAttrText = ''; // set return values to blank.
    sAttrText2 = '';
    sAttrText3 = '';
    sAttrText4 = '';
    if (bSplit) {
      var arrSplitText = TextToProcess.split('*');
      sAttrText = arrSplitText[0].trim();
      if (arrSplitText.length > 1) {
        sAttrText2 = arrSplitText[1].trim();
      }
      if (arrSplitText.length > 2) {
        sAttrText3 = arrSplitText[2].trim();
      }
      if (arrSplitText.length > 3) {
        sAttrText4 = arrSplitText[3].trim();
      }
    } else {
      sAttrText = TextToProcess;
    }

    return sAttrText + sAttrText2 + sAttrText3 + sAttrText4 !== '';
  }

  // Function to hide a column if it contains no images.
  var SystemSlice;
  function HideDivsIfAllEmpty(ColumnClass) {
    var ImageWrappers = SystemSlice.find('div.' + ColumnClass);
    if (ImageWrappers.find('img').length === 0) {
      // have to use find not children, as img tags can be inside <a> tags.
      ImageWrappers.hide(0);
    }
  }

  // All slide shows have the same defaults at present.
  var BxDefaultValues = {
    mode: 'fade',
    auto: true,
    pause: 5000,
    speed: 500,
    pager: true,
    controls: false,
    preloadImages: 'visible',
    touchEnabled: true,
  };

  function ActivateBxSlider(SliceName) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does

      var bannerSlides = SectionTag.find('div.bannerSlides'); // use a "find" here, as structure of slices varies.
      var gallery_ul = bannerSlides.children('ul.gallery_ul');

      // Code to enable user defined text to appear to the side banner slides.
      gallery_ul.find('img').each(function() {
        var ThisImg = $(this);
        ThisImg.removeAttr('title'); // remove the title attribute so that pop-up text does not appear.
        sAttrText = '';
        sAttrText2 = '';
        TextExists(ThisImg.attr('alt'), true); // set above text variables, if there is any alt text.
        // We use a table to build the caption structure
        var caption =
          '<div class="TableWrapper"><table><tr><td class="Image">' +
          ThisImg.parent().html() +
          '</td><td class="Spacer">&nbsp;</td><td class="Text"><b>' +
          sAttrText +
          '</b><br>' +
          sAttrText2 +
          '</td><td class="Spacer">&nbsp;</td></tr></table></div>';
        $(caption).insertAfter(this);
        ThisImg.hide();
      });

      // Run BxSlider last, so the viewport starts off at the right height.
      // ul.gallery_ul must be displayed before bx-slider can be applied.
      // So since we hide it while the page was loading, we show it now.
      bannerSlides.show(0);
      gallery_ul.bxSlider(BxDefaultValues);
    }
  }

  // ################### Slice activation functions go here. #########################

  // define a function, so we can activate a SlickNav menu in a controlled way.
  var SlickNavBtn, HeaderSlice;
  function ActivateMenu(SliceName) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does

      HeaderSlice = SectionTag;
      var SectionTagRef = GetSectionTagRef(SliceName);
      var RootMenuDeskTop = SectionTag.children('div.nav-menu').children(
        'ul.root_menu'
      );

      RootMenuDeskTop.slicknav({
        // activate SlickNav for this slice.
        prependTo: SectionTagRef + '> div.SlickNav_Wrapper',
        allowParentLinks: true, // Top level items can be links
        label: 'MENU',
        // Use hex escape characters here.
        closedSymbol: '&#xe900', // a logical OR "V" symbol
        openedSymbol: '&#xe901', // a nice up pointing ">" symbol
        duplicate: bDesktopScreenPossible, // only need to duplicate if the desktop menus are needed.
      });

      var SlickNavLastItem = SectionTag.find('ul.slicknav_nav > li:last-child');

      //Add extra links onto the SlickNav menu manually, to replace top-link log-out buttons etc.
      var ExtraLink_0 =
        '<li class="ExtraLink MyC3"><a href="/MyC3"><img class="LogoMyC3Grey" src="' +
        sPath +
        'LogoMyC3Grey.png"><img class="LogoMyC3Red" src="' +
        sPath +
        'LogoMyC3Red.png"></a></li>';
      ExtraLink_0 = '';
      var ExtraLink_1;
      if (bUserLoggedIn) {
        ExtraLink_1 =
          '<li class="ExtraLink"><a href="/User/Logout.aspx"><i class="journey-icon-login"></i>Logout</a></li>';
      } else {
        ExtraLink_1 =
          '<li class="ExtraLink"><a href="/user/login.aspx"><i class="journey-icon-login"></i>Login</a></li>';
      }
      var ExtraLink_3 =
        '<li class="ExtraLink SearchOpen"><a><i class="journey-icon-search"></i>Search</a></li>';
      $(ExtraLink_0 + ExtraLink_1 + ExtraLink_3).insertAfter(SlickNavLastItem);

      // Add a close menu icon into slickNav.
      var SlickNavIcon = SectionTag.find('span.slicknav_icon');
      $('<div class="SlickNavCloseIcon"></div>').insertAfter(SlickNavIcon);

      // apply all the visibility on-clicks to make the menu slice work.

      // Find some commonly used items.
      var SearchOverlay = SectionTag.find('div.search-overlay');
      SlickNavBtn = SectionTag.find('a.slicknav_btn');
      //var Logo = SectionTag.find("div.logo-container");

      ApplyToggleVisibilityOnClick(
        SectionTag,
        'li.ExtraLink.SearchOpen',
        SearchOverlay,
        0,
        false
      );
      //ApplyToggleVisibilityOnClick(SectionTag, "div.top-link-wrapper a:last-child", SearchOverlay, 0, false);
      ApplyHideOnClick(SectionTag, 'a.search-close', SearchOverlay);
      ApplyHideOnClick(undefined, SlickNavBtn, SearchOverlay);
      // Toggles for menu-bars and menu-close icons
      ApplyToggleVisibilityOnClick(
        undefined,
        SlickNavBtn,
        SlickNavIcon,
        0,
        true
      ); // no delay on the toggle.
      ApplyToggleVisibilityOnClick(
        SectionTag,
        SlickNavBtn,
        'div.SlickNavCloseIcon',
        0,
        false
      ); // no delay on the toggle.

      var SectionTagParent = SectionTag.parent();

      // SectionTagParent should be <div class="video-overlay">
      var SectionTagGrandParent = SectionTagParent.parent(); // should be <section class="slice_VideoWrapper">

      // On the transparent menu, hide things that drop out of the slice box when the slickNav menu is opened.
      //ApplyToggleVisibilityOnClick(undefined, SlickNavBtn, Logo, 0, true);
      //ApplyToggleVisibilityOnClick(SectionTagParent, SlickNavBtn, "div.logo-MyC3", 0, true);
      //ApplyToggleVisibilityOnClick(SectionTagParent, SlickNavBtn, "div.container", 0, true);

      // Fix a problem that when the SlickNav menu is used on the transparent slice,
      // the menu does not extend beyond the video-wrapper as it is of a fixed size.
      ApplyToggleVisibilityOnClick(
        SectionTagGrandParent,
        SlickNavBtn,
        'video',
        0,
        true
      ); // hide video
      //ApplyToggleVisibilityOnClick(SectionTagParent, SlickNavBtn, "> div:last-child", 0, true); // hide positioning div
      ApplyToggleClassOnClick(
        SectionTagGrandParent,
        SlickNavBtn,
        'div.video-overlay',
        'SlickNavTransparentOn'
      );
      ApplyToggleClassOnClick(
        undefined,
        SlickNavBtn,
        SlickNavBtn,
        'SlickNavTransparentOn'
      );

      ApplyToggleVisibilityOnClick(
        BodyTag,
        SlickNavBtn,
        'section.slice_FixedSideLinksMobile',
        0,
        false
      );

      // SectionTagParent should be the <header>
      //SectionTag.addClass('ActivateFixedPosition');
      //SectionTagParent.addClass('ActivateFixedPosition'); // add class to the <header> tag too.

      // ensure the SlickNav menu is not stickly when active so it can scroll beyond one screen height.
      ApplyToggleClassOnClick(
        SectionTag,
        SlickNavBtn,
        '',
        'ActivateFixedPosition'
      );
      //ApplyToggleClassOnClick(SectionTagParent, SlickNavBtn, '', "ActivateFixedPosition");
      //ApplyToggleClassOnClick(SectionTagParent, SlickNavBtn, '', "ClearTopMargin");

      // Need autocomplete="off" to be added to the search box <input> tag.
      // This stops horrible browser autocomplete text from appearing.
      SectionTag.find('div.search_div input').attr('autocomplete', 'off');
    }
  }

  function ActivateArticleList4(SliceName) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does

      // Create the links at the bottom of the article cards.
      SectionTag.find('div.articleListTitle a').each(function() {
        var ThisAtag = $(this);
        var titleLink = ThisAtag.attr('href');
        var articleListLink = ThisAtag.parent()
          .parent()
          .children('.articleListLink');
        articleListLink.wrapInner('<a href="' + titleLink + '">');
        if (SliceName === 'slice_WelcomeArticles') {
          articleListLink.find('a').text('FIND OUT MORE');
        }
      });
    }
  }

  function ActivateForm(SliceName) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does
      // Turn autocomplete="off" for the <textarea> tag. Forces the user to type something original in.
      SectionTag.find('textarea').attr('autocomplete', 'off');
    }
  }

  function ActivateBannerImage(SliceName) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does

      if (!SectionTag.hasClass('MyC3')) {
        if (
          TextExists($('head meta[name="Group Name"]').attr('content'), false)
        ) {
          SectionTag.find('h1').text(sAttrText);
        }
      }

      var GnNames = SectionTag.find('span.groupnotes_name');
      var GnValues = SectionTag.find('span.groupnotes_value');
      if (GnNames.length > 0) {
        if (
          TextExists(
            GnValues.eq(0)
              .find('a')
              .attr('href'),
            false
          )
        ) {
          // assume first note is banner image.
          SectionTag.css('background-image', 'url(' + sAttrText + ')');
        }
        TextExists(GnNames.eq(1).text(), false);
        if (sAttrText.indexOf('Group Banner Image Position') !== -1) {
          // check if the second note is this.
          if (TextExists(GnValues.eq(1).text(), false)) {
            SectionTag.css('background-position', sAttrText);
          }
        }
      }
    }
  }

  var i;
  function ActivateContentSideBarImages() {
    if (SectionTagExists('slice_BannerImage')) {
      // check if slice exists, and load into SectionTag if it does
      var GnNames = SectionTag.find('span.groupnotes_name');
      var GnValues = SectionTag.find('span.groupnotes_value');
      if (GnNames.length > 1) {
        // show images in the content sidebar gallery that match the group notes.
        var iEqStart = 1;
        TextExists(GnNames.eq(1).text(), false);
        if (sAttrText.indexOf('Group Banner Image Position') !== -1) {
          // check if the second note is this.
          iEqStart = 2;
        }
        BodyTag.find('div.ContentSlides li').each(function() {
          // Use BodyTag here.
          var ThisLi = $(this);
          var ImgSrc = ThisLi.find('img').attr('src');
          for (i = iEqStart; i < GnValues.length; i++) {
            if (
              TextExists(
                GnValues.eq(i)
                  .find('a')
                  .attr('href'),
                false
              )
            ) {
              if (ImgSrc === sAttrText) {
                ThisLi.show();
                break;
              }
            }
          }
        });
      }
    }
  }

  function ActivateLandingArticles(SliceName) {
    /* this code does an intelligent layout change for a article list, depending on the number of articles */
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does
      var rMarginWidth = 1.28866 * 2.0,
        rCleverWidth;
      var Articles = SectionTag.find('div.article_cards > div');
      var iArticles = Articles.length;
      switch (iArticles) {
        case 1:
          rCleverWidth = 100.0 - rMarginWidth;
          break;
        case 2:
          rCleverWidth = 50.0 - rMarginWidth;
          break;
        case 3:
        case 5:
        case 6:
        case 9:
          rCleverWidth = 33.33333 - rMarginWidth;
          break;
        case 4:
        case 7:
        case 8:
        case 10:
        case 11:
        case 12:
          rCleverWidth = 25.0 - rMarginWidth;
          break;
        //case 5:
        //rCleverWidth = 20.0 - rMarginWidth; break;
        default:
          rCleverWidth = 25.0 - rMarginWidth;
          break;
      }
      Articles.css('width', rCleverWidth + '%');
    }
  }

  function ActivateCalendarFeed(SliceName, bRestructure) {
    if (SectionTagExists(SliceName)) {
      // check if slice exists, and load into SectionTag if it does

      // Hide all the events that have no images.
      var EventCards = SectionTag.find('div.EventCards > div');
      EventCards.each(function() {
        var ThisEvent = $(this);
        var EventImage = ThisEvent.find('div.EventImage');
        if (EventImage.length !== 1) {
          ThisEvent.hide();
        }
      });

      // Create the links at the bottom of the event cards.
      SectionTag.find('div.EventTitle a').each(function() {
        var ThisAtag = $(this);
        var titleLink = ThisAtag.attr('href');
        var ThisAtagGrandParent = ThisAtag.parent().parent();
        ThisAtagGrandParent.children('div.EventLink').wrapInner(
          '<a href="' + titleLink + '">'
        );
      });

      //If needed re-structure the HTML for the big page row display.
      if (bRestructure) {
        EventCards.each(function() {
          var ThisEvent = $(this);
          var EventImage = ThisEvent.find('div.EventImage');
          if (EventImage.length === 1) {
            $('<div class="EventDetailsWrapper"></div>').insertAfter(
              EventImage
            );
            var EventDetailsWrapper = ThisEvent.find('div.EventDetailsWrapper');
            ThisEvent.find('div.EventTitle').appendTo(EventDetailsWrapper);
            //ThisEvent.find('div.EventDate').appendTo(EventDetailsWrapper);
            ThisEvent.find('div.EventSummary').appendTo(EventDetailsWrapper);
            ThisEvent.find('div.EventLink').appendTo(EventDetailsWrapper);
          }
        });
      }
    }
  }

  function ActivateWatchNowVideo() {
    if (SectionTagExists('slice_FilmLightBox')) {
      // check if slice exists, and load into SectionTag if it does
      LightBoxSlice = SectionTag;
      //if (TextExists(LightBoxSlice.find('div.VideoFileReference').text(), false)) {
      //LightBoxSlice.find('video source').attr('src', sAttrText);
      //}
      if (TextExists(LightBoxSlice.find('div.VideoTitle').text(), false)) {
        LightBoxSlice.find('div.LightBoxTitle').text(sAttrText);
      }
      LightBoxSlice.find('div.CloseIcon').click(function() {
        bLightBoxActive = false;
        LightBoxSlice.find('iframe').attr('src', '');
        LightBoxSlice.hide();
      });
    }
  }

  function ActivateHeaderVideo() {
    if (SectionTagExists('slice_VideoWrapper')) {
      // check if slice exists, and load into SectionTag if it does
      var DivToSearch = 'div.BigDeskTopFile';
      if (!bDesktopScreenPossible) {
        DivToSearch = 'div.SmallMobileFile';
      }
      if (TextExists(SectionTag.find(DivToSearch).text(), false)) {
        var Video = SectionTag.find('video');
        Video.find('source').attr('src', sAttrText);
        Video.load();
      }
    }
  }

  function ActivateDesktopInstagram() {
    // On a larger screen, load in the desktop Instagram feed.
    var iDeskTopWidthI = 768;
    var bDesktopScreenPossibleI =
      screen.width + iMobileScreenAllowence >= iDeskTopWidthI ||
      screen.height + iMobileScreenAllowence >= iDeskTopWidthI;
    if (bDesktopScreenPossibleI) {
      if (SectionTagExists('slice_InstagramFeed')) {
        // check if slice exists, and load into SectionTag if it does
        var InstagramSrc =
          'https://lightwidget.com/widgets/5af160d0068351708b2a5404950e6c33.html';
        SectionTag.find('iframe.lightwidgetDeskTop').attr('src', InstagramSrc);
      }
    }
  }

  // ########################## Check various conditions #############################

  //var bOnTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  var iDeskTopWidth = 992;
  var iMobileScreenAllowence = 64; // Because of other stuff on a screen, you have to assume the browser window could get bigger on a rotation.
  var bDesktopScreenPossible =
    screen.width + iMobileScreenAllowence >= iDeskTopWidth ||
    screen.height + iMobileScreenAllowence >= iDeskTopWidth;

  var BodyTag = $('body');
  var bOnSystemPopupPage = BodyTag.hasClass('system_popup');
  var bUserLoggedIn = BodyTag.hasClass('logged_in_user');

  SectionTags = BodyTag.find('section'); // Store all the section tags to speed up later code.
  var bOnHomePage = SectionTags.hasClass('slice_VideoWrapper');
  var bOnContentPage = SectionTags.hasClass('slice_content_page');
  var bOnSystemPage = SectionTags.hasClass('slice_system_page');
  var bOnOtherPage =
    !bOnHomePage && !bOnContentPage && !bOnSystemPage && !bOnSystemPopupPage;

  ActivateBannerImage('slice_BannerImage'); // set up banner image. Do this first, as it is so obvious.

  // #######################################
  // # Menu data changes
  // #######################################

  // We make the required adjustments to the one set of menu HTML on the page, before cloning it and activating all the copies.

  var ulModuleRootMenu = BodyTag.find('ul.root_menu');
  var bMenuPresent = ulModuleRootMenu.length !== 0;
  if (bMenuPresent) {
    /* remove sub menus from Home */
    // This assumes that the home menu is the first item with a sub menu.
    //var HomeMenuLi = ulModuleRootMenu.children('li:first-child');
    // HomeMenuLi.children('ul').remove();
    // HomeMenuLi.removeClass('has_sub_menu'); // remove class
    //HomeMenuLi.children('a').attr("href","/Groups/296408/Home.aspx"); // replace link with base domain reference, not a group reference.

    if (bUserLoggedIn) {
      ulModuleRootMenu
        .children('li:last-child')
        .children('ul')
        .remove(); // delete submenus of Myarea.
      BodyTag.find(
        'section.slice_FixedSideLinks a[href="/user/login.aspx"]'
      ).attr('href', '/user/logout.aspx');
    }
    /*
  if (PageName.indexOf('_articles_') === -1 && (PageName.indexOf('_new_to_church_aspx') !== -1 || PageName.indexOf('_home_aspx') !== -1) )
	{ulModuleRootMenu.children('li:first-child').remove();}
  i=0;
  if (PageName.indexOf('_next_steps_aspx') !== -1 ){i=2;}
  if (PageName.indexOf('_outreach_aspx') !== -1 ){i=3;}
  if (PageName.indexOf('_resources_aspx') !== -1 ){i=4;}
  if (PageName.indexOf('_giving_aspx') !== -1 ){i=5;}
  if(i>0){ulModuleRootMenu.children('li:nth-child(' + i + ')').children('a').css('color','#f05356');}
  */

    // #######################################
    // # SlickNav menus V1.0.10
    // #######################################

    ActivateMenu('slice_Header_T');

    // Code for the fixed position links.
    if (bDesktopScreenPossible) {
      if (SectionTagExists('slice_FixedSideLinks')) {
        // check if slice exists, and load into SectionTag if it does
        var SearchOverlayFixedLink = SectionTag.find(
          'div.search-overlay_fixed-link'
        );
        ApplyToggleVisibilityOnClick(
          SectionTag,
          'a.search-link',
          SearchOverlayFixedLink,
          0,
          false
        );
        ApplyHideOnClick(
          SectionTag,
          'span.search-close_fixed-link',
          SearchOverlayFixedLink
        );
        SectionTag.find('div.search_div input').attr('autocomplete', 'off');
      }
    }
  } // end of if bNeedMenus

  // Here do things ONLY needed on a home page.
  if (bOnHomePage) {
    ActivateHeaderVideo();
    ActivateWatchNowVideo();

    // Article list - 4 in a row on desktop
    ActivateArticleList4('slice_WelcomeArticles');
    ActivateArticleList4('slice_FindYourPlace');
    ActivateArticleList4('slice_YoungAdults');

    ActivateBxSlider('slice_WelcomeSlides_L');

    ActivateDesktopInstagram();

    // ############### Form code #####################

    // Turn off autocomplete on the message box.
    ActivateForm('slice_GreetedForm_L');
  } else if (bOnOtherPage) {
    ActivateArticleList4('slice_LandingArticles');
    ActivateLandingArticles('slice_LandingArticles');
    ActivateCalendarFeed('slice_MyC3Articles', true); // This will be on the Events sub-template.
  } else if (bOnContentPage) {
    // code to try and make content images work on mobile phones. Set max-width css property is if has not already been set.
    // If width and height attributes are both set, then the image is compressed horizontally, but that is still better than it overflowing.
    var ContentImages = BodyTag.find(
      'section.slice_content_page div.ArticleBody img'
    );
    ContentImages.each(function() {
      var Img = $(this);
      if (Img.css('max-width') === 'none') {
        Img.css('max-width', '100%');
      }
    });

    ActivateContentSideBarImages();
  } else if (bOnSystemPage || bOnSystemPopupPage) {
    /* Possible page types are now:
	'_calendar_month_aspx'
	'_media_allmedia_aspx'
	'_user_registration_aspx'
	'_user_copyright_aspx'
	'_user_termsandconditions_aspx'
	'_user_privacypolicy_aspx'
	'_user_help_aspx'
	'_publisher_search_aspx' - this is search results.
	'_paymentgroup_registration_aspx'
	'_myarea_walletitem_aspx'
	*/

    var PageType = PageName;
    if (SectionTagExists('slice_system_page')) {
      // check if slice exists, and load into SectionTag if it does
      SystemSlice = SectionTag;
      SystemSlice.addClass(PageType); // add class onto <section> tag, so CSS can locate it.
    } else {
      BodyTag.addClass(PageType); // add class onto <body> tag, so CSS can locate it. This will apply to various pop-up windows eg shop T&Cs.
    }

    if (
      PageType === '_media_allmedia_aspx' ||
      PageType === '_publisher_search_aspx'
    ) {
      // Add a toggle for the media controls.
      var MediaControls = SystemSlice.find('div#media_controls'); // these media controls are on the search page too.
      if (MediaControls.length !== 0) {
        $(
          '<a class="system_toggle_advanced">Advanced Options</a>'
        ).insertBefore(MediaControls);
        ApplyToggleVisibilityOnClick(
          SystemSlice,
          'a.system_toggle_advanced',
          MediaControls,
          0,
          false
        );
      }

      HideDivsIfAllEmpty('media_summary_image'); // Hide some empty columns, if needed.

      if (PageType === '_publisher_search_aspx') {
        // Extra things to do on the search page.

        HideDivsIfAllEmpty('search_article_image'); // Hide some empty columns, if needed.
        HideDivsIfAllEmpty('search_event_image'); // Hide some empty columns, if needed.

        // If we have been sent to the search page explicitly then prepare the page for searching.
        var SearchBox = SystemSlice.find(
          'input[id$="_txtSearchStringTemplate"]'
        );
        if (SearchBox.length === 1) {
          if (SearchBox.val() === 'Activate_Search') {
            SystemSlice.find('h2').hide(); // hide the search result titles
            SearchBox.val(''); // Clear the search text box
            SearchBox.attr('placeholder', 'Type your search text here');
            SearchBox.attr('autocomplete', 'off');
            MediaControls.show(); // make the search controls show.
          }
        }

        // If no data is found then, print a message, rather than have a blank page.
        if (SystemSlice.find('div.system_section').length === 0) {
          var HTML =
            '<span>No data found.<br><br>Please use the advanced options to refine your search.</span>';
          $(HTML).appendTo(SystemSlice.find('div.system_body'));
          MediaControls.show(); // make the search controls show.
        }
      }
    }

    // Fix calendar mobile page. Add a class to days we want to hide on the mobile/list view.
    if (PageType === '_calendar_month_aspx') {
      var DivToday = SystemSlice.find('div.calendar_day_wrapper_today');
      if (DivToday.length !== 0) {
        // we are on a calendar page with today's date.
        var NoEvents = SystemSlice.find('div#calendar_no_events');
        if (NoEvents.length === 0) {
          // only bother if there are some events.
          DivToday.prevAll().addClass('CalendarHideOnListView'); // so we can hide days earlier in the current week.
          var DivThisWeek = DivToday.parent();
          DivThisWeek.prevAll().addClass('CalendarHideOnListView'); // so we can hide earlier weeks.
          // If no events are visible, then tell the user.
          var AllDaysInVisibleWeeks = SystemSlice.find(
            'div.calendar_week:not(".CalendarHideOnListView") div.calendar_day_wrapper'
          );
          var iDaysVisible = AllDaysInVisibleWeeks.not(
            '.calendar_day_wrapper_empty'
          ).not('.CalendarHideOnListView').length;
          if (iDaysVisible === 0) {
            $(
              '<div id="calendar_no_events">There are no events in the selected month.</div>'
            ).insertAfter(SystemSlice.find('div.calendar'));
          }
        }
      }
    }
  } // end of bOnHomePage or bOnSystemPage if-block

  // Corrections for various hardware/browsers
  var P = navigator.platform;
  var bSmallAppleDevice = P === 'iPhone' || P === 'iPad' || P === 'iPod';
  //var bAppleDevice = (P === 'MacIntel' || bSmallAppleDevice);

  // var UA = navigator.userAgent;
  // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent for details.
  // var bOnSafari = (UA.indexOf('Safari/') !== -1 && UA.indexOf('Chrome/') === -1 && UA.indexOf('Chromium/') === -1);

  //alert(P + ' # ' + UA); // DEBUGGING line.

  if (bSmallAppleDevice) {
    // Parallex images are often a mess on small apple devices, so add a tag onto the <body> tag so we can take evasive action.
    BodyTag.addClass('OnSmallAppleDevice');
  }

  // Warnings.
  var iNumSwitchFastParallexOnSlices = SectionTags.filter(
    '.SwitchFastParallexOn'
  ).length;
  if (iNumSwitchFastParallexOnSlices > 1) {
    alert(
      'WARNING: Theme has ' +
        iNumSwitchFastParallexOnSlices +
        ' SwitchFastParallexOn slices.'
    );
  }

  var bHeaderTintOn = false,
    iYforHeaderTint = 2;
  var Header = $('header');
  function PollScrollDownChanges() {
    // This routine must be very streamlined. Called every 250ms.

    var iY = window.pageYOffset;

    if (!bHeaderTintOn && iY >= iYforHeaderTint) {
      if (window.innerWidth > 991) {
        // only apply if screen is of desktop size.
        HeaderSlice.addClass('HeaderWhite').addClass('HeaderSmall');
        if (!bOnHomePage) {
          Header.addClass('NonHomePageSmall');
        }
        bHeaderTintOn = true;
      }
    }
    if (bHeaderTintOn && iY < iYforHeaderTint) {
      if (bOnHomePage) {
        HeaderSlice.removeClass('HeaderWhite');
      }
      HeaderSlice.removeClass('HeaderSmall');
      Header.removeClass('NonHomePageSmall');
      bHeaderTintOn = false;
    }
  }

  // If the screen is resized, then we have to click shut the SlickNav Menu, if it is open.
  var iLastWidth = 0;
  function ShutSlickNav() {
    var iWidth = window.innerWidth;
    if (iWidth !== iLastWidth) {
      // don't run code if it looks like we just have the browser top menu appearing and disappearing.
      iLastWidth = iWidth;
      if (bDesktopScreenPossible) {
        if (SlickNavBtn.hasClass('slicknav_open')) {
          SlickNavBtn.click();
        }
        if (
          bOnHomePage &&
          iWidth < 992 &&
          HeaderSlice.hasClass('HeaderWhite')
        ) {
          HeaderSlice.removeClass('HeaderWhite').removeClass('HeaderSmall');
          bHeaderTintOn = false;
        }
      }
      if (bLightBoxActive) {
        ActivateLightBox(false);
      }
    }
  }

  window.addEventListener(
    'resize',
    function() {
      ShutSlickNav();
    },
    false
  );
  if (bDesktopScreenPossible) {
    window.setInterval(function() {
      PollScrollDownChanges();
    }, 250); // poll to see if user has scrolled down.
  }
});

// Code for running the Customer/Template lightbox. Has to be outside the load function, as it is referenced from HTML.
function ActivateLightBox(bLoadFile) {
  'use strict';

  var iFrame = LightBoxSlice.find('iframe');

  if (bLoadFile) {
    iFrame.attr('src', LightBoxSlice.find('div.VideoFileReference').text());
  }

  // Check screen size.
  var iFrameWidth = 640; // ideal iframe size.
  var iFrameHeight = 360;

  // Check if iframe is too wide.
  var iWidthNeeded = 640 + 40;
  var iScreenWidth = window.innerWidth; // Browser window width.
  if (iScreenWidth < iWidthNeeded) {
    // Need a smaller iframe, as screen is too small.
    iFrameWidth = iScreenWidth - 40;
    iFrameHeight = Math.round((iFrameWidth * 9) / 16); // assume wide screen aspect ratio.
  }
  // Check if iframe is too high.
  var iScreenHeight = window.innerHeight; // Browser window height.
  if (iScreenHeight < iFrameHeight + 40) {
    iFrameHeight = iScreenHeight - 40;
    iFrameWidth = Math.round((iFrameHeight * 16) / 9); // assume wide screen aspect ratio.
  }

  iFrame.attr('width', iFrameWidth);
  iFrame.attr('height', iFrameHeight);

  LightBoxSlice.show(); // only show at the end, once data is loaded.
  bLightBoxActive = true;
}
