-- MySQL Database Schema & Seed Data for PrimeAce Tech
-- Create Database if not exists
CREATE DATABASE IF NOT EXISTS `primeace_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `primeace_db`;

-- 1. Table structure for contact_messages
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `company_name` VARCHAR(255) DEFAULT NULL,
  `project_type` VARCHAR(100) DEFAULT NULL,
  `budget_range` VARCHAR(100) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table structure for quote_requests
CREATE TABLE IF NOT EXISTS `quote_requests` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `company` VARCHAR(255) DEFAULT NULL,
  `service_needed` VARCHAR(100) NOT NULL,
  `project_description` TEXT NOT NULL,
  `budget` VARCHAR(100) NOT NULL,
  `timeline` VARCHAR(100) NOT NULL,
  `preferred_contact_method` VARCHAR(50) NOT NULL,
  `file_path` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table structure for blog_posts
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `category` VARCHAR(100) NOT NULL,
  `excerpt` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `featured_image` VARCHAR(255) DEFAULT NULL,
  `author` VARCHAR(100) NOT NULL,
  `published_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table structure for projects (Case Studies)
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `category` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `challenge` TEXT NOT NULL,
  `solution` TEXT NOT NULL,
  `results` TEXT NOT NULL, -- Stored as comma-separated or simple text listing
  `technologies` VARCHAR(255) NOT NULL, -- Comma-separated tags
  `featured_image` VARCHAR(255) DEFAULT NULL,
  `gallery_images` TEXT DEFAULT NULL, -- Comma-separated image urls
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- SEED DATA
-- --------------------------------------------------------

-- Seed Projects (Case Studies)
INSERT INTO `projects` (`title`, `slug`, `category`, `description`, `challenge`, `solution`, `results`, `technologies`, `featured_image`, `gallery_images`) VALUES
('Nimbus Analytics', 'nimbus-analytics', 'SaaS', 
'A comprehensive, real-time multi-tenant business intelligence dashboard serving 12k+ active daily subscribers.',
'Nimbus was burdened by a slow legacy charting system, severe data latency spikes under load, and high infrastructure costs due to inefficient SQL query patterns.',
'We re-engineered their analytical pipeline using an optimized Next.js frontend, an ingestion gateway powered by Rust, and PostgreSQL backed by TimescaleDB for highly-scalable time-series telemetry. We also introduced automatic caching with Redis and an aesthetic dark UI system that improves user dwell time.',
'99.99% analytical ingestion uptime,92% faster rendering response,34% lower AWS database hosting costs,12k+ active daily users',
'Next.js,Postgres,TypeScript,Tailwind,Redis,TimescaleDB',
'portfolio-mockups.jpg',
'portfolio-mockups.jpg'),

('Marketly Marketplace', 'marketly-marketplace', 'E-commerce', 
'A headless B2B marketplace powering over 800 independent custom merchants across the MENA region.',
'The client required a hyper-fast storefront builder where regional vendors could spin up local stores with instant local payment methods, custom catalogs, and Arabic/English language toggling without affecting main-site transaction rates.',
'We engineered a decoupled headless marketplace architecture using Shopify Hydrogen and GraphQL. Storefront configurations are saved in high-speed DynamoDB records, and localized caching on Cloudflare workers serves global regions instantly.',
'800+ active enterprise vendors,58% surge in mobile order conversion,220ms average global page load time,1.2M transactions processed',
'Shopify Hydrogen,GraphQL,Tailwind,Cloudflare Workers,React',
'portfolio-mockups.jpg',
'portfolio-mockups.jpg'),

('FleetGo Tracking', 'fleetgo-tracking', 'Mobile Apps', 
'An on-demand delivery fleet orchestrator with sub-second driver mapping and real-time path optimizations.',
'Drivers suffered from unreliable GPS sync, sluggish route adjustments leading to missed delivery slots, and poor battery optimization on Android devices.',
'We created a cross-platform React Native app integrated with Mapbox SDK and native background geolocation managers. A customized A* routing algorithm on Go handles backend dispatch calculations, providing rapid traffic-adjusted path recommendations.',
'15% shorter average delivery windows,3.4M path calculations per day,40% reduction in mobile battery drain,98% driver satisfaction rating',
'React Native,Mapbox SDK,Go,TypeScript,WebSockets',
'portfolio-mockups.jpg',
'portfolio-mockups.jpg'),

