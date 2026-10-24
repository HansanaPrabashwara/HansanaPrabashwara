// ==========================================
// 1. 11-PROJECT SPECIFICATION DATABASE
// ==========================================
const projectData = {
    metis: {
        index: "SPECIFICATION // 01 — AGENTIC DESKTOP AI",
        title: "Metis AI",
        subtitle: "Cross-Platform Desktop AI Assistant with On-Device LLM Inference",
        bullets: [
            "Built a cross-platform desktop AI assistant (Electron, React, TypeScript) with local, on-device LLM inference via llama-cpp, architecting a multi-session engine that runs isolated, concurrent conversations using parallel model context sequences.",
            "Designed an agentic reasoning pipeline with LangGraph, implementing a bounded think, search, and re-evaluate loop with live web search tool-use (Tavily API).",
            "Engineered real-time token streaming of both the model's internal chain-of-thought reasoning and final synthesized answer directly to the desktop UI."
        ],
        stack: ["Electron", "React", "TypeScript", "llama-cpp", "LangGraph", "Tavily API", "On-Device LLM"]
    },
    genomic: {
        index: "SPECIFICATION // 02 — BIOINFORMATICS & FOUNDATION MODELS",
        title: "Genomic Disease Prediction",
        subtitle: "Disease Classification with Nucleotide Transformers (NT-500M)",
        bullets: [
            "Adapted the NT-500M DNA foundation model for multi-class genomic disease classification on a KEGG-derived dataset of 1,447 samples spanning 37 distinct disease classes.",
            "Compared parameter-efficient LoRA fine-tuning against frozen NT-500M embeddings paired with MLP classifiers across reference, variant, and combined DNA representations.",
            "Achieved 91.78% classification accuracy and 78.68% F1-score using concatenated reference + variant embeddings, significantly outperforming parameter-efficient fine-tuning baselines.",
            "Performed rigorous multi-run experiments analyzing class imbalance, overfitting dynamics, embedding representation quality, and out-of-distribution model generalization."
        ],
        stack: ["Nucleotide Transformer (NT-500M)", "LoRA", "PyTorch", "MLP Classifiers", "KEGG Dataset", "Scikit-learn", "Python"]
    },
    arcfuse: {
        index: "SPECIFICATION // 03 — REMOTE SENSING & GEO-AI",
        title: "ArcFuse",
        subtitle: "Remote Sensing Multi-Modal Data Fusion System",
        bullets: [
            "Architecting a multi-modal data fusion pipeline using Vision Transformers (ViT) and U-Net for large-scale environmental feature detection across the Pan-Arctic region.",
            "Optimizing high-volume data ingestion of satellite imagery, location embeddings, and digital elevation models (DEMs) using PyTorch, OpenCV, and Rasterio.",
            "Managing complex geospatial datasets and spatial queries using QGIS and custom automated data processing scripts."
        ],
        stack: ["PyTorch", "Vision Transformers (ViT)", "U-Net", "OpenCV", "Rasterio", "QGIS", "Python"]
    },
    marquee: {
        index: "SPECIFICATION // 04 — FULL-STACK AI PLATFORM",
        title: "Marquee AI",
        subtitle: "AI-Assisted Presentation Builder & Sandboxed Slide Engine",
        bullets: [
            "Built a full-stack presentation platform (React, TypeScript, NestJS, MongoDB) that renders AI-generated Reveal.js slide decks with a Google Slides-style interactive editor supporting live thumbnail previews, drag-to-reorder, and fullscreen presentation mode.",
            "Solved cross-context rendering isolation by sandboxing Reveal.js decks inside iframes and Shadow DOM to prevent application CSS from leaking into presentation styling.",
            "Sanitized all AI-generated slide HTML with DOMPurify to strictly guard against XSS and injected script content."
        ],
        stack: ["React", "TypeScript", "NestJS", "MongoDB", "Reveal.js", "Shadow DOM", "DOMPurify"]
    },
    clarity: {
        index: "SPECIFICATION // 05 — SPEECH AI & HAPTIC HARDWARE",
        title: "Clarity Sense",
        subtitle: "Vibrotactile Auditory Substitution for the Hearing Impaired",
        bullets: [
            "Engineered a low-cost vibrotactile assistive device that converts spoken audio input into Braille-based tactile feedback using real-time phonetic recognition, supplemented by spatial haptics for raw sound cues and localization.",
            "Implemented the deep phoneme recognition model using wav2vec trained and evaluated on acoustic-phonetic speech datasets.",
            "Configured a Raspberry Pi edge device to process live audio streams, execute low-latency on-device model inference, and drive multi-channel vibrotactile actuators."
        ],
        stack: ["wav2vec", "PyTorch", "Raspberry Pi", "Acoustic-Phonetic Modeling", "Edge Inference", "Vibrotactile Haptics"]
    },
    edugenius: {
        index: "SPECIFICATION // 06 — RAG & EDUCATIONAL AI",
        title: "EduGenius",
        subtitle: "RAG-Based Mathematics Tutoring Web Application",
        bullets: [
            "Architected a web-based Retrieval-Augmented Generation (RAG) mathematics tutoring chatbot using LangChain, Google Gemini, and ChromaDB.",
            "Engineered a specialized mathematics question-and-answer vector dataset by implementing OCR-based data extraction pipelines to improve formula and problem retrieval accuracy.",
            "Developed the interactive student interface using Streamlit and managed user session persistence via MongoDB."
        ],
        stack: ["LangChain", "Gemini API", "ChromaDB", "OCR Pipeline", "Streamlit", "MongoDB", "Python"]
    },
    origo: {
        index: "SPECIFICATION // 07 — DATABASE SYSTEMS & FINTECH",
        title: "ORIGO DB",
        subtitle: "Relational Database Engine & Hybrid Risk Storage Strategy",
        bullets: [
            "Developing a relational database engine from scratch in C, focusing on low-level memory management, paging, and raw file I/O.",
            "Hybrid Storage Strategy: Implementing a Redis-based Risk Engine for sub-millisecond balance validation alongside a PostgreSQL ledger for ACID financial data persistence.",
            "Engineering custom B-tree/hash data structures and storage engines to maximize raw data persistence and retrieval throughput."
        ],
        stack: ["C", "Redis", "PostgreSQL", "Memory Management", "File I/O", "Systems Architecture"]
    },
    agrigrid: {
        index: "SPECIFICATION // 08 — ENTERPRISE MICROSERVICES",
        title: "AgriGrid",
        subtitle: "Farmer Identification Microservices Platform",
        bullets: [
            "Developing a microservices-based farmer identification platform using Spring Boot, designed to support large-scale agricultural data processing and external system integration.",
            "Implementing centralized authentication and role-based authorization using Keycloak, paired with a React frontend and PostgreSQL database.",
            "Containerizing microservices using Docker to ensure reproducible development, testing, and production deployments."
        ],
        stack: ["Spring Boot", "Java", "Keycloak", "React", "PostgreSQL", "Docker", "Microservices"]
    },
    projecx: {
        index: "SPECIFICATION // 09 — AGENTIC WORKFLOW AUTOMATION",
        title: "ProjecX",
        subtitle: "Agentic AI Project Management Tool",
        bullets: [
            "Architected an automated task and sprint management system using FastAPI, Next.js, and autonomous AI agents.",
            "Managed cloud deployment infrastructure across Microsoft Azure and Vercel with PostgreSQL for persistent relational state."
        ],
        stack: ["FastAPI", "Next.js", "AI Agents", "Azure", "Vercel", "PostgreSQL", "Python"]
    },
    blog: {
        index: "SPECIFICATION // 10 — TYPE-SAFE WEB ARCHITECTURE",
        title: "Full-Stack Blog Platform",
        subtitle: "End-to-End Type-Safe Publishing Platform",
        bullets: [
            "Architected a modern publishing platform using Next.js and tRPC to achieve strict end-to-end compile-time type safety between client and server.",
            "Developed a responsive reader and editor UI with Tailwind CSS and managed database schemas and queries via Prisma ORM.",
            "Ensured zero-schema-drift API communication by leveraging tRPC’s procedure-based RPC architecture."
        ],
        stack: ["Next.js", "tRPC", "TypeScript", "Tailwind CSS", "Prisma ORM"]
    },
    quizzy: {
        index: "SPECIFICATION // 11 — CROSS-PLATFORM MOBILE",
        title: "Quizzy",
        subtitle: "Real-Time Cross-Platform Mobile Application",
        bullets: [
            "Developed a cross-platform mobile quiz application using Flutter and Dart, featuring real-time leaderboard and state synchronization with Firebase Firestore.",
            "Integrated Firebase Authentication and strongly typed Data Transfer Objects (DTOs) to ensure secure, structured client-cloud data flow.",
            "Designed a responsive mobile UI/UX with reactive state-managed components."
        ],
        stack: ["Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "State Management"]
    }
};

// ==========================================
// 2. CUSTOM SMOOTH PHYSICS CURSOR
// ==========================================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
}
renderCursor();

