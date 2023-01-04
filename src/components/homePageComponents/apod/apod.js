import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { useSelector } from 'react-redux';
import ApodItem from './apodItem';
import Loading from '../../loading';
import NasaPopUp from '../../nasaPopUp';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import './apod.css';

SwiperCore.use([Pagination, EffectCoverflow]);

const Apod = () => {
  const ApodInfo = useSelector((store) => store.nasa);

  const [show, setShow] = useState(false);
  const [nasa, setNasa] = useState({});

  const Back = () => {
    setShow(false);
  };

  const setShowTrue = (nasa) => {
    setNasa(nasa);
    setShow(true);
  };

  if (ApodInfo === 'loading') {
    return <Loading />;
  }

  const apod = (
    <div className="apodBox">
      <div className="apodBoxBackground">
        <h1 className="apodHomeHeader">Astronomy Collections from APOD</h1>
        <p className="apodParagraph">
          One of the most popular websites at NASA is the Astronomy Picture of the Day.
          In fact, this website is one of the most popular websites across all federal agencies.
          It has the popular appeal of a Justin Bieber video.
          Below are some beautiful collections from APOD API
        </p>
        <div className="photo-container">
          <Swiper
            className="Swipercontainer"
            effect="coverflow"
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={100}
            slidesPerView={4}
            loop="true"
            pagination={{ clickable: true, dynamicBullets: true }}
            coverflowEffect={{
              rotate: 20,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              700: {
                spaceBetween: 0,
                slidesPerView: 4,
              },
              500: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              411: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
            }}
          >
            {ApodInfo.map((nasa) => {
              const nasaJsx = (
                <div className="swiperSlideBackground" key={nasa.id}>
                  <SwiperSlide className="swiperSlideBackground">
                    <ApodItem
                      ids={nasa.id}
                      titles={nasa.title}
                      descriptions={nasa.description}
                      images={nasa.image}
                      nasas={nasa}
                      set={setShowTrue}
                    />
                  </SwiperSlide>
                </div>
              );
              return nasaJsx;
            })}
            <div className={show ? 'popUp' : 'noDisplay'}>
              <NasaPopUp
                id={nasa.id}
                title={nasa.title}
                description={nasa.fullDescribe}
                creator={nasa.creator}
                image={nasa.hdImage}
                date={nasa.date}
                back={Back}
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );

  return apod;
};

export default Apod;
