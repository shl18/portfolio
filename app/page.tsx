"use client";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const workExperience = [
    {
      title: "Full Stack Engineer",
      company: "Dream Launch Studios",
      type: "Freelance",
      duration: "Jan 2025 - July · 7 mos",
      location: "India · Remote",
      description:
        "Freelance contractor to build MVPs from scratch (writelikehuman.ai and nyclisting.fyi) and more",
    },
    {
      title: "Full Stack Engineer",
      company: "100xDevs",
      type: "Full-time",
      duration: "Oct 2024 - Mar 2025 · 6 mos",
      location: "Delhi, India · On-site",
      description:
        "Worked on scalable projects, making them scalable with Kubernetes and AWS",
    },
    {
      title: "Software Engineer",
      company: "Teknorix",
      type: "Internship",
      duration: "Oct 2022 - Dec 2022 · 3 mos",
      location: "Verna, India · On-site",
      description: "First internship, not learned anything",
    },
  ];

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
      description: "Backend Engine for Opinion trading(like Probo)",
      year: "2024",
      link: "https://github.com/sahilr0x/opnify-go",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                Sahil Revankar
              </h1>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 mb-4">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Developer
                </span>
                <span className="hidden sm:inline text-gray-600">·</span>
                <span>Finance Enthusiast</span>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl">
                Working as a freelance developer on multiple SaaS applications
                used by a variety of clients.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Z5CMU23TGpwXqtbHd03DK50q9-YEAt03/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-800 pl-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-blue-400 font-medium">{job.company}</p>
                    <p className="text-gray-400">{job.duration}</p>
                    <p className="text-gray-500">{job.location}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {job.company === "Dream Launch Studios" ? (
                      <>
                        Freelance contractor to build MVPs from scratch (
                        <a
                          href="https://www.writelikeahuman.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          writelikehuman.ai
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://nyclistings.fyi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          nyclisting.fyi
                        </a>
                        ) and more
                      </>
                    ) : (
                      job.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Personal Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <a
                  href={project.link}
                  className="block p-6 border border-gray-800 rounded-lg hover:border-gray-700 hover:bg-gray-900/50 transition-all"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Let &apos; s connect
              </h3>
              <p className="text-gray-400">
                Get in touch for collaborations and opportunities
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/sahilr0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-revankar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilrevankar20co21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="Compose on Gmail"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/sahillrevankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="Compose on X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
