import React from 'react';
import './header.css';

const Header = () => (
    <>
    <header className="header">
        <ul className="header__ul">
            <span className="header__span">Wego Mobilya</span>
            <li className="header__ul__li"><a href="#">Giriş Yap</a></li>
            <li className="header__ul__li"><a href="#">Favorilerim</a></li>
            <li className="header__ul__li"><a href="#">Sepetim</a></li>
        </ul>
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul__li"><a href="#">Oturma Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">Yatak Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">Yemek Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">Çalışma Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">Mutfak</a></li>
                <li className="header__nav__ul__li"><a href="#">Çocuk Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">Genç Odası</a></li>
                <li className="header__nav__ul__li"><a href="#">dolap + Antre</a></li>
                <li className="header__nav__ul__li"><a href="#">Halı</a></li>
                <li className="header__nav__ul__li"><a href="#">Aydınlatma</a></li>
                <li className="header__nav__ul__li"><a href="#">Dekorasyon</a></li>
                <button className="header__nav__ul__button">...</button>
            </ul>
        </nav>
    </header>
    </>
)

export default Header;