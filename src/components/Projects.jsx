// Projects.jsx

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Alcohol Testing App</h3>
          <p className="text-gray-700">
            Patented iPad app with BLE integration for real-time alcohol test
            data collection. Built using React Native and Node.js. Live in
            airports across India for Indigo Airlines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">E-commerce App</h3>
          <p className="text-gray-700">
            Led a team of 6 for a secure U.S. e-commerce platform. Focused on
            mobile security, payment integration, and intuitive UX.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            Live Streaming & Whiteboard App
          </h3>
          <p className="text-gray-700">
            Used Agora for video/audio and bridged native iOS/Android code for
            real-time whiteboard. Targeted for virtual classrooms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            Health App with Wearable Sync
          </h3>
          <p className="text-gray-700">
            Integrated Apple Watch and Google Fit APIs to collect and visualize
            user health data inside a cross-platform React Native app.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            MERN Stack Diamond Website
          </h3>
          <p className="text-gray-700">
            Built and deployed a website using ReactJS and backend using Node.js
            and MongoDB and deployed on AWS EC2. Razorpay payment gateway
            integrated.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            Agriculture Analytics App
          </h3>
          <p className="text-gray-700">
            Developed dynamic charts and graphs for farmers and analysts to
            track seasonal growth and climate-based outputs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Taqwea</h3>
          <p className="text-gray-700">
            Mobile app for live video classes with chat functionality.
            <br></br>
            <a
              className="text-blue-500 underline"
              href="https://play.google.com/store/apps/details?id=com.taqwea"
              target="_blank"
            >
              Play Store
            </a>{" "}
            |
            <a
              className="text-blue-500 underline ml-1"
              href="https://apps.apple.com/in/app/%D9%85%D9%86%D8%B5%D8%A9-%D8%AA%D9%82%D9%88%D9%8A%D8%A9/id1660015433"
              target="_blank"
            >
              App Store
            </a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">MorLuxury</h3>
          <p className="text-gray-700">
            E-commerce platform for beauty products.
            <br></br>
            <a
              className="text-blue-500 underline"
              href="https://play.google.com/store/apps/details?id=com.morluxury"
              target="_blank"
            >
              Play Store
            </a>{" "}
            |
            <a
              className="text-blue-500 underline ml-1"
              href="https://apps.apple.com/in/app/morluxury/id1645865886"
              target="_blank"
            >
              App Store
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
