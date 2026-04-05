const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>

      <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
        I’m a full-stack developer with 6+ years of experience in building
        scalable mobile applications, now focused on integrating Generative AI
        into real-world systems. I specialize in combining strong backend
        architecture with AI capabilities like LLM integration and
        Retrieval-Augmented Generation (RAG).
      </p>

      <div className="max-w-4xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-4">What I Do</h3>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
          <li>📱 Build cross-platform mobile apps using React Native</li>
          <li>
            🤖 Develop AI-powered applications using LLMs (OpenAI / Gemini)
          </li>
          <li>🧠 Implement RAG pipelines with embeddings & vector databases</li>
          <li>⚙️ Design scalable backend systems using Node.js & Express</li>
          <li>💻 Build full-stack applications with React.js</li>
          <li>🗄️ Work with MongoDB and real-world data systems</li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto text-left mt-10">
        <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
          <li>🔍 Advanced RAG systems</li>
          <li>⚡ Scalable AI backend architecture</li>
          <li>📊 Improving AI response quality</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