document.querySelectorAll('.interactable').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ==========================================
// 3. LIVE COLOMBO TIME CLOCK (UTC+5:30)
// ==========================================
const timeEl = document.getElementById('colomboTime');
function updateClock() {
    const now = new Date();
    const options = { timeZone: 'Asia/Colombo', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeEl.textContent = `CMB ${now.toLocaleTimeString('en-US', options)}`;
}
setInterval(updateClock, 1000);
updateClock();

// ==========================================
// 4. SWISS DARK / LIGHT THEME TOGGLE
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const rootEl = document.documentElement;

const savedTheme = localStorage.getItem('swiss-theme') || 'dark';
if (savedTheme === 'light') {
    rootEl.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '[THEME: LIGHT]';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = rootEl.getAttribute('data-theme') === 'light';
        if (isLight) {
            rootEl.removeAttribute('data-theme');
            themeToggle.textContent = '[THEME: DARK]';
            localStorage.setItem('swiss-theme', 'dark');
        } else {
            rootEl.setAttribute('data-theme', 'light');
            themeToggle.textContent = '[THEME: LIGHT]';
            localStorage.setItem('swiss-theme', 'light');
        }
    });
}

// ==========================================
// 5. TTY1 INTERACTIVE SHELL ENGINE
// ==========================================
const cmdOutputs = {
    bench: [
        "> NT-500M GENOMIC: 91.78% Acc / 78.68% F1",
        "> ORIGO DB RISK: <1.0ms Balance Validation",
        "> METIS AI: Parallel Local LLM Contexts",
        "> ARCFUSE: Pan-Arctic Multi-Modal ViT"
    ],
    arch: [
        "> LOW-LEVEL: Custom C DB Engine & File I/O",
        "> BACKEND: Quarkus, Spring Boot, NestJS, FastAPI",
        "> CLIENT: Electron, Next.js, Shadow DOM, Flutter",
        "> INFRA: Docker, Keycloak, Redis, Azure"
    ],
    ai: [
        "> VISION: Vision Transformers (ViT) & U-Net",
        "> SPEECH: wav2vec Acoustic-Phonetic Braille",
        "> GENOMICS: Nucleotide Transformer + LoRA",
        "> AGENTS: LangGraph, llama-cpp, Gemini RAG"
    ],
    award: [
        "> DEGREE: BSc Eng Hons (CSE - Data Science)",
        "> STANDING: 3.74 / 4.00 CGPA @ UoM",
        "> INDUSTRY: SWE Intern @ IronOne FinTech",
        "> 1ST PLACE: Brainstorm Healthcare Innovation"
    ]
};

