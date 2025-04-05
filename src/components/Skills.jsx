const Skills = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="space-y-1 text-gray-700">
            <li>React Native</li>
            <li>JavaScript / TypeScript</li>
            <li>Redux</li>
            {/* <li>Tailwind CSS</li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>JWT/Auth</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
          <ul className="space-y-1 text-gray-700">
            <li>AWS (EC2, S3)</li>
            <li>Git & GitHub</li>
            {/* <li>BLE Integration</li> */}
            <li>Xcode & Android Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
