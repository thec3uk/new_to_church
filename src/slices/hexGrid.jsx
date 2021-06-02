import React, { useState, Fragment } from 'react';
import { graphql } from 'gatsby';
import HtmlHexagon from '../components/academy/HtmlHex';
import './hexGrid.scoped.css';

const Modal = ({ children, setModalOpen, className }) => (
  <div
    className="fixed h-full w-full md:flex md:justify-center z-30"
    onClick={() => setModalOpen(false)}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div className="fixed inset-0 w-screen h-full opacity-50 bg-gray-800 z-40"></div>
    <div
      className={`${className} z-50 rounded py-5 max-h-full overflow-scroll shadow-xl transform transition-all sm:w-full max-w-full sm:max-w-3xl lg:max-w-1/3-screen fixed -mt-128 md:top-auto lg:top-3/4 lg:left-1/3 m-auto p-6 md:px-16 mx-4 lg:mx-auto my-auto`}
    >
      <div>
        <svg
          className={'fill-current absolute right-0 mr-8 cursor-pointer'}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={() => setModalOpen(false)}
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div className="mt-10">{children}</div>
    </div>
  </div>
);

const HexGrid = ({ data }) => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center lg:mt-36 lg:mb-24 z-0">
      <div className="h-screen md:h-1/2-screen items-center grid md:gap-4 xl:gap-8 grid-rows-4 grid-cols-screen-2 md:grid-cols-screen-4 lg:grid-cols-screen-12 auto-cols-50vw md:auto-cols-25vw lg:auto-cols-8.33vw py-16 mt-32 overflow-x-scroll -m-4 md:-m-8 xl:-mx-72 lg:px-20">
        {data.items.map((hex, idx) => {
          // prettier-ignore
          const positionMapping = {
          0: `row-start-1 col-start-${(Math.floor(idx / 3) * 2) + 1} `,
          1: `row-start-2 col-start-${(Math.floor(idx / 3) * 2) + 2} `,
          2: `row-start-3 col-start-${(Math.floor(idx / 3) * 2) + 1} `,
        };
          const colourMapping = {
            0: {
              text: 'text-black',
              bg: 'stroke-blue text-blue',
              modalBg: 'bg-blue',
            },
            1: {
              text: 'text-black',
              bg: 'stroke-red text-red',
              modalBg: 'bg-red',
            },
            2: {
              text: 'text-white',
              bg: 'stroke-purple text-purple',
              modalBg: 'bg-purple',
            },
            3: {
              text: 'text-black',
              bg: 'stroke-yellow text-yellow',
              modalBg: 'bg-yellow',
            },
          };
          const [showDesc, setShowDesc] = useState(false);
          return (
            <div className="contents" key={idx}>
              <HtmlHexagon
                key={idx}
                className={`fill-current h-full -m-16 row-span-2 w-2/3-screen md:w-1/3-screen lg:w-1/8-screen z-10  ${
                  colourMapping[idx % 4].bg
                } ${positionMapping[idx % 3]}`}
                containerClassName="flex flex-col justify-center w-100"
                onClick={() => setShowDesc(!showDesc)}
              >
                <div className="px-32 py-16 text-black text-center flex flex-col justify-center absolute inset-0">
                  <h3
                    className={`${
                      colourMapping[idx % 4].text
                    } text-7xl uppercase z-20`}
                  >
                    {hex.team_title}
                  </h3>
                </div>
              </HtmlHexagon>
              {showDesc && (
                <Modal
                  setModalOpen={setShowDesc}
                  className={`${colourMapping[idx % 4].text} ${
                    colourMapping[idx % 4].modalBg
                  }`}
                >
                  <div className="text-left">
                    <h3
                      className={`${
                        colourMapping[idx % 4].text
                      } text-4xl uppercase mb-6`}
                    >
                      {hex.team_title}
                    </h3>
                    <div
                      className={'text-lg mb-2'}
                      dangerouslySetInnerHTML={{
                        __html: hex.team_description.html,
                      }}
                    />
                  </div>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HexGrid;

export const query = graphql`
  fragment HexGrid on PrismicLandingPageBodyHexGrid {
    items {
      team_title
      team_description {
        html
        text
        raw
      }
    }
  }
`;
