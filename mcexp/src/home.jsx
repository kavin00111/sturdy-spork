import React from 'react';
import AboutUsModal from './projects/about-us';

const Home = () => {
  return (
    <div className="button-container">
      <AboutUsModal
         buttonText="About-Us"
         title="About Us"
       >
         <p>Bla bla bla...</p>
      </AboutUsModal>
    </div>
  );
}

export default Home;
