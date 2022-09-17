import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/el-retrato-de-dorian-gray-2.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>LODS</h1>
                <h5 className="text-light">Full-stack Developer and Engineer Software</h5>

                <CTA/>

                <HeaderSocial/>

                <div className="me">
                    <img 
                        src={ME} 
                        alt="me" 
                        className="img-me"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header