import React from 'react'

import { useInView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'  
import { Link } from 'react-scroll'

export default function About() {
  const [ref, InView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} 
            className="
              flex-1 
              bg-about 
              bg-contain 
              bg-no-repeat 
              h-[620px] 
              mix-blend-lighten 
              bg-top"
            >

          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} 
            className="flex-1 overflow-hidden text-ellipsis ">
            <h2 className="h2 text-accent">Sobre mim.</h2>
            <h3 className="h3 mb-4">Sou Desenvolvedor Front-end,</h3>
            <p className="mb-6">
              Bem vindo(a) ao meu portifólio, eu me chamo Daniel, e gostaria de compartilhar um pouco sobre a minha jornada até aqui.<br />
              Em 2022 eu conheci e me apaixonei pelo desenvolvimento de software, então logo se tornou um sonho ser um dev, então em agosto decidi começar meus estudos, venho trabalhando bastante até aqui, muitas horas de estudos e dedicação!<br />
              E em 2023 também decidi começar a cursar analise e desenvolvimento de sistemas. Agora aqui no meu portifólio vou te mostrar tudo oque aprendi até agora<br/>

              <br />
              
              Muito obrigado por visitar meu Portifólio!
            </p>
            
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <a href="https://www.linkedin.com/in/daniel-queiroz-669b42210/">LinkedIn</a>
              </button>
              <Link to="work" activeClass="active" smooth={true} spy={true}>
                <a href="" className="text-gradient btn-link">
                  Currículo
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}