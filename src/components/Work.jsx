import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import Img1 from '../assets/portifolio-img1.png'
import Img2 from '../assets/portifolio-img2.png'
import Img3 from '../assets/portifolio-img3.png'

export default function Work() {
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

              <p className="max-w-sm mb-8 mt-2 text-white">
                Veja alguns de meus projetos!
              </p>

              <button className="btn btn-sm">
                <a href="https://github.com/danielqueirozc">Ver projetos no Github</a>
              </button>
            </div>
            {/*image*/}
            <a href="https://ignite-shop-wine-three.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                
                <img className="group-hover:scale-125 transition-all duration-600" src={Img2} alt="" />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Spotify</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Landing page Spotify</span>
                </div>
              </div>
            </a>
          </motion.div>
            
          <motion.div variants={fadeIn('left', 0.2)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}} className="flex-1 flex flex-col gap-y-7">

            <a href="https://test-zeta-dun-23.vercel.app/">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img className="group-hover:scale-125 transition-all duration-600" src={Img1} alt="" />
                
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">IgniteApp</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Feed IgniteApp</span>
                </div>
              </div>
            </a>

            <a href="https://netflix-clone-mocha-sigma.vercel.app/auth">
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                <img className="group-hover:scale-125 transition-all duration-600" src={Img3} alt="" />
                
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">Netflix</span>
                  </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3-xl text-white">Clone Full Stack Netflix</span>
                </div>
              </div>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}