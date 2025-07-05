"use client";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  const projects = [
    {
      title: "Ghost.ai",
      description:
        "Ghost.ai is your one-stop solution for meeting automation! Whether it's Zoom, Google Meet, we've got you covered. Our bot joins, records, and transcribes meetings with style, all while giving you detailed summaries and seamless integration with your workflows. Say goodbye to meeting chaos and hello to streamlined productivity. 🚀",
      year: "Jul-2025-Developing",
      link: "https://github.com/sahilr0x/ghost.ai",
    },
    {
      title: "Reposync",
      description:
        "This application is designed to fetch the top 10 latest commits from a GitHub repository. After retrieving the commits, an AI model summarizes them to provide a concise overview. Additionally, the application allows users to search for where these commits are used, where they exist, and the reasons behind the changes. For this functionality, LangChain has been used to process and analyze the commit data effectively. ",
      year: "2024",
      link: "https://github.com/sahilr0x/reposync",
    },
    {
      title: "Metaverse space",
      description: "Realtime multiplayer space ",
      year: "2024",
      link: "https://github.com/sahilr0x/metaverse-turbo",
    },
    {
      title: "Opnify",
      description: "Backend Logic for opinion trading(like Probo)",
      year: "2024",
      link: "https://github.com/sahilr0x/opnify-go",
    },
  ];

  // const writings = [
  //   {
  //     title: "Building Scalable Trading Systems",
  //     year: "2024",
  //     link: "#",
  //   },
  //   {
  //     title: "The Future of DeFi",
  //     year: "2024",
  //     link: "#",
  //   },
  //   {
  //     title: "Machine Learning in Finance",
  //     year: "2023",
  //     link: "#",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Sahil Revankar</h1>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>Developer</span>

                <span>Finance Enthusiast</span>
              </div>
            </div>
          </div>
          <p className="text-gray-400">
            Working as a freelance developer on multiple SaaS applications used
            by a variety of clients.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <a
                  href={project.link}
                  className="flex justify-between items-start hover:text-gray-300 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg underline decoration-gray-600 group-hover:decoration-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm ml-4">
                    {project.year}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Writings */}
        {/* <div className="mb-16">
          <h2 className="text-lg font-semibold mb-6">Writings</h2>
          <div className="space-y-4">
            {writings.map((writing, index) => (
              <div key={index} className="group">
                <a
                  href={writing.link}
                  className="flex justify-between items-center hover:text-gray-300 transition-colors"
                >
                  <h3 className="underline decoration-gray-600 group-hover:decoration-white transition-colors">
                    {writing.title}
                  </h3>
                  <span className="text-gray-500 text-sm">{writing.year}</span>
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex gap-6">
            <a
              href="https://github.com/sahilr0x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-revankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilrevankar20co21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Compose on Gmail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
