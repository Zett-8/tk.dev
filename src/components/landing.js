import React from 'react'
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../assets/tk.gif'
import Me from '../assets/me.jpg'
import Instagram from '../assets/i.png'
import FaceBook from '../assets/f.png'
import GitHub from '../assets/g.png'
import LinkedIn from '../assets/l.png'

const landing = props => {
  return (
    <React.Fragment>
      <div className="menu" style={props.menuIsOpen ? null : { display: 'none', height: '0', marginTop: '-50px' }}>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#top">top</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#about">about</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#works">works</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#skills">skills</AnchorLink></p>
        <p onClick={() => props.hamburgerClicked()}><AnchorLink href="#contact">contact</AnchorLink></p>
      </div>

      <div className={props.menuIsOpen ? 'button_C' : 'button_N'} onClick={() => props.hamburgerClicked()}>
        <span className="button_Hum" />
      </div>

      <div id="top">
        <p className="tk">
          <img src={Logo} alt="" width="60px" />
        </p>
        <div className="top_txt">
          <h1>TOSHIKI KAMEI</h1>
          <p>Street photographer / Programmer</p>
        </div>
      </div>

      <div id="steep" />

      <div id="about">
        <p className="about_me">
          <img src={Me} alt="me" width="200px" />
        </p>

        <h2>about</h2>

        <p className="about_p">
          I am a Street photographer and also a programmer.
          <br />
          My work Career started as an occupational photographer but since 2017 I decided to change my career and bocame
          a programmer.
          <br />
          I make ... Photographs, Videos, and Web services.
          <br />
          <br />
          I didn’t learn any of them in university nor have any degrees about them.
          <br />
          but I knew, I realized, the only important thing is to keep improving myself day to day and to keep stepping
          forward one by one.
          <br />
          <br />
          Eager to be a better one, passion and expectation that I want to make something better or make the world
          convinient, and curiosity about the adventure of life, drive me.
        </p>
      </div>

      <div id="works">works</div>

      <div id="skills">skills and resume</div>

      <div id="contact">
        {props.copied ? (
          <p className="contact_button" onClick={() => props.copyAddress()}>
            Copied email!
          </p>
        ) : (
          <p className="contact_button" onClick={() => props.copyAddress()}>
            Contact
          </p>
        )}

        <div className="social_icons">
          <a href="https://www.facebook.com/toshiki.kamei.3" target="_blank" rel="noopener noreferrer">
            <img src={FaceBook} alt="" width="25px" />
          </a>
          <a href="https://www.instagram.com/derosablue/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" width="25px" />
          </a>
          <a href="https://www.linkedin.com/in/toshiki-kamei-43543516a/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" width="25px" />
          </a>
          <a href="https://github.com/Zett-8" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="" width="25px" />
          </a>
        </div>
      </div>
      <input readOnly={true} value={props.email} ref={props.inputRef} style={{ opacity: '0', position: 'fixed' }} />
    </React.Fragment>
  )
}

landing.propTypes = {
  email: PropTypes.string,
  copied: PropTypes.bool,
  copyAddress: PropTypes.func,
  inputRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  menuIsOpen: PropTypes.bool,
  hamburgerClicked: PropTypes.func,
}

export default landing
