import './Footer.css';

const Footer = () => {
    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
        </div>
    );
};

export default Footer;