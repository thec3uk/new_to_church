import React from 'react';
import { Link } from 'gatsby';
import { ContentLayout } from 'layouts';

const ErrorPage = () => (
  <ContentLayout title={'404'}>
    <section className="slice_system_page">
      <div className="container system_content">
        <div className="systemPageContent">
          <h1>Sorry</h1>
          <p>The page you requested could not be found.</p>
          <Link to="/">Go to the The C3 Church homepage.</Link>.
        </div>
      </div>
    </section>
  </ContentLayout>
);

export default ErrorPage;
