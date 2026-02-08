// ======================
// QEDev | Paket Basic
// main.js (Final Production Version)
// ======================

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // Preloader
  // ======================
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    if (preloader) {
      preloader.style.opacity = "0";
      preloader.style.transform = "scale(1.05)";
      setTimeout(() => preloader.remove(), 800);
    }
  });

  // ======================
  // Header Scroll Effect
  // ======================
  const header = document.getElementById("mainHeader");
  const logoBlue = document.getElementById("logoBlue");
  const logoWhite = document.getElementById("logoWhite");
  const brandText = document.getElementById("brandText");
  const ctaButton = document.getElementById("ctaButton");

  if (header && logoBlue && logoWhite && brandText && ctaButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("bg-white", "shadow-md");
        header.classList.remove("bg-transparent");
        logoBlue.style.opacity = "1";
        logoWhite.style.opacity = "0";
        brandText.classList.replace("text-white", "text-indigo-600");
        ctaButton.classList.replace("bg-white", "bg-indigo-600");
        ctaButton.classList.replace("text-indigo-600", "text-white");
      } else {
        header.classList.remove("bg-white", "shadow-md");
        header.classList.add("bg-transparent");
        logoBlue.style.opacity = "0";
        logoWhite.style.opacity = "1";
        brandText.classList.replace("text-indigo-600", "text-white");
        ctaButton.classList.replace("bg-indigo-600", "bg-white");
        ctaButton.classList.replace("text-white", "text-indigo-600");
      }
    });
  }

  // ======================
  // Hero Fade-In Sequence
  // ======================
  const fadeEls = ["#heroTitle", "#heroIcons", "#heroDesc", "#heroCTA"];
  fadeEls.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-6");
        el.classList.add("opacity-100", "translate-y-0");
      }, 300 + i * 250);
    }
  });

  // ======================
  // Hero Micro Parallax
  // ======================
  const hero = document.getElementById("heroSection");
  if (hero) {
    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        hero.style.setProperty("--x", `${x}%`);
        hero.style.setProperty("--y", `${y}%`);
      });
    }

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY / 10;
      hero.style.setProperty("--y", `${40 + scrollY / 5}%`);
    });
  }

  // ======================
  // Floating WhatsApp Button
  // ======================
  const waBtn = document.getElementById("floatingWA");
  let waVisible = false;
  if (waBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200 && !waVisible) {
        waBtn.classList.remove(
          "opacity-0",
          "translate-y-6",
          "pointer-events-none"
        );
        waBtn.classList.add("opacity-100", "translate-y-0");
        waVisible = true;
      } else if (window.scrollY <= 200 && waVisible) {
        waBtn.classList.add(
          "opacity-0",
          "translate-y-6",
          "pointer-events-none"
        );
        waBtn.classList.remove("opacity-100", "translate-y-0");
        waVisible = false;
      }
    });
  }

  // ======================
  // Scroll Animation + Stagger (QEDev Deluxe)
  // ======================
  const animatedEls = document.querySelectorAll("[data-animate]");

  if (animatedEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            // Urutan muncul selang-seling (stagger)
            const parent = el.parentElement;
            const siblings = [...parent.querySelectorAll("[data-animate]")];
            const index = siblings.indexOf(el);
            el.style.transitionDelay = `${index * 0.15}s`;

            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");

            el.style.transition = "all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    animatedEls.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6");
      observer.observe(el);
    });
  }

  // ======================
  // Console Info (Optional)
  // ======================
  console.log(
    "%c QEDev | Paket Basic siap jalan 🚀 ",
    "background:#2B6EE6;color:white;padding:4px 10px;border-radius:4px;"
  );
});
