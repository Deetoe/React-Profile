export default function Resume() {
    return (
      <section className="space-y-4">
        <a
          href="/resume.pdf"
          download
          className="text-blue-600 underline block"
        >
          Download Resume (PDF)
        </a>
        <h2 className="text-lg font-semibold">Proficiencies</h2>
        <ul className="list-disc pl-6">
          <li>HTML / CSS / JavaScript</li>
          <li>React / Vite</li>
          <li>Node.js / Express</li>
          <li>SQL / NoSQL</li>
          <li>RESTful APIs</li>
          <li>Git / GitHub</li>
        </ul>
      </section>
    );
  }