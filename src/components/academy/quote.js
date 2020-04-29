import React from 'react';
import { graphql } from 'gatsby';
import Hexagon from 'react-hexagon';
import HtmlHexagon from './HtmlHex';

const Quote = ({ data }) => {
  return (
    <section className={'px-8 lg:px-16 text-black lg:mx-32 mt-8 lg:mt-0 -mb-8 lg:-mb-32'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 row-gap-4 xl:row-gap-px xl:col-gap-48">
        <HtmlHexagon
          className="stroke-yellow fill-current text-purple"
          containerClassName="flex flex-col justify-between content-center"
        >
          <div
            className="px-20 py-32 my-4 text-white font-title lowercase text-2xl text-center flex flex-col justify-center"
            dangerouslySetInnerHTML={{ __html: data.primary.quote.html }}
          ></div>
        </HtmlHexagon>

        <div className="row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 font-title lowercase text-lg lg:-mt-56">
          <Hexagon
            style={{ stroke: 'inherit' }}
            className="stroke-current text-purple"
            backgroundImage={data.primary.portrait_author.url}
            flatTop={true}
            backgroundScale={1.05}
            yOffset={10}
          />
        </div>
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
