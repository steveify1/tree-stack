import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Container from '../../layouts/Container/Container';
import { FaChevronRight, FaBookOpen, FaList, FaPen } from 'react-icons/fa';
import './About.scss';

const tabs = [
  { title: 'NorseTech', path: '' },
  { title: 'Our skills', path: 'skills' },
  { title: 'The team', path: 'team' },
];

/**
 * About Component - a direct child of "MainContent" component: (page Component)
 * @see <a href="/docs/MainContent.html">MainContent (parent component)</a>
 *
 * @component
 * @example
 * return (
 *  <About />
 * )
 */

function About({ history }) {
  const { hash } = history.location;
  const activeTab = hash.slice(1);

  return (
    <div className="About">
      <section className="banner flex jc-center ai-center">
        <Container>
          <h1 className="headline headline--2">A Nordic JavaScript Clan</h1>
        </Container>
      </section>

      <section className="tabs-container">
        <Container>
          <ul className="tab__controls flex">
            {tabs.map((tab, index) => {
              return (
                <li className="tab__control">
                  <Link
                    to={`/about#${tab.path}`}
                    className={activeTab === tab.path && 'active'}
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="tabs">
            <div className={`tab grid ${activeTab === '' ? 'active' : ''}`}>
              <div className="company">
                <div>
                  <h2 className="headline--3">Company</h2>
                  <p>
                    NorseTech is a class of seasoned JavaScript developers
                    working remotely. Most of our team mates work from within
                    Lagos.
                  </p>
                </div>
                <div className="illustration">Big-sized company logo</div>
              </div>
            </div>
            <div
              className={`tab grid skills ta-center ${
                activeTab === 'skills' ? 'active' : ''
              }`}
            >
              <Container>
                <h2 className="headline--3">Skills</h2>
                <p>
                  We have, both individually and collectively, groomed our
                  skills to master a wide range of battle-tested, bleeding-edge
                  technologies and software design principles, including the
                  following and counting.
                </p>

                <ul className="skill__list flex flex-wrap jc-center">
                  <li className="skill">JavaScript</li>
                  <li className="skill">TypeScript</li>
                  <li className="skill">React JS</li>
                  <li className="skill">Node JS</li>
                  <li className="skill">Express</li>
                  <li className="skill">Socket.IO</li>
                  <li className="skill">PostgreSQL</li>
                  <li className="skill">MySQL</li>
                  <li className="skill">Mongo DB</li>
                  <li className="skill">Redis</li>
                  <li className="skill">Redux</li>
                  <li className="skill">Mocha</li>
                  <li className="skill">Jest</li>
                  <li className="skill">Chai</li>
                  <li className="skill">Sinon</li>
                  <li className="skill">Jasmine</li>
                  <li className="skill">Istanbul NYC</li>
                  <li className="skill">Travis</li>
                  <li className="skill">Git</li>
                  <li className="skill">GitHub</li>
                  <li className="skill">Code Climate</li>
                  <li className="skill">Coveralls</li>
                  <li className="skill">SuperTest</li>
                  <li className="skill">AWS</li>
                  <li className="skill">Heroku</li>
                  <li className="skill">Docker</li>
                  <li className="skill">Kubernetes</li>
                  <li className="skill">Kubernetes</li>
                </ul>
              </Container>
            </div>

            <div
              className={`tab grid team ${
                activeTab === 'team' ? 'active' : ''
              }`}
            >
              <h2 className="headline--3">The team</h2>

              <div className="teammates flex flex-wrap">
                <div className="teammate"></div>
                <div className="teammate"></div>
                <div className="teammate"></div>
                <div className="teammate"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default withRouter(About);
