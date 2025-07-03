import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star } from 'lucide-react';
import BannerIMg from '../assets/banner-img.png';
import PatternImg from '../assets/pattern.png';
import UnderElement from '../assets/underelement.png';
import Paypal from '../assets/paypal.png';
import Google from '../assets/google.png';
import Dropbox from '../assets/Dropbox.png';

export default function Banner() {
  const [playVideo, setPlayVideo] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      className="container flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-28 -top-24 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute left-0 top-0 h-full w-[75%] bg-gradient-to-r from-blue-50 to-yellow-50 rounded-br-[80px] -z-10" />

      {/* Left Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <motion.div
          className="flex items-center justify-center md:justify-start gap-1 text-sm text-gray-600 mb-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i * 0.1}
            >
              <Star
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill={i < 4 ? 'currentColor' : 'none'}
              />
            </motion.div>
          ))}
          <motion.span className="ml-2" variants={fadeUp} custom={0.5}>
            Trusted by over 4,332 students
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight relative"
          variants={fadeUp}
          custom={1.2}
        >
          Learn Design<br />with Nia Matos
          <img src={UnderElement} alt="dots" className="absolute -bottom-2 right-52 w-80" />
        </motion.h1>

        {/* <motion.div
          className="w-32 h-2 bg-yellow-400 mt-2 mb-6 mx-auto md:mx-0"
          variants={fadeUp}
          custom={1.4}
        /> */}
        

        <motion.p
          className="text-gray-600 mb-6"
          variants={fadeUp}
          custom={1.6}
        >
          Get your blood tests delivered at let home collect sample from the victory
          of the mangaments that supplies best design system guidelines ever.
        </motion.p>

        <motion.div
          className="w-full max-w-md mx-auto md:mx-0 bg-white shadow rounded overflow-hidden flex items-center mb-6"
          variants={fadeUp}
          custom={1.8}
        >
          <input
            type="text"
            placeholder="Search Course Name"
            className="flex-1 px-4 py-3 outline-none"
          />
          <div className="px-4 text-gray-500"><Search /> </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <div className='flex items-center gap-2' >
            <div className="text-xs text-gray-500">Sponsored by:</div>
            <div className="flex items-center gap-4 mt-2">
              <img src={Paypal} alt="Paypal" className="h-6" />
              <img src={Google} alt="Google" className="h-6" />
              <img src={Dropbox} alt="Dropbox" className="h-6" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="md:w-1/2 relative mb-10 md:mb-0"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <img src={PatternImg} alt="dots" className="absolute top-0 right-6 w-60" />
        <div className="absolute bottom-[-16px] left-[60px] border-4 border-yellow-300 w-[500px] h-full z-0" />

        <div className="relative z-10">
          {!playVideo ? (
            <div className="relative cursor-pointer" onClick={() => setPlayVideo(true)}>
              <motion.img
                src={BannerIMg}
                alt="Nia Matos"
                className="rounded-md"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                  ▶️
                </div>
              </div>
            </div>
          ) : (
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
