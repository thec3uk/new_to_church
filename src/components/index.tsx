import Main from './main'
import Aside from './aside'
import Layout from './layout'
import { Hero, FullBleedHero } from './hero'
import FullBleed from './fullbleed'

import QuickLinks from './quickLinks'
import SocialLinks from './socialLinks'
import { FAQCard, Card, ImageCard, TextCard, TitleCard } from './card'
import { FAQs } from './faq'
import { TextSlice } from './text'
import { ButtonSlice } from './button'
import { ImageMedia, VideoMedia } from './media'
import NewsletterSignUp from './card/newsletter'

export const layout = {
  Main,
  Aside,
  Layout,
  FullBleedHero,
  Hero,
  FullBleed,
}
export const components = {
  QuickLinks,
  SocialLinks,
  FAQCard,
  Card,
  ImageCard,
  TextCard,
  TitleCard,
  FAQs,
  Text: TextSlice,
  Button: ButtonSlice,
  ImageMedia,
  VideoMedia,
  NewsletterSignUp,
}
