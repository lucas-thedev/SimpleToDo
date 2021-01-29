import './Footer.css'
import {SiLinkedin} from 'react-icons/si'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='credits'>
                made by lucas
            </div>
            <div className='linkedin'>
                <SiLinkedin color='#0e76a8' size='2em'/>
            </div>
        </div>
    );
}

export default Footer;