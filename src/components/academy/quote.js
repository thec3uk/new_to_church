import React from 'react';
import { graphql } from 'gatsby';
import Hexagon from 'react-hexagon';
import HtmlHexagon from './HtmlHex';

const Quote = ({ data }) => {
  return (
    <section className={'px-8 lg:px-16 text-black lg:mx-32 mt-8 lg:mt-0 -mb-8 '}>
      <div className="grid grid-cols-1 md:mx-20 xl:mx-48">
        <HtmlHexagon
          className="stroke-yellow fill-current text-purple"
          containerClassName="flex flex-col justify-between content-center"
        >
          <div
            className="px-20 py-32 my-4 text-white font-title lowercase text-2xl text-center flex flex-col justify-center"
            dangerouslySetInnerHTML={{ __html: data.primary.quote.html }}
          ></div>
        </HtmlHexagon>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment quote on PrismicAcademyPageBodyQuote {
    id
    slice_type
    primary {
      portrait_author {
        url
        alt
      }
      quote {
        html
      }
    }
  }
`;

export default Quote;
