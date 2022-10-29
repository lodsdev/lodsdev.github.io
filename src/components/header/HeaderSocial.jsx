import React from 'react'
import { BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className="header-socials">
            <a href="https://github.com/lodsdev" target="_blank"><BsGithub/></a>
            <a href="https://instagram.com/lods.dev" target="_blank" rel="noreferrer"><BsInstagram/></a>
            <a href="https://youtube.com/lodsdev" target="_blank" rel="noreferrer"><BsYoutube/></a>
        </div>
    )
}

export default HeaderSocial