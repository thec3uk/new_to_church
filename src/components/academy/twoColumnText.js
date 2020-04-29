import React from 'react';
import { graphql } from 'gatsby';
import HtmlHexagon from './HtmlHex';

const TwoColumnText = ({ data }) => {
  return (
    <section className={'px-8 lg:px-16 text-black grid grid-cols-8 font-title lowercase mb-32'}>

      <HtmlHexagon
          className="stroke-current text-yellow fill-current col-start-1 col-end-4"
          containerClassName="flex flex-col justify-between content-center"
      >
        <div
          className="text-black px-32 py-20"
          dangerouslySetInnerHTML={{ __html: data.primary.column_1.html }}
        ></div>
      </HtmlHexagon>
      <div className="text-black text-center mx-16 col-start-4 col-end-6">
        <h3 className="text-5xl">{data.primary.title}</h3>
      </div>
      <HtmlHexagon
          className="stroke-current text-purple fill-current col-start-6 col-end-9"
          containerClassName="flex flex-col justify-between content-center"
      >
        <div className=" text-white px-32 py-20" dangerouslySetInnerHTML={{__html: data.primary.column_2.html}}></div>
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
