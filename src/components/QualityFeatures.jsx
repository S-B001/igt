import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, VideoIcon, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import QualityImg1 from '../assets/quality1.png';
import QualityImg2 from '../assets/quality2.png';
import QualityImg3 from '../assets/quality3.png';

const tutorials = [
  {
    id: 1,
    image: QualityImg1,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'How to work with prototype design with adobe xd featuring tools',
    rating: 5.0,
    reviews: 392,
    students: 2538
  },
  {
    id: 2,
    image: QualityImg2,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Create multiple artboard by using figma prototyping tools development',
    rating: 5.0,
    reviews: 392,
    students: 2538
  },
  {
    id: 3,
    image: QualityImg3,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Convert your web layout theming easily with sketch zeplin extension',
    rating: 5.0,
    reviews: 392,
    students: 2538
  },
  {
    id: 4,
    image: QualityImg2,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'How to work with prototype design with adobe xd featuring tools',
    rating: 5.0,
    reviews: 392,
    students: 2538
  },
  {
    id: 5,
    image: QualityImg3,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Create multiple artboard by using figma prototyping tools development',
    rating: 5.0,
    reviews: 392,
    students: 2538
  }
];

export default function QualityFeatures() {
  const [playingIndex, setPlayingIndex] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      className="py-16 px-6 md:px-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-sm font-semibold text-[#EF9E48] uppercase mb-2"
        variants={fadeInUp}
        custom={0}
      >
        Quality features
      </motion.h2>

      <motion.h3
        className="text-3xl md:text-4xl font-bold text-[#0F2137] mb-10"
        variants={fadeInUp}
        custom={0.5}
      >
        Tutorials that people love most
      </motion.h3>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-4"
      >
        {tutorials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="bg-white shadow rounded-lg overflow-hidden py-8"
              variants={fadeInUp}
              custom={index + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video">
                {!playingIndex || playingIndex !== index ? (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setPlayingIndex(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                        <Play/>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`${item.video}?autoplay=1`}
                    title={item.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>
              <div className="p-4 text-left">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    5.0 ({item.reviews} reviews)
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  {item.students.toLocaleString()} students watched
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
