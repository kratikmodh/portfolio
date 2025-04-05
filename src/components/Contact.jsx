// Contact.jsx

const Contact = () => {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-700">
        Let’s connect! Feel free to drop a message:
      </p>
      <div className="mt-6">
        <a
          href="mailto:modhkratik@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </div>

      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://www.linkedin.com/in/kratik-modh-a5a6451a5"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/KratikModh2611"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://github.com/kratikmodh"
          target="_blank"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
