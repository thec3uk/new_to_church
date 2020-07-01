import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Transition from '../Transition';
import HtmlHexagon from './HtmlHex';

const HexModal = ({ content, setModalOpen }) => (
  <div
    className={
      'z-50 bg-purple text-white rounded px-4 pt-5 pb-4 mx-1 md:mx-8 max-h-full overflow-scroll shadow-xl transform transition-all sm:max-w-3xl sm:w-full sm:p-6 '
    }
    onClick={() => setModalOpen(false)}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div>
      <div>
        <svg
          className={
            'fill-current bg-purple absolute right-0 mr-8 cursor-pointer'
          }
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={() => setModalOpen(false)}
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  </div>
);

const Quote = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={'px-2 md:px-8 text-black mt-8 lg:mt-0 -mb-8 '}>
      <div className="grid row-gap-4 md:row-gap-0 grid-cols-4 mx-16 md:mx-0 grid-rows-9 md:grid-cols-8 md:grid-rows-6 ">
        <HtmlHexagon
          className="col-start-1 col-end-5 md:col-start-5 md:col-end-8 row-start-1 row-end-4 md:row-end-4 stroke-yellow fill-current text-yellow"
          containerClassName="flex flex-col justify-between content-center"
        >
          <div
            className="px-20 py-24 my-6 text-black font-accent text-2xl text-center flex flex-col justify-center"
            dangerouslySetInnerHTML={{ __html: data.primary.hex_2.html }}
          ></div>
        </HtmlHexagon>
        <HtmlHexagon
          className="col-start-1 col-end-5 md:col-end-5 row-start-4 row-end-7 md:col-start-2 md:row-start-3 md:row-end-6 stroke-purple fill-current text-purple"
          containerClassName="flex flex-col justify-between content-center"
        >
          <div
            className="px-20 py-32 my-4 text-white font-title lowercase text-2xl text-center flex flex-col justify-center"
            dangerouslySetInnerHTML={{ __html: data.primary.hex_1.html }}
          ></div>
        </HtmlHexagon>

        <HtmlHexagon
          className="col-start-1 col-end-5 row-start-7 row-end-10 md:col-start-5 md:col-end-7 md:row-start-5 md:row-end-7 stroke-purple fill-current text-yellow"
          containerClassName="flex flex-col justify-between content-center"
        >
          <div className="px-20 py-24 my-4 text-black font-title lowercase text-2xl text-center">
            <p className="pb-8 text-3xl">Watch the Promo</p>
            <button onClick={() => setModalOpen(true)}>
              <img
                className="mx-auto"
                style={{ filter: 'brightness(100%) invert(100%) opacity(0.6)' }}
                src="/images/IconPlay.png"
                alt="play icon"
              />{' '}
            </button>
          </div>
        </HtmlHexagon>
      </div>
      {modalOpen && (
        <div className="fixed bottom-0 inset-x-0 top-0 px-4 pb-4 pt-4 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <Transition
            show={modalOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity ">
              <div
                className={'absolute inset-0 bg-purple opacity-75 z-20'}
                role="presentation"
                onClick={() => setModalOpen(false)}
              ></div>
            </div>
          </Transition>
          <Transition
            show={modalOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <HexModal
              content={
                '<div class="flex flex-row justify-center pt-iframe z-20"><iframe class="h-full w-full top-0 left-0 absolute p-4 md:p-12" src="https://player.vimeo.com/video/419968914" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>'
              }
              setModalOpen={setModalOpen}
            />
          </Transition>
        </div>
      )}
    </section>
  );
};

export const query = graphql`
  fragment quote on PrismicAcademyPageBodyQuote {
    id
    slice_type
    primary {
      hex_1 {
        html
      }
      hex_2 {
        html
      }
    }
  }
`;

export default Quote;
