// Hero.jsx

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/portfolio/banner.png')" }} // use .webp or optimized .jpg
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full mb-4 border-4 border-white shadow-lg"
          loading="lazy"
        /> */}
        <h1 className="text-5xl md:text-6xl font-bold mb-3">Kratik Modh</h1>
        <p className="text-xl md:text-2xl mb-6">
          React Native Developer | Node.js Enthusiast
        </p>
        <a
          href="/portfolio/Kratik_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
