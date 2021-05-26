import React, { useState } from 'react';
import { graphql } from 'gatsby';
import HtmlHexagon from '../components/academy/HtmlHex';
import './hexGrid.scoped.css';

const Modal = ({ children, setModalOpen, className }) => (
  <div
    className="xl:-m-24 fixed h-full w-full md:flex md:justify-center"
    onClick={() => setModalOpen(false)}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div className="fixed inset-0 w-screen h-full opacity-50 bg-gray-800 z-40"></div>
    <div
      className={`${className} z-50 rounded py-5 max-h-full overflow-scroll shadow-xl transform transition-all sm:max-w-3xl sm:w-full max-w-full fixed -mt-128 xl:absolute md:top-auto m-auto p-6 md:px-16 mx-4  my-auto`}
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
    <div className="w-screen -mx-4 md:-mx-6 xl:-mx-screen/2 xl:relative xl:left-50 xl:right-50 my-16 grid gap-x-16 md:gap-0 md:-space-y-18 grid-cols-2 md:grid-cols-3 xl:grid-cols-5 grid-rows-3 py-20 overflow-x-hidden xl:overflow-x-scroll">
      {data.items.map((hex, idx) => {
        const positionMapping = {
          0: `row-start-${idx + 1} col-start-${(idx % 2) +
            1} md:col-start-1 lg:col-start-${idx -
            (Math.floor(idx / 3) - 1)} md:row-start-${2 * Math.floor(idx / 3) +
            1} lg:row-start-1`,
          1: `row-start-${idx + 1} col-start-${(idx % 2) +
            1} md:col-start-3 lg:col-start-${idx -
            Math.floor(idx / 3)} md:row-start-${2 * Math.floor(idx / 3) +
            1} lg:row-start-3 lg:-mt-64`,
          2: `row-start-${idx + 1} col-start-${(idx % 2) +
            1} md:col-start-2 lg:col-start-${idx -
            Math.floor(idx / 3)} md:row-start-${2 * Math.floor(idx / 3) +
            2} lg:row-start-2 lg:-mt-40`,
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
          <>
            <HtmlHexagon
              key={idx}
              className={`fill-current -m-16 ${colourMapping[idx % 4].bg} ${
                positionMapping[idx % 3]
              }`}
              containerClassName="flex flex-col justify-center"
              onClick={() => setShowDesc(!showDesc)}
            >
              <div className="px-32 py-16 text-black text-center flex flex-col justify-center absolute inset-0">
                <h3
                  className={`${
                    colourMapping[idx % 4].text
                  } text-7xl uppercase`}
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
          </>
        );
      })}
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
