import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import features from "../features";
import sponsorLogo from "../../static/sponsors/sistava-logo.png";

config.autoAddCss = false;

function Feature({ icon, description }) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.featureIcon}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </span>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  const heroLogo = useBaseUrl("/img/apiato.png");
  return (
    <Layout description="A scalable and enterprise-grade framework layered atop Laravel">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesque:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.page}>
        {/* ===== HERO ===== */}
        <header className={styles.heroBanner}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>PHP · Laravel · Porto Architecture</span>
              <h1 className={styles.heroTitle}>
                Build <span className={styles.titleAccent}>scalable APIs</span>, faster.
              </h1>
              <p className={styles.heroSubtitle}>
                A modern PHP framework built on top of Laravel that lets you ship
                APIs faster, with authentication, versioning, and proven patterns
                out of the box, on a clean architecture powered by the{" "}
                <a
                  href="https://mahmoudz.github.io/Porto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroLink}
                >
                  Porto pattern
                </a>{" "}
                that scales from monolith to microservices with ease.
              </p>
              <div className={styles.ctaRow}>
                <Link
                  className={styles.btnPrimary}
                  to={useBaseUrl("docs/getting-started/introduction")}
                >
                  Get Started
                </Link>
                <Link
                  className={styles.btnGhost}
                  to="https://github.com/apiato/apiato"
                >
                  View on GitHub
                </Link>
              </div>
              <div className={styles.terminal}>
                <div className={styles.terminalBar}>
                  <span />
                  <span />
                  <span />
                  <em>bash</em>
                </div>
                <div className={styles.terminalBody}>
                  <div>
                    <span className={styles.prompt}>$</span>composer create-project apiato/apiato
                  </div>
                  <div>
                    <span className={styles.prompt}>$</span>php artisan apiato:make:container
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroArt}>
              <img src={heroLogo} alt="Apiato" className={styles.heroLogo} />
            </div>
          </div>
        </header>

        {/* ===== TOP FEATURES ===== */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresInner}>
            <div className={styles.sectionHead}>
              <span className={styles.kicker}>// batteries included</span>
              <h2 className={styles.title}>Everything you need, built in</h2>
            </div>
            {features && features.length > 0 && (
              <div className={styles.featureGrid}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ===== SPONSOR (unchanged) ===== */}
        <section className={styles.sponsors}>
          <div className="container">
            <div className="text--center">
              <a
                href="https://sistava.com/?utm_source=apiato&utm_medium=sponsor_banner&utm_campaign=landing_page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsorLogo}
                  alt="Sistava - Hire AI Employees to Run Your Business."
                  className={styles.sponsorLogo}
                  loading="lazy"
                />
              </a>
              <p className={styles.sponsorTagline}>
                <b>Hire <a href="https://sistava.com/?utm_source=apiato&utm_medium=sponsor_banner&utm_campaign=landing_page" target="_blank" rel="noopener noreferrer">AI Employees</a> to Run Your Business</b>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
