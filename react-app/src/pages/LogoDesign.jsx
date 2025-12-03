import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LogoDesign() {
  const features = [
    {
      title: "Brand Identity",
      description:
        "Create a unique visual identity that reflects your brand values.",
      icon: "🎭",
    },
    {
      title: "Versatile Designs",
      description: "Logos that work across all platforms and media formats.",
      icon: "🖌️",
    },
    {
      title: "Unlimited Revisions",
      description: "We'll refine your logo until it's absolutely perfect.",
      icon: "✨",
    },
    {
      title: "Source Files",
      description:
        "Receive all design files in multiple formats for any use case.",
      icon: "📦",
    },
  ];

  const projects = [
    {
      id: "7",
      title: "Tech Startup Branding",
      description: "Modern minimalist logo with full brand identity package.",
      image: "https://via.placeholder.com/500x300?text=Tech+Logo",
      technologies: ["Adobe Illustrator", "Branding", "Design System"],
      link: "/project/7",
    },
    {
      id: "8",
      title: "Coffee Shop Brand",
      description: "Warm and inviting logo design for a local coffee chain.",
      image: "https://via.placeholder.com/500x300?text=Coffee+Logo",
      technologies: ["Logo Design", "Brand Guidelines", "Packaging"],
      link: "/project/8",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Logo Design</h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Make a lasting impression with a professional logo that defines your
            brand
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Design Your Logo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-500 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border-l-4 border-primary-500 bg-gray-50 rounded-lg hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Logo Portfolio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore our recent logo designs and see the variety of styles we
              create for different brands.
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
                      <span>View Design</span>
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
            Stand Out With a Professional Logo
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            First impressions matter. Let's create yours.
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Request a Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
