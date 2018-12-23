import React, { Fragment } from 'react';
import { Head, SEO, Nav, SideLinks, Footer } from '../components';

const Index = () => (
  <Fragment>
    <Head index_page={true} />
    <SEO title="The C3 Church" />
    <header>
      <section className="slice_VideoWrapper">
        <div>
          <div className="BigDeskTopFile">
            https://s3.amazonaws.com/media.cthree.org/9d4cc8be-ba5f-483d-b41a-a285e1866a4c.mp4
          </div>
          <div className="SmallMobileFile">
            https://s3.amazonaws.com/media.cthree.org/9d4cc8be-ba5f-483d-b41a-a285e1866a4c.mp4
          </div>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            playinline="playinline"
            poster="/Images/Content/4/867706.jpg"
          >
            <source type="video/mp4" src="" />
          </video>
        </div>
        <div className="video-overlay">
          <Nav index_page={true} />
        </div>
      </section>

      <SideLinks index_page={true} />

      <section className="slice_WelcomeSlides_L">
        {/* The below should be pulled in as content*/}
        <div className="bannerSlides">
          <ul id="ctl00_ctl00_cphBody_ctl04_gallery_ul" className="gallery_ul">
            <li className="gallery_li">
              <a href="/Publisher/Article.aspx?ID=529859" target="_self">
                <img
                  src="/Images/Content/4/910611.jpg"
                  alt="Our Bury St. Edmunds site is coming soon*Find out how to get involved here!"
                  title="Our Bury St. Edmunds site is coming soon*Find out how to get involved here!"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>

    <section className="slice_GreetedForm_L">
      <div className="container">
        <h1>A very warm welcome</h1>

        <div className="form_wrapper">
          <div className="form_text">
            <module alt="Article" module_id="698257" type_id="10" />
          </div>

          <div className="form_fields HideElement">
            <module alt="Article" module_id="698258" type_id="10" />
          </div>
        </div>
      </div>
    </section>

    <section className="slice_WelcomeArticles">
      <div className="container">
        <module alt="Latest Articles" module_id="698297" type_id="1" />
      </div>
    </section>

    <section className="slice_WatchOnline">
      <div className="container">
        <div className="ArticleBody">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/Images/Content/4/Templates/49141/images/IconPlay.png"
                    alt="Play icon"
                  />
                </td>
                <td>
                  <h1 className="section-title">Watch Online</h1>
                  See our latest media here
                  <br />
                  <a
                    className="button"
                    href="javascript:ActivateLightBox(true);"
                  >
                    Watch now
                  </a>{' '}
                  <a className="button2" href="/teachingseries">
                    Teaching Series
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="slice_FilmLightBox">
      <div className="AmazonS3Reference">
        <module alt="Article" module_id="699677" type_id="10" />
      </div>

      <div className="FlexWrapper">
        <div className="LightBox">
          <div className="FlexRow">
            <div className="LightBoxTitle">Latest Video From C3</div>

            <div className="CloseIcon">&nbsp;</div>
          </div>
          <iframe
            allowFullScreen=""
            frameBorder="0"
            height="360"
            mozallowfullscreen=""
            src=""
            webkitallowfullscreen=""
            width="640"
            title="Latest Preach"
          />
        </div>
      </div>
    </section>

    <section className="slice_AboutUs">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        <img
          src="/Images/Content/4/Templates/49141/images/PicAboutUs.jpg"
          alt="About Us Banner"
        />
        <module alt="Article" module_id="698256" type_id="10" />
      </div>
    </section>

    <section className="slice_Children SwitchFastParallexOn">
      <div className="container">
        <h1 className="section-title">Kids and Youth</h1>
        <module alt="Article" module_id="698298" type_id="10" />
      </div>
    </section>

    <section className="slice_YoungAdults">
      <div className="container">
        <h1>Young Adults and Students</h1>
        <module alt="Latest Articles" module_id="698300" type_id="1" />
      </div>
    </section>

    <section className="slice_FindYourPlace">
      <div className="container">
        <module alt="Article" module_id="699187" type_id="10" />
        <module alt="Latest Articles" module_id="698301" type_id="1" />
      </div>
    </section>

    <section className="slice_InstagramFeed">
      <div className="container">
        <h1 className="section-title">
          <i className="icomoon-icon-instagram">&nbsp;</i>
          Life at C3
        </h1>

        <div className="ArticleBody">
          <iframe
            className="lightwidget-widget lightwidgetDeskTop"
            scrolling="no"
            src=""
            style={{ width: '100%', border: '0', overflow: 'hidden' }}
            title="instagram desktop"
          />
          <iframe
            className="lightwidget-widget lightwidgetMobile"
            scrolling="no"
            src="https://lightwidget.com/widgets/baee715d834255e98089f79c1b8bcc89.html"
            style={{ width: '100%', border: '0', overflow: 'hidden' }}
            title="instagram mobile"
          />
          <br />
          <a
            className="button"
            href="https://www.instagram.com/the_c3church/"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow us on instagram
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </Fragment>
);

export default Index;
