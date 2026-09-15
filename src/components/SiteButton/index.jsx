import './SiteButton.scss'

const SiteButton = ({name, url}) => {
    const handleNavigation = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleNavigation();
        }
    };

    return (
        <div className='custom-button'
             role='button'
             tabIndex={0}
             onClick={handleNavigation}
             onKeyDown={handleKeyDown}
        >
            {name}
        </div>
    )
}

export default SiteButton