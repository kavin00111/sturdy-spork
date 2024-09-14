import React from 'react';
import AboutUsModal from './projects/about-us';
import PrivacyPolicy from './projects/privacypolicy';
const Home = () => {
  return (
    <div className="button-container">
      <AboutUsModal buttonText="About Us" title="About PostPilot">
        <p>Welcome to PostPilot! We're a dynamic duo passionate about simplifying social media management. Our mission is to help you seamlessly schedule posts across Instagram, Facebook, Snapchat, and more.</p>
        <p>At PostPilot, we understand the demands of managing multiple accounts. That's why we've built a platform to <span className="text-teal-400">streamline your workflow</span>, save you time, and boost your online presence.</p>
        <p>Join us as we make social media scheduling <span className="text-coral-400">easier and more efficient</span>. Together, we'll take your online presence to new heights!</p>
      </AboutUsModal>
      <PrivacyPolicy/>
    </div>
    
  );
}

export default Home;
