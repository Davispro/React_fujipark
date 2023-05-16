import '../../stylesheets/scenery.css'
import React from 'react'
import { motion } from 'framer-motion'

function Balloon() {
  return (
    <>
      <div className="balloon_wrap">
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
            transition={{ duration: 6, repeat: Infinity }} // Duration of animation and infinite repetition
          />
        </motion.div>
        <motion.div
          className="hover_wrap"
          whileHover={{ scale: 1.1 }} // Animation when hovering
          transition={{ duration: 0.5 }}
        >
          <motion.img
            className="circle_one"
            src="/imgs/intro_photo_circle02.png"
            alt="Image"
            initial={{ y: 0 }} // Initial position of the image (no movement)
            animate={{ y: [10, -20, 10] }} // Animation sequence, moving up and down
            transition={{ duration: 6, repeat: Infinity }} // Duration of animation and infinite repetition
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
    </>
  )
}

export default Balloon
