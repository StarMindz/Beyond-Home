import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNASA } from '../../redux/library/librarySlice';
import SearchBar from '../searchBar';
import NasaItem from '../nasaItem';

const HomePage = () => {
  const nasaInfo = useSelector((store) => store.nasa);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchNASA()), 1000);
  }, [dispatch]);

  const home = (
    <div className="homeContainer">
      <SearchBar />
      <div className="nasaContainer">
        {nasaInfo.map((nasa) => {
          const nasaJsx = (
            <div>
              <NasaItem
                id={nasa.id}
                title={nasa.title}
                description={nasa.description}
                fullDescribe={nasa.fullDescribe}
                image={nasa.image}
                date={nasa.date}
                creator={nasa.creator}
              />
            </div>
          );
          return nasaJsx;
        })}
      </div>
    </div>
  );
  return home;
};

export default HomePage;
