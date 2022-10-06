import React from 'react'
import './header.css'
// import CTA from './CTA'
import ME from '../../assets/images/el-retrato-de-dorian-gray-2.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h4>Hello I'm</h4>
                <h1>LODS</h1>
                <h4 className="text-light">Engineer Software and Full-stack Developer</h4>

                {/* <CTA/> */}

                <div className="me">
                    <img 
                        src={ME} 
                        alt="me" 
                        className="img-me"
                    />
                </div>

                <HeaderSocial/>
            </div>
        </header>
    )
}

export default Header