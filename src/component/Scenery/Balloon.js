import '../../stylesheets/scenery.css'
import React from 'react'
import { motion } from 'framer-motion'

function Balloon() {
  return (
    <>
      <div className="balloon_wrap_one">
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Anima`tion when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_two"
            src="/imgs/intro_photo_circle04.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [10, -20, 10] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity, delay: 2 }} // Duration of animation and infinite repetition
          />
        </motion.div>
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Animation when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_two"
            src="/imgs/intro_photo_circle02.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [-20, 30, -30] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity }} // Duration of animation and infinite repetition
          />
        </motion.div>
      </div>

      <div className="center_circle ">
        <h2 className="align-self-center">
          息をのむ、大パノラマ <br />
          絶景体験のひととき
        </h2>
        <p className="align-self-center">
          アルピナリゾーツには5つのテラスがございます。
          <br />
          それぞれの地域、景観の特徴を生かしたテラスで、
          <br />
          息をのむ絶景と非日常体験をお楽しみください。
        </p>
      </div>

      <div className="balloon_wrap_two">
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Animation when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_one"
            src="/imgs/intro_photo_circle01.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [10, -20, 10] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity, delay: 2 }} // Duration of animation and infinite repetition
          />
        </motion.div>
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Animation when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_one"
            src="/imgs/intro_photo_circle03.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [10, -20, 10] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity }} // Duration of animation and infinite repetition
          />
        </motion.div>
      </div>
      <div className="balloon_wrap_three">
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Animation when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_two"
            src="/imgs/intro_photo_circle05.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [10, -20, 10] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity, delay: 2 }} // Duration of animation and infinite repetition
          />
        </motion.div>
      </div>
    </>
  )
}

export default Balloon
