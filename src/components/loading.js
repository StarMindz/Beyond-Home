import React from 'react';
import '../extraStyles/loading.css';

const Loading = () => {
  const loading = (
    <div className="loadingContainer">
      <div className="spinner" />
    </div>
  );

  return loading;
};

export default Loading;
