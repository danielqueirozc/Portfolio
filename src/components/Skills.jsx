import React from 'react'
import {Link} from 'react-scroll'

import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiJavascript, SiTypescript } from 'react-icons/si'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

export default function Skills() {
  return(
    <section className="section flex items-center" id="skills">
      <Link className="container mx-auto">

        <motion.div variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.3}}
            className="content-general">

          
            <div className="element-photos element-1 flex justify-center items-center">
            <SiJavascript size={80} color="orange"/>
                <div className="title-element text-gradient">JavaScript</div>
            </div>
          

          <div className="element-photos element-2 flex justify-center items-center">
          <FaReact size={80} color="blue"/>
                            
              <div className="title-element text-gradient flex items-center">React</div>
          </div>

          <div className="element-photos element-2 flex justify-center items-center">
              <TbBrandNextjs size={80} />
              <div className="title-element text-gradient">Next.Js</div>
          </div>

          <div className="element-photos element-3 flex justify-center items-center">
              <div className="title-initial">
                <span className="text-gradient ">
                  Skills
                </span>
              </div>
              <div className="title-element text-gradient flex">Technologies</div>
          </div>

          <div className="element-photos element-4 flex justify-center items-center">
            <SiTypescript size={80} color="blue" />
          <div className="title-element text-gradient">TypeScript</div>
          </div>

          <div className="element-photos element-5 flex justify-center items-center">
            <FaNodeJs size={80} color="green" />
              <div className="title-element text-gradient">NodeJs</div>
          </div>
          
          <div className="element-photos element-5 flex justify-center items-center">
            <FaGitAlt size={80} color="red"/>
              <div className="title-element text-gradient">GIT</div>
          </div>

        </motion.div>

      </Link>
    </section>
  )
}