import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPOD } from '../../../redux/apod/apodSlice';
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
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const Back = () => {
    setShow(false);
  };

  const setShowTrue = () => {
    setShow(true);
  };

  useEffect(() => {
    setTimeout(() => dispatch(fetchAPOD()), 1000);
  }, [dispatch]);

  if (ApodInfo === 'loading') {
    return <Loading />;
  }

  const apod = (
    <div className="apodBox">
      <h1 className="apodHomeHeader">Astronomy Collections from APOD</h1>
      <div className="photo-container">
        <Swiper
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          spaceBetween={50}
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
              <div>
                <SwiperSlide>
                  <ApodItem
                    id={nasa.id}
                    title={nasa.title}
                    description={nasa.description}
                    image={nasa.image}
                    set={setShowTrue}
                  />
                </SwiperSlide>
                <div className={show ? 'popUp' : 'noDisplay'}>
                  <NasaPopUp
                    id={nasa.id}
                    title={nasa.title}
                    description={nasa.Describe}
                    creator={nasa.creator}
                    image={nasa.hdImage}
                    date={nasa.date}
                    back={Back}
                  />
                </div>
              </div>
            );
            return nasaJsx;
          })}
        </Swiper>
      </div>
    </div>
  );

  return apod;
};

export default Apod;
