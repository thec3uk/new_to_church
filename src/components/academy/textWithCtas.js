import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import HtmlHexagon from './HtmlHex';

const TextWithCTA = ({ data }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={'-my-32 py-24  bg-fixed'}
      fluid={data.primary.background_image.localFile.childImageSharp.fluid}
      backgroundColor={'#040e18'}
      background-position={"top"}
    >
    <div className="grid grid-cols-3">
    <HtmlHexagon
        className="text-yellow-trans fill-current stroke-purple col-start-2 col-end-3"
        containerClassName="text-center flex flex-col justify-between my-auto px-20 py-20"
    >
        <div
          className="pt-4 px-6 font-title lowercase text-2xl text-purple"
          dangerouslySetInnerHTML={{ __html: data.primary.text.html }}
        ></div>
        <div className="flex flex-col mx-20">
        {data.items.map((cta, idx) => {
          const textColor = idx % 2 === 0 ? 'text-black' : 'text-white';
          const bgColor = idx % 2 === 0 ? 'bg-yellow' : 'bg-purple';
          const borderColor = idx % 2 === 0 ? 'border-black' : 'border-white';
          const hoverTextColor = idx % 2 === 0 ? 'text-white' : 'text-white';
          const hoverBgColor = idx % 2 === 0 ? 'bg-yellow-200' : 'bg-purple-200';
          const hoverBorderColor = idx % 2 === 0 ? 'border-white' : 'border-black';
          return (
            <a
              className={`${textColor} ${bgColor} ${borderColor} hover:${hoverTextColor} hover:${hoverBgColor} hover:${hoverBorderColor} px-6 pb-3 pt-2 shadow-lg border font-title lowercase text-xl m-4`}
              href={cta.cta_link.url}
              key={idx}
            >
              {cta.cta_text}
            </a>
          );
        })}
        </div>
      </HtmlHexagon>

      </div>
    </BackgroundImage>
  );
};

export const query = graphql`
  fragment ctaSlice on PrismicAcademyPageBodyTextWithCtas {
    id
    slice_type
    primary {
      text {
        html
      }
      background_image {
        alt
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    items {
      cta_text
      cta_link {
        kind
        name
        url
        target
      }
    }
  }
`;

export default TextWithCTA;
