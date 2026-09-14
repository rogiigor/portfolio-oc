import './Hero.scss'
import NavBar from '../NavBar'
import viteConfig from '../../assets/viteConfig.png'

const Hero = () => {
    return (
        <div className='hero'>
            <NavBar />
            <h1 className='hero-name'>Igor Vish</h1>
            <div className='hero__cover'>
                <img src={viteConfig} alt='vite config' className='hero__cover-image'/>
            </div>
            <h2 className='hero-about' id='about'>About</h2>
            <p className='hero-description'>
                <span>
                    Hi, I'm <strong>Igor Vish</strong>. Through 9+ months of rigorous, project-driven training<br /> 
                    at OpenClassrooms, I have built real-world applications using JavaScript, React, and Node.js.<br /> 
                    I am ready to bring production-grade code to your development team.
                </span>
            </p>
        </div>
    
    )
}

export default Hero