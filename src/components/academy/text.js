import React from 'react';
import { graphql } from 'gatsby';


const Text = ({ data }) => {
  return (
    <section className={'px-8 text-black mx-8'}>
      <div className="grid grid-cols-2 grid-rows-1 col-gap-px">
        <div className="w-screen h-screen -ml-2/5 sticky inset-y-0 z-0 -mt-20">
          <img
            className="object-cover"
            src={data.primary.image.url}
            alt={data.primary.image.alt}
          />
        </div>
        <div
          className={`bg-${data.primary.background_text_colour} py-10 px-6 lowercase font-title z-10`}
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
