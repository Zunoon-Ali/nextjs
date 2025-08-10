import React from 'react'
import Script from 'next/script'

function Contact() {
  return (
    <div className='min-h-[86vh] w-full'>
      <Script>
        {`alert("Welcome to Contact Page")`}
      </Script>
      I am Contact
    </div>
  )
}

export default Contact
export const metadata = {
  title: "Contact",
  description: "This is Contact page you know",
};