let termTimer = null;
document.querySelectorAll('.term-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.term-btn').forEach(b => b.classList.remove('active-cmd'));
        btn.classList.add('active-cmd');

        const cmd = btn.dataset.cmd;
        const termLine = document.querySelector('.term-line');
        const termOutput = document.getElementById('termOutput');
        if (!termLine || !termOutput) return;

        termLine.innerHTML = `<span class="term-prompt">$</span> ./inspect --${cmd}`;
        termOutput.innerHTML = '';

        if (termTimer) clearInterval(termTimer);
        const lines = cmdOutputs[cmd] || [];
        let idx = 0;

        termTimer = setInterval(() => {
            if (idx < lines.length) {
                termOutput.innerHTML += (idx > 0 ? '<br>' : '') + lines[idx];
                idx++;
            } else {
                clearInterval(termTimer);
            }
        }, 65);
    });
});

// ==========================================
// 6. PROJECT CATEGORY FILTERING
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectRows = document.querySelectorAll('.project-row');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        projectRows.forEach((row, i) => {
            if (filter === 'all' || row.dataset.category === filter) {
                row.style.display = 'grid';
                row.classList.remove('visible');
                setTimeout(() => row.classList.add('visible'), i * 35);
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// ==========================================
// 7. SLIDE-OVER PROJECT DRAWER
// ==========================================
const drawer = document.getElementById('projectDrawer');
const backdrop = document.getElementById('drawerBackdrop');
const drawerClose = document.getElementById('drawerClose');

function openDrawer(id) {
    const data = projectData[id];
    if (!data) return;
    document.getElementById('drawerIndex').textContent = data.index;
    document.getElementById('drawerTitle').textContent = data.title;
    document.getElementById('drawerSubtitle').textContent = data.subtitle;

    const bulletsEl = document.getElementById('drawerBullets');
    bulletsEl.innerHTML = data.bullets.map(b => `<li>${b}</li>`).join('');

    const stackEl = document.getElementById('drawerStack');
    stackEl.innerHTML = data.stack.map(s => `<span class="swiss-tag">${s}</span>`).join('');

    drawer.classList.add('open');
    backdrop.classList.add('open');
}

function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
}

projectRows.forEach(row => {
    row.addEventListener('click', () => openDrawer(row.dataset.id));
});
drawerClose.addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
});

