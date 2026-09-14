import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <ul class='nav-bar__links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

    )
}

export default NavBar