import React from 'react';
import Loading from './Loading';
import BlurBg from './BlurBg';
import UpdateProfile from './UpdateProfile';

const AdditionalAppComponents = () => {
  return (
    <React.Fragment>
      <Loading />
      <BlurBg />
      <UpdateProfile />
    </React.Fragment>
  );
};

export default AdditionalAppComponents;
