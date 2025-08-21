"use client";
import Image from "next/image";
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
    <div className="min-h-screen bg-stone-100 text-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <Image
              src="/Profiel.png"
              alt="Sahil Revankar"
              width={256}
              height={256}
              priority
            />
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3">
                Sahil Revankar
              </h1>
              <p className="text-neutral-600 mb-4">
                Developer · Finance Enthusiast
              </p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a
                  href="https://drive.google.com/file/d/1c3mKcEp8MxBjRoj_SbRE5FCtzAkZ-Olb/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilrevankar20co21@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
                <a
                  href="https://github.com/sahilr0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-neutral-600 hover:text-neutral-900"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/sahilrevankar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-neutral-600 hover:text-neutral-900"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/sahillrevankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-neutral-600 hover:text-neutral-900"
                  title="X"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-2 border-neutral-200 pl-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium">{job.title}</h3>
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <p className="text-neutral-600">{job.duration}</p>
                    <p className="text-neutral-500">{job.location}</p>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {job.company === "Dream Launch Studios" ? (
                      <>
                        Freelance contractor to build MVPs from scratch (
                        <a
                          href="https://www.writelikeahuman.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          writelikehuman.ai
                        </a>
                        ,{" "}
                        <a
                          href="https://nyclistings.fyi/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          nyclisting.fyi
                        </a>
                        ,{" "}
                        <a
                          href="https://contextflow.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          contextflow.co
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
          <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
            Personal Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <a
                  href={project.link}
                  className="block p-6 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
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
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-medium mb-2">Let &apos; s connect</h3>
              <p className="text-neutral-600">
                Get in touch for collaborations and opportunities
              </p>
            </div>
            <div className="flex gap-4 justify-center sm:justify-end">
              <a
                href="https://github.com/sahilr0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors p-2"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sahilrevankar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors p-2"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilrevankar20co21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors p-2"
                title="Compose on Gmail"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/sahillrevankar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-900 transition-colors p-2"
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
