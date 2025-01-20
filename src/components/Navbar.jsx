import React from 'react'
import logo from '../assets/saiKrishnaLogo.png';
import { FaLinkedin, FaInstagram, FaGithub   } from "react-icons/fa";
const Navbar = () => {
  return (
<nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/sai-krishna-m-55a0b3139/"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'><FaLinkedin />
          </a>
          <a href="https://github.com/SAIKrishna140"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'><FaGithub />
          </a>
          <a href="https://www.instagram.com/_sai_krishna_m/"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'><FaInstagram />
          </a>
      </div>
    </nav>
  )
}

export default Navbar
 