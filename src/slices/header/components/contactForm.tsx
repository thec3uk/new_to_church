import { PrismicRichText } from '@prismicio/react'
import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import slugify from 'slugify'

import CategorySelect from './contact/categorySelect'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Input = ({
  label,
  type,
  autocomplete,
  placeholder,
  isTextArea = false,
  handleChange,
  name,
}: {
  label: string
  type: string
  autocomplete: string
  placeholder: string
  isTextArea?: boolean
  handleChange: React.ReactEventHandler
  name: string
}) => {
  const slug = slugify(label, {
    lower: true,
    replacement: '_',
  })
  return (
    <div>
      <label htmlFor={slug} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows={4}
          name={name}
          id={slug}
          autoComplete={autocomplete}
          className="block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={slug}
          autoComplete={autocomplete}
          className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    message: '',
    name: '',
    email: '',
    subject: '',
  })
  const [selected, setSelected] = React.useState({
    category_name: 'Select a Category',
  })
  const [validForm, setFormValid] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const staticData = useStaticQuery(
    graphql`
      query ContactForm {
        prismicContactForm(tags: { eq: "domain:thec3.uk" }) {
          data {
            form_name
            name_label
            email_label
            message_label
            subject_label
            category_label
            submit_button_label
            category {
              category_name
              email_recipient
            }
            thank_you_message {
              richText
            }
          }
        }
      }
    `
  )
  //   const validateForm = () => {
  //     var valid = false
  //     if (
  //       formData.message.length > 0 &&
  //       formData.full_name.length > 0 &&
  //       formData.full_name.length > 0 &&
  //       formData.full_name.length > 0 &&
  //       formData.email.includes('@')
  //     ) {
  //       valid = true
  //     }
  //     this.setState({ valid: valid })
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': staticData.prismicContactForm.data.form_name,
        ...formData,
        ...selected,
      }),
    })
      .then(() => {
        console.log('form submitted!')
        setSubmitted(true)
      })
      .catch((error) => alert(error))
  }

  const handleChange = (e: React.ChangeEvent) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  React.useEffect(() => {
    if (
      selected.hasOwnProperty('email_recipient') &&
      formData.message.length > 10 &&
      formData.name.length > 3 &&
      formData.email.includes('@') &&
      formData.subject.length > 3
    ) {
      setFormValid(true)
    }
  }, [formData])
  return (
    <div className="max-w-lg px-0 sm:px-6 lg:mx-auto lg:max-w-none">
      {submitted ? (
        <div className="grid grid-cols-1 grid-rows-3 my-auto">
          <div className="prose lg:row-start-2 prose-headings:mb-4 prose-h2:text-2xl prose-h3:text-xl">
            <PrismicRichText
              field={
                staticData.prismicContactForm.data.thank_you_message.richText
              }
              fallback={
                <>
                  <h2 className="mb-4 text-2xl">Thanks for your message!</h2>
                  <p>Someone will be in touch in the next couple of days</p>
                </>
              }
            />
          </div>
        </div>
      ) : (
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <p hidden>
            <label>
              Don't fill this out:{' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <Input
            label={staticData.prismicContactForm.data.name_label}
            type={'text'}
            autocomplete={'name'}
            placeholder={staticData.prismicContactForm.data.name_label}
            handleChange={handleChange}
            name={'name'}
          />
          <Input
            label={staticData.prismicContactForm.data.email_label}
            type={'email'}
            autocomplete={'email'}
            placeholder={staticData.prismicContactForm.data.email_label}
            handleChange={handleChange}
            name={'email'}
          />
          <div>
            <label htmlFor="category" className="sr-only">
              {staticData.prismicContactForm.data.category_label}
            </label>

            <CategorySelect
              categories={staticData.prismicContactForm.data.category}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <Input
            label={staticData.prismicContactForm.data.subject_label}
            type={'text'}
            autocomplete={'subject'}
            placeholder={staticData.prismicContactForm.data.subject_label}
            handleChange={handleChange}
            name={'subject'}
          />
          <Input
            label={staticData.prismicContactForm.data.message_label}
            type={'text'}
            autocomplete={'message'}
            placeholder={staticData.prismicContactForm.data.message_label}
            isTextArea
            handleChange={handleChange}
            name={'message'}
          />
          <div>
            <button
              type="submit"
              className={`inline-flex justify-center px-6 py-3 text-base font-medium text-white ${
                validForm
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-purple-200 cursor-not-allowed'
              } border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
              disabled={!validForm}
            >
              {staticData.prismicContactForm.data.submit_button_label}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ContactForm
