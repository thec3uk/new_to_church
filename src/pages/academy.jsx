import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Hexagon from 'react-hexagon';

import '../components/academy/style.scoped.css';
import Quote from '../components/academy/quote';
import TwoColumnText from '../components/academy/twoColumnText';
import TextWithImage from '../components/academy/textWithImage';
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
        text: TextWithImage,
        text1: Text,
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
        <div key={idx} id={`${idx}`} className="py-12 md:py-32">
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
        fluid={page.hero_image.fluid}
        backgroundColor={'#040e18'}
      >
        <div className="grid grid-cols-8 grid-rows-4 lg:grid-rows-12 h-screen">
          <HtmlHexagon
            className="text-purple-trans stroke-purple fill-current col-start-1 col-end-9 row-start-2 row-end-5 lg:col-start-3 lg:col-end-7 lg:row-start-2 lg:row-end-5"
            containerClassName="text-center grid-rows-6 px-16 pt-16"
          >
            <img
              src="/images/LogoWhite.png"
              alt="C3 Logo in White with text"
              className="w-12 mx-auto mt-8"
            />
            <h1 className="text-5xl font-accent text-yellow subpixel-antialiased py-8 lg:py-12">
              <span className="font-title lowercase text-white">The C3</span>{' '}
              Academy
            </h1>
            <div className="flex flex-col lg:items-center px-20 lg:px-8">
              {page.ctas.map((cta, idx) => {
                const textColor = idx % 2 === 0 ? 'text-black' : 'text-white';
                const bgColor = idx % 2 === 0 ? 'bg-yellow' : 'bg-purple';
                const hoverTextColor =
                  idx % 2 === 0 ? 'text-white' : 'text-white';
                const hoverBgColor =
                  idx % 2 === 0 ? 'bg-yellow-200' : 'bg-purple-200';
                return (
                  <a
                    className={`${textColor} ${bgColor} hover:${hoverTextColor} hover:${hoverBgColor} px-4 pt-1 pb-2 lg:pt-0 lg:pb-1 shadow font-title lowercase text-2xl lg:text-base my-2 lg:m-2`}
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
      <main className="bg-grey-100">
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
            url
            target
          }
        }
        hero_image {
          fluid(maxWidth: 1920) {
            ...GatsbyPrismicImageFluid
          }
        }
        body {
          ...quote
          ...twoColumnText
          ...textSlice
          ...testimonialSlice
          ...textHexImageSlice
          ...ctaSlice
          ...text1Slice
        }
      }
    }
  }
`;
