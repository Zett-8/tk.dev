import React from 'react'
import PropTypes from 'prop-types'

import FaceBook from '../assets/f.png'
import Instagram from '../assets/i.png'
import LinkedIn from '../assets/l.png'
import GitHub from '../assets/g.png'

const contact = props => {
  return (
    <React.Fragment>
      <div id="contact">
        <div id="steep_b" />
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
          <a href="https://www.instagram.com/tk_streetphotography/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" width="25px" />
          </a>
          <a href="https://www.linkedin.com/in/toshiki-kamei-43543516a/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" width="25px" />
          </a>
          <a href="https://github.com/Zett-8" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="" width="25px" />
          </a>
          <p className="copy">Designed and Built by Toshiki Kamei.</p>
        </div>
      </div>
      <input aria-label="my email address" readOnly={true} value={props.email} ref={props.inputRef} style={{ opacity: '0', position: 'fixed' }} />
    </React.Fragment>
  )
}

contact.propTypes = {
  email: PropTypes.string,
  copied: PropTypes.bool,
  copyAddress: PropTypes.func,
  inputRef: PropTypes.shape({
    current: PropTypes.object,
  }),
}

export default contact