// ==========================================
// 8. TWO-WAY SKILL MATRIX <-> PROJECT HIGHLIGHTER
// ==========================================
const skillPills = document.querySelectorAll('.skill-pill');
const skillStatus = document.getElementById('activeSkillStatus');

// Add cascade transition delays to skill pills inside each category
document.querySelectorAll('.skill-category').forEach(cat => {
    cat.querySelectorAll('.skill-pill').forEach((pill, index) => {
        pill.style.transitionDelay = `${index * 35}ms`;
    });
});

skillPills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
        pill.style.transitionDelay = '0ms';
        const skill = pill.dataset.skill.toLowerCase();
        let matchCount = 0;
        projectRows.forEach(row => {
            const techList = row.dataset.tech.toLowerCase().split(',');
            if (techList.includes(skill)) {
                row.classList.add('highlighted');
                matchCount++;
            }
        });
        skillStatus.textContent = `[FILTERING: ${pill.dataset.skill.toUpperCase()} — ${matchCount} PROJECT(S) MATCHED]`;
    });

    pill.addEventListener('mouseleave', () => {
        projectRows.forEach(row => row.classList.remove('highlighted'));
        skillStatus.textContent = `[READY]`;
    });
});

projectRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        const techs = row.dataset.tech.toLowerCase().split(',');
        skillPills.forEach(pill => {
            pill.style.transitionDelay = '0ms';
            if (techs.includes(pill.dataset.skill.toLowerCase())) {
                pill.classList.add('active');
            }
        });
    });
    row.addEventListener('mouseleave', () => {
        skillPills.forEach(pill => pill.classList.remove('active'));
    });
});

// ==========================================
// 9. CLICK-TO-COPY EMAIL
// ==========================================
const copyEmailBtn = document.getElementById('copyEmailBtn');
const emailText = document.getElementById('emailText');
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(copyEmailBtn.dataset.email);
        const original = emailText.textContent;
        emailText.textContent = 'COPIED TO CLIPBOARD ✓';
        emailText.style.color = 'var(--accent)';
        setTimeout(() => {
            emailText.textContent = original;
            emailText.style.color = '';
        }, 2000);
    });
}

// ==========================================
// 10. ADVANCED SCROLL ANIMATIONS & TELEMETRY
// ==========================================

// A. Assign Staggered Delays to Project & Cert Lists
document.querySelectorAll('.project-row.reveal').forEach((el, idx) => {
    el.style.setProperty('--stagger-delay', `${(idx % 5) * 65}ms`);
});
document.querySelectorAll('.cert-item.reveal').forEach((el, idx) => {
    el.style.setProperty('--stagger-delay', `${idx * 70}ms`);
});

// B. Cipher Text Scramble Helper for Section Headers
const cipherChars = "0123456789/#X_";
function scrambleText(el) {
    if (el.dataset.scrambled) return;
    el.dataset.scrambled = "true";
    const original = el.textContent;
    let iteration = 0;
    const interval = setInterval(() => {
        el.textContent = original
            .split("")
            .map((char, index) => {
                if (index < iteration) return original[index];
                return cipherChars[Math.floor(Math.random() * cipherChars.length)];
            })
            .join("");
        if (iteration >= original.length) clearInterval(interval);
        iteration += 0.35;
    }, 30);
}

// C. IntersectionObserver for 3D Unfold Reveals & Section Borders
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// D. Section Observer for Active Nav Link, Laser Border Draw & Number Scramble
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-in-view');

            // Scramble section index number on first view
            const numEl = entry.target.querySelector('.index-label .num');
            if (numEl) scrambleText(numEl);

            // Highlight matching top nav item
            const id = entry.target.getAttribute('id');
            if (id) {
                navLinks.forEach(link => {
                    link.classList.toggle('active-nav', link.getAttribute('href') === `#${id}`);
                });
            }
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.swiss-section').forEach(sec => sectionObserver.observe(sec));

// E. Scroll Progress Laser Bar & Hero Kinetic Parallax
const heroTitleSpans = document.querySelectorAll('.hero-title span');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Update top header laser progress bar
    rootEl.style.setProperty('--scroll-progress', `${progress}%`);

    // Subtle kinetic horizontal split on Hero Title while in top viewport
    if (scrollTop < 700 && heroTitleSpans.length >= 2) {
        heroTitleSpans[0].style.transform = `translate3d(${scrollTop * -0.06}px, 0, 0)`;
        heroTitleSpans[1].style.transform = `translate3d(${scrollTop * 0.08}px, 0, 0)`;
    }
}, { passive: true });