import React from 'react'
import './header.css'
import ME from '../../assets/images/el-retrato-de-dorian-gray-2.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h4>Hello I'm</h4>
                <h1>LODS</h1>
                <h4 className="text-light">Software Engineer and Full-stack Developer</h4>

                <div className="me">
                    <img 
                        src={ME} 
                        alt="me" 
                        className="img-me"
                    />
                </div>

                <HeaderSocial/>

                <iframe className="video" type="text/html" width="660" height="390" src="https://www.youtube.com/embed/lmc21V-zBq0?list=RDlmc21V-zBq0" title="Woodkid - Run Boy Run (Official HD Video)" frameborder="0"></iframe>
            </div>
        </header>
    )
}

export default Header