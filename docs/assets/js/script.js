import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      }
    })
  })

  // Code tabs functionality (for code.html)
  const tabBtns = document.querySelectorAll(".tab-btn")
  if (tabBtns.length > 0) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // This is handled by the inline onclick function in the HTML
        // But we keep this here for additional functionality if needed
      })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Initialize charts if they exist on the page
  if (typeof Chart !== "undefined") {
    // Charts are initialized in their respective HTML files
    // This space can be used for any global chart configurations
    Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    Chart.defaults.color = "#555"
  }

  // Add animation to cards when they come into view
  const animateOnScroll = () => {
    const cards = document.querySelectorAll(".overview-card, .highlight-item, .link-card, .finding-card, .future-card")

    cards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (cardPosition < screenPosition) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  const cardsToAnimate = document.querySelectorAll(
    ".overview-card, .highlight-item, .link-card, .finding-card, .future-card",
  )
  cardsToAnimate.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})

