import React from 'react'
import { contact } from '/src/assets/constants'

const Contact = () => {
  return (
    <div className='mt-10 text-white text-center'>
        <h1 className='text-xl md:2xl '>I can help you design, improve, and build on your new or existing ptojects. Feel free to get in touch with me.</h1>
        <p className='text-xl md:2xl opacity-50 mt-5'>Say Hello!</p>
        <div>{contact.map((contact, index) => (
            <div key={index}>
                <div className='place-items-center mt-8'>
                    <span className='text-4xl'>{contact.icon}</span>
                    <h5 className='2xl opacity-70 mt-2'><a href="{contact.text}">{contact.text}</a></h5>
                </div>
            </div>
        )
        )}

        </div>

    </div>
  )
}

export default Contact