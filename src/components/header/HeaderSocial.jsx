import React from 'react'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header-socials">
            {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> */}
            <a href="https://instagram.com/lods.dev" target="_blank" rel="noreferrer"><BsInstagram/></a>
            <a href="https://youtube.com/lodsdev" target="_blank" rel="noreferrer"><BsYoutube/></a>
        </div>
    )
}

export default HeaderSocial
