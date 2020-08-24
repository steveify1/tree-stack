import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaEnvelope,
  FaUser,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa';

import { MdLocationOn, MdSend } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import Container from '../../layouts/Container/Container';
import './Contact.scss';

/**
 * Contact Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Contact />
 * )
 */

function Contact() {
  return (
    <div className="Contact">
      <Container className="banner grid jc-center ta-center">
        <h1 className="color--primary">We want to hear from you</h1>
        <p>Say something and we'll be here to help you.</p>
      </Container>

      <Container className="section--outside grid grid-col-2 gap-3">
        <div className="form-wrapper">
          <h3 className="mega">Send us a message now.</h3>
          <form className="form">
            <div className="form-group">
              <input
                id="fullname"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                id="service"
                className="form-control"
                placeholder="Service"
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                className="form-control"
                placeholder="Service Description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn--bg btn--secondary btn--full-width"
            >
              Send
            </button>
          </form>
        </div>

        <div className="contact__info">
          <h3 className="headline mega flex ai-center">Drop us a line.</h3>
          <ul className="contact__channels">
            <li className="contact__channel">
              <FaEnvelope className="icon" />
              <a href="mailto:hello@techformation.io">hello@techformation.io</a>
            </li>
            <li className="contact__channel">
              <FaUser className="icon" />
              <a href="tel:+2347038202504">+234 703 820 2504</a>
            </li>
            <li className="contact__channel">
              <div className="socials flex jc-space-between">
                <Link to="">
                  <FaTwitter className="icon" />
                </Link>
                <Link to="">
                  <FaGithub className="icon" />
                </Link>
                <Link to="">
                  <FaLinkedin className="icon" />
                </Link>
                <Link to="">
                  <FaMedium className="icon" />
                </Link>
              </div>
            </li>
          </ul>

          <br />
          <br />

          <div className="booking">
            <h3 className="headline mega flex ai-center">
              We can seat and have coffe too.
            </h3>
            <span>
              <MdLocationOn className="icon" /> <span>Lagos, Nigeria.</span>{' '}
              <GiWorld className="icon" /> <span>Remote.</span>
            </span>

            <br />
            <br />

            <div className="btn-group">
              <button className="btn btn--primary btn--md">
                Book a meet up
              </button>
              <button className="btn btn--md btn--primary btn--outline ">
                I prefer Zoom
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
