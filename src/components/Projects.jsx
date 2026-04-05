const Projects = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-semibold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        {/* 🔥 FEATURED AI PROJECT */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
          <h3 className="text-2xl font-semibold mb-2">
            🚀 AI Resume Analyzer & Job Assistant
          </h3>
          <p className="text-gray-700">
            Full-stack AI application that analyzes resumes, detects skill gaps,
            and generates interview questions using LLMs. Designed with scalable
            backend architecture and real-world AI integration.
          </p>

          <ul className="mt-3 text-gray-800 list-disc ml-5">
            <li>AI-powered resume analysis using LLM APIs</li>
            <li>Job description matching & skill gap detection</li>
            <li>Interview question generation</li>
            <li>Full-stack system (React + Node + MongoDB)</li>
          </ul>

          <div className="mt-3">
            <a
              className="text-blue-500 underline"
              href="https://github.com/kratikmodh/genai-job-assistant"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 🔥 RAG PROJECT */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500">
          <h3 className="text-2xl font-semibold mb-2">
            🧠 RAG Pipeline (Python)
          </h3>
          <p className="text-gray-700">
            Built a complete Retrieval-Augmented Generation (RAG) pipeline from
            scratch using embeddings, vector databases, and semantic retrieval.
          </p>

          <ul className="mt-3 text-gray-800 list-disc ml-5">
            <li>Document ingestion & chunking</li>
            <li>Embedding generation</li>
            <li>Vector DB (Chroma)</li>
            <li>Context-aware response generation</li>
          </ul>

          <div className="mt-3">
            <a
              className="text-blue-500 underline"
              href="https://github.com/kratikmodh/rag-python-pipeline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 🔥 NODE BACKEND */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            ⚙️ AI Backend System (Node.js)
          </h3>
          <p className="text-gray-700">
            Designed a scalable backend system for AI applications with support
            for LLM integration and RAG-ready architecture.
          </p>

          <div className="mt-3">
            <a
              className="text-blue-500 underline"
              href="https://github.com/kratikmodh/rag-node-backend"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 🔥 SUPER APP ARCHITECTURE */}
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-purple-500">
          <h3 className="text-2xl font-semibold mb-2">
            🧩 Super App Mini-App Architecture (React Native)
          </h3>
          <p className="text-gray-700">
            Implemented a dynamic micro-app architecture where multiple apps
            from different repositories are loaded at runtime using bundles.
          </p>

          <ul className="mt-3 text-gray-800 list-disc ml-5">
            <li>Dynamic module loading via bundles</li>
            <li>Independent app deployment</li>
            <li>Scalable super-app architecture</li>
            <li>Improved modularity & release cycles</li>
          </ul>
        </div>

        {/* EXISTING PROJECTS */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            Breathalyser (Alcohol Testing App)
          </h3>
          <p className="text-gray-700">
            iPad app for Indigo Airlines replacing manual alcohol testing.
            Approved by DGCA, deployed across 36+ airports handling ~1000 tests
            daily.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            MorLuxury (E-commerce App)
          </h3>
          <p className="text-gray-700">
            Led development of a cosmetics e-commerce app with secure payment
            flows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
