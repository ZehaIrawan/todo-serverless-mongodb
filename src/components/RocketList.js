import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const RocketList = () => {
  const [res, setRes] = useState('');

  useEffect(() => {
    setRes(api.hello());
  }, []);

  console.log(res);
  return (
    <div>
      RocketList
      <p>{res[0]}</p>
    </div>
  );
};

export default RocketList;
