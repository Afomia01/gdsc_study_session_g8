import React from 'react';

function Main() {
  return (
    <div className="container">
      <img className="profile-image" src="images/image.jpg" alt="Afomia Image" />
      <h2>About Me</h2>
      <p>
        I am a third-year Software Engineering student passionate about web development and problem solving. I enjoy building
        user-friendly and responsive web applications using modern technologies.
      </p>
      <h2>Projects</h2>
      <div className="project">
        <h3>Venture Ethiopia Tour and Travel Site</h3>
        <p>A tour and travel website showcasing the beauty and culture of Ethiopia.</p>
        <p>Technologies used: HTML, CSS, JavaScript, React</p>
        <a href="https://github.com/Afomia01/IP-project" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project">
        <h3>Ecommerce Website</h3>
        <p>An online shopping website for selling various products.</p>
        <p>Technologies used: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</p>
        <a href="" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}

export default Main;
