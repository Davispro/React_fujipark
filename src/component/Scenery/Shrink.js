import React from 'react'
import styles from '../../stylesheets/scenery.css'

function Shrink() {
  return (
    <>
      <h1>Shrink</h1>
      <div className="d-flex justify-content-center">
        <div className="shrink_wrap d-flex flex-row justify-content-center">
          <div className="img_wrap">
            <img className="img_one " src="imgs/img_01_sp.png" alt="" />
          </div>
          <div className="img_wrap">
            <img className="img_one " src="imgs/img_02_sp.png" alt="" />
          </div>
          <div className="img_wrap">
            <img className="img_one " src="imgs/img_03_sp.png" alt="" />
          </div>
          <div className="img_wrap">
            <img className="img_one " src="imgs/img_04_sp.png" alt="" />
          </div>
          <div className="img_wrap">
            <img className="img_one " src="imgs/img_05_sp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shrink
