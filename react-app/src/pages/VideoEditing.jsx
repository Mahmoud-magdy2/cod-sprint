import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VideoEditing() {
  const services = [
    {
      title: "Promotional Videos",
      description:
        "Showcase your business with compelling promotional content.",
      icon: "🎬",
    },
    {
      title: "Social Media Content",
      description: "Optimized videos for Instagram, TikTok, YouTube, and more.",
      icon: "📱",
    },
    {
      title: "Corporate Videos",
      description:
        "Professional videos for corporate communications and training.",
      icon: "🏢",
    },
    {
      title: "Product Demos",
      description: "High-quality product demonstration and tutorial videos.",
      icon: "📹",
    },
  ];

  const projects = [
    {
      id: "9",
      title: "E-Commerce Product Video",
      description:
        "Professional product showcase video with transitions and music.",
      image: "https://via.placeholder.com/500x300?text=Product+Video",
      technologies: ["Video Editing", "Color Grading", "Motion Graphics"],
      link: "/project/9",
    },
    {
      id: "10",
      title: "Corporate Training Series",
      description:
        "Multi-part training video series with captions and graphics.",
      image: "https://via.placeholder.com/500x300?text=Training+Video",
      technologies: ["Adobe Premiere", "After Effects", "Voiceover"],
      link: "/project/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Video Editing</h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Transform raw footage into engaging videos that captivate your
            audience
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-500 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 border-l-4 border-primary-500 bg-gray-50 rounded-lg hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
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
              Recent Videos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore our recent video editing projects and see the quality we
              deliver.
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
                      <span>Watch Video</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Engaging Video Content?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's bring your vision to life with professional video editing.
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get Your Video Edited
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
