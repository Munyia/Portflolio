

const Projects = () => {
  return (
    <section id="works" className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your project components here */}
        <div className="bg-white p-4 shadow-lg">
          <h3 className="text-lg font-bold">Project 1</h3>
          <p>Project description...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
