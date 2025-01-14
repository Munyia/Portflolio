

const Resume = () => {
  return (
    <section id="resume" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <p>Click below to view or download my resume:</p>
      <div className="flex space-x-4 mt-4">
        <a href="/path-to-your-resume.pdf" target="_blank" className="text-sec underline">View Resume</a>
        <a href="/path-to-your-resume.pdf" download className="text-sec underline">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;
