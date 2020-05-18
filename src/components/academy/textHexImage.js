import React from 'react';
import { graphql } from 'gatsby';
import Hexagon from 'react-hexagon';

const TextWithHexImage = ({ data }) => {
  const bgColour =
    data.primary.background_colour && `bg-${data.primary.background_colour}`;
  return (
    <section
      className={`lg:px-8 text-black ${bgColour} -my-16 lg:-my-32 py-32`}
    >
      <div
        className={
          'grid grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-6 gap-4 lg:gap-4 my-10 lg:-mx-8 lg:px-16 overflow-x-hidden'
        }
      >
        {data.primary.image_reversed && (
          <div className="col-span-3 mx-4 lg:-ml-32 lg:mr-16  my-auto ">
            <Hexagon
              style={{ stroke: 'inherit' }}
              className="stroke-current text-yellow"
              backgroundImage={data.primary.image.url}
              flatTop={true}
              backgroundScale={1.5}
              yOffset={-150}
            />
          </div>
        )}
        <div className="col-span-3 flex flex-col justify-center">
          <div
            className="hex-section-title pt-10 px-6 text-5xl"
            dangerouslySetInnerHTML={{ __html: data.primary.sectionTitle.html }}
          ></div>
          <div
            className="pt-4 px-6 font-sans"
            dangerouslySetInnerHTML={{ __html: data.primary.text.html }}
          ></div>
        </div>
        {!data.primary.image_reversed && (
          <div className="col-span-3 mx-4 lg:ml-16 lg:-mr-48 my-auto">
            <Hexagon
              style={{ stroke: 'inherit' }}
              className="stroke-current text-purple"
              backgroundImage={data.primary.image.url}
              flatTop={true}
              backgroundScale={1.5}
              yOffset={-150}
              overflow={'hidden'}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export const query = graphql`
  fragment textHexImageSlice on PrismicAcademyPageBodyHexImageWithText {
    id
    slice_type
    primary {
      sectionTitle: title {
        html
      }
      text {
        html
      }
      image_reversed
      background_colour
      image {
        url
        alt
      }
    }
  }
`;

export default TextWithHexImage;

// <img
//   className="object-cover"
//   src={data.primary.image.url}
//   alt={data.primary.image.alt}
// />