('Aiden AI Copilot', 'aiden-ai-copilot', 'AI', 
'A vector-driven customer service automation system resolving 70%+ user requests autonomously.',
'Aiden Client was struggling with a heavy influx of level-1 support tickets, escalating costs of manual operations, and high response times for basic customer troubleshooting.',
'We developed a custom RAG (Retrieval-Augmented Generation) copilot backed by Pinecone vector databases and OpenAI models. It crawls internal technical documentation dynamically and responds using secure guardrails in under 1.5 seconds, escalating to human staff via high-speed WebSockets when necessary.',
'71% of support tickets resolved autonomously,1.4 second average automated response,42% decrease in support operations cost,94.5% positive rating',
'OpenAI GPT-4,Pinecone,TypeScript,Postgres,React,WebSockets',
'portfolio-mockups.jpg',
'portfolio-mockups.jpg');

-- Seed Blog Posts
INSERT INTO `blog_posts` (`title`, `slug`, `category`, `excerpt`, `content`, `author`) VALUES
('The Future of Headless E-commerce', 'future-of-headless-ecommerce', 'Software Development',
'How modern tech stacks are replacing bulky CMS templates with high-performance GraphQL storefronts.',
'<p>E-commerce is undergoing a structural revolution. Bulky, monolithic templates are giving way to high-performance decoupled headless storefronts. But why should your brand invest in headless commerce?</p><h2>The Core Problem with Monoliths</h2><p>Traditional platforms bundle the store management database and the front-end presentation together. Every minor redesign or dynamic element requires compiling the entire codebase. This slows loading speeds, impacts core web vitals, and hurts SEO ranking.</p><h2>The Headless Solution</h2><p>By splitting the frontend (e.g. Next.js, Shopify Hydrogen) from the commerce backend via robust APIs (GraphQL/REST), developers can build lightning-fast web pages. These pages load in milliseconds, scale dynamically, and allow custom designs without impacting database performance.</p><h2>Benefits of Decoupled Stacks</h2><ul><li>Speed: 100/100 Google Lighthouse scores are attainable.</li><li>Flexibility: Design whatever custom interactions your marketing team envisions.</li><li>Security: Frontends are simple static or edge-rendered pages, heavily reducing injection vectors.</li></ul>',
'Alex Rivera'),

('Scaling AI Integration Safely in 2026', 'scaling-ai-integration-safely', 'AI Automation',
'An engineering guide to deploying RAG systems and LLMs with strict privacy, rate-limiting, and cost containment.',
'<p>AI integrations are no longer a luxury; they are becoming standard business engines. However, scaling large language model integrations presents unique security, data leakage, and billing challenges.</p><h2>Vector Embeddings & Retrieval Augmented Generation (RAG)</h2><p>Rather than fine-tuning expensive models, enterprise systems use RAG to query vector databases (like Pinecone or pgvector). This allows AI engines to leverage real-time business facts with context-aware precision, minimizing hallucinations.</p><h2>Crucial Engineering Safety Practices</h2><ul><li>Strict PII Anonymization: Ensure sensitive user data is filtered before hitting third-party LLM endpoints.</li><li>Token Budget Boundaries: Limit query counts to avoid recursive billing spikes.</li><li>WebSocket Escalation: Build rapid handoffs so users transfer seamlessly to human agents when confidence scores dip.</li></ul>',
'Aisha Rahman'),

('Why Space Grotesk and HSL Colors Rule Modern Web Design', 'why-space-grotesk-hsl-colors-rule', 'Web Design',
'A deep dive into visual aesthetics, modern typography, glassmorphism, and color models.',
'<p>First impressions dictate digital credibility. Modern premium styling relies on clean geometric fonts and unified color models like HSL/OKLCH to drive immersion.</p><h2>The Typography Equation</h2><p>Modern typography like Space Grotesk provides a technical yet friendly vibe. It bridges software stability with creative energy. Clean layouts leverage strict visual hierarchies with bold headline scaling.</p><h2>The Shift to OKLCH Color Design</h2><p>Traditional Hex/RGB colors are difficult to manipulate dynamically. OKLCH or HSL allows designers to programmatically adjust lightness or alpha variables. This makes creating premium glowing glass panels, gradients, and uniform dark modes incredibly simple and clean.</p>',
'Liam Cross');
