// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import profileImg from './images/profileimg.jpeg'; 
import profileImg1 from './images/ankitpic.jpg'; 
import dsacer from './images/Dsacer.png'; 
import w3 from './images/W3elitesCer.png'; 
import lead from './images/lead.png'; 
import cpp from './images/cpp.png'; 
import nptel from './images/NptelCer.png'; 
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const thoughts = [
  "The best way to predict the future is to create it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Fear prevents life.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Hard work always pays off.",
  "Do what you can with all you have, wherever you are.",
  "Blood is better than tears.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The journey of a thousand miles begins with one step.",
  "Always take out stones from your shoe.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder the battle, the sweeter the victory.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it."
];


function App() {
  const [role, setRole] = useState("Full Stack Developer");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [thought, setThought] = useState('');

  useEffect(() => {
    // Get today's "thought" based on the current date
    const today = new Date();
    const thoughtIndex = today.getDate() % thoughts.length;
    setThought(thoughts[thoughtIndex]);
  }, []);

  useEffect(() => {
    const roles = ["Data Scientist", "Software Developer", "Programmer"];
    let currentRole = roles[index];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length && isTyping) {
        setRole(currentRole.substring(0, currentIndex));
        currentIndex++;
      } else if (currentIndex > currentRole.length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [isTyping, index]);

  return (
    <div className="font-sans">
       <nav className="flex justify-between items-center p-4 bg-black text-white">
        <div className="text-2xl font-bold">Portfolio</div>

        <div>
          <a 
            href="/ankit_cv.pdf" 
            download 
            className="bg-gradient-to-r from-red-800 via-black to-blue-800 hover:from-red-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Download CV
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white">
        
        {/* Profile Image */}
        <div className="w-40 h-40 mb-6">
  <img 
    src={profileImg1}
    alt="Abishek Yadav"
    className="w-full h-full object-cover rounded-full border-4 border-pink-500 shadow-lg"
  />
</div>


        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">
          Ankit Kumar Roy
        </h1>
        <p className="text-2xl md:text-3xl mb-2 font-extrabold animate-pulse">
          {role}
        </p>
        <p className="mt-4 max-w-2xl text-lg animate-fade-in">
  Passionate about uncovering insights from data, I strive to transform complex datasets into meaningful solutions that drive informed decisions. With a strong foundation in data science and analytics, I’m constantly learning and evolving to shape the future of intelligent technology.
</p>


      </section>

{/* About Section */}
<section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
    About Me
  </h2>

  <div className="max-w-5xl mx-auto bg-white bg-opacity-10 rounded-2xl shadow-2xl p-10 backdrop-blur-md space-y-8">
    {/* Summary Card */}
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl space-y-4">
      <h3 className="text-3xl font-bold mb-2 text-pink-400">Aspiring Data Scientist</h3>
      <p className="text-white text-lg leading-relaxed">
        Passionate about turning raw data into actionable insights, I specialize in <span className="text-yellow-300 font-medium">data analysis, visualization, and predictive modeling</span>. 
        With hands-on experience using <span className="text-yellow-300">Python, R, Tableau, and Excel</span>, I have developed projects that forecast trends and optimize business strategies.
        <br /><br />
        Certified in <span className="text-yellow-300">Advanced Distributed Systems (NPTEL)</span>, <span className="text-yellow-300">Data Visualization</span>, and <span className="text-yellow-300">Generative AI</span>, 
        I am constantly upgrading my skills to solve real-world problems using data. I have completed over <span className="text-yellow-300">100+ LeetCode problems</span> and actively contribute to 
        community-driven goals like the <span className="text-yellow-300">United Nations Sustainable Development Goals (SDGs)</span>.
      </p>
    </div>

    {/* Skills */}
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
      <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400 tracking-wide">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Programming Languages */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h4 className="text-xl font-bold text-yellow-300 mb-3">Programming Languages</h4>
          <ul className="text-white space-y-1 list-disc list-inside">
            <li>C++</li>
            <li>Java</li>
            <li>C</li>
            <li>Python</li>
            <li>R</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h4 className="text-xl font-bold text-yellow-300 mb-3">Tools & Platforms</h4>
          <ul className="text-white space-y-1 list-disc list-inside">
            <li>Windows</li>
            <li>Linux / Ubuntu</li>
            <li>Oracle</li>
            <li>Excel</li>
            <li>Tableau</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h4 className="text-xl font-bold text-yellow-300 mb-3">Databases</h4>
          <ul className="text-white space-y-1 list-disc list-inside">
            <li>MySQL</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
          <h4 className="text-xl font-bold text-yellow-300 mb-3">Soft Skills</h4>
          <ul className="text-white space-y-1 list-disc list-inside">
            <li>Teamwork</li>
            <li>Problem-Solving</li>
            <li>Critical Thinking</li>
            <li>Decision Making</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl">
      <h3 className="text-3xl font-bold text-yellow-400 mb-4">Contact</h3>
      <ul className="text-white text-lg space-y-2">
        <li><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/ankitroy29" className="text-blue-400 hover:underline">ankitroy29</a></li>
        <li><strong>Email:</strong> ankitkumar98roy@gmail.com</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Ankit-Roy29" className="text-blue-400 hover:underline">Ankit-Roy29</a></li>
        <li><strong>Mobile:</strong> +91 7856919337</li>
      </ul>
    </div>
  </div>
</section>

{/* Projects Section */}
<section className="py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white" id="projects">
  <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse">
    My Projects
  </h2>

  <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">

    {/* Project 1 - Advanced Calculator */}
    <div className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-blue-500 hover:scale-105 hover:shadow-blue-500 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-blue-400 mb-4">Advanced Calculator</h3>
        <p className="text-sm mb-4">
          <span className="text-yellow-300 font-semibold">Tech Stack:</span> Java, Eclipse IDE
        </p>
        <p className="text-base leading-relaxed text-gray-300 mb-6">
          Built using Java Swing, the calculator supports scientific functions like trigonometry, square root, and power. It includes exception handling and input history tracking.
        </p>
      </div>
      <button disabled className="mt-4 inline-block px-4 py-2 bg-gray-600 text-white rounded-lg opacity-50 cursor-not-allowed">
        Offline Project
      </button>
    </div>

    {/* Project 2 - Sales Data Dashboard */}
    <div className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-green-500 hover:scale-105 hover:shadow-green-500 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-green-400 mb-4">Sales Data Dashboard</h3>
        <p className="text-sm mb-4">
          <span className="text-yellow-300 font-semibold">Tech Stack:</span> Tableau, Tableau Prep Builder
        </p>
        <p className="text-base leading-relaxed text-gray-300 mb-6">
          Developed an interactive dashboard visualizing customer data and revenue. Enabled trend identification and sales forecasting with a 20% rise in seasonal insights.
        </p>
      </div>
      <button disabled className="mt-4 inline-block px-4 py-2 bg-gray-600 text-white rounded-lg opacity-50 cursor-not-allowed">
        Private Dataset
      </button>
    </div>

    {/* Project 3 - E-Commerce Website */}
    <div className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-pink-500 hover:scale-105 hover:shadow-pink-500 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-pink-400 mb-4">E-Commerce Website</h3>
        <p className="text-sm mb-4">
          <span className="text-yellow-300 font-semibold">Tech Stack:</span> HTML, CSS
        </p>
        <p className="text-base leading-relaxed text-gray-300 mb-6">
          Created a responsive shopping platform with login/registration, real-time inventory tracking, secure payment integration, and mobile optimization.
        </p>
      </div>
      <a href="https://github.com/Ankit-Roy29" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-center">
        View GitHub
      </a>
    </div>

    {/* Optional: Placeholder for future project */}
    <div className="bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-purple-500 hover:scale-105 hover:shadow-purple-500 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Coming Soon</h3>
        <p className="text-sm mb-4">
          <span className="text-yellow-300 font-semibold">Tech Stack:</span> TBD
        </p>
        <p className="text-base leading-relaxed text-gray-300 mb-6">
          Stay tuned for upcoming projects exploring data science, machine learning, and AI-powered web applications.
        </p>
      </div>
      <button disabled className="mt-4 inline-block px-4 py-2 bg-gray-600 text-white rounded-lg opacity-50 cursor-not-allowed">
        Coming Soon
      </button>
    </div>

  </div>
</section>




{/* Achievements & Certifications */}
<section className="py-20 px-8 bg-gradient-to-bl from-indigo-800 to-gray-900 text-white" data-aos="fade-right">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
    Certifications
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Certificate 1 */}
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Advanced Distributed System</h3>
      <p className="text-gray-300 text-lg mb-4">
        NPTEL — Aug 2024 to Dec 2024
      </p>
    </div>

    {/* Certificate 2 */}
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">Data Visualization in Tableau</h3>
      <p className="text-gray-300 text-lg mb-4">
        Coursera — November 2024
      </p>
    </div>

    {/* Certificate 3 */}
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-green-400">Data Structures and Algorithms</h3>
      <p className="text-gray-300 text-lg mb-4">
        Board Infinity — May 2024 to June 2024
      </p>
    </div>

    {/* Certificate 4 */}
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-purple-400">Generative AI for Everyone</h3>
      <p className="text-gray-300 text-lg mb-4">
        Coursera — Jan 2024 to Apr 2024
      </p>
    </div>

    {/* Certificate 5 */}
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-pink-400">Advanced Excel for Business Analytics</h3>
      <p className="text-gray-300 text-lg mb-4">
        Coursera — Jan 2024 to Mar 2024
      </p>
    </div>

  </div>
</section>






     {/* Education */}
<section className="py-20 px-8 bg-gray-800 text-white" data-aos="fade-left">
  <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Education
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 text-center">
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Lovely Professional University</h3>
      <p className="text-gray-300 mb-2">B.Tech in CSE</p>
      <p className="text-gray-400">CGPA: 6.5</p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 text-center">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Siyaram Utchar Vidyalaya</h3>
      <p className="text-gray-300 mb-2">12th - PCMC</p>
      <p className="text-gray-400">Percentage:69%</p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 text-center">
      <h3 className="text-2xl font-semibold text-pink-400 mb-4">Kalyani public School</h3>
      <p className="text-gray-300 mb-2">10th Grade</p>
      <p className="text-gray-400">Percentage: 62%</p>
    </div>

  </div>
</section>


      {/* Contact Section */}
    {/* Contact Section */}
<section className="py-20 px-8 bg-gradient-to-bl from-indigo-800 to-gray-900 text-white" data-aos="fade-right">
  <h2 className="text-4xl font-bold text-center mb-10">Let’s Connect</h2>

  <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
    <form action="https://formsubmit.co/abishek17501@gmail.com" method="POST" className="space-y-6">

      {/* Name */}
      <div>
        <label className="block mb-2 text-lg font-semibold">Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-lg font-semibold">Email</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          placeholder="Enter your email"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block mb-2 text-lg font-semibold">Subject</label>
        <input 
          type="text" 
          name="subject" 
          required 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          placeholder="Subject (eg: Freelance Project, Job Opportunity)"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-lg font-semibold">Message</label>
        <textarea 
          name="message" 
          rows="5" 
          required 
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          placeholder="Write your message here..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-300"
      >
        Send Message
      </button>

      {/* Hidden field to disable CAPTCHA */}
      <input type="hidden" name="_captcha" value="false" />
    </form>
  </div>
</section>
<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10 text-red-500 animate-pulse">Ankit Kumar roy</h1>
      <p className="text-gray-400 mb-16 text-center">
        Email: ankitkumar98roy@gmail.com | Mobile: +91 7856919337
      </p>

    

      
      <section className="bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white p-12 mt-16 rounded-lg shadow-lg">
        <h3 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Thought of the Day
        </h3>
        <p className="text-lg text-center italic max-w-3xl mx-auto">
          {thought}
        </p>
      </section>
    </div>

 


      {/* Footer */}
      <footer className="py-6 text-center bg-black text-white border-t border-gray-700">
        <p className="text-sm">&copy; 2025 Ankit kumar roy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;






