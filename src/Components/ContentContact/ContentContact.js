import React from 'react'
import Content from '../Content';

import './style.scss'

const ContentContact = () => {

    const handleClick = (data) => {
        if (typeof window.ga === 'undefined') return;        

        window.ga('send', 'event', 'Click', data);
    }

    return (
        <Content title="Contato" class="content-contact">
            <a title="LinkedIn" href="https://www.linkedin.com/in/omarcosalberto/" className="content-contact__link" onClick={ () => handleClick('LinkedIn') } >LinkedIn</a>
            <a title="Facebook" href="http://www.facebook.com/omarcosalberto" className="content-contact__link" onClick={ () => handleClick('Facebook') } >Facebook</a>
            <a title="Twitter" href="http://www.twitter.com/omarcosalberto" className="content-contact__link" onClick={ () => handleClick('Twitter') } >Twitter</a>
            <a title="Email" href="mailto:marcos@marcosalberto.com.br" className="content-contact__link" onClick={ () => handleClick('Email') } >Email</a>
        </Content>
    )
}

export default ContentContact;