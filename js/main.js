// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animate hamburger icon
  const spans = mobileMenuToggle.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const spans = mobileMenuToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Portfolio Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filterValue === "all") {
        item.classList.remove("hidden");
        item.style.animation = "fadeInUp 0.5s ease";
      } else {
        const itemCategory = item.getAttribute("data-category");
        if (itemCategory === filterValue) {
          item.classList.remove("hidden");
          item.style.animation = "fadeInUp 0.5s ease";
        } else {
          item.classList.add("hidden");
        }
      }
    });
  });
});

// Contact Form Handler (using EmailJS)
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const EMAILJS_PUBLIC_KEY = "7PCs8WzbGVMnO4_u7";
  const EMAILJS_SERVICE_ID = "service_n75wwff";
  const EMAILJS_TEMPLATE_ID = "template_n99nttj"; // Template ID من Email Templates

  // تأكد من تهيئة EmailJS مرة واحدة
  if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone")
      ? document.getElementById("phone").value
      : "";
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // fallback لو المستخدم لسه ما ضبطش EmailJS
    if (!window.emailjs || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      alert(
        "Form is not connected to email yet. Please configure EmailJS keys in main.js."
      );
      return;
    }

    // template parameters يجب أن تطابق أسماء المتغيرات داخل EmailJS template
    const templateParams = {
      from_name: name,
      from_email: email,
      phone,
      subject,
      message,
      to_email: email,
    };

    // الصيغة الرسمية من EmailJS: serviceID, templateID, params, publicKey
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("تم إرسال رسالتك بنجاح ✅");
          contactForm.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("حصل خطأ أثناء الإرسال، جرّب مرة تانية.");
        }
      );
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards and portfolio items
document
  .querySelectorAll(".service-card, .portfolio-item, .skill-item")
  .forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(item);
  });

// Add animation delay to service cards for staggered effect
document.querySelectorAll(".service-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// Add animation delay to portfolio items
document.querySelectorAll(".portfolio-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Scroll to top functionality (optional enhancement)
let scrollToTopBtn = null;

function createScrollToTopButton() {
  scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.setAttribute("aria-label", "Scroll to top");
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(scrollToTopBtn);
}

createScrollToTopButton();

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.visibility = "hidden";
  }
});

// Add hover effect to scroll to top button
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("mouseenter", () => {
    scrollToTopBtn.style.transform = "scale(1.1)";
    scrollToTopBtn.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  });

  scrollToTopBtn.addEventListener("mouseleave", () => {
    scrollToTopBtn.style.transform = "scale(1)";
    scrollToTopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });
}

// Hero Service Icons Rotation
const serviceIcons = document.querySelectorAll(".service-icon-item");
let currentServiceIndex = 0;

function rotateServiceIcons() {
  // Remove active class from all icons
  serviceIcons.forEach((icon) => icon.classList.remove("active"));

  // Add active class to current icon
  if (serviceIcons[currentServiceIndex]) {
    serviceIcons[currentServiceIndex].classList.add("active");
  }

  // Move to next icon
  currentServiceIndex = (currentServiceIndex + 1) % serviceIcons.length;
}

// Start rotation after initial display
if (serviceIcons.length > 0) {
  // Show first icon immediately
  setTimeout(() => {
    serviceIcons[0].classList.add("active");
  }, 500);

  // Rotate every 2 seconds (faster transitions)
  setInterval(rotateServiceIcons, 1750);
}
