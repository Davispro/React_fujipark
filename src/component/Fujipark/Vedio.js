import React from 'react'
import styles from '../../stylesheets/fujipark.css'
// import Iframe from 'react-iframe'

// npm video-react

function Vedio() {
  return (
    <>
      <section id="vedio" class="section_vedio">
        <div class="vedio_hover d-flex justify-content-center">
          <img
            class="hover_img align-self-center"
            src="./imgs/vedio_hover_lg.png"
            alt=""
          />
        </div>
        {/* <div class="vedio_wrap">
          <iframe
            className="vedio_style"
            src="imgs/fujimi2.mp4"
            allow="autoplay; encrypted-media"
            // allow="accelerometer; autoplay; muted;controls"
            allowfullscreen="true"
            autoPlay="true"
          ></iframe>
        </div> */}
        <div className="vedio_wrap">
          <video
            class="vedio_style"
            preload="none"
            autoPlay
            loop
            muted
            playsinline
            controls
          >
            <source src="imgs/fujimi.mp4" type="video/mp4"></source>
          </video>
        </div>
      </section>
    </>
  )
}

export default Vedio
