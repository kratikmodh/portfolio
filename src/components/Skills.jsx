const Skills = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-6">Skills</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
        {/* AI SKILLS (NEW - MOST IMPORTANT) */}
        <div>
          <h3 className="text-xl font-semibold mb-2">🧠 AI & GenAI</h3>
          <ul className="space-y-1 text-gray-700">
            <li>LLM APIs (OpenAI / Gemini)</li>
            <li>RAG (Retrieval-Augmented Generation)</li>
            <li>Embeddings & Vector Databases</li>
            <li>Prompt Engineering</li>
          </ul>
        </div>

        {/* FRONTEND */}
        <div>
          <h3 className="text-xl font-semibold mb-2">💻 Frontend</h3>
          <ul className="space-y-1 text-gray-700">
            <li>React Native (6+ years)</li>
            <li>React.js</li>
            <li>JavaScript / TypeScript</li>
            <li>Redux</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-xl font-semibold mb-2">⚙️ Backend</h3>
          <ul className="space-y-1 text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-xl font-semibold mb-2">🛠 Tools & Platforms</h3>
          <ul className="space-y-1 text-gray-700">
            <li>AWS (EC2, S3)</li>
            <li>Firebase & Crashlytics</li>
            <li>CI/CD (Fastlane)</li>
            <li>Git & GitHub</li>
            <li>Xcode & Android Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
