import React from 'react';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white font-inter">
      {/* Tailwind CSS CDN - Ensure this is loaded in your index.html if not using a build tool */}
      {/* Custom Tailwind config should be defined in index.html before the Tailwind CDN script. */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#E91E63]">Chandradithya</span>
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-[#E91E63] transition duration-300">Home</a>
          <a href="#about" className="hover:text-[#E91E63] transition duration-300">About</a>
          <a href="#skills" className="hover:text-[#E91E63] transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-[#E91E63] transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-[#E91E63] transition duration-300">Contact</a>
        </nav>
        {/* Let's Talk Button */}
        <a href="#contact" className="bg-[#E91E63] text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-lg">
          Let's Talk
        </a>
        {/* Mobile Menu Button (Hamburger) - Not implemented for brevity, but a common pattern */}
        <button className="md:hidden text-white focus:outline-none">
          {/* SVG for hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]"> {/* Adjusted min-height */}
        {/* Background pattern - simplified */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4h-2v4H0v2h4v4h2v-4h4v-2H6zm0 20v-4h-2v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4h-2v4H0v2h4v4h2v-4h4v-2H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative z-10">
          <p className="text-[#A0A0A0] text-lg mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#E91E63]">
            Gaddipati Chandradithya
          </h1>
          <p className="text-2xl font-semibold text-[#A0A0A0] mb-6">
            Computer Science Undergraduate & Future Tech Innovator
          </p>
          <p className="text-lg text-[#A0A0A0] mb-8 max-w-lg mx-auto md:mx-0">
            Technically driven and highly motivated, seeking opportunities to enhance personal and professional development with expertise in Machine Learning and full-stack development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#E91E63] text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300 shadow-lg">
              View My Work
            </button>
            <button className="flex items-center space-x-2 text-white border border-[#2C2C44] px-8 py-3 rounded-lg hover:bg-[#2C2C44] transition duration-300">
              {/* Download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 relative z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#E91E63] flex items-center justify-center shadow-2xl">
            {/* Placeholder image - replace with your actual image */}
            <img
              src="https://placehold.co/400x400/E91E63/FFFFFF?text=Your+Photo"
              alt="Chandradithya"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/E91E63/FFFFFF?text=Image+Error"; }}
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#E91E63] mb-4">About Me</h2>
        <p className="text-[#A0A0A0] text-center text-lg mb-12">Learn more about my background, education, and passion for technology</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#2C2C44] p-8 md:p-12 rounded-lg shadow-xl">
          {/* My Journey */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
            <p className="text-[#A0A0A0] text-lg mb-4">
              I am a technically driven and highly motivated Computer Science undergraduate seeking opportunities to enhance personal and professional development. With a strong foundation in programming languages like <span className="text-[#E91E63]">C</span>, <span className="text-[#E91E63]">Java</span>, and <span className="text-[#E91E63]">Python</span>, I've developed hands-on expertise in SQL database management.
            </p>
            <p className="text-[#A0A0A0] text-lg">
              My passion lies in <span className="text-[#E91E63]">Machine Learning</span> and <span className="text-[#E91E63]">front-end technologies</span>, where I combine analytical thinking with creative problem-solving. I pride myself on being an effective communicator with excellent analytical and problem-solving abilities, always eager to tackle complex challenges and learn new technologies.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {/* B.Tech */}
              <div className="bg-[#1A1A2E] p-6 rounded-lg flex items-start space-x-4 shadow-md">
                {/* Book icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text text-[#E91E63] mt-1"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M10 12H7"/><path d="M13 16H7"/></svg>
                <div>
                  <h4 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h4>
                  <p className="text-[#A0A0A0] text-sm">Marrri Laxman Reddy Institute of Technology and Management, Hyderabad</p>
                  <p className="text-[#A0A0A0] text-sm">2022 - 2026</p>
                  <p className="text-[#A0A0A0] text-sm mt-2">CGPA: <span className="font-bold text-white">7.95</span></p>
                </div>
              </div>
              {/* Intermediate */}
              <div className="bg-[#1A1A2E] p-6 rounded-lg flex items-start space-x-4 shadow-md">
                {/* School icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school text-[#E91E63] mt-1"><path d="M14 22v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/><path d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4"/><path d="M12 2v20"/><path d="M20 10H4"/></svg>
                <div>
                  <h4 className="text-xl font-semibold">Intermediate</h4>
                  <p className="text-[#A0A0A0] text-sm">Narayana Junior College, Kukatpally</p>
                  <p className="text-[#A0A0A0] text-sm">2020 - 2022</p>
                  <p className="text-[#A0A0A0] text-sm mt-2">Percentage: <span className="font-bold text-white">87.8%</span></p>
                </div>
              </div>
              {/* SSC */}
              <div className="bg-[#1A1A2E] p-6 rounded-lg flex items-start space-x-4 shadow-md">
                {/* Graduation cap icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-[#E91E63] mt-1"><path d="M21.43 14.83a2 2 0 0 0-1.42 0L12 19 3.99 14.83a2 2 0 0 0-1.42 0L1 15.5V11l10.43-5.22a2 2 0 0 1 1.14 0L23 11v4.5l-1.57-.67Z"/><path d="M22 15.5v2.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5"/></svg>
                <div>
                  <h4 className="text-xl font-semibold">SSC</h4>
                  <p className="text-[#A0A0A0] text-sm">Narayana High School</p>
                  <p className="text-[#A0A0A0] text-sm">2020</p>
                  <p className="text-[#A0A0A0] text-sm mt-2">CGPA: <span className="font-bold text-white">10.0</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="container mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#E91E63] mb-4">Skills & Expertise</h2>
        <p className="text-[#A0A0A0] text-center text-lg mb-12">A comprehensive overview of my technical skills and core competencies</p>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Programming Languages */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Code icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code text-[#E91E63] mx-auto mb-4"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">C</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Java (OOP)</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Python</span>
            </div>
          </div>
          {/* Web Technologies */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Globe icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe text-[#E91E63] mx-auto mb-4"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg>
            <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">HTML</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">CSS</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">JavaScript</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">React</span>
            </div>
          </div>
          {/* Database */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Database icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database text-[#E91E63] mx-auto mb-4"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 18 0"/><path d="M3 12v7a3 3 0 0 0 6 0v-7"/><path d="M12 12v7a3 3 0 0 0 6 0v-7"/></svg>
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">SQL</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Database Design</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Query Optimization</span>
            </div>
          </div>
          {/* Machine Learning */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Brain icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-[#E91E63] mx-auto mb-4"><path d="M12 2c-3.1 0-6 1.8-8 4-2 2.2-2 5.8 0 8 2 2.2 4.9 4 8 4s6-1.8 8-4c2-2.2 2-5.8 0-8-2-2.2-4.9-4-8-4z"/><path d="M12 2v20"/><path d="M12 12c-3.1 0-6-1.8-8-4"/><path d="M12 12c3.1 0 6-1.8 8-4"/></svg>
            <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">NumPy</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">pandas</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">scikit-learn</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">ML Algorithms</span>
            </div>
          </div>
        </div>

        {/* Core Competencies */}
        <h3 className="text-3xl font-semibold text-center mb-8">Core Competencies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Problem Solving</span>
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Analytical Thinking</span>
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Communication</span>
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Team Collaboration</span>
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Project Management</span>
          <span className="bg-[#E91E63] text-white px-6 py-2 rounded-full text-lg shadow-md hover:scale-105 transition duration-300 cursor-pointer">Research & Development</span>
        </div>
      </section>

      {/* Academic & Project Highlights Section */}
      <section id="highlights" className="container mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#E91E63] mb-4">Academic & Project Highlights</h2>
        <p className="text-[#A0A0A0] text-center text-lg mb-12">A snapshot of my academic journey and technical achievements</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SSC CGPA */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Trophy icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy text-[#E91E63] mx-auto mb-4"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34l-2.5 1.5V9.5l4.5-3 4.5 3v5.66l-2.5-1.5z"/><path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34l-2.5 1.5V9.5l4.5-3 4.5 3v5.66l-2.5-1.5z"/></svg>
            <h3 className="text-5xl font-bold text-[#E91E63] mb-2">10.0</h3>
            <p className="text-[#A0A0A0]">SSC CGPA</p>
            <p className="text-[#A0A0A0] text-sm">Academic Excellence</p>
          </div>
          {/* Current CGPA */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Line chart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-line-chart text-[#E91E63] mx-auto mb-4"><path d="M3 3v18h18"/><path d="m18 10-6 6-4-4-5 5"/></svg>
            <h3 className="text-5xl font-bold text-[#E91E63] mb-2">7.95</h3>
            <p className="text-[#A0A0A0]">Current CGPA</p>
            <p className="text-[#A0A0A0] text-sm">B.Tech Performance</p>
          </div>
          {/* Intermediate Percentage */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Award icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-[#E91E63] mx-auto mb-4"><circle cx="12" cy="8" r="7"/><polyline points="12 15 12 22"/><polyline points="17 19 12 15 7 19"/></svg>
            <h3 className="text-5xl font-bold text-[#E91E63] mb-2">87.8%</h3>
            <p className="text-[#A0A0A0]">Intermediate</p>
            <p className="text-[#A0A0A0] text-sm">Academic Achievement</p>
          </div>
          {/* Major Projects */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl text-center">
            {/* Users icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#E91E63] mx-auto mb-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <h3 className="text-5xl font-bold text-[#E91E63] mb-2">2+</h3>
            <p className="text-[#A0A0A0]">Major Projects</p>
            <p className="text-[#A0A0A0] text-sm">Technical Innovation</p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#E91E63] mb-4">Featured Projects</h2>
        <p className="text-[#A0A0A0] text-center text-lg mb-12">A showcase of my technical projects demonstrating expertise in machine learning and software development</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Card 1: Spam Transformer Model */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              {/* Robot icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot text-[#E91E63]"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M7 15h.01"/><path d="M17 15h.01"/></svg>
              <h3 className="text-2xl font-semibold">Spam Transformer Model for SMS Spam Detection</h3>
            </div>
            <p className="text-[#A0A0A0] mb-4">
              Advanced spam detection system leveraging state-of-the-art Transformer architectures including BERT and GPT. Fine-tuned for high-accuracy classification with comprehensive preprocessing and feature extraction capabilities.
            </p>
            <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Python</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Transformers</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">BERT</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">GPT</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">TensorFlow</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">scikit-learn</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-[#A0A0A0] space-y-1 mb-6">
              <li>Transformer-based architecture implementation</li>
              <li>Fine-tuned BERT/GPT models for spam classification</li>
              <li>High accuracy rate with optimized performance</li>
              <li>Comprehensive text preprocessing pipeline</li>
            </ul>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-[#1A1A2E] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                {/* Code icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>View Code</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#1A1A2E] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                {/* Play icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>Live Demo</span>
              </button>
            </div>
          </div>

          {/* Project Card 2: Bail Reckoner */}
          <div className="bg-[#2C2C44] p-8 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              {/* Scale icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale text-[#E91E63]"><path d="m16 16 3-3a1 1 0 0 0 0-1.42l-1.42-1.42a1 1 0 0 0-1.42 0L12 12"/><path d="M16 16v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3"/><path d="M12 12V3h3a2 2 0 0 1 2 2v7"/></svg>
              <h3 className="text-2xl font-semibold">Bail Reckoner</h3>
            </div>
            <p className="text-[#A0A0A0] mb-4">
              Intelligent decision-support system designed for legal professionals to estimate bail amounts. Combines rule-based logic with machine learning models to provide accurate bail predictions based on case parameters.
            </p>
            <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Python</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Machine Learning</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">Flask</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">SQLite</span>
              <span className="bg-[#1A1A2E] px-4 py-1 rounded-full text-sm text-[#A0A0A0]">pandas</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-[#A0A0A0] space-y-1 mb-6">
              <li>Rule-based decision engine</li>
              <li>ML-powered prediction algorithms</li>
              <li>Legal case parameter analysis</li>
            </ul>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-[#1A1A2E] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                {/* Code icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span>View Code</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#1A1A2E] text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                {/* Play icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>Live Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Call to action for collaboration */}
        <div className="text-center mt-16">
          <p className="text-[#A0A0A0] text-lg mb-6">Interested in collaborating or learning more about my projects?</p>
          <a href="#contact" className="bg-[#E91E63] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition duration-300 shadow-lg">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 md:py-24 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#E91E63] mb-4">Get In Touch</h2>
        <p className="text-[#A0A0A0] text-center text-lg mb-12">Ready to discuss opportunities, collaborations, or just want to say hello? I'd love to hear from you.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#2C2C44] p-8 md:p-12 rounded-lg shadow-xl">
          {/* Contact Information */}
          <div>
            <p className="text-[#A0A0A0] text-lg mb-8">
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations. Whether you're a recruiter, fellow developer, or someone with an exciting project idea, feel free to reach out.
            </p>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                {/* Map pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#E91E63] flex-shrink-0 mt-1"><path d="M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M12 22s8-4 8-10a8 8 0 0 0-16 0c0 6 8 10 8 10Z"/></svg>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Address</h4>
                  <p className="text-[#A0A0A0]">Flat No. 501, North Block, Lakshmi's Prestige</p>
                  <p className="text-[#A0A0A0]">Mayuri Nagar, Miyapur, Hyderabad, Telangana - 500049</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                {/* Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-[#E91E63] flex-shrink-0 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.18l-3.52-1.04a2 2 0 0 0-1.74.52l-2.54 2.54a2 2 0 0 1-2.83 0L2 15.5V9.5a2 2 0 0 1 2.18-2.18l3.52-1.04a2 2 0 0 0 1.74-.52l2.54-2.54a2 2 0 0 1 2.83 0L22 8.42V16.92z"/></svg>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Phone</h4>
                  <p className="text-[#A0A0A0]">+91 95028 35293</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start space-x-4">
                {/* Mail icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#E91E63] flex-shrink-0 mt-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Email</h4>
                  <p className="text-[#A0A0A0]">chandradithya.g@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#A0A0A0] text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" className="w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-[#E91E63] focus:ring-[#E91E63] outline-none transition duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#A0A0A0] text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" className="w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-[#E91E63] focus:ring-[#E91E63] outline-none transition duration-300" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#A0A0A0] text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" className="w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-[#E91E63] focus:ring-[#E91E63] outline-none transition duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#A0A0A0] text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity..." className="w-full p-3 rounded-lg bg-[#1A1A2E] border border-gray-700 focus:border-[#E91E63] focus:ring-[#E91E63] outline-none transition duration-300"></textarea>
              </div>
              <button type="submit" className="flex items-center justify-center space-x-2 bg-[#E91E63] text-white px-8 py-4 rounded-lg font-semibold text-lg w-full hover:bg-pink-700 transition duration-300 shadow-lg">
                {/* Send icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M15 15 22 2"/></svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] text-[#A0A0A0] py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-[#E91E63] mb-2">Chandradithya</h3>
            <p className="text-[#A0A0A0]">Computer Science Undergraduate & Future Tech Innovator</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            {/* Social Media Icons */}
            <a href="#" className="w-10 h-10 bg-[#2C2C44] rounded-full flex items-center justify-center hover:bg-[#E91E63] transition duration-300">
              {/* Dribbble icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble text-white"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.13C15.87 2.07 11.93 1.07 8 2.07c-3.93 1-6.87 4.07-7.13 8.07 0 4 2.87 7.07 7.13 8.07s7.13 1 10.13-2.07c2.87-3 2.87-7.07 0-10.07z"/><path d="M8 8s.5 1.5 3 3s5 0 5-1.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#2C2C44] rounded-full flex items-center justify-center hover:bg-[#E91E63] transition duration-300">
              {/* LinkedIn icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#2C2C44] rounded-full flex items-center justify-center hover:bg-[#E91E63] transition duration-300">
              {/* Twitter icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-17 17A19.11 19.11 0 0 1 0 19.7c2.2.8 4.6 1.2 7 1.2C15 20.9 21 15.5 21 7.5c0-.2 0-.4-.1-.6C21.6 6.5 22 4 22 4z"/></svg>
            </a>
          </div>
          <a href="#home" className="flex items-center space-x-2 text-[#A0A0A0] hover:text-[#E91E63] transition duration-300">
            <span>Back to Top</span>
            {/* Up arrow icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up"><path d="m12 19-7-7 7-7"/><path d="M12 19V5"/></svg>
          </a>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} Gaddipati Chandradithya. All rights reserved.</p>
          <p className="mt-2">Made with <span className="text-red-500">❤️</span> using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
