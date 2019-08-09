import React from 'react'
import Logo from '../assets/tk.gif'


export default() => {
  return (
    <React.Fragment>
      <div id="top">
        <p className="tk">
          <img src={Logo} alt="" width="60px" />
        </p>
        <div className="top_txt">
          <h1>TOSHIKI KAMEI</h1>
          <p>Street photographer / Programmer</p>
        </div>
        <div id="steep" />
      </div>
    </React.Fragment>
  )
}
