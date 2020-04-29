import React from 'react';
import { graphql } from 'gatsby';


const Text = ({ data }) => {
  return (
    <section className={'lg:px-8 text-black lg:mx-8'}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 col-gap-px">
        <div className="hidden lg:block w-screen h-screen lg:-ml-2/5 sticky inset-y-0 z-0 lg:-mt-20">
          <img
            className="object-cover"
            src={data.primary.image.url}
            alt={data.primary.image.alt}
          />
        </div>
        <div
          className={`bg-${data.primary.background_text_colour} py-10 px-6 font-sans z-10`}
          dangerouslySetInnerHTML={{ __html: data.primary.text.html }}
        ></div>

      </div>
    </section>
  );
};

export const query = graphql`
  fragment textSlice on PrismicAcademyPageBodyText {
    id
    slice_type
    primary {
      text {
        html
      }
      background_text_colour
      image {
        url
        alt
      }
    }
  }
`;

export default Text;
