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
            I am a Street photographer and a Web developer, based on <span style={{ textDecoration: 'underline' }}>Berlin</span> and <span style={{ textDecoration: 'underline' }}>Tokyo</span>.
            <br />
            I create ... Photographs, Videos, and Web applications.
            <br />
            {/*<br />*/}
            {/*To be honest, I didn&apos;t learn any of them in university nor have any degrees about them.*/}
            {/*<br />*/}
            {/*but I knew, I realized, the only important thing is to keep improving myself day to day and to keep stepping*/}
            {/*forward one by one.*/}
            <br />
            Eager to be a better person, passion and expectation to make something better, and curiosity about life, drive me.
          </p>

          <h4>- Personal Interests</h4>
          <p>
            Photography
            <br />
            Minimalism
            <br />
            Stories (movies, books... whatever)
            <br />
            Animals
            <br />
            Making out life better through technologies or service
          </p>

          <h4>- Awards</h4>
          <p>
            ISPA 2014 International Street Photography Award Black and White Category - Recommended Prize<br />
            The 59th Nikon Photo Award - Selected Prize
          </p>
        </div>
      </div>
    </div>
  )
}
