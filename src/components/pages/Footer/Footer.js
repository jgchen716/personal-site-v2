import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const date = new Date();
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Me
        </p>
        <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.linkedin.com/in/jonathan-c-6350a7121/'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to={'//github.com/jgchen716'}
              target='_blank'
              aria-label='GitHub'
            >
              <FaGithub />
            </Link>
            <a className='social-icon-link' href="mailto:jgchen@sas.upenn.edu"><MdEmail /></a>                                   
          </div>
      </section>
      
      <section className='social-media'>
          <p className='website-rights'>Jonathan Chen  © {date.getFullYear()}</p>
      </section>
    </div>
  );
}

export default Footer;