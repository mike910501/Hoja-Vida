import React from 'react'
import '../stylessheets.css/datosPersonales.css'
import {AiFillGithub, AiOutlineMail, AiOutlinePhone, AiOutlineFieldNumber} from 'react-icons/ai'
import {MdOutlinePersonOutline} from 'react-icons/md'
export default function DatosPersonales() {
  return (
    <div className='dp'>
        <p className='datos'><MdOutlinePersonOutline/> Michael Ariel Huertas Pabon</p>
        <p className='datos'><AiOutlineFieldNumber/> ID 1024518451</p>
        <p className='datos'><AiOutlinePhone/> +57 3133592457</p>
        <p className='datos'><AiOutlineMail/> Mikehuertas91@gmail.com</p>
        <a className='datos' href='https://github.com/mike910501'><AiFillGithub/> GIT</a>
        
     
    </div>
   
  )
}
