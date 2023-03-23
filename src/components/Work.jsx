import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

function Work() {
  return(
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"> 
            {/*text*/}
            <div className="h2 leading-tight text-accent">
              <h2>
                PROJETOS MAIS<br /> 
                RECENTES.
              </h2>

              <p className="max-w-sm mb-16 mt-2 text-white">
                alumasjsnjdskssjsjssd
              </p>

              <button className="btn btn-sm">Ver projetos no Github</button>
            </div>
            {/*image*/}
            <a href="">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-600" src={Img1} alt="" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Desenvolvedor Front-end</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Projeto</span>
                </div>
              </div>
            </a>
          </motion.div>
            
          <motion.div variants={fadeIn('left', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} className="flex-1 flex flex-col gap-y-7">

            <a href="">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-600" src={Img2} alt="" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Desenvolvedor Front-end</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Projeto</span>
                </div>
              </div>
            </a>

            <a href="">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-600" src={Img3} alt="" />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Desenvolvedor Front-end</span>
                  </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Projeto</span>
                </div>
              </div>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
