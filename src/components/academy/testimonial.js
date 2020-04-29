import React from 'react';
import { graphql } from 'gatsby';
import Hexagon from 'react-hexagon'

const Testimonial = ({ data }) => {
  return (
    <section className={'px-8 text-black mx-8 mt-32'}>
    <div
      className="font-accent text-purple text-6xl pl-8"
      dangerouslySetInnerHTML={{ __html: data.primary.team_section.html }}
    ></div>
      <div
        className={`grid grid-cols-1 grid-rows-${data.items.length} col-gap-px`}
        >
          {data.items.map( (person , idx) => {
            return (
              <div key={idx} className={`row-start-${idx+1} grid grid-cols-5 gap-4 my-10`}>
                {person.is_reversed && (<div className="col-span-2 mr-16">
                  <Hexagon
                    style={{ stroke: 'inherit'}}
                    className="stroke-current text-purple"
                    backgroundImage={person.portrait.url}
                    flatTop={true}
                    backgroundScale={1}

                  />
                  </div>
                )}
                <div className="col-span-3 flex flex-col justify-center">
                  <div
                    className="pt-10 px-6 font-sans"
                    dangerouslySetInnerHTML={{ __html: person.position.html }}
                  ></div>
                  <p className="px-6 font-title text-lg lowercase">{person.first_and_lastname.text}</p>
                </div>
                {!person.is_reversed && (<div className="col-span-2 ml-16">
                <Hexagon
                  style={{ stroke: 'inherit'}}
                  className="stroke-current text-yellow"
                  backgroundImage={person.portrait.url}
                  flatTop={true}
                  backgroundScale={1}
                />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export const query = graphql`
  fragment testimonialSlice on PrismicAcademyPageBodyTeam {
    id
    slice_type
    primary {
      team_section {
        html
      }
    }
    items {
      position {
        html
      }
      is_reversed
      first_and_lastname {
        text
      }
      portrait {
        alt
        url
      }
    }
  }
`;

export default Testimonial;
