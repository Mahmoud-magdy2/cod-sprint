import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectDetails() {
  const { projectId } = useParams();

  // Mock project data
  const projectsData = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product filtering, cart management, and checkout.",
      image: "https://via.placeholder.com/800x500?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      overview:
        "This comprehensive e-commerce platform was built to revolutionize online shopping. It features a responsive design, advanced product search, secure payment processing, and real-time inventory management.",
      features: [
        "Product catalog with filtering and search",
        "Shopping cart and wishlist functionality",
        "Secure checkout with multiple payment options",
        "User authentication and profile management",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
      challenge:
        "The main challenge was integrating multiple payment gateways while maintaining security and performance. We optimized database queries and implemented caching strategies to handle high traffic.",
      result:
        "The platform successfully handles 10,000+ concurrent users with 99.9% uptime. Conversion rate improved by 35% compared to the previous system.",
      client: "TechStore Inc.",
      duration: "6 months",
      team: [
        "React Developer",
        "Backend Developer",
        "UI/UX Designer",
        "DevOps Engineer",
      ],
    },
    {
      id: "2",
      title: "SaaS Dashboard",
      description:
        "Analytics dashboard with real-time data visualization and user management.",
      image: "https://via.placeholder.com/800x500?text=SaaS+Dashboard",
      technologies: [
        "React",
        "Chart.js",
        "Firebase",
        "Tailwind CSS",
        "WebSockets",
      ],
      overview:
        "A powerful analytics dashboard designed for data-driven decision making. The platform provides real-time insights with interactive visualizations and comprehensive reporting tools.",
      features: [
        "Real-time data visualization with Chart.js",
        "Customizable dashboard widgets",
        "User management and role-based access",
        "Advanced filtering and data export",
        "Performance monitoring and alerts",
        "API integration capabilities",
      ],
      challenge:
        "Handling real-time data updates for thousands of concurrent users required WebSocket implementation and optimized state management with Redux.",
      result:
        "Users can now visualize complex data in real-time, reducing analysis time by 60%. The platform supports 500+ enterprise clients.",
      client: "DataViz Solutions",
      duration: "4 months",
      team: [
        "Full Stack Developer",
        "Data Engineer",
        "UX Researcher",
        "Product Manager",
      ],
    },
    {
      id: "3",
      title: "Corporate Website",
      description:
        "Professional business website with CMS integration and contact forms.",
      image: "https://via.placeholder.com/800x500?text=Corporate+Website",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Strapi",
        "SEO Optimization",
        "Analytics",
      ],
      overview:
        "A modern, professional corporate website built with Next.js for optimal SEO performance. The site integrates a headless CMS for easy content management.",
      features: [
        "Server-side rendering for SEO",
        "Headless CMS integration with Strapi",
        "Contact form with email notifications",
        "Blog with automatic sitemap generation",
        "Analytics and tracking integration",
        "Mobile-responsive design",
      ],
      challenge:
        "Balancing SEO requirements with dynamic content management required careful implementation of Next.js SSR and static generation strategies.",
      result:
        "The website ranked on first page of Google for 50+ keywords within 3 months. Increased lead generation by 45%.",
      client: "Global Solutions Ltd.",
      duration: "3 months",
      team: ["Next.js Developer", "Content Strategist", "SEO Specialist"],
    },
    {
      id: "4",
      title: "Portfolio Showcase",
      description:
        "Creative portfolio site with smooth animations and image galleries.",
      image: "https://via.placeholder.com/800x500?text=Portfolio+Showcase",
      technologies: ["Vue.js", "GSAP", "Sanity CMS", "Vimeo API", "CSS Grid"],
      overview:
        "A visually stunning portfolio website featuring smooth animations and dynamic image galleries. Built with Vue.js and GSAP for fluid interactions.",
      features: [
        "Smooth page transitions with GSAP",
        "Dynamic image gallery with lightbox",
        "Video integration with Vimeo",
        "CMS-powered project updates",
        "Fully responsive design",
        "Performance optimized",
      ],
      challenge:
        "Creating smooth animations while maintaining performance required careful optimization of GSAP timelines and lazy loading of images.",
      result:
        "The portfolio became a showcase piece with 50,000+ monthly visitors. Led to 20+ new client inquiries.",
      client: "Creative Studios Co.",
      duration: "2 months",
      team: ["Vue.js Developer", "Motion Designer", "Photographer"],
    },
    {
      id: "5",
      title: "Fashion Boutique Store",
      description:
        "High-end fashion store with custom product filters and checkout flow.",
      image: "https://via.placeholder.com/800x500?text=Fashion+Store",
      technologies: ["Shopify", "Liquid", "JavaScript", "Inventory API"],
      overview:
        "A premium fashion e-commerce store designed to showcase luxury products with an elegant user interface and smooth shopping experience.",
      features: [
        "Custom product filtering system",
        "Size and color variants",
        "Wishlist functionality",
        "Gift card system",
        "Advanced search",
        "Customer reviews",
      ],
      challenge:
        "Creating a high-performance store that handles large product catalogs while maintaining fast loading times.",
      result:
        "Achieved 100+ page speed score and 40% increase in conversion rate.",
      client: "Fashion Boutique LLC",
      duration: "5 months",
      team: ["Shopify Developer", "Liquid Developer", "UI Designer"],
    },
    {
      id: "6",
      title: "Electronics Marketplace",
      description:
        "Multi-category electronics store with inventory management system.",
      image: "https://via.placeholder.com/800x500?text=Electronics+Store",
      technologies: [
        "Shopify Plus",
        "API Integration",
        "Analytics",
        "Automation",
      ],
      overview:
        "A comprehensive electronics marketplace supporting multiple categories and vendors with real-time inventory sync.",
      features: [
        "Multi-vendor support",
        "Real-time inventory",
        "Bulk product import",
        "Analytics dashboard",
        "Automated pricing",
        "Customer segmentation",
      ],
      challenge:
        "Managing complex product data and integrating with multiple supplier systems.",
      result: "Successfully manages 10,000+ SKUs with daily inventory updates.",
      client: "Electronics Hub",
      duration: "6 months",
      team: ["Shopify Plus Expert", "Backend Developer", "Data Analyst"],
    },
    {
      id: "7",
      title: "Tech Startup Branding",
      description: "Modern minimalist logo with full brand identity package.",
      image: "https://via.placeholder.com/800x500?text=Tech+Logo",
      technologies: [
        "Adobe Illustrator",
        "Brand Design",
        "Design System",
        "Figma",
      ],
      overview:
        "Complete branding solution for a tech startup including logo, color palette, typography, and brand guidelines.",
      features: [
        "Logo design (3 versions)",
        "Brand color palette",
        "Typography system",
        "Brand guidelines document",
        "Business card design",
        "Email signature templates",
      ],
      challenge:
        "Creating a minimalist design that stands out while remaining professional and scalable.",
      result:
        "Brand adopted across all touchpoints with 95% stakeholder satisfaction.",
      client: "TechStart Inc",
      duration: "3 months",
      team: ["Brand Designer", "Art Director"],
    },
    {
      id: "8",
      title: "Coffee Shop Brand",
      description: "Warm and inviting logo design for a local coffee chain.",
      image: "https://via.placeholder.com/800x500?text=Coffee+Logo",
      technologies: [
        "Adobe Creative Suite",
        "Brand Design",
        "Packaging Design",
      ],
      overview:
        "Cozy and welcoming brand identity for an expanding coffee shop chain with packaging design.",
      features: [
        "Logo variations",
        "Cup sleeve design",
        "Bag packaging",
        "Storefront signage",
        "Social media kit",
        "Staff uniforms design",
      ],
      challenge:
        "Conveying warmth and authenticity while maintaining modern appeal.",
      result: "Increased brand recognition with 80% customer recall rate.",
      client: "Brew & Bliss Coffee",
      duration: "2.5 months",
      team: ["Brand Designer", "Packaging Designer"],
    },
    {
      id: "9",
      title: "E-Commerce Product Video",
      description:
        "Professional product showcase video with transitions and music.",
      image: "https://via.placeholder.com/800x500?text=Product+Video",
      technologies: [
        "Adobe Premiere Pro",
        "After Effects",
        "Color Grading",
        "Motion Graphics",
      ],
      overview:
        "High-quality product showcase video designed to increase conversion rates on e-commerce platforms.",
      features: [
        "Product demonstrations",
        "Smooth transitions",
        "Professional color grading",
        "Custom graphics",
        "Background music",
        "4K quality export",
      ],
      challenge:
        "Showcasing product benefits while maintaining viewer engagement in 60 seconds.",
      result: "30% increase in click-through rate from video campaigns.",
      client: "Tech Gadgets Store",
      duration: "2 weeks",
      team: ["Video Editor", "Motion Graphic Designer", "Sound Engineer"],
    },
    {
      id: "10",
      title: "Corporate Training Series",
      description:
        "Multi-part training video series with captions and graphics.",
      image: "https://via.placeholder.com/800x500?text=Training+Video",
      technologies: [
        "Adobe Premiere",
        "After Effects",
        "Voiceover",
        "Screen Recording",
      ],
      overview:
        "Professional training video series for employee onboarding with comprehensive visual aids and captions.",
      features: [
        "10-part video series",
        "Subtitles in 3 languages",
        "Interactive chapters",
        "Motion graphics",
        "Professional voiceover",
        "HD quality",
      ],
      challenge:
        "Making technical training content engaging and easy to follow.",
      result: "Reduced training time by 40% with 90% comprehension rate.",
      client: "Corporate Solutions Inc",
      duration: "1 month",
      team: ["Senior Editor", "Motion Designer", "Voiceover Artist"],
    },
  ];

  // Find project by ID
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <section className="flex-1 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the project you're looking for doesn't exist.
            </p>
            <Link
              to="/frontend"
              className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition"
            >
              Back to Projects
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Project Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/frontend"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-6 transition"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Overview */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-primary-500 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {project.overview}
            </p>

            {/* Features */}
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              Key Features
            </h3>
            <ul className="space-y-3 mb-8">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary-500 font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Challenge */}
            <h3 className="text-2xl font-bold text-primary-500 mb-4">
              Challenge
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {project.challenge}
            </p>

            {/* Result */}
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Result</h3>
            <p className="text-gray-700 leading-relaxed">{project.result}</p>
          </div>

          {/* Sidebar Info */}
          <div className="bg-gray-50 p-8 rounded-lg h-fit">
            {/* Technologies */}
            <h3 className="text-xl font-bold text-primary-500 mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Info */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div>
                <p className="text-gray-600 text-sm">Client</p>
                <p className="text-gray-900 font-semibold">{project.client}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Duration</p>
                <p className="text-gray-900 font-semibold">
                  {project.duration}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Team Members</p>
                <ul className="space-y-1">
                  {project.team.map((member, idx) => (
                    <li key={idx} className="text-gray-700 text-sm">
                      • {member}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in a Similar Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss your project requirements and create something amazing
            together.
          </p>
          <button className="px-10 py-4 bg-white text-primary-500 font-bold rounded-lg hover:bg-primary-50 transition text-lg">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
