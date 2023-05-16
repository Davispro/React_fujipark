import React from 'react'
import styles from '../../stylesheets/fujipark.css'

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
        {/* <div class="vedio_wrap"> */}
        {/* FIXME:寬度無法調整 */}
        <iframe
          className="vedio_style"
          src="imgs/fujimi.mp4"
          allow="accelerometer; autoplay; muted;controls"
          allowfullscreen
          // preload="none"
          // autoplay
          // loop
          // muted
          // playsinline
          // controls
        ></iframe>
        {/* <video class="vedio_style" preload="none" autoplay loop muted playsinline controls>
        <source src="../imgs/fujimi.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
      </video> */}
        {/* </div> */}
      </section>
    </>
  )
}

export default Vedio
