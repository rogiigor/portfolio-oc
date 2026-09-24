import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-text'>&copy; {new Date().getFullYear()} Igor Vish. All rights reserved.</p>
        </div>
    )
}

export default Footer