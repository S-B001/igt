import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Map from '../assets/map.png';

const tutorials = [
  {
    title: 'Sketch Zeplin Extension Layouts',
    reviews: '5.0 (392 reviews)',
    students: '1,037 students watched',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Master Tailwind CSS Responsive Design',
    reviews: '4.8 (281 reviews)',
    students: '2,104 students watched',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/t4DT3tQqgRM',
  },
  {
    title: 'React & Swiper Interactive UI',
    reviews: '4.9 (342 reviews)',
    students: '1,784 students watched',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/Ke90Tje7VS0',
  },
  {
    title: 'JavaScript Tips and Tricks',
    reviews: '4.7 (198 reviews)',
    students: '1,220 students watched',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/Bv_5Zv5c-Ts',
  },
  {
    title: 'CSS Grid vs Flexbox Explained',
    reviews: '4.6 (310 reviews)',
    students: '900 students watched',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f3d?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/JJSoEo8JSnc',
  },
];

export default function FreeTutorialSlider() {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayClick = (index) => {
    setPlayingIndex(index === playingIndex ? null : index);
  };

  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white flex flex-col lg:flex-row items-center justify-center gap-10">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl ">
        <div
          className="absolute inset-0 bg-white bg-opacity-80 z-0"
          style={{
            backgroundImage: `url(${Map})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={-60}
          pagination={false}
          dir="rtl"
          modules={[Pagination, Autoplay]}
          className="pb-10 freetuto"
          centeredSlides={true}
          initialSlide={2}
          loop={true}
          // autoplay={{ 
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          onSlideChange={(swiper) => {
  swiper.slides.forEach((slide) => {
    slide.classList.remove('scale-95', 'opacity-60', 'scale-100');
  });

  const activeIndex = swiper.activeIndex;
  const nextIndex = (activeIndex - 1 + swiper.slides.length) % swiper.slides.length;

  if (swiper.slides[activeIndex]) {
    swiper.slides[activeIndex].classList.add('scale-100');
  }

  if (swiper.slides[nextIndex]) {
    swiper.slides[nextIndex].classList.add('scale-95', 'opacity-60');
  }

  setPlayingIndex(null);
          }}

        >
          {tutorials.map((tutorial, index) => (
            <SwiperSlide key={index} className="transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden"  dir='ltr'>
                <div className="relative">
                  {playingIndex === index ? (
                    <iframe
                      width="100%"
                      height="220"
                      src={tutorial.video + '?autoplay=1'}
                      title="YouTube video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={tutorial.image}
                      alt="Tutorial Preview"
                      className="w-full h-56 object-cover rounded"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayClick(index)}
                      className="w-12 h-12 bg-white bg-opacity-75 rounded-full flex items-center justify-center"
                      aria-label={playingIndex === index ? 'Pause video' : 'Play video'}
                    >
                      {playingIndex === index ? (
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">★★★★★</span>
                    <span className="text-sm text-gray-500">{tutorial.reviews}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{tutorial.students}</p>
                  <span className="inline-flex items-center text-sm text-white bg-green-500 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4l5-5-1.414-1.414L9 11.172l-1.586-1.586L6 11l3 3z" />
                    </svg>
                    Free tutorial
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style>
        {`
          .swiper-slide {
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .swiper-slide.scale-100 {
            transform: scale(1);
            opacity: 1;
          }
          .swiper-slide.scale-95 {
            transform: scale(0.95);
          }
          .swiper-slide.opacity-60 {
            opacity: 0.6;
          }
          .swiper-slide.swiper-slide-active.transition-transform.duration-300.scale-100 {
            position: relative;
            left: 50px;
            z-index: 10;
            width: 500px !important;
            padding: 15px 0 !important;
          }

          .swiper-slide.swiper-slide-next.transition-transform.duration-300 {
              opacity: 0.5 !important;
              position: relative !important;
              left: 50% !important;
              width: 475px !important;
              transform: scale(0.8);
          }
          .swiper-slide.swiper-slide-prev.transition-transform.duration-300.scale-95.opacity-60 {
              opacity: 0 !important;
          }
        `}
        </style>
      </div>

      {/* Right Content */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="uppercase text-sm tracking-widest text-orange-500 font-medium mb-2">
          Free Tutorial
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2137] leading-snug">
          More than <span className="text-nowrap">thousand</span>
          <br />
          of free tutorial upload
          <br />
          every weeks
        </h2>
        <p className="mt-4 text-gray-600 text-base leading-relaxed">
          Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
        </p>
        <button className="mt-6 bg-orange-100 text-orange-600 px-5 py-2 rounded-md font-medium hover:bg-orange-200 transition">
          Explore details
        </button>
      </div>
    </section>
  );
}
