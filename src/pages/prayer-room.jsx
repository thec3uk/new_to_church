import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { openPopupWidget } from 'react-calendly';

import '../components/academy/style.scoped.css';

import SEO from '../components/SEO';

// const Slices = ({ slices }) => {
//   return (
//     slices &&
//     slices.map((contentSlice, idx) => {
//       const componentListObj = {
//         quote: Quote,
//         '2_column_text': TwoColumnText,
//         text: TextWithImage,
//         text1: Text,
//         team: Testimonial,
//         hex_image_with_text: TextWithHexImage,
//         text_with_ctas: TextWithCTA,
//       };
//       const Component = componentListObj[contentSlice.slice_type];
//       if (Component === undefined) {
//         console.warn('Warning: default case, content is unhandled');
//         return <div key={idx}></div>;
//       }
//       return (
//         <div key={idx} id={`${idx}`} className="py-12 md:py-32">
//           <Component key={idx} data={contentSlice} />
//         </div>
//       );
//     })
//   );
// };

const openPrayerTime = (url) => {
  return () => openPopupWidget({ url });
};

const PrayerRoomPage = () => {
  // const page = data.prismicAcademyPage.data;
  // const body = page.body;

  return (
    <div id="prayer-room">
      <SEO title={'Tim Creamer Prayer Room'} />
      {/* <BackgroundImage
        Tag="header"
        className={'w-screen'}
        // fluid={page.hero_image.fluid}
        backgroundColor={'#040e18'}
      > */}
      <div className="absolute insert-0 h-screen w-screen font-serif flex flex-col justify-center items-center space-y-4">
        <h1 className="text-6xl">a time to pray</h1>
        <p className="text-xl">Pick a time slot and invite some friends</p>
        <div className="space-x-6">
          <button
            onClick={openPrayerTime(
              'https://calendly.com/thec3-prayer/15-minutes'
            )}
            className="border py-4 px-8 hover:bg-black hover:text-gray-100"
          >
            15 minutes
          </button>
          <button
            onClick={openPrayerTime(
              'https://calendly.com/thec3-prayer/30-minutes'
            )}
            className="border py-4 px-8 hover:bg-black hover:text-gray-100"
          >
            30 minutes
          </button>
          <button
            onClick={openPrayerTime(
              'https://calendly.com/thec3-prayer/60-minutes'
            )}
            className="border py-4 px-8 hover:bg-black hover:text-gray-100"
          >
            60 minutes
          </button>
        </div>
      </div>
      {/* </BackgroundImage> */}
    </div>
  );
};

export default PrayerRoomPage;

// export const query = graphql`
//   {
//     prismicAcademyPage {
//       data {
//         ctas {
//           text
//           link {
//             url
//             target
//           }
//         }
//         hero_image {
//           fluid(maxWidth: 1920) {
//             ...GatsbyPrismicImageFluid
//           }
//         }
//         body {
//           ...quote
//           ...twoColumnText
//           ...textSlice
//           ...testimonialSlice
//           ...textHexImageSlice
//           ...ctaSlice
//           ...text1Slice
//         }
//       }
//     }
//   }
// `;
