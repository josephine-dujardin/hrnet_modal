import "./header.css";

// Define the Header component
function Header(props) {
    /**
     * Renders the header component.
     * @param {Object} props - The props object containing the component's properties.
     * @returns {JSX.Element} - The rendered header component.
     */
    return (
        <div
            className="header_container"
        >
            <img
                className="header_img"
                src={props.logo}
                alt="Logo"
            />
            <div className='nav-right'>
                <h1 className='header_title'>HRnet</h1>
                <div className="header_nav">
                    <a href={props.iconlink} rel="noreferrer" target="_blank">
                        <img
                            className="icon"
                            title={props.title}
                            src={props.icon}
                            alt="icon"
                        />
                    </a>
                    <a href={props.link} className='header_link'>{props.text}</a>
                </div>
            </div>
        </div>
    );
}

export default Header;