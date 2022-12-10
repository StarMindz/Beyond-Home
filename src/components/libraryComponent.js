import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNASA } from '../redux/library/librarySlice';
import NasaItem from './nasaItem';
import Loading from './loading';

const LibraryComponent = () => {
  const nasaInfo = useSelector((store) => store.nasa);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchNASA()), 1000);
  }, [dispatch]);

  if (nasaInfo === 'loading') {
    return <Loading />;
  }

  const home = (
    <div className="nasaContainer">
      {nasaInfo.map((nasa) => {
        const nasaJsx = (
          <NasaItem
            id={nasa.id}
            title={nasa.title}
            description={nasa.description}
            fullDescribe={nasa.fullDescribe}
            image={nasa.image}
            hdImage={nasa.hdImage}
            date={nasa.date}
            creator={nasa.creator}
          />
        );
        return nasaJsx;
      })}
    </div>
  );
  return home;
};

export default LibraryComponent;
