import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews-nano'
import './layout.css'

import Footer from './footer'
import NavBar from './nav'
import Announcement from './announcement'

const Layout = ({ children }) => {
  const staticData = useStaticQuery(
    graphql`
      query HeaderQuery {
        prismicNotificationBanner {
          _previewable
          id
          data {
            content
            active
            url {
              ...Link
            }
          }
        }
        prismicStaticFooter(tags: { eq: "domain:thec3.uk" }) {
          _previewable
          data {
            body {
              ... on PrismicStaticFooterDataBodyLinkList {
                slice_type
                primary {
                  title
                }
                items {
                  link_url {
                    ...Link
                    # document {
                    #   ... on PrismicPage {
                    #     uid
                    #     url
                    #     data {
                    #       parent_page {
                    #         url
                    #         uid
                    #       }
                    #     }
                    #   }
                    # }
                  }
                  link_title
                }
              }
            }
          }
        }
      }
    `
  )

  const { prismicNotificationBanner, prismicStaticFooter: footer } =
    useMergePrismicPreviewData(staticData)

  return (
    <>
      <header className="absolute z-50 px-2 mt-4 md:px-0 md:top-0 md:mt-0 md:relative lg:z-0">
        <NavBar />
      </header>

      <main className="z-0 w-screen px-2 text-black lg:grid lg:grid-cols-12 lg:gap-x-4 md:px-4 md:mt-8">
        {prismicNotificationBanner.data.active === 'yes' && (
          <Announcement url={prismicNotificationBanner.data.url}>
            {prismicNotificationBanner.data.content}
          </Announcement>
        )}
        {children}
      </main>
      <Footer data={footer.data.body} />
    </>
  )
}

export default Layout
