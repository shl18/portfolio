import { Github, Linkedin, Mail, X } from "lucide-react";

const Face = () => {
  const projects = [
    {
      title: "Trading Dashboard",
      description:
        "Real-time portfolio management with React and Python backend",
      year: "2024",
      link: "#",
    },
    {
      title: "Crypto Trading Bot",
      description: "Automated trading strategies using machine learning",
      year: "2024",
      link: "#",
    },
    {
      title: "Portfolio Tracker",
      description: "Investment tracking with advanced analytics",
      year: "2023",
      link: "#",
    },
    {
      title: "DeFi Analytics Platform",
      description: "Decentralized finance data visualization and analysis",
      year: "2023",
      link: "#",
    },
    {
      title: "Market Sentiment Analyzer",
      description: "AI-powered sentiment analysis for financial markets",
      year: "2022",
      link: "#",
    },
  ];

  const writings = [
    {
      title: "Building Scalable Trading Systems",
      year: "2024",
      link: "#",
    },
    {
      title: "The Future of DeFi",
      year: "2024",
      link: "#",
    },
    {
      title: "Machine Learning in Finance",
      year: "2023",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Your Name</h1>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>Developer</span>
                <span>Trader</span>
                <span>Finance Enthusiast</span>
              </div>
            </div>
            <X className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white transition-colors" />
          </div>
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
        <div className="mb-16">
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
        </div>

        {/* Contact */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Face;
