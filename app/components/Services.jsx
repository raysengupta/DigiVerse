// pages/index.js
'use client';
import { useEffect, useState } from 'react';
import CustomCard from './Card';

export default function Home() {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    // Event listener for scroll events
    const handleScroll = () => {
      const scrollMultiple = 1.2;
      const scrollPercentage = ((window.scrollY * scrollMultiple) / (document.body.scrollHeight - window.innerHeight)) * 100;
      setLineHeight(scrollPercentage);

      // Check if the user has scrolled to a certain point (adjust as needed)
      if (window.scrollY > 500) {
        // Add more contacts dynamically if needed
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{height:'1000px'}} className="relative h-screen">
      <h2 className='text-white text-center text-3xl font-bold mb-3 '>Our Packages</h2>
      <div className="relative top-0 left-1/2  w-0.5 bg-white transition-height duration-500" style={{ height: `${lineHeight}%` }}></div>
      <div style={{top:'60px', right:'200px'}} className='absolute  text-white'>
        <CustomCard 
        CardName = 'Web Design and Development'
        Description = 'Along with SEO, Sales funnel creation, CRM integration, Web Copywriting, Newsletter, OpenAPI integration and more.'
        />
        </div>
        <div style={{top:'240px', left:'160px'}} className='absolute text-white'>
        <CustomCard 
        CardName = 'Social Media Marketing'
        Description = 'Comes with cold outreach, sequence creation, CRM integration and personalized AI chatbot/content generator and more.'
        />
        </div>
        <div style={{top: '420px', right:'200px'}} className='absolute  text-white'>
        <CustomCard 
        CardName = 'AI Automation for business tasks'
        Description = 'Along with 500 prompt guidebook,training workshops, robust security compliance, performance monitoring and more.'
        />
        </div>
        <div style={{top: '600px', left:'160px'}} className='absolute  text-white'>
        <CustomCard 
        CardName = 'Web3 Development'
        Description = 'Comes with  NFT Minting, Smart Contract Deployment & Interaction, Web3 content creation, AI integration into DAPPS and more.'
        />
        </div>
        <div style={{top: '750px', right:'200px'}} className='absolute  text-white'>
        <CustomCard 
        CardName = 'Digital Products curation'
        Description = 'Along with automized messaging services, marketing strategy, Internalization, Cybersecurity compliance and more.'
        />
        </div>
    </div>
  );
}
