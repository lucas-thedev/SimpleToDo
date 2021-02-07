import './Footer.css'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='credits'>
                made by lucas
            </div>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/lucasabuddev/' target="_blank" rel="noopener noreferrer">
                    <SiLinkedin color='#0e76a8' size='2em'/>
                </a>
            </div>
            <div className='social-media'>
            <a href='https://github.com/lucas-thedev' target="_blank" rel="noopener noreferrer">
                <SiGithub color='#000' size='2em'/>
            </a>
            </div>
        </div>
    );
}

export default Footer;

