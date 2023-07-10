import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function Resume() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  
    if (buttonId === 1) {
      window.location.href = 'https://joshuasresume.azurewebsites.net/'; // Replace with your desired URL for My Resume
    } else if (buttonId === 2) {
      window.location.href = 'https://interviewjosh.azurewebsites.net/'; // Replace with your desired URL for Josh GPT
    }
  };

  return (
    <div className="App">
      <div className="resume">
        <div className="typewriter">
          <h1 className="typewriter-text">Joshua Locke's Resume</h1>
          <div className="separator"></div>
        </div>

        <div className="formatted">
          <h3>- QUT Bachelors of Information Technology, Major in Computer Science minors in AI and Cybersecurity with a current GPA of 5.0</h3>
          <h3>- Member of Code Network Club, Passionate about Business and Information Systems that change the world.</h3>
          <h3>- President and Founder of QUT's new AI club, sharing ideas and investigating the intimacies of Artificial Intelligence and Machine Learning.</h3>
          <h3>- Skills in JavaScript, Java, C#, Microsoft Azure, React, Node.js, .NET, Cyber Security, HTML, CSS, Python and AI technology</h3>
          <h3><a href="https://www.linkedin.com/in/lockej2005/" target="_blank" rel="noopener noreferrer" class="btnlinkedin">
               <button>Connect with me on LinkedIn</button>
              </a>
          </h3>
        </div>

        <div className="button-group">
          <button
            className={selectedButton === 1 ? 'selected' : ''}
            onClick={() => handleButtonClick(1)}
          >
            My Resume
          </button>
          <button
            className={selectedButton === 2 ? 'selected' : ''}
            onClick={() => handleButtonClick(2)}
          >
            Josh GPT
          </button>
        </div>

        <div className='ColumnContainer'>
          <div className='experienceFlex'>
            <div className='exp1'>
              <h3>Experience - Dominos The Gap • Janurary 2019 - December 2022</h3>
              <p>I have been working in fast food for the past 3+ years at Dominos the Gap, I started there when I was 13 and have since adopted skills in customer services, understanding business operations and delivering products that priorities customer satisfaction. I’ve taken on more responsibility over the years and am trusted to deal with customer complaints online and resolving issues over the phone and in-store.</p>
            </div>
            <div className='exp2'>
              <h3>Experience - OPUS CONSTRUCTION • 2012 – NOW</h3>
              <p>Ever since I was 8 I have worked on and off for my Dad at his construction company, he usually does jobs that involve subdividing land then building separate townhouses on them and I have assisted him with painting, scaffolding, cleaning up rubbish, vacuuming, gurneying, digging, lawn mowing, jackhammering, cementing and lifting. I work usually long hours on the holidays for him and have been brought up around earning my own money even at a young age.</p>
            </div>
            <div className='exp3'>
              <h3>Experience - GPS Rugby Club • June 2022 – NOW</h3>
              <p>I work at GPS Rugby club most Saturdays when the Rugby 1st grade games are on, I don't really think of working here as a job I just enjoy connecting with people I know in the community and watching the game while serving club members.</p>
            </div>
            <div className='exp4'>
              <h3>Experience - The Gap Tavern • September 2022 - Janurary 2023</h3>
              <p>I recently started at working at The Gap Tavern hand over the past couple of months I have been developing skills in customer service and waiting customers, understanding how to manage customer satisfaction and food safety standards to uphold the reputation of a restaurant, I stopped working at the Gap Tavern to Focus on my lawn Mowing Business during the holidays however now during University I am looking for a casual job.</p>
            </div>
            <div className='exp5'>
              <h3>Experience - Spring Landscaping Business</h3>
              <p>At the beginning of the holidays me and a friend from Dominos decided to start our own Landscaping business and have been serving peoples lawns throughout The Gap 5 days a week from 8am to 6pm and outside of those hours taken on responsibility of representing and managing our own business, I’m looking to cut down on time spent mowing lawns and get a job that requires less after hours work to guarantee my success in University. Throughout running this business I’ve met lots of new people, understood how business works better and learnt to deal problems that can potentially jeopardize the whole operations of a business if dealt with the wrong way. I also understood how to manage my time to work it in with 2 other jobs without much rearranging.</p>
            </div>
            <div className='exp6'>
              <h3>Education - Marist College Ashgrove</h3>
              <p>I have recently graduated year 12, I achieved an ATAR of 76 and have been granted early entry into a Information Technology Course majoring in Computer Science at QUT.</p>
            </div>
            <div className='exp6'>
              <h3>Education - QUT Bachelors of Information Technology (Computer Science)</h3>
              <p>GPA - 5.0</p>
            </div>
            <div className='exp7'>
              <h3>Charity - MATES</h3>
              <p>Throughout school I have contributed many hours towards our schools charity organization MATES by cooking BBQs and delivering food to food shelters and other charity work. In 2018 I organized my own fundraiser for MATES after an old boy’s house burnt down just in front of the school selling customized pens with styluses which raised over $600.</p>
            </div>
          </div>
          <div className='referencesContainer'>
            <div className='ref1'>
              <h3>My Details</h3>
              <p>Ph 0478 116 053</p>
              <p>DOB 24/05/2005</p>
              <p>Email firedpistol@outlook.com</p>
              <p>Address 56 St Johns Ave Ashgrove, QLD 4060</p>
            </div>
            <div className='ref1.25'>
              <h3>Qualification - Microsoft Certified Security Operations Analyst Associate</h3>
              <p>Certification Number :FJCB64-7D272A</p>
              <p>Earned on: July 6, 2023</p>
              <img style={ {width: "400px"} } src={require('./azure_cert1.png')} alt='azure' />
            </div>
            <div className='ref1.5'>
              <h3>Qualification - Microsoft Certified Azure Fundamentals</h3>
              <p>Certification number: 61EM48-876CB5</p>
              <p>Earned on: June 24, 2023</p>
              <img style={ {width: "400px"} } src={require('./azure_cert.png')} alt='azure' />
            </div>
            <div className='ref1.25'>
              <h3>Qualification - Career Essentials in Generative AI by Microsoft and LinkedIn</h3>
              <p>Earned on: July 8, 2023</p>
              <img style={ {width: "400px"} } src={require('./linkedin.png')} alt='linkedin Cert' />
            </div>
            <div className='ref2'>
              <h3>Reference - Sarang Patel</h3>
              <p>Franchisee Dominos The Gap</p>
              <p>Ph 0433 827 903</p>
              <p>Email thegapdominos@gmail.com</p>
            </div>
            <div className='ref3'>
              <h3>Reference - Colleen Murphy</h3>
              <p>GPS Staff Manager</p>
              <p>Ph 0422 222 540</p>
            </div>
            <div className='ref4'>
              <h3>Qualification - FOOD SAFETY SUPERVISOR</h3>
              <p>USE HYGIENIC PRACTICES FOR FOOD SAFETY AND PARTICIPATE IN SAFE FOOD HANDLING PRACTICES (SITXFSA001 AND SITFSA001) </p>
            </div>
            <div className='ref4'>
              <h3>Qualification - RSA</h3>
              <p>PROVIDE RESPONSIBLE SERVICE OF ALCOHOL (SITHFAB002)</p>
            </div>
            <div className='ref4'>
              <h3>Qualification - RSG</h3>
              <p>PROVIDE RESPONSIBLE GAMBLING SERVICES (SITHGAM001)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
