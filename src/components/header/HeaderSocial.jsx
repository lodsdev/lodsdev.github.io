import React from 'react'
import { BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
            <a href="https://youtube.com/" target="_blank"><BsYoutube/></a>
        </div>
    )
}

export default HeaderSocial
