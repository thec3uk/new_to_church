import React from 'react';

const Footer = () => (
  <footer>
    <section className="NewsLetterFooter">
      <div className="container">
        <div className="NFooterWrapper">
          <div>
            C3 Centre, Coldhams Lane,
            <br />
            Cambridge, CB1 3HR, UK
            <div className="PhoneNumber">Tel: 01223 844415</div>
            <div className="Email">Email: hello@thec3.uk</div>
          </div>

          <div className="NewsLetterSignUp">
            <img
              src="/Images/Content/4/Templates/49141/images/IconMail.png"
              alt="Newsletter Signup"
            />
            <div>Sign up to the C3 Newsletter</div>
            <a
              className="NewsLetterGO"
              href="/Groups/308211/NewsLetterSignUp.aspx"
            >
              {' '}
              GO
            </a>
          </div>

          <div className="footer-column footer-column-1">
            <div className="ArticleBody">
              <a
                className="footer_icon_block facebook"
                href="https://www.facebook.com/thec3uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icomoon-icon-facebook">&nbsp;</i>{' '}
              </a>{' '}
              <a
                className="footer_icon_block twitter"
                href="https://twitter.com/the_c3church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <i className="icomoon-icon-twitter">&nbsp;</i>{' '}
              </a>{' '}
              <a
                className="footer_icon_block instagram"
                href="https://www.instagram.com/the_c3church/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <i className="icomoon-icon-instagram">&nbsp;</i>{' '}
              </a>
            </div>
            <img
              src="/Images/Content/4/Templates/49141/images/FR_Logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <section className="slice_Footer_D">
      <div className="container">
        <div className="footerbar">
          <a
            className="footer"
            // onMouseOver="window.status='Visit ChurchInsight';return true;"
            // onFocus="window.status='Visit ChurchInsight';return true;"
            // onMouseOut="window.status='';"
            // onBlur="window.status='';"
            href="http://www.churchinsight.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a <strong>Church</strong>
            Insight site
          </a>
          <a
            id="footer_mobile"
            href="/Mobile/default.aspx?home=yes"
            title="High Accessibility Version"
            // onMouseOver="window.status='High Accessibility Version';return true;"
            // onFocus="window.status='High Accessibility Version';return true;"
            // onMouseOut="window.status = '';"
            // onBlur="window.status = '';"
          >
            Low Graphics
          </a>
          <a
            id="footer_copyright"
            href="/copyright"
            title="Copyright Statement"
            // onMouseOver="window.status='Copyright Statement';return true;"
            // onFocus="window.status='Copyright Statement';return true;"
            // onmouseOut="window.status='';"
            // onBlur="window.status = '';"
          >
            Copyright
          </a>
          <a
            id="footer_tc"
            href="/terms"
            title="Terms and Conditions"
            // onMouseOver="window.status='Terms and Conditions';return true;"
            // onFocus="window.status='Terms and Conditions';return true;"
            // onMouseOut="window.status='';"
            // onBlur="window.status = '';"
          >
            T&amp;Cs
          </a>
          <a
            id="footer_privacy"
            href="/privacy"
            title="Privacy Policy"
            // onMouseOver="window.status='Privacy Policy';return true;"
            // onFocus="window.status='Privacy Policy';return true;"
            // onMouseOut="window.status='';"
            // onBlur="window.status = '';"
          >
            Privacy
          </a>
          <a
            id="footer_help"
            href="/help"
            title="Help with using this site"
            // onMouseOver="window.status='Help with using this site';return true;"
            // onFocus="window.status='Help with using this site';return true;"
            // onMouseOut="window.status='';"
            // onBlur="window.status = '';"
          >
            Help
          </a>
          <span id="footer_charity">Registered Charity 1132699</span>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
