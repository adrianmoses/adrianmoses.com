import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  // const [error, setError] = useState(false)
  // const [message, setMessage] = useState('')
  // const [subscribed, setSubscribed] = useState(false)

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form
        className="flex flex-col sm:flex-row"
        method="post"
        action="https://tinyletter.com/adrianmoses"
        target="popupwindow"
        onSubmit={() => {
          window.open(
            'https://tinyletter.com/adrianmoses',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          )
          return true
        }}
      >
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="px-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
            id="email-input"
            name="email"
            placeholder={'Enter your email'}
            ref={inputEl}
            required
            type="email"
          />
        </div>
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`py-2 sm:py-0 w-full bg-primary-500 px-4 rounded-md font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black`}
            type="submit"
          >
            {'Sign up'}
          </button>
        </div>
      </form>
      {/*{error && (*/}
      {/*  <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>*/}
      {/*)}*/}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
