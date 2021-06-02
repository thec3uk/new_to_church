import React from 'react';
import { HeroLayout } from 'layouts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

const TeachingSeriesPage = () => (
  <HeroLayout title={'Teaching Series'} heroImage="/images/867552.jpeg">
    <section className="slice_content_page">
      <div className="container">
        <div className="main-content teaching-series">
          <h1>Teaching Series</h1>
          <p>
            With the launch of Church Online we are taking the time to refresh
            our teaching series pages on the site.
          </p>
          <p>Look out for improvements to this page in the near future.</p>
          <p>
            You can still get the latest preaches from our podcast feed hosted
            in the following locations.
          </p>
          <ul>
            <li>
              <a href="https://www.youtube.com/channel/UCHXr4-EV0nF5rhlhJmDhIWQ">
                <FontAwesomeIcon icon={faYoutube} fixedWidth /> YouTube
              </a>
            </li>
            <li>
              <a href="https://feeds.transistor.fm/the-c3-podcast">
                <FontAwesomeIcon icon={faRssSquare} fixedWidth /> Podcast Feed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </HeroLayout>
);

export default TeachingSeriesPage;
