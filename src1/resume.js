import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css'; // Import your CSS file
import Home from "./home"

function Resume() {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate('/home');
    };

  return (
    <div className="App">
      <div className="resume">
      <div className="typewriter">
      <h1 className="typewriter-text">Joshua Locke's Resume</h1>
      </div>
      <div className="formatted">
      <h2>Computer Science Student at QUT</h2>
      <h3>Member of Code Network Club, Passionate about Business and Information Systems that change the world.</h3>
      <p>Summary: A motivated and dedicated individual with experience in various industries, including fast food, construction, hospitality, and landscaping. Possesses excellent customer service skills, business operations knowledge, and problem-solving abilities. Developed skills in managing a business and working in a team environment. Currently pursuing a degree in computer science at QUT.</p>
      <p>Education: Bachelor of Information Technology (Computer Science), Queensland University of Technology (QUT) Graduate November 2025</p>
      <p>Skills: JavaScript, React, Node.js, HTML/CSS, Python</p>
      </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>Experience</h1>
      <div className='experienceFlex'>
        <div className='exp1'>
          <h3>Dominos The Gap • Janurary 2019 - December 2022</h3>
          <p>I’ve been working in fast food for the past 3+ years at Dominos the Gap, I started there when I was 13 and have since adopted skills in customer services, understanding business operations and delivering products that priorities customer satisfaction. I’ve taken on more responsibility over the years and am trusted to deal with customer complaints online and resolving issues over the phone and in-store.</p>
        </div>
        <div className='exp2'>
          <h3>OPUS CONSTRUCTION • 2012 – NOW </h3>
          <p>Ever since I was 8 I have worked on and off for my Dad at his construction company, he usually does jobs that involve subdividing land then building separate townhouses on them and I have assisted him with painting, scaffolding, cleaning up rubbish, vacuuming, gurneying, digging, lawn mowing, jackhammering, cementing and lifting. I work usually long hours on the holidays for him and have been brought up around earning my own money even at a young age. </p>
        </div>
        <div className='exp3'>
          <h3>GPS Rugby Club • June 2022 – NOW </h3>
          <p>I work at GPS Rugby club most Saturdays when the Rugby 1st grade games are on, I don't really think of working here as a job I just enjoy connecting with people I know in the community and watching the game while serving club members.</p>
        </div>
        <div className='exp4'>
          <h3>The Gap Tavern • September 2022 - Janurary 2023</h3>
          <p>I recently started at working at The Gap Tavern hand over the past couple of months I have been developing skills in customer service and waiting customers, understanding how to manage customer satisfaction and food safety standards to uphold the reputation of a restaurant, I stopped working at the Gap Tavern to Focus on my lawn Mowing Business during the holidays however now during University I am looking for a casual job.</p>
        </div>
        <div className='exp5'>
          <h3>Spring Landscaping Business</h3>
          <p>At the beginning of the holidays me and a friend from Dominos decided to start our own Landscaping business and have been serving peoples lawns throughout The Gap 5 days a week from 8am to 6pm and outside of those hours taken on responsibility of representing and managing our own business, I’m looking to cut down on time spent mowing lawns and get a job that requires less after hours work to guarantee my success in University. Throughout running this business I’ve met lots of new people, understood how business works better and learnt to deal problems that can potentially jeopardize the whole operations of a business if dealt with the wrong way. I also understood how to manage my time to work it in with 2 other jobs without much rearranging.</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <button onClick={navigateToHome} className="solution-btn">A Solution I developed to help run my Lawn mowing Business</button>
      </div>
    </div>

  );
}

export default Resume;
