import React from 'react'
import One from '../assets/001.jpg'
import Four from '../assets/movie1.gif'
import Five from '../assets/004.jpg'
import PortraitOfRay from '../assets/portrait1_ratio.jpg'
import Three from '../assets/003.jpg'
import Two from '../assets/002.jpg'

export default () => {
  return (
    <div id="works">
      <div className="work">
        <img className="workImage" src={One} alt="" />
        <div className="work_desc">
          <h3>Painting</h3>
          <p>
            ISPA 2014 International StreetPhotography Award <br />
            Black and White Category<br />
            Commended Photo Price
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Four} alt="" />
        <div className="work_desc">
          <h3>Song of the end</h3>
          <p>
            Music video for rock band "Yoctopolis"
            <br />
            Produced in 2016
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Five} alt="" />
        <div className="work_desc">
          <h3>Olive</h3>
          <p>
            Online Art Gallery, 2019<br />
            HTML5 + CSS3 <br />
            Javascript(React) + Python(RestFramework) + AWS
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={PortraitOfRay} alt="" />
        <div className="work_desc">
          <h3>Artist Portrait</h3>
          <p>My portfolio site as a photographer<br />Build by HTML + CSS + Javascript</p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Three} alt="" />
        <div className="work_desc">
          <h3>The Memory of the summer</h3>
          <p>The 53rd Nikon Photo Contest Winning prize</p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Two} alt="" />
        <div className="work_desc">
          <h3>T.K. Photography</h3>
          <p>My portfolio site as a photographer<br />Build by HTML + CSS + Javascript</p>
        </div>
      </div>
    </div>
  )
}
