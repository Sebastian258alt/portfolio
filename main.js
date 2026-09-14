/**
 * main.js
 * Renders all data-driven sections, and handles theme, language,
 * navigation and small interactions. No build step needed.
 */
(function () {
  "use strict";

  const STORAGE_LANG = "szn-lang";
  const STORAGE_THEME = "szn-theme";

  const state = {
    lang: localStorage.getItem(STORAGE_LANG) || "pt",
    theme: localStorage.getItem(STORAGE_THEME) || getPreferredTheme(),
    certFilter: "all",
    certQuery: "",
  };

  function getPreferredTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function t(dict) {
    // helper for {pt:"", en:""} shaped objects
    if (dict == null) return "";
    if (typeof dict === "string") return dict;
    return dict[state.lang] || dict.pt || dict.en || "";
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "html") node.innerHTML = v;
        else if (k === "class") node.className = v;
        else if (v !== null && v !== undefined) node.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  /* ---------------------------------------------------------------
     THEME
  --------------------------------------------------------------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-pressed", state.theme === "dark");
  }
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_THEME, state.theme);
    applyTheme();
  }

  /* ---------------------------------------------------------------
     LANGUAGE
  --------------------------------------------------------------- */
  function applyLanguage() {
    document.documentElement.setAttribute("lang", state.lang);
    const c = SITE_CONTENT[state.lang];
    document.title = c.meta.title;
    setMeta("description", c.meta.description);
    setMeta("og:title", c.meta.title, "property");
    setMeta("og:description", c.meta.description, "property");

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const path = node.getAttribute("data-i18n");
      const value = resolvePath(c, path);
      if (value != null) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
      const spec = node.getAttribute("data-i18n-attr"); // "placeholder:contact.formName"
      const [attr, path] = spec.split(":");
      const value = resolvePath(c, path);
      if (value != null) node.setAttribute(attr, value);
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang);
    });

    renderAll();
  }

  function resolvePath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj);
  }

  function setMeta(name, content, attr = "name") {
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    applyLanguage();
  }

  /* ---------------------------------------------------------------
     NAV: mobile menu, scroll progress, active link
  --------------------------------------------------------------- */
  function setupNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-menu");
    toggle?.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });
    menu?.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
      })
    );

    const progress = document.getElementById("scroll-progress");
    window.addEventListener(
      "scroll",
      () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
        if (progress) progress.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
      },
      { passive: true }
    );

    const sections = document.querySelectorAll("main section[id]");
    const navAnchors = document.querySelectorAll('.nav-links a, .mobile-menu a');
    if ("IntersectionObserver" in window && sections.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navAnchors.forEach((a) => a.removeAttribute("aria-current"));
              navAnchors.forEach((a) => {
                if (a.getAttribute("href") === `#${entry.target.id}`) a.setAttribute("aria-current", "true");
              });
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach((s) => io.observe(s));
    }
  }

  /* ---------------------------------------------------------------
     RENDER: EXPERIENCE / EDUCATION (timelines)
  --------------------------------------------------------------- */
  function renderTimeline(containerId, data, mapFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    data.forEach((item) => container.appendChild(mapFn(item)));
  }

  function renderExperience() {
    renderTimeline("experience-timeline", EXPERIENCE_DATA, (item) => {
      const card = el("div", { class: "card timeline-card" }, [
        el("h3", null, [t(item.role)]),
        el("div", { class: "timeline-org" }, [t(item.org)]),
        el("p", { class: "timeline-desc" }, [t(item.description)]),
        el(
          "ul",
          { class: "timeline-resp" },
          (item.responsibilities[state.lang] || item.responsibilities.pt).map((r) => el("li", null, [r]))
        ),
      ]);
      return el("div", { class: "timeline-item", "data-current": String(!!item.current) }, [
        el("span", { class: "timeline-period" }, [t(item.period)]),
        card,
      ]);
    });
  }

  function renderEducation() {
    renderTimeline("education-timeline", EDUCATION_DATA, (item) => {
      const card = el("div", { class: "card timeline-card" }, [
        el("h3", null, [t(item.course)]),
        el("div", { class: "timeline-org" }, [t(item.institution)]),
        el("p", { class: "timeline-desc" }, [t(item.description)]),
      ]);
      return el("div", { class: "timeline-item", "data-current": String(!!item.current) }, [
        el("span", { class: "timeline-period" }, [t(item.period)]),
        card,
      ]);
    });
  }

  /* ---------------------------------------------------------------
     RENDER: SKILLS
  --------------------------------------------------------------- */
  const LEVEL_DOTS = { advanced: 4, proficient: 3, developing: 2 };
  function renderSkills() {
    const container = document.getElementById("skills-grid");
    if (!container) return;
    container.innerHTML = "";
    SKILLS_DATA.forEach((group) => {
      const rows = group.items.map((item) => {
        const filled = LEVEL_DOTS[item.level] || 2;
        const dots = Array.from({ length: 4 }, (_, i) =>
          el("span", { class: "skill-dot", "data-filled": String(i < filled) })
        );
        return el("div", { class: "skill-row" }, [
          el("span", { class: "skill-name" }, [t(item.name)]),
          el("span", { class: "skill-meter", "aria-label": t(SKILL_LEVEL_LABEL[item.level]) }, dots),
        ]);
      });
      container.appendChild(el("div", { class: "card skill-card" }, [el("h3", null, [t(group.category)]), ...rows]));
    });
  }

  /* ---------------------------------------------------------------
     RENDER: CERTIFICATES (with filter + search)
  --------------------------------------------------------------- */
  function renderCertFilters() {
    const container = document.getElementById("cert-filters");
    if (!container) return;
    container.innerHTML = "";
    const c = SITE_CONTENT[state.lang].certificates;
    const allBtn = el("button", { class: "tag", "data-active": String(state.certFilter === "all") }, [c.all]);
    allBtn.addEventListener("click", () => {
      state.certFilter = "all";
      renderCertFilters();
      renderCertificates();
    });
    container.appendChild(allBtn);
    CERTIFICATE_CATEGORIES.forEach((cat) => {
      const btn = el("button", { class: "tag", "data-active": String(state.certFilter === cat.id) }, [t(cat)]);
      btn.addEventListener("click", () => {
        state.certFilter = cat.id;
        renderCertFilters();
        renderCertificates();
      });
      container.appendChild(btn);
    });
  }

  function renderCertificates() {
    const container = document.getElementById("cert-grid");
    if (!container) return;
    const c = SITE_CONTENT[state.lang].certificates;
    const query = state.certQuery.trim().toLowerCase();
    const filtered = CERTIFICATES_DATA.filter((cert) => {
      const matchesCat = state.certFilter === "all" || cert.category === state.certFilter;
      const haystack = `${cert.name} ${cert.institution} ${t(cert.description)}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCat && matchesQuery;
    });

    container.innerHTML = "";
    if (!filtered.length) {
      container.appendChild(el("p", { class: "cert-empty" }, [c.empty]));
      return;
    }

    filtered.forEach((cert) => {
      const catLabel = CERTIFICATE_CATEGORIES.find((cc) => cc.id === cert.category);
      const actions = [
        el("a", { href: cert.image, target: "_blank", rel: "noopener", class: "btn btn-ghost btn-sm" }, [c.view]),
      ];
      if (cert.pdf) {
        actions.push(el("a", { href: cert.pdf, target: "_blank", rel: "noopener", class: "btn btn-primary btn-sm" }, [c.download]));
      }
      container.appendChild(
        el("article", { class: "card cert-card" }, [
          el("div", { class: "cert-thumb" }, [el("img", { src: cert.image, alt: `${cert.name} — ${cert.institution}`, loading: "lazy" })]),
          el("div", { class: "cert-body" }, [
            el("span", { class: "cert-cat" }, [t(catLabel)]),
            el("h3", null, [cert.name]),
            el("span", { class: "cert-meta" }, [`${cert.institution} · ${cert.date}`]),
            el("p", { class: "cert-desc" }, [t(cert.description)]),
            el("div", { class: "cert-actions" }, actions),
          ]),
        ])
      );
    });
  }

  function setupCertSearch() {
    const input = document.getElementById("cert-search-input");
    input?.addEventListener("input", (e) => {
      state.certQuery = e.target.value;
      renderCertificates();
    });
  }

  /* ---------------------------------------------------------------
     RENDER: DOCUMENTS
  --------------------------------------------------------------- */
  const DOC_ICONS = {
    cv: `<path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M15 2v5h5"/>`,
    portfolio: `<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
    diploma: `<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
    letter: `<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 6l9 7 9-7"/>`,
  };

  function renderDocuments() {
    const container = document.getElementById("documents-grid");
    if (!container) return;
    const c = SITE_CONTENT[state.lang].documents;
    container.innerHTML = "";
    DOCUMENTS_DATA.forEach((doc) => {
      const isPrivate = doc.visibility === "private";
      const actions = [];
      if (isPrivate) {
        actions.push(el("a", { href: "#contact", class: "btn btn-ghost btn-sm" }, [c.view]));
      } else {
        actions.push(el("a", { href: doc.file, target: "_blank", rel: "noopener", class: "btn btn-ghost btn-sm" }, [c.view]));
        actions.push(el("a", { href: doc.file, download: "", class: "btn btn-primary btn-sm" }, [c.download]));
      }
      container.appendChild(
        el("div", { class: "card doc-card" }, [
          el("div", { class: "doc-icon" }, [
            el("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", html: DOC_ICONS[doc.icon] || DOC_ICONS.cv }),
          ]),
          el("div", { class: "doc-info" }, [
            el("h3", null, [t(doc.name)]),
            el("div", { class: "doc-visibility", "data-visibility": doc.visibility }, [isPrivate ? c.privateNote : c.publicNote]),
            el("div", { class: "doc-actions" }, actions),
          ]),
        ])
      );
    });
  }

  /* ---------------------------------------------------------------
     RENDER: PROJECTS
  --------------------------------------------------------------- */
  function renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;
    container.innerHTML = "";
    PROJECTS_DATA.forEach((proj) => {
      const links = [];
      if (proj.link) links.push(el("a", { href: proj.link, target: "_blank", rel: "noopener" }, ["↗ Site"]));
      if (proj.github) links.push(el("a", { href: proj.github, target: "_blank", rel: "noopener" }, ["GitHub"]));
      container.appendChild(
        el("article", { class: "card project-card" }, [
          el("div", { class: "project-thumb" }, [el("img", { src: proj.image, alt: t(proj.name), loading: "lazy" })]),
          el("div", { class: "project-body" }, [
            el("h3", null, [t(proj.name)]),
            el("p", { class: "small" }, [t(proj.description)]),
            el("div", { class: "project-tech" }, proj.tech.map((tech) => el("span", null, [tech]))),
            links.length ? el("div", { class: "project-links" }, links) : null,
          ]),
        ])
      );
    });
  }

  /* ---------------------------------------------------------------
     RENDER: SERVICES
  --------------------------------------------------------------- */
  const SERVICE_ICONS = {
    translate: `<path d="M4 5h9M7 3v2M4 9c1.5 3 4 5 7 6M12 9c-1 3-3 5.5-6 7M14 20l4-9 4 9M15.5 17h5"/>`,
    mic: `<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>`,
    check: `<path d="M20 6 9 17l-5-5"/>`,
    globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>`,
    book: `<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17z"/><path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5"/>`,
    pen: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>`,
    spark: `<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>`,
  };

  function renderServices() {
    const container = document.getElementById("services-grid");
    if (!container) return;
    container.innerHTML = "";
    SERVICES_DATA.forEach((srv) => {
      container.appendChild(
        el("div", { class: "card service-card" }, [
          el("div", { class: "service-icon" }, [
            el("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.6", "stroke-linecap": "round", "stroke-linejoin": "round", html: SERVICE_ICONS[srv.icon] || SERVICE_ICONS.check }),
          ]),
          el("h3", null, [t(srv.title)]),
          el("p", null, [t(srv.description)]),
        ])
      );
    });
  }

  /* ---------------------------------------------------------------
     RENDER: HIGHLIGHTS
  --------------------------------------------------------------- */
  function renderHighlights() {
    const container = document.getElementById("highlights-grid");
    if (!container) return;
    container.innerHTML = "";
    const items = SITE_CONTENT[state.lang].highlights.items;
    items.forEach((item) => {
      container.appendChild(
        el("div", { class: "highlight-item" }, [
          el("div", { class: "highlight-number" }, [item.number]),
          el("div", { class: "highlight-label" }, [item.label]),
        ])
      );
    });
  }

  /* ---------------------------------------------------------------
     RENDER: HERO badges (from content.js)
  --------------------------------------------------------------- */
  function renderHeroBadges() {
    const container = document.getElementById("hero-badges");
    if (!container) return;
    container.innerHTML = "";
    const badges = SITE_CONTENT[state.lang].hero.badges;
    const positions = ["floating-card--1", "floating-card--2", "floating-card--3", "floating-card--4"];
    badges.forEach((label, i) => {
      container.appendChild(
        el("div", { class: `floating-card ${positions[i] || ""}` }, [el("span", { class: "dot" }), el("span", null, [label])])
      );
    });
  }

  /* ---------------------------------------------------------------
     CONTACT FORM (client-side only — needs a backend/service to send)
  --------------------------------------------------------------- */
  function setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const c = SITE_CONTENT[state.lang].contact;
      status.textContent =
        state.lang === "pt"
          ? "Este formulário ainda não está ligado a um serviço de envio de email. Contacta-me directamente por email ou WhatsApp abaixo."
          : "This form isn't connected to an email-sending service yet. Please reach me directly by email or WhatsApp below.";
      status.classList.add("show");
    });
  }

  /* ---------------------------------------------------------------
     INIT
  --------------------------------------------------------------- */
  function renderAll() {
    renderHeroBadges();
    renderExperience();
    renderEducation();
    renderSkills();
    renderCertFilters();
    renderCertificates();
    renderDocuments();
    renderProjects();
    renderServices();
    renderHighlights();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    setupNav();
    setupCertSearch();
    setupContactForm();

    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    document.getElementById("year")?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));

    applyLanguage(); // also triggers renderAll()
  });
})();
