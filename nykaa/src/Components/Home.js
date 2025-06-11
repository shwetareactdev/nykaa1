import React from 'react';
import MyCarousel from './HomeComponent/MyCarousel';
import Sale from './HomeComponent/Sale';
import BigDeal from './HomeComponent/BigDeal';

function Home() {
  return (
    <div>
      <MyCarousel />
      <Sale />
      <BigDeal/>
    </div>
  );
}

export default Home;
