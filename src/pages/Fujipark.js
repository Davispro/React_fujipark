import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

// components
import styles from '../stylesheets/fujipark.css'
import Nav from '../component/Fujipark/Nav'
import Vedio from '../component/Fujipark/Vedio'
import Carousel from '../component/Fujipark/Carousel'
import Information from '../component/Fujipark/Information'
import LocationMap from '../component/Fujipark/LocationMap'
import Footer from '../component/Fujipark/Footer'

function Fujipark() {
  // const [pagetop, setPagetop] = useState()
  const scrollToTopRef = useRef(null)

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    scrollToTopRef.current.addEventListener('click', handleClick)

    // "TypeError: Cannot read properties of null (reading 'removeEventListener')"
    // return () => {
    //   scrollToTopRef.current.removeEventListener('click', handleClick)
    // }
  }, [])

  return (
    <>
      <Nav />
      <img
        id="pagetop"
        class="pagetop_btn"
        ref={scrollToTopRef}
        // onClick={() => {
        //   setPagetop()
        // }}
        src="imgs/pagetop.png"
        alt=""
      />
      <Vedio />
      <Carousel />
      <Information />
      <LocationMap />
      <Footer />
    </>
  )
}

export default Fujipark
