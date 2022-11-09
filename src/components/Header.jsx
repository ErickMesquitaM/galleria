import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

import './scss/header.scss'

export default function Header(){
  return(
    <header>

      <div className="logo" />

      <nav>
        <ul className="nav">
          <li>HOME</li>
          <li>FOTOS</li>
          <li>SERVIÇOS</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </nav>

      <nav>
        <ul className='listIcons'>
          <li> <FaFacebookF /> </li>
          <li> <AiFillInstagram /> </li>
          <li> <BsTwitter /> </li>
          <li> <AiFillYoutube /> </li>
        </ul>
      </nav>

    </header>
  )
}