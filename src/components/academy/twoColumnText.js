import React, { useState } from 'react';
import { graphql } from 'gatsby';
import HtmlHexagon from './HtmlHex';
import Transition from '../Transition';

import { renderToString } from 'react-dom/server';

const HexModal = ({ content, setModalOpen, colourClasses }) => (
  <div
    className={`${colourClasses} rounded px-4 pt-5 pb-4 mx-1 md:mx-8 max-h-full overflow-scroll shadow-xl transform transition-all max-w-full sm:w-full sm:p-6 z-40 `}
    onClick={() => setModalOpen(false)}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div>
      <div>
        <svg
          className={`fill-current ${colourClasses} absolute right-0 mr-8 cursor-pointer`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={() => setModalOpen(false)}
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div
        className="font-serif normal-case"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  </div>
);

const CompareTable = () => {
  const options = [
    ['Where?', 'C3 Centre', 'C3 Centre', 'Online'],
    [
      'Core Leadership training</br>(Bible & Leadership)',
      '&#10004;',
      '&#10004;',
      '&#10004;',
    ],
    ['Streams', '&#10004;', '', ''],
    ['Student-led chapel time', '&#10004;', '&#10004;', '&#10004;'],
    ['Weekly Conference Call', '', '', '&#10004;'],
    ['On Sunday team', '&#10004; &#10004;', '&#10004; &#10004;', '&#10004;'],
    [
      'Length of course:</br>(September to July)',
      '&#10004;',
      '&#10004;',
      '&#10004;',
    ],
    [
      'Time commitment</br>(study time not incl.)',
      '4 days </br>2 services on Sunday Church events',
      '1 day </br>2 Sundays a month Church events',
      'Approx 3.5 hours a week </br>Two Sundays a month* </br>Church events*',
    ],
    [
      'Assessments',
      '4 Essays </br>1 Spoken Assignment </br>2 Book Precis </br>2 Book reviews </br>1 Book reflection',
      '4 Essays </br>1 Spoken Assignment </br>2 Book Precis </br>2 Book reviews </br>1 Book reflection',
      '4 Essays </br>2 Socratic seminars </br>1 Book Precis </br>1 Book reviews </br>1 Book reflection',
    ],
    [
      'Fees',
      '£1100 in 10 monthly instalments</br>£1000 if paid upfront',
      '£855 in 10 monthly instalments</br>£700 if paid upfront',
      '£555 in 10 monthly instalments</br>£500 if paid upfront',
    ],
  ];
  return (
    <>
      <h3 className="mb-4 text-3xl">Compare Study Plans</h3>
      <table className="border border-purple table-auto border-collapse mx-auto">
        <thead className="border-b border-purple">
          <tr className="text-left">
            <td className="px-2 py-1 border-r border-purple"></td>
            <th className="px-2 py-1">Full-time</th>
            <th className="px-2 py-1">Part-time</th>
            <th className="px-2 py-1">Online</th>
          </tr>
        </thead>
        <tbody>
          {options.map((row, idx) => (
            <tr
              className={`hover:bg-purple hover:text-gray-100 align-top ${
                idx % 2 === 0 ? '' : ''
              }`}
              key={idx}
            >
              <th
                className="px-2 py-1 text-right border-r border-purple"
                dangerouslySetInnerHTML={{ __html: row[0] }}
              ></th>
              <td
                className="px-2 py-1 border-r border-purple"
                dangerouslySetInnerHTML={{ __html: row[1] }}
              ></td>
              <td
                className="px-2 py-1 border-r border-purple"
                dangerouslySetInnerHTML={{ __html: row[2] }}
              ></td>
              <td
                className="px-2 py-1"
                dangerouslySetInnerHTML={{ __html: row[3] }}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4">
        <small>* if part of Cambridge or Bury St Edmunds location.</small>
      </p>
    </>
  );
};

const TwoColumnText = ({ data }) => {
  const [colourClasses, setColourClasses] = useState('');
  const [fadeColourClass, setFadeColourClass] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openPTModal = () => {
    setModalOpen(true);
    setModalContent(data.items[1].content.html);
    setColourClasses('bg-purple text-white');
    setFadeColourClass('bg-yellow');
  };
  const openFTModal = () => {
    setModalOpen(true);
    setModalContent(data.items[0].content.html);
    setColourClasses('bg-yellow text-black');
    setFadeColourClass('bg-purple');
  };
  const openOnlineModal = () => {
    setModalOpen(true);
    setModalContent(data.items[2].content.html);
    setColourClasses('bg-yellow text-black');
    setFadeColourClass('bg-purple');
  };
  const openCompareModal = () => {
    setModalOpen(true);
    setModalContent(renderToString(<CompareTable />));
    setColourClasses('bg-yellow text-black');
    setFadeColourClass('bg-purple');
  };
  return (
    <section
      id="study-options"
      className={
        'mx-16 md:mx-0 px-8 lg:px-16 text-black grid grid-cols-1 grid-rows-9 lg:grid-rows-6 lg:grid-cols-8 row-gap-4 lg:row-gap-0 font-title lowercase mb-32 mt-32 lg:mt-8 lg:-mb-8 '
      }
    >
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
            <div className="fixed inset-0 transition-opacity">
              <div
                className={`absolute inset-0 ${fadeColourClass} opacity-75`}
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
              content={modalContent}
              colourClasses={colourClasses}
              setModalOpen={setModalOpen}
            />
          </Transition>
        </div>
      )}
      <HtmlHexagon
        className="stroke-current text-purple fill-current row-start-2 row-end-3 lg:row-start-2 lg:row-end-5 lg:col-start-1 lg:col-end-4"
        containerClassName="flex flex-col justify-between content-center"
        onClick={() => openFTModal()}
      >
        <div className="text-white py-48 text-center cursor-pointer">
          <h3>{data.items[0].title}</h3>
          <p className="text-xl">{data.items[0].sub_title}</p>
        </div>
      </HtmlHexagon>
      <div className="text-black text-center -mx-8 lg:mx-auto mt-auto mb-8 lg:my-0 row-start-1 row-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-6">
        <h3>{data.primary.title}</h3>
      </div>
      <HtmlHexagon
        className="stroke-current text-purple fill-current row-start-4 row-end-5 lg:row-start-2 lg:row-end-5 lg:col-start-6 lg:col-end-9"
        containerClassName="flex flex-col justify-end h-full"
        onClick={() => openPTModal()}
      >
        <div className="text-white text-center py-48 cursor-pointer">
          <h3>{data.items[1].title}</h3>
          <p className="text-xl">{data.items[1].sub_title}</p>
        </div>
      </HtmlHexagon>
      <HtmlHexagon
        className="stroke-current text-yellow fill-current row-start-3 row-end-4 lg:row-start-4 lg:row-end-7 lg:col-start-4 lg:col-end-6"
        containerClassName="flex flex-col justify-end h-full"
        onClick={() => openOnlineModal()}
      >
        <div className="text-black text-center py-48 cursor-pointer">
          <h3>{data.items[2].title}</h3>
          <p className="text-xl">{data.items[2].sub_title}</p>
        </div>
      </HtmlHexagon>
      <div className="row-start-5 row-end-6 lg:row-start-6 lg:row-end-7 lg:col-start-4 lg:col-end-6 m-auto">
        <button
          className="mt-24 lg:mt-4 font-sans px-10 py-6 text-xl lg:text-base lg:px-6 lg:py-2 border-purple border hover:bg-purple hover:text-yellow"
          onClick={() => openCompareModal()}
        >
          Compare your options
        </button>
      </div>
    </section>
  );
};

export const query = graphql`
  fragment twoColumnText on PrismicAcademyPageBody2ColumnText {
    id
    slice_type
    primary {
      title
    }
    items {
      title
      sub_title
      content {
        html
        text
      }
    }
  }
`;

export default TwoColumnText;
