import { PrismicRichText } from '@prismicio/react'
import { graphql } from 'gatsby'
import * as React from 'react'

import { components, layout } from '../components'

const DefaultButton = ({ data, colourVariation }) => {
  return (
    <components.Button
      size={data.size}
      align={data.alignment}
      to={data.linkUrl}
      colourVariation={colourVariation}
    >
      {data.linkTitle}
    </components.Button>
  )
}

const ButtonSlice = ({ slice }) => {
  const variations: Record<string, React.ReactNode> = {
    'default-slice': DefaultButton,
    redButton: DefaultButton,
    tealButton: DefaultButton,
    purpleButton: DefaultButton,
    yellowButton: DefaultButton,
  }
  const Component = variations[slice.variation]

  return (
    <layout.Main>
      <Component data={slice.primary} colourVariation={slice.variation} />
    </layout.Main>
  )
}

export default ButtonSlice

export const query = graphql`
  fragment ButtonSlice on PrismicButtonDefaultSlice {
    primary {
      size
      linkUrl {
        id
        url
        uid
        link_type
        tags
      }
      linkTitle
      alignment
    }
  }
  fragment RedButtonSlice on PrismicButtonRedButton {
    primary {
      size
      linkUrl {
        id
        url
        uid
        link_type
        tags
      }
      linkTitle
      alignment
    }
  }
  fragment YellowButtonSlice on PrismicButtonYellowButton {
    primary {
      size
      linkUrl {
        id
        url
        uid
        link_type
        tags
      }
      linkTitle
      alignment
    }
  }
  fragment TealButtonSlice on PrismicButtonTealButton {
    primary {
      size
      linkUrl {
        id
        url
        uid
        link_type
        tags
      }
      linkTitle
      alignment
    }
  }
  fragment PurpleButtonSlice on PrismicButtonPurpleButton {
    primary {
      size
      linkUrl {
        id
        url
        uid
        link_type
        tags
      }
      linkTitle
      alignment
    }
  }
`
