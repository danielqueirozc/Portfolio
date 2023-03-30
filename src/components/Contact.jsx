import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import emailJs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('') 

  function sendEmail(e) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

      emailJs.send('service_7rhw2vp', 'template_t2sc4vc', templateParams, 'thZmFkVWuNNaeCXHe')
      .then((response) => {
        console.log('email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
        console.log('ERRO: ', erro)
      })
  }

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Entrar em contato</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Vamos trabalhar <br />juntos!
              </h2>
            </div>
          </motion.div>

          <motion.form
            onSubmit={sendEmail} 
            variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input 
              className="
                bg-transparent 
                border-b 
                py-3 
                outline-none 
                w-full 
              placeholder:text-white 
              focus:border-accent 
                transition-all
              " 
              type="text" 
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <input 
              className="
              bg-transparent 
              border-b 
              py-3 
              outline-none 
              w-full 
              placeholder:text-white 
              focus:border-accent 
              transition-all
              " 
              type="text" 
              placeholder="Seu Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <textarea 
              className="
              bg-transparent 
              border-b
              py-12 
              outline-none 
              w-full 
              placeholder:text-white 
              focus:border-accent 
              transition-all 
              resize-none 
              mb-12" 
              placeholder="Sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            >

              </textarea>
            <button className="btn btn-lg">Enviar mensagen</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}