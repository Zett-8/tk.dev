import React from 'react'
import Fall from '../assets/fall_thumb.jpg'
import Movie from '../assets/movie1.gif'
import Olive from '../assets/olive_thumb.jpg'
import PortraitOfRay from '../assets/portrait1_thumb.jpg'
import Summer from '../assets/summer_thumb.jpg'
import LightBox from '../assets/lightbox_thumb.jpg'
// import Webm from '../assets/ezgif.com-gif-to-webm.webm'

export default () => {
  return (
    <div id="works">
      <div className="work">
        <img className="workImage" src={Fall} alt="photo which won prize" />
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
        <img className="workImage" src={Movie} alt="music video gif" />
        {/*<video controls autoPlay name="media">*/}
          {/*<source src={Webm} type="video/webm" />*/}
        {/*</video>*/}
        <div className="work_desc">
          <h3>Song of the end</h3>
          <p>
            Music video for rock band "Yoctopolis"
            <br />
            Produced in 2016
            <br />
            <br />
            <a href="https://youtu.be/fd-j0htK-fE" target="_blank" rel="noopener noreferrer">https://youtu.be/fd-j0htK-fE</a>
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Olive} alt="screen shot of web service called Olive" />
        <div className="work_desc">
          <h3>Olive</h3>
          <p>
            Online Art Gallery, 2019
            <br />
            HTML5 + CSS3
            <br />
            Javascript(React) + Python(RestFramework) + AWS
            <br />
            <br />
            <a href="https://olive-gallery.com/" target="_blank" rel="noopener noreferrer">https://olive-gallery.com/</a>
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={PortraitOfRay} alt="artist portrait" />
        <div className="work_desc">
          <h3>Artist Portrait</h3>
          <p />
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={LightBox} alt="my portfolio site" />
        <div className="work_desc">
          <h3>T.K. Photography</h3>
          <p>
            My portfolio site as a photographer
            <br />
            Build by HTML + CSS + Javascript
            <br />
            <br />
            <a href="https://toshikikamei.com/" target="_blank" rel="noopener noreferrer">https://toshikikamei.com/</a>
          </p>
        </div>
      </div>
      <div className="work">
        <img className="workImage" src={Summer} alt="photo which won prize" />
        <div className="work_desc">
          <h3>The Memory of the summer</h3>
          <p>The 59rd Nikon Photo Contest Winning prize</p>
        </div>
      </div>
    </div>
  )
}
