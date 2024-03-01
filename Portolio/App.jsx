import React from 'react';
import './index.css';
import Main from './Main';

function App() {
  return (
    <div>
      <header>
        <img src="images/image.jpg" alt="Afomia image" className="profile-image" />
        <h1>Your Name</h1>
        <p>Frontend Developer</p>
        <p>I am a third year Software Engineering student passionate about web development and problem solving. I enjoy building user-friendly and responsive web applications using modern technologies.</p>
      </header>
      <Main />
    </div>
  );
}

export default App;
