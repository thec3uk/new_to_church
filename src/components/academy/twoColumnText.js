import React from 'react';
import { graphql } from 'gatsby';
import HtmlHexagon from './HtmlHex';

const TwoColumnText = ({ data }) => {
  return (
    <section
      className={
        'px-8 lg:px-16 text-black grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-8 row-gap-4 lg:row-gap-0 font-title lowercase mb-32 -mt-32 lg:mt-0'
      }
    >
      <HtmlHexagon
        className="stroke-current text-yellow fill-current row-start-2 row-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-4"
        containerClassName="flex flex-col justify-between content-center"
      >
        <div
          className="text-black px-24 lg:px-32 py-20 text-xl"
          dangerouslySetInnerHTML={{ __html: data.primary.column_1.html }}
        ></div>
      </HtmlHexagon>
      <div className="text-black text-center -mx-8 lg:mx-auto mt-auto mb-8 lg:my-0 row-start-1 row-end-2 lg:col-start-4 lg:col-end-6">
        <h3 className="text-5xl">{data.primary.title}</h3>
      </div>
      <HtmlHexagon
        className="stroke-current text-purple fill-current row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 lg:col-start-6 lg:col-end-9"
        containerClassName="flex flex-col justify-between content-center"
      >
        <div
          className=" text-white px-24 lg:px-32 py-32 lg:py-20 text-2xl"
          dangerouslySetInnerHTML={{ __html: data.primary.column_2.html }}
        ></div>
      </HtmlHexagon>
    </section>
  );
};

export const query = graphql`
  fragment twoColumnText on PrismicAcademyPageBody2ColumnText {
    id
    slice_type
    primary {
      title
      column_1 {
        html
      }
      column_2 {
        html
      }
    }
  }
`;

export default TwoColumnText;
