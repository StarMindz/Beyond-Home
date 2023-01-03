import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import NasaPopUp from '../../nasaPopUp';
import { fetchSearch } from '../../../redux/library/librarySlice';
import Loading from '../../loading';
import './LibraryHome.css';

SwiperCore.use([Pagination, EffectCoverflow]);

const LibraryHome = () => {
  const LibraryInfo = useSelector((store) => store.nasa);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [library, setLibrary] = useState({});

  const Back = () => {
    setShow(false);
  };

  const setValue = (library) => {
    setLibrary(library);
    setShow(true);
  };

  useEffect(() => {
    dispatch(fetchSearch(''));
  }, [dispatch]);

  if (LibraryInfo === 'loading') {
    return <Loading />;
  }
  const libraryJSX = (
    <div className="libraryHome">
      <div className="libraryBoxBackground">
        <h1 className="libraryHomeHeader">NASA Image and Video Library</h1>
        <p className="libraryParagraph">
          The National Aeronautics and Space Administration (NASA) has officially
          launched a new source to help the public search and download out-of-this-world
          images. dubbed the NASA image and video library,
          space fanatics will now be able to browse through more than 140,000 NASA images,
          videos and audio files from across the agency’s many missions in aeronautics,
          astrophysics, earth science, human spaceflight and more.
          Explore more in the Library section of this site.
        </p>
        <div className="library-container">
          <Swiper
            className="swiperLibraryContainer"
            effect="coverflow"
            grabCursor="true"
            slidesPerView="auto"
            loop="true"
            loopedSlides={5}
            centeredSlides
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {LibraryInfo.map((data) => {
              const libraryJsx = (
                <div className="swiperSlideBackground" key={data.id}>
                  <SwiperSlide className="swiperSlideBox">
                    <div className="libraryHomeContent">
                      <h1 className="libraryHomeTitle">{data.title}</h1>
                      <img className="libraryHomeImage" src={data.image} alt="library items" />
                      <button className="libraryButton" type="submit" onClick={() => setValue(data)}>Details</button>
                    </div>
                  </SwiperSlide>
                </div>
              );
              return libraryJsx;
            })}
            <div className={show ? 'popUp' : 'noDisplay'}>
              <NasaPopUp
                id={library.id}
                title={library.title}
                description={library.fullDescribe}
                creator={library.creator}
                image={library.hdImage}
                date={library.date}
                back={Back}
              />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
  return libraryJSX;
};

export default LibraryHome;
