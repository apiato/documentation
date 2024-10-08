import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import features from "../features";

function Feature({ icon, description }) {
  return (
    <div className={clsx("col col--3", styles.features)}>
      {" "}
      {/* Adjusted column size for better layout */}
      <div className={styles.featureIcon}>
        <FontAwesomeIcon icon={icon} size={"3x"} color={"#4457C1"} />
      </div>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="A scalable and enterprise-grade framework layered atop Laravel">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx(styles.heroTitle, "text--center")}>
            {siteConfig.title}
          </h1>{" "}
          {/* Centered title */}
          <div className="row">
            <div className="col col--8 col--offset-2">
              {" "}
              {/* Adjusted column size and offset for better layout */}
              <p
                className={clsx(styles.heroSubtitle, "text--center")}
                style={{ fontSize: "2.5em" }}
              >
                {" "}
                {/* Increased font size and centered text */}A powerful PHP web
                framework for building scalable, enterprise-grade APIs.
              </p>
            </div>
          </div>
          <div className="text--center">
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.heroButton
              )}
              to={useBaseUrl("docs/getting-started/installation")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <h1 className={clsx(styles.title, "text--center")}>Top Features</h1>{" "}
        {/* Centered title */}
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
      </main>
    </Layout>
  );
}
