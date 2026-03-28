"use client";

const projects = [
  {
    id: "planora",
    name: "Planora",
    description: "A Day planner/task scheduler for busy ones",
    tech: "Flutter+Firebase",
    status: "In-Progress",
    statusColor: "bg-yellow-500",
  },
  {
    id: "habitat",
    name: "Habitat",
    description: "Upcoming project",
    tech: "TBD",
    status: "Upcoming",
    statusColor: "bg-gray-500",
  },
  {
    id: "pro3",
    name: "Pro3",
    description: "Upcoming project",
    tech: "TBD",
    status: "Upcoming",
    statusColor: "bg-gray-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center gap-10 px-6">
      {/* <h1 className="text-4xl font-bold">Projects</h1> */}

      <div className="flex gap-6 items-start w-full px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#1B263B] flex-1 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500"
          >
            {/* Card Header - always visible */}
            <div className="px-6 py-8 flex items-center justify-between">
              <span className="font-semibold text-lg">{project.name}</span>
              <span className="text-xl">🗓️</span>
            </div>

            {/* Expandable Details */}
            <div className="max-h-0 group-hover:max-h-72 overflow-hidden transition-all duration-500">
              <div className="px-6 pb-6 flex flex-col gap-3">
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="bg-[#415A77] text-white text-xs text-center py-2 px-3 rounded-lg">
                  {project.tech}
                </div>
                <div className={`${project.statusColor} text-white text-xs text-center py-1 px-3 rounded-lg`}>
                  {project.status}
                </div>
                <button className="border border-white text-white text-xs py-1 px-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition">
                  GitHub 🐙
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}