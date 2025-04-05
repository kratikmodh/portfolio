const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
        I’m a passionate mobile and full-stack developer with 5+ years of
        experience building scalable, maintainable apps using React Native and
        Node.js. From e-commerce to aviation-grade alcohol testing software, I
        specialize in solving real-world problems with elegant code and strong
        UX design.
      </p>
      <div className="max-w-4xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-4">What I Do</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
          <li>📱 Build cross-platform mobile apps using React Native</li>
          <li>🧠 Architect and develop backend APIs using Node.js + MongoDB</li>
          <li>
            📡 Integrate and manage BLE devices for real-time data exchange
          </li>
          <li>☁️ Deploy scalable solutions on AWS (EC2, S3, Lambda)</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
