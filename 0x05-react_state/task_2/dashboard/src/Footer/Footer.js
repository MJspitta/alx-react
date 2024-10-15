import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

const Footer = () => {
    const isIndex = false;

    return (
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
        </div>
    );
};

export default Footer;