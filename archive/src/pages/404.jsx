import React from 'react';
import { ContentLayout } from 'layouts';
import { Link } from 'gatsby';

const ErrorPage = () => (
  <ContentLayout title={'404'}>
    <section className="slice_system_page">
      <div className="container system_content">
        <div className="systemPageContent">
          <h1>404. Page not found.</h1>
          <p>
            Thanks for visiting our website! We are sorry you've not found what
            you are looking for yet. Here are some things places you might find
            helpful to connect in with us:
          </p>
          <Link to="/">Home Page</Link> <br />
          <Link to="/sunday-services">Book in for Sunday Services</Link> <br />
          <Link to="/events">What's happening at The C3 Church</Link> <br />
          <Link to="/c3groups">Join a C3 Group</Link>
        </div>
      </div>
    </section>
  </ContentLayout>
);

export default ErrorPage;
