let serviceNavCleanup = null;

function initServiceLayoutNav() {
  serviceNavCleanup?.();
  serviceNavCleanup = null;

  const layout = document.querySelector(".service-layout");
  if (!layout) return;

  const nav = layout.querySelector(".service-layout__nav");
  const links = Array.from(
    layout.querySelectorAll(".service-layout__nav-link"),
  );

  if (!nav || !links.length) return;

  const sections = links
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return null;
      return document.getElementById(href.slice(1));
    })
    .filter(Boolean);

  function moveMarker(activeLink) {
    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    nav.style.setProperty(
      "--service-nav-marker-y",
      `${linkRect.top - navRect.top + 10}px`,
    );

    nav.style.setProperty(
      "--service-nav-marker-height",
      `${Math.max(linkRect.height - 20, 0)}px`,
    );
  }

  function setActive(id) {
    const activeLink = links.find(
      (link) => link.getAttribute("href") === `#${id}`,
    );

    links.forEach((link) => {
      link.classList.toggle(
        "service-layout__nav-link--active",
        link === activeLink,
      );
    });

    if (activeLink) {
      requestAnimationFrame(() => moveMarker(activeLink));
    }
  }

  function getCurrentSectionId() {
    const markerPosition = window.innerHeight * 0.4;

    let currentSection = sections[0];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= markerPosition) {
        currentSection = section;
      }
    });

    return currentSection?.id;
  }

  function updateActiveOnScroll() {
    const id = getCurrentSectionId();
    if (id) setActive(id);
  }

  const controller = new AbortController();

  links.forEach((link) => {
    link.addEventListener(
      "click",
      () => {
        const id = link.getAttribute("href")?.replace("#", "");
        if (id) {
          setTimeout(() => setActive(id), 80);
        }
      },
      { signal: controller.signal },
    );
  });

  window.addEventListener("scroll", updateActiveOnScroll, {
    passive: true,
    signal: controller.signal,
  });

  window.addEventListener("resize", updateActiveOnScroll, {
    signal: controller.signal,
  });

  window.addEventListener(
    "hashchange",
    () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActive(id);
    },
    { signal: controller.signal },
  );

  requestAnimationFrame(() => {
    const hashId = window.location.hash.replace("#", "");
    const firstId = hashId || getCurrentSectionId();

    if (firstId) {
      setActive(firstId);
    }
  });

  serviceNavCleanup = () => {
    controller.abort();
  };
}

document.addEventListener("astro:page-load", initServiceLayoutNav);
document.addEventListener("DOMContentLoaded", initServiceLayoutNav);
