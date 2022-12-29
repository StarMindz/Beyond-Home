import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { fetchRover } from '../../../redux/rover/roverSlice';
import NasaPopUp from '../../nasaPopUp';
import Loading from '../../loading';

SwiperCore.use([Pagination]);

const RoverComponent = () => {
  const roverInfo = useSelector((store) => store.rover);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [rover, setRover] = useState({});

  useEffect(() => {
    dispatch(fetchRover(['2015-05-30', 'mast']));
  }, [dispatch]);

  if (roverInfo === 'loading') {
    return <Loading />;
  }

  const setValue = (rover) => {
    setShow(true);
    setRover(rover);
  };

  const Back = () => {
    setShow(false);
  };

  const rovers = (
    <div className="roverContainer">
      <Swiper
        className="roverSwiperContainer"
        spaceBetween={50}
        grabCursor="true"
        loop="true"
        centeredSlides="true"
        freeMode
        pagination={{
          clickable: true,
        }}
      >
        {roverInfo.map((rover) => {
          const roverJsx = (
            <div>
              <SwiperSlide key={rover.id} className="roverObjectContainer">
                <div className="roverObject" id={rover.id}>
                  <img className="roverImage" src={rover.image} alt="Rover data" />
                  <div className="additionalInfo">
                    <div>
                      <div>{`Moon date:     ${rover.sol}`}</div>
                      <div>{`Earth date:    ${rover.earth}`}</div>
                    </div>
                    <div>
                      <div>{`Rover name:    ${rover.rover}`}</div>
                      <div>{`Camera name:   ${rover.camera}`}</div>
                    </div>
                  </div>
                  <div>
                    <div>{`Rover's Landing date:   ${rover.landing_date}`}</div>
                    <div>{`Rover's Launch date:   ${rover.launch_date}`}</div>
                    <div>{`Rover's Status:   ${rover.status}`}</div>
                  </div>
                  <button className="roverButtonSecond" type="submit" onClick={() => setValue(rover)}>Details</button>
                </div>
              </SwiperSlide>
            </div>
          );
          return roverJsx;
        })}
      </Swiper>
      <div className={show ? 'popUp' : 'noDisplay'}>
        <NasaPopUp
          id={rover.id}
          title={rover.camera}
          description=""
          creator=""
          image={rover.image}
          date={rover.status}
          back={Back}
        />
      </div>
    </div>
  );
  return rovers;
};

export default RoverComponent;
