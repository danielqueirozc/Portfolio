import React from 'react'

import { Link } from 'react-scroll'

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <h5 className="text-[24px] font-bold leading-[0.8] lg:text-[30px] text-gradient">Daniel<br /><span className="text-[24px] font-bold leading-[0.8] lg:text-[30px] text-gradient">Queiroz</span></h5>
          </a>  

            <button className="btn btn-sm">
              <Link to="contact" activeClass="active"l smooth={true} spy={true}>
                Trabelhe comigo
              </Link>
            </button>
        </div>
      </div>
    </header>
  )
}

export default Header