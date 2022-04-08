import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__wrap">
      <div className="footer__row">
        <li className="footer__item">Audio and subtitles</li>
        <li className="footer__item">Mediacentre</li>
        <li className="footer__item">Privacy</li>
        <li className="footer__item">Contact us</li>
      </div>
      <div className="footer__row">
        <li className="footer__item">Audiodescription</li>
        <li className="footer__item">Relations with investors</li>
        <li className="footer__item">Laws</li>
      </div>
      <div className="footer__row">
        <li className="footer__item">Help centre</li>
        <li className="footer__item">Job offers</li>
        <li className="footer__item">Cookiepreferences</li>
      </div>
      <div className="footer__row">
        <li className="footer__item">Giftcards</li>
        <li className="footer__item">Terms of use</li>
        <li className="footer__item">Company details</li>
      </div>
    </div>
  );
}

export default Footer;
