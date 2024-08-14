import React from 'react';
import Logo from '../assets/logo.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="footer-sections">
                <div className="footer-section">
                    <h3 className="footer-heading">Shop</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="#" className="footer-link">New Arrivals</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">Best Sellers</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">On Sale</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Collection</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="#" className="footer-link">Men's Wear</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">Women's Wear</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">Accessories</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Collection</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="#" className="footer-link">Men's Wear</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">Women's Wear</a></li>
                        <li className="footer-list-item"><a href="#" className="footer-link">Accessories</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
