import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
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
    <div className={clsx("col col--3", styles.features)}>
      <div className={styles.featureIcon}>
        <FontAwesomeIcon icon={icon} size="3x" color="#4457C1" />
      </div>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout description="A scalable and enterprise-grade framework layered atop Laravel">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles.heroTitle, "text--center")}>
            {siteConfig.title}
          </h1>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p className={clsx(styles.heroSubtitle, "text--center")}>
                A powerful PHP web framework for building scalable, enterprise-grade APIs.
              </p>
            </div>
          </div>
          <div className="text--center">
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.heroButton
              )}
              to={useBaseUrl("docs/getting-started/introduction")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <h2 className={clsx(styles.title, "text--center")}>Top Features</h2>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
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
      </main>
    </Layout>
  );
}
