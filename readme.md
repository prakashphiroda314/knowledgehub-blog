# 🌟 Prakash Knowledge Hub

[![Platform](https://img.shields.io/badge/Platform-Static-blueviolet.svg)](#technology-stack)
[![Hosting](https://img.shields.io/badge/Hosting-Netlify%20%7C%20GitHub%20Pages-blue.svg)](#deployment)
[![Design](https://img.shields.io/badge/Design-Editorial%20%7C%20Glassmorphism-amber.svg)](#color-palette)

A premium, fully responsive personal knowledge platform built with a semantic frontend stack. Styled as a high-end professional editorial publication in the vein of *Medium*, *Hashnode*, and *Stripe*, it features a distinctive deep purple and gold brand identity.

---

## 📖 About the Platform

**Prakash Knowledge Hub** is a lightning-fast static architecture engine curated by **Prakash Choudhary** (AI Educator, Digital Builder, and Web3 Advocate). The platform serves as an evergreen editorial space across eight core dynamic knowledge domains:

* 🤖 **Artificial Intelligence** — LLMs, agentic workflows, and prompt mechanics
* 🍇 **Pi Network** — Ecosystem insights and comprehensive utility breakdowns
* ⛓️ **Web3 & Blockchain** — Decentralized protocols and cryptographic frameworks
* 📊 **Data Analytics** — Industry methodologies, pipelines, and career roadmaps
* ✨ **Personal Branding** — Digital footprint optimization and LinkedIn positioning
* 🚀 **Digital Growth** — Audience curation, conversion metrics, and visibility playbooks
* 🎓 **Education** — Modern frameworks for tech pedagogy and micro-learning
* 🌾 **Agri-Tech** — The integration of automation and data intelligence in Indian agriculture

---

## ✨ Key Features

* ⚡ **Zero-Backend Architecture** — Entirely static layout. No servers or database dependencies; pure HTML5, CSS3, and modern ES6 JavaScript.
* 🌗 **System-Adaptive Dark Mode** — Respects native OS settings with an interactive manual toggle, state-persisted cleanly via `localStorage`.
* 🔍 **Instant Full-Text Client Search** — Localized micro-search indexing across article titles, context excerpts, tags, and categorical assignments.
* 🗂️ **Categorized Taxonomy UI** — On-the-fly analytical sorting and taxonomy grouping across all 8 foundational niches.
* 🎭 **Fluid Micro-Interactions** — Integrated `IntersectionObserver` scroll animations, floating hover states, and premium glassmorphism layouts.
* 📈 **Production-Ready Technical SEO** — Built-in `robots.txt`, dynamic structural `sitemap.xml`, Open Graph meta-tags, Twitter Cards, and schema-compliant JSON-LD structured data.
* 📄 **Data-Driven Content Engine** — Shipped with 20 production-grade sample articles populated programmatically via `data/articles.json`.

---

## 🛠️ Technology Stack

| Technology | Implementation Scope |
| :--- | :--- |
| **HTML5** | Semantic document structuring and SEO markup architecture |
| **Tailwind CSS (CDN)** | Production utility-first compilation for rapid adaptive design |
| **Vanilla JavaScript** | Asynchronous JSON parsing, dark mode state machines, and local search indexer |
| **JSON Data Store** | Flat-file structured article layout ledger (`data/articles.json`) |
| **Google Fonts** | `Poppins` (Display headings) & `Inter` (High-readability UI copy body text) |
| **Netlify Production** | Distributed global CDN hosting deployment, micro-cache control header directives |

---

## 📂 Project Structure

```text
/
├── index.html              # Core application entrypoint (Home UI)
├── articles.html           # Full article indexing matrix with dynamic sort/filter
├── article.html            # Individual semantic article viewing template
├── categories.html         # High-level taxonomy exploration index
├── about.html              # Professional bio & practitioner overview
├── search.html             # Client-side multi-indexed keyword search engine
├── contact.html            # Static contact interface
├── data/
│   └── articles.json       # Content database (20 articles, 8 distinct domains)
├── assets/
│   ├── css/
│   │   └── styles.css      # Core Custom CSS (native variables, keyframes, transitions)
│   └── js/
│       └── main.js         # Shared global JavaScript engine (DOM building, nav systems)
├── netlify.toml            # Production header setups & asset security rules
├── robots.txt              # Search engine routing configurations
└── sitemap.xml             # Search index crawler directory mapping
