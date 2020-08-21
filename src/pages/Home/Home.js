import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa';
import Container from '../../layouts/Container/Container';
import './Home.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Home Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <Home />
 * )
 */

function Home() {
  const settings = {
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    pauseOnHover: false,
  };
  return (
    <div className="Home">
      <Slider {...settings}>
        <Container>
          <div className="banner grid">
            <article>
              <h1 className="headline headline--2">
                Build and Deploy Scalable, High-performant Softwares.
              </h1>
              <p className="kilo">
                We build tools, APIs, and smart, user-friendly interfaces that
                are scalable, maintainable and reliable. <br /> <br />{' '}
                <FaCheckCircle className="icon" /> Transition from ideation to
                production. <br /> <FaCheckCircle className="icon" /> Automate
                the recurring steps. <br /> <FaCheckCircle className="icon" />{' '}
                Create market advantage.
              </p>

              <div className="btn-group">
                <Link
                  to="/contact"
                  className="btn btn--bg btn--secondary btn--shadow"
                >
                  Start a project
                </Link>

                <Link
                  to="/portfolio"
                  className="btn btn--bg btn--primary btn--outlin btn--shadow"
                >
                  See Portfolio &gt;
                </Link>
              </div>
            </article>

            <div className="illustration"></div>
          </div>
        </Container>
        {/* <Container>
          <div className="banner">
            <h1 className="headline headline--2">Experience the art of JS.</h1>
            <p>Banner 2</p>
          </div>
        </Container> */}
      </Slider>

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
    </div>
  );
}

export default Home;
