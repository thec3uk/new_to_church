import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Hexagon from 'react-hexagon';

import '../components/academy/style.css';
import Quote from '../components/academy/quote';
import TwoColumnText from '../components/academy/twoColumnText';
import Text from '../components/academy/text';
import Testimonial from '../components/academy/testimonial';
import TextWithHexImage from '../components/academy/textHexImage';
import TextWithCTA from '../components/academy/textWithCtas';

import HtmlHexagon from '../components/academy/HtmlHex';

const Slices = ({ slices }) => {
  return (
    slices &&
    slices.map((contentSlice, idx) => {
      const componentListObj = {
        quote: Quote,
        '2_column_text': TwoColumnText,
        text: Text,
        team: Testimonial,
        hex_image_with_text: TextWithHexImage,
        text_with_ctas: TextWithCTA,
      };
      const Component = componentListObj[contentSlice.slice_type];
      if (Component === undefined) {
        console.warn('Warning: default case, content is unhandled');
        return <div key={idx}></div>;
      }
      return (
        <div key={idx} id={`${idx}`} className="py-12 md:py-32 bg-grey-100">
          <Component key={idx} data={contentSlice} />
        </div>
      );
    })
  );
};

const AcademyPage = ({ data }) => {
  const page = data.prismicAcademyPage.data;
  const body = page.body;
  return (
    <div>
      <BackgroundImage
        Tag="header"
        className={'w-screen'}
        fluid={page.hero_image.localFile.childImageSharp.fluid}
        backgroundColor={'#040e18'}
      >
        <div className="grid grid-cols-8 grid-rows-12 h-screen">
          <HtmlHexagon
            className="text-purple-trans stroke-purple fill-current col-start-3 col-end-7 row-start-2 row-end-5"
            containerClassName="text-center grid-rows-6 px-16 pt-16"
          >
            <img
              src="/images/LogoWhite.png"
              alt="C3 Logo in White with text"
              className="w-12 mx-auto mt-8"
            />
            <h1 className="text-5xl font-accent text-yellow subpixel-antialiased py-8">
              <span className="font-title lowercase text-white">The C3</span>{' '}
              Academy
            </h1>
            <div className="flex flex-col items-center px-8">
              {page.ctas.map((cta, idx) => {
                const textColor = idx % 2 === 0 ? 'text-black' : 'text-white';
                const bgColor = idx % 2 === 0 ? 'bg-yellow' : 'bg-purple';
                const hoverTextColor =
                  idx % 2 === 0 ? 'text-white' : 'text-white';
                const hoverBgColor =
                  idx % 2 === 0 ? 'bg-yellow-200' : 'bg-purple-200';
                return (
                  <a
                    className={`${textColor} ${bgColor} hover:${hoverTextColor} hover:${hoverBgColor} px-4 pb-1 shadow font-title lowercase text-base m-2`}
                    href={cta.link.url}
                    key={idx}
                  >
                    {cta.text}
                  </a>
                );
              })}
            </div>
          </HtmlHexagon>
        </div>
      </BackgroundImage>
      <main>
        <Slices slices={body} />
      </main>
    </div>
  );
};

export default AcademyPage;

export const query = graphql`
  {
    prismicAcademyPage {
      data {
        ctas {
          text
          link {
            kind
            name
            url
            target
          }
        }
        hero_image {
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        body {
          ...quote
          ...twoColumnText
          ...textSlice
          ...testimonialSlice
          ...textHexImageSlice
          ...ctaSlice
        }
      }
    }
  }
`;
