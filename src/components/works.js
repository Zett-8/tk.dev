import React from 'react'
import Fall from '../assets/fall_thumb.jpg'
import Movie from '../assets/movie1.gif'
import Olive from '../assets/olive_thumb.jpg'
import PortraitOfRay from '../assets/portrait1_thumb.jpg'
import Summer from '../assets/summer_thumb.jpg'
import LightBox from '../assets/lightbox_thumb.jpg'

export default () => {
  return (
    <div id="works">
      <div className="work">
        <img className="workImage" src={Fall} alt="" />
        <div className="work_desc">
          <h3>Fall, 2011</h3>
          <p>
            ISPA 2014 International StreetPhotography Award
            <br />
            Black and White Category
            <br />
            Commended Photo Price
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Movie} alt="" />
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
        <img className="workImage" src={Olive} alt="" />
        <div className="work_desc">
          <h3>Olive</h3>
          <p>
            Online Art Gallery, 2019
            <br />
            HTML5 + CSS3
            <br />
            Javascript(React) + Python(RestFramework) + AWS
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={PortraitOfRay} alt="" />
        <div className="work_desc">
          <h3>Artist Portrait</h3>
          <p>
            My portfolio site as a photographer
            <br />
            Build by HTML + CSS + Javascript
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={LightBox} alt="" />
        <div className="work_desc">
          <h3>T.K. Photography</h3>
          <p>
            My portfolio site as a photographer
            <br />
            Build by HTML + CSS + Javascript
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Summer} alt="" />
        <div className="work_desc">
          <h3>The Memory of the summer</h3>
          <p>The 59rd Nikon Photo Contest Winning prize</p>
        </div>
      </div>
    </div>
  )
}
