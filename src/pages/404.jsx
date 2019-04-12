import React from 'react';
import { Link } from 'gatsby';
import { ContentLayout } from 'layouts';

const ErrorPage = () => (
  <ContentLayout title={'404'}>
    <section className="slice_system_page">
      <div className="container system_content">
        <div className="systemPageContent">
          <h1>404. Page not found.</h1>
          <p>
            Sorry you cannot find the page you were looking for. We have
            recently updated our website and unfortately some old URLs have
            broken.
          </p>
          <Link to="/">Go to our homepage.</Link>.
          <Link to="/online">Check out Church Online.</Link>.
          <Link to="/bury">
            Find out about our latest location in Bury St Edmunds.
          </Link>
        </div>
      </div>
    </section>
  </ContentLayout>
);

export default ErrorPage;
