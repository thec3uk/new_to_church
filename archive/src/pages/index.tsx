import * as React from 'react'

import { layout, components } from '../components'

const commonLinkClasses =
  'bg-gradient-to-r bg-underline font-semibold bg-p-full bg-no-repeat w-max pl-0.5 pr-4 duration-300 hover:bg-p-zero hover-hover:pointer-fine:hover:bg-p-zero cursor-pointer transition-bg-position no-underline'

const HomeHero = () => {
  return (
    <>
      <div className="max-w-screen-sm mb-32 mt-28 md:mt-40 lg:mb-52 lg:mt-44 md:col-start-2 lg:col-start-2 md:col-span-6 lg:col-span-4">
        <h1 className="font-title font-bold text-5.5xl ">the c3 church</h1>
        <p className="mt-4 font-sans text-xl">
          No matter where you are in life, you are very welcome at The C3
          Church. We are committed to helping you become the person God intended
          you to be.
        </p>
        <div className="p-2 mt-8 text-2xl text-white bg-black">
          <h2>Hi, what are you looking for?</h2>
        </div>
        <div className="flex flex-col mt-8 space-y-4 text-2xl">
          <a
            className={`${commonLinkClasses} from-red-500-full to-yellow-300-full`}
          >
            Watch our latest preaches
          </a>
          <a
            className={`${commonLinkClasses} from-teal-500-full to-red-500-full`}
          >
            New or visiting us?
          </a>
          <a
            className={`${commonLinkClasses} from-yellow-300-full to-teal-500-full`}
          >
            I'm part of the C3 family
          </a>
        </div>
      </div>
      <div className="items-center justify-center hidden w-full lg:flex lg:col-start-7 lg:col-span-5 lg:mt-28 lg:mb-20">
        <div
          id="section-1"
          className="inline-block relative w-1/4 h-full bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
        ></div>
        <div
          id="section-2"
          className="inline-block relative w-1/4 h-full bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
        ></div>
        <div
          id="section-3"
          className="inline-block relative w-1/4 h-full bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
        ></div>
        <div
          id="section-4"
          className="inline-block relative w-1/4 h-full bg-cover after:absolute absolute:top-0 after:w-full after:h-full after:transition-all after:duration-500 after:content-['']"
        ></div>
      </div>
    </>
  )
}

const Home = () => (
  <layout.Layout>
    <HomeHero />
    <layout.Main>
      <components.Card title="give" subtitle="invest in eternity" cta="donate">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cum
        tempora nam nesciunt aperiam doloribus! Provident laboriosam eveniet
        optio praesentium, temporibus incidunt magni blanditiis voluptatem
        assumenda laborum ab quasi fuga.
      </components.Card>
    </layout.Main>

    <layout.FullBleed>
      <components.ImageCard
        title="locations"
        subtitle="find your place"
        image="/live.jpg"
      />
    </layout.FullBleed>
    <layout.Main>
      <components.TitleCard
        title="locations"
        subtitle="find your place"
        titleImage="/card.jpg"
      />
    </layout.Main>

    <layout.Aside>
      <components.ImageCard title="locations" image="/live.jpg" />
    </layout.Aside>
    <layout.Aside>
      <components.ImageCard subtitle="find your place" image="/live.jpg" />
    </layout.Aside>
    <layout.Aside>
      <components.ImageCard image="/live.jpg" />
    </layout.Aside>
    <layout.Main>
      <components.TextCard
        title="locations"
        subtitle="find your place"
        text={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cum tempora nam nesciunt aperiam doloribus! Provident laboriosam eveniet optio praesentium, temporibus incidunt magni blanditiis voluptatem assumenda laborum ab quasi fuga.'
        }
      />
    </layout.Main>
    <layout.Main>
      <components.TitleCard
        title="locations"
        subtitle="find your place"
        titleImage="/card.jpg"
      />
    </layout.Main>
    <layout.Main>
      <components.TextCard
        title="locations"
        subtitle="find your place"
        text={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cum tempora nam nesciunt aperiam doloribus! Provident laboriosam eveniet optio praesentium, temporibus incidunt magni blanditiis voluptatem assumenda laborum ab quasi fuga.'
        }
        cta="find out more"
        to="/locations"
      />
    </layout.Main>
    <layout.Main>
      <components.Card
        title="new series"
        subtitle="invest in eternity"
        cta="donate"
      />
    </layout.Main>
    <layout.Main>
      <components.TextCard
        title="locations"
        subtitle="find your place"
        text={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi cum tempora nam nesciunt aperiam doloribus! Provident laboriosam eveniet optio praesentium, temporibus incidunt magni blanditiis voluptatem assumenda laborum ab quasi fuga.'
        }
        cta="find out more"
        to="/locations"
        titleImage="/card.jpg"
      />
    </layout.Main>
  </layout.Layout>
)

export default Home
