import React from 'react';
import { graphql } from 'gatsby';


const Text = ({ data }) => {
  return (
    <section className={'lg:px-8 text-black lg:mx-8'}>
      <div className="grid grid-cols-1">
        <div
          className="py-10 px-6 font-sans "
          dangerouslySetInnerHTML={{ __html: data.primary.text.html }}
        ></div>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment text1Slice on PrismicAcademyPageBodyText1 {
    id
    slice_type
    primary {
      text {
        html
      }
    }
  }
`;

export default Text;
