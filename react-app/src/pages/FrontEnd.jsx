import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FrontEnd() {
  const expertise = [
    {
      title: "HTML5 & CSS3",
      description: "Semantic, accessible markup with modern CSS techniques.",
      icon: "📝",
    },
    {
      title: "React & JavaScript",
      description: "Interactive components and dynamic user interfaces.",
      icon: "⚛️",
    },
    {
      title: "Performance Optimization",
      description: "Fast-loading sites optimized for speed and SEO.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first approach for all screen sizes.",
      icon: "📱",
    },
    {
      title: "Web Accessibility",
      description: "WCAG compliant designs for all users.",
      icon: "♿",
    },
    {
      title: "User Experience Design",
      description: "Intuitive interfaces focused on user satisfaction.",
      icon: "🎨",
    },
  ];

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product filtering, cart management, and checkout.",
      image: "https://via.placeholder.com/500x300?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/project/1",
    },
    {
      id: "2",
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard with real-time data visualization and user management.",
      image: "https://via.placeholder.com/500x300?text=SaaS+Dashboard",
      technologies: ["React", "Chart.js", "Firebase"],
      link: "/project/2",
    },
    {
      id: "3",
      title: "Corporate Website",
      description:
        "Professional business website with CMS integration and contact forms.",
      image: "https://via.placeholder.com/500x300?text=Corporate+Website",
      technologies: ["Next.js", "Tailwind CSS", "Strapi"],
      link: "/project/3",
    },
    {
      id: "4",
      title: "Portfolio Showcase",
      description:
        "Creative portfolio site with smooth animations and image galleries.",
      image: "https://via.placeholder.com/500x300?text=Portfolio+Showcase",
      technologies: ["Vue.js", "GSAP", "Sanity"],
      link: "/project/4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Front-End Development
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build stunning, responsive websites that engage users and drive
            conversions. We combine creative design with cutting-edge technology
            to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-primary-50 transition">
              Start Your Project
            </button>
            <button className="px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-primary-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              We specialize in creating modern, scalable, and user-friendly web
              experiences using the latest technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-lg border-l-4 border-primary-500 hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore our latest front-end development projects and see how we
              transform ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 bg-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary-500 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link Button */}
                    <div className="flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all">
                      <span>View Full Project</span>
                      <span className="text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's create a front-end experience that stands out from the
            competition and delivers real results for your business.
          </p>
          <button className="px-10 py-4 bg-white text-primary-500 font-bold rounded-lg hover:bg-primary-50 transition text-lg">
            Start Your Front-End Project Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
