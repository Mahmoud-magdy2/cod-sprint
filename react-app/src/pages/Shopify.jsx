import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shopify() {
  const features = [
    {
      title: "Custom Themes",
      description:
        "Tailored Shopify themes designed specifically for your brand.",
      icon: "🎨",
    },
    {
      title: "Sales Optimization",
      description:
        "Conversion-focused design to maximize your store's revenue.",
      icon: "💰",
    },
    {
      title: "App Integration",
      description:
        "Seamless integration with essential Shopify apps and tools.",
      icon: "🔗",
    },
    {
      title: "Mobile-Ready",
      description:
        "Fully optimized for mobile shopping and checkout experience.",
      icon: "📲",
    },
  ];

  const services = [
    { service: "Store Design & Setup", price: "$1,500+" },
    { service: "Theme Customization", price: "$500+" },
    { service: "Product Catalog Setup", price: "$300+" },
    { service: "Payment Gateway Integration", price: "$200+" },
  ];

  const projects = [
    {
      id: "5",
      title: "Fashion Boutique Store",
      description:
        "High-end fashion store with custom product filters and checkout flow.",
      image: "https://via.placeholder.com/500x300?text=Fashion+Store",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      link: "/project/5",
    },
    {
      id: "6",
      title: "Electronics Marketplace",
      description:
        "Multi-category electronics store with inventory management system.",
      image: "https://via.placeholder.com/500x300?text=Electronics+Store",
      technologies: ["Shopify Plus", "API Integration", "Analytics"],
      link: "/project/6",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shopify Store Design
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Launch a high-converting online store with stunning design and
            seamless functionality
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Start Your Store
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-500 mb-12">
            What We Offer
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-500 mb-12">
            Service Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-primary-500">
                  {item.service}
                </h3>
                <span className="text-2xl font-bold text-primary-600">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Shopify Stores
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore our recent Shopify store designs and see how we help
              businesses convert visitors into customers.
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
                      <span>View Store Details</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Online?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's build a Shopify store that generates real sales.
          </p>
          <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Get Your Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
