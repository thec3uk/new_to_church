import React from 'react';
import { HeroLayout } from 'layouts';

const TeachingSeriesPage = () => (
  <HeroLayout title={'Teaching Series'} heroImage="/images/867552.jpeg">
    <section className="slice_content_page">
      <div className="container">
        <div className="main-content">
          <h1>Teaching Series</h1>
          <p>
            With the launch of Church Online we are taking the time to refresh
            our teaching series pages on the site.
          </p>
          <p>Look out for improvements to this page in the near future.</p>
          <p>
            You can still get the latest preaches from our podcast feed hosted{' '}
            <a href="https://endis.thec3.uk/Media/MediaXML.xml?fid=2302">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </HeroLayout>
);

export default TeachingSeriesPage;
