import React from 'react'
import Me from '../assets/me.jpg'


export default () => {
  return (
    <div id="about">
      <div className="aboutWrapper">
        <p className="about_me">
          <img src={Me} alt="me" width="200px" />
        </p>


        <div className="about_profile">
          <h2>
            About me.
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <h4>- Hi!</h4>
          <p>
            Photographs, Movies, Books, Coffee
            <br />
            I am a Street photographer and also a programmer. based on <span style={{ textDecoration: 'underline' }}>Berlin</span> and <span style={{ textDecoration: 'underline' }}>Tokyo</span>.
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

          <h4>- Personal Interests</h4>
          <p>
            Eager to be a better one, passion and expectation that I want to make something better or make the world
            convinient, and curiosity about the adventure of life, drive me.
          </p>

          <h4>- Awards</h4>
          <p>
            ISPA 2014 International Street Photography Award Black and White Category - Recommended Prize<br />
            The 53rd Nikon Photo Award - Selected Prize
          </p>
        </div>
      </div>
    </div>
  )
}
