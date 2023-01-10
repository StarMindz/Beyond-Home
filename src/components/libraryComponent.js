import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNASA } from '../redux/library/librarySlice';
import NasaItem from './nasaItem';
import Loading from './loading';

const LibraryComponent = () => {
  const nasaInfo = useSelector((store) => store.nasa);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNASA());
  }, [dispatch]);

  if (nasaInfo === 'loading') {
    return <Loading />;
  }
  if (nasaInfo.length === 0 || !nasaInfo) {
    return (
      <div className="empty">
        Nothing found
      </div>
    );
  }

  if (nasaInfo === 'Bad error') { return ('Bad Error'); }

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
