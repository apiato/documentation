import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiAssistantButton, useAiAssistant } from "@sista/ai-assistant-react";

const AiAssistant = () => {
  const { registerFunctions } = useAiAssistant();
  const history = useHistory();

  const navigateToPage = ({ page }) => {
    history.push(`${page}`);
  };

  const navigateToExternalUrl = ({ url }) => {
    window.location.href = url;
  };

  const switchTheme = () => {
    const themeToggle = document.querySelector(
      'button[title^="Switch between dark and light mode"][class*="ColorModeToggle-styles-module"]'
    );
    if (themeToggle) {
      themeToggle.click();
    }
  };

  const searchAlgolia = (queryObject) => {
    // Extract the query from the queryObject
    const query = queryObject.query;

    // Find the search button and click it to open the search interface
    const searchButton = document.querySelector(".DocSearch-Button");
    if (searchButton) {
      searchButton.click();
    }

    // Use a function to wait until an element is available in the DOM
    const waitForElement = (selector, callback) => {
      const element = document.querySelector(selector);
      if (element) {
        callback(element);
      } else {
        setTimeout(() => waitForElement(selector, callback), 100);
      }
    };

    // Function to type the query into the search input
    const typeQuery = (inputElement, query) => {
      inputElement.focus();
      inputElement.value = query;
      const inputEvent = new Event("input", { bubbles: true });
      inputElement.dispatchEvent(inputEvent);

      // Trigger a keyup event to ensure Algolia processes the input
      const keyupEvent = new KeyboardEvent("keyup", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        code: "Enter",
        keyCode: 13,
      });
      inputElement.dispatchEvent(keyupEvent);
    };

    // Wait for the search input to be available and then type the query
    waitForElement("input.DocSearch-Input", (searchBox) => {
      typeQuery(searchBox, query);
    });
  };

  useEffect(() => {
    const aiFunctions = [
      {
        function: {
          handler: searchAlgolia,
          description:
            "Search for a term using Algolia. If the user asks for search, always call this function. This is the default search bar in the documentation, powered by Algolia.",
          parameters: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description: "The term to search for.",
              },
            },
            required: ["query"],
          },
        },
      },
      {
        function: {
          handler: navigateToPage,
          description:
            "Go to a specific page. Navigate to a page. Internal pages navigation. This is what the user often wants, when asking for navigation. Each page contains info about the specific topic, as you can tell from the page url.",
          parameters: {
            type: "object",
            properties: {
              page: {
                type: "string",
                description: "The page to navigate to.",
                enum: [
                  "/docs/prologue/release-notes",
                  "/docs/prologue/upgrade-guide",
                  "/docs/prologue/contribution-guide",
                  "/docs/getting-started/installation",
                  "/docs/getting-started/best-practices",
                  "/docs/getting-started/customized-laravel-components",
                  "/docs/architecture-concepts/porto",
                  "/docs/architecture-concepts/container",
                  "/docs/architecture-concepts/components",
                  "/docs/architecture-concepts/request-lifecycle",
                  "/docs/framework-features/code-generator",
                  "/docs/framework-features/api-versioning",
                  "/docs/framework-features/rbac",
                  "/docs/framework-features/profiler",
                  "/docs/framework-features/etag",
                  "/docs/framework-features/rate-limiting",
                  "/docs/components/main-components",
                  "/docs/components/main-components/routes",
                  "/docs/components/main-components/controllers",
                  "/docs/components/main-components/requests",
                  "/docs/components/main-components/actions",
                  "/docs/components/main-components/models",
                  "/docs/components/main-components/transformers",
                  "/docs/components/main-components/views",
                  "/docs/components/main-components/exceptions",
                  "/docs/components/main-components/subactions",
                  "/docs/components/optional-components",
                  "/docs/components/optional-components/commands",
                  "/docs/components/optional-components/configs",
                  "/docs/components/optional-components/events",
                  "/docs/components/optional-components/factories",
                  "/docs/components/optional-components/helpers",
                  "/docs/components/optional-components/jobs",
                  "/docs/components/optional-components/mail",
                  "/docs/components/optional-components/middlewares",
                  "/docs/components/optional-components/migrations",
                  "/docs/components/optional-components/notifications",
                  "/docs/components/optional-components/policies",
                  "/docs/components/optional-components/repository/repositories",
                  "/docs/components/optional-components/repository/criterias",
                  "/docs/components/optional-components/seeders",
                  "/docs/components/optional-components/service-providers",
                  "/docs/components/optional-components/tests",
                  "/docs/components/optional-components/values",
                  "/docs/security/registration",
                  "/docs/security/authentication",
                  "/docs/security/authorization",
                  "/docs/security/email-varification",
                  "/docs/security/password-reset",
                  "/docs/security/hash-id",
                  "/docs/pacakges/documentation",
                  "/docs/pacakges/localization",
                  "/docs/pacakges/social-authentication",
                  "/docs/consulting",
                  "/?page=home",
                ],
              },
            },
            required: ["page"],
          },
        },
      },
      {
        function: {
          handler: navigateToExternalUrl,
          description: "Navigate to an external URL.",
          parameters: {
            type: "object",
            properties: {
              url: {
                type: "string",
                description:
                  "The URL to navigate to. " +
                  "For 'Github' go to 'https://github.com/apiato'. " +
                  "For 'Discord' go to 'https://discord.com/invite/ryPcV4KM5k'. " +
                  "For 'Sista' go to 'https://smart.sista.ai/?utm_source=docs_apiato&utm_medium=ai_assistant&utm_campaign=user_request_for_navigation'.",
              },
            },
            required: ["url"],
          },
        },
      },
      {
        function: {
          handler: switchTheme,
          description:
            "Turn On / Off the light. Change theme color. Switches between dark and light modes. Toggle the theme.",
        },
      },
      // Add more functions here...
    ];

    if (registerFunctions) {
      registerFunctions(aiFunctions);
    }
  }, [registerFunctions]);

  return <AiAssistantButton />;
};

export default AiAssistant;
