import React from 'react';
import { faArrowsAlt, faBullseye, faClock, faCode, faCogs, faCubes, faDatabase, faDesktop, faFileAlt, faFileCode, faHandshake, faHashtag, faHdd, faKey, faLanguage, faMagic, faMap, faMedkit, faMoneyBill, faPaperPlane, faRocket, faSitemap, faStopCircle, faTags, faTimes, faUnlock, faUnlockAlt, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPagelines, faWpexplorer } from '@fortawesome/free-brands-svg-icons';

const features = [
    {
      icon: faKey,
      description: (
        <>
          Authentication with OAuth2.0 for first/third-party clients (using Laravel Passport).
        </>
      ),
    },
    {
      icon: faUser,
      description: (
        <>
          Role-Based Access Control (RBAC), seeded with a Super Admin, Roles and Permissions.
        </>
      ),
    },
    {
      icon: faDatabase,
      description: (
        <>
          Query Parameters support (orderBy, sortedBy and filter) with full-text search.
        </>
      ),
    },
    {
      icon: faPaperPlane,
      description: (
        <>
          Useful Endpoints for managing users, roles/permissions, tokens and more.
        </>
      ),
    },
    {
      icon: faFileCode,
      description: (
        <>
          API Documentations generator, to generate API docs from PHP Docblock using ApiDocJS (provided by Documentation Container).
        </>
      ),
    },
    {
      icon: faArrowsAlt,
      description: (
        <>
          Supports CORS (Cross-Origin Resource Sharing) and JSONP (JSON with padding).
        </>
      ),
    },
    {
      icon: faHashtag,
      description: (
        <>
          Auto encoding/decoding of real ID's, to prevent exposing real ID's to the outer world.
        </>
      ),
    },
    {
      icon: faStopCircle,
      description: (
        <>
          API Throttling (rate limiting to control the rate of traffic received and protect your server).
        </>
      ),
    },
    {
      icon: faWpexplorer,
      description: (
        <>
          Support "include" request parameter to load nested relationships.
        </>
      ),
    },
    {
      icon: faHdd,
      description: (
        <>
          Support Data Caching (with auto clearing on Create, Update and Delete).
        </>
      ),
    },
    {
      icon: faBullseye,
      description: (
        <>
          API versioning in the URL or Header (versioning based on the route file name).
        </>
      ),
    },
    {
      icon: faTimes,
      description: (
        <>
          Exception handling with custom error responses.
        </>
      ),
    },
    {
      icon: faTags,
      description: (
        <>
          Support Shallow ETag HTTP Header, to reduce client bandwidth.
        </>
      ),
    },
    {
      icon: faLanguage,
      description: (
        <>
          Localization - easily switch between languages via request header field (provided by Localization Container).
        </>
      ),
    },
    {
      icon: faPagelines,
      description: (
        <>
          Automatic Data Pagination (meta links to the next and previous data).
        </>
      ),
    },
    {
      icon: faUnlockAlt,
      description: (
        <>
          WEB and API Auth Middlewares. With Proxy endpoints for safer authentication of first-party Apps.
        </>
      ),
    },
    {
      icon: faMedkit,
      description: (
        <>
          Http Requests/Response Monitor and DB Query Debugger (provided by Debugger Container).
        </>
      ),
    },
    {
      icon: faWrench,
      description: (
        <>
          Profiler, to display profiling data in the response (using Laravel Debugbar).
        </>
      ),
    },
    {
      icon: faFacebook,
      description: (
        <>
          Social Authentication supported out of the box "Facebook, Twitter, Google+" Using Laravel Socialite (provided by SocialAuth Container).
        </>
      ),
    },
    {
      icon: faMagic,
      description: (
        <>
          Type-Casting JSON responses and pagination results with Transformers (using Fractal).
        </>
      ),
    },
    {
      icon: faHandshake,
      description: (
        <>
          Useful Tests Helpers for faster and more enjoyable automated testing (using PHPUnit).
        </>
      ),
    },
    {
      icon: faFileAlt,
      description: (
        <>
          Support multiple response payload formats (JSON API spec v1.0, Data Array & pure Data).
        </>
      ),
    },
    {
      icon: faClock,
      description: (
        <>
          Automatic dates conversion to ISO format in responses, from the Transformers.
        </>
      ),
    },
    {
      icon: faMoneyBill,
      description: (
        <>
          Support Stripe payment gateway, extendable to support other payment gateways (provided by Payment Container).
        </>
      ),
    },
    {
      icon: faCogs,
      description: (
        <>
          System and user level settings out of the box (provided by Settings Container).
        </>
      ),
    },
    {
      icon: faUnlock,
      description: (
        <>
          Easy Validation and Authorization (for User data, accessibility and ownership) with Requests objects.
        </>
      ),
    },
    {
      icon: faSitemap,
      description: (
        <>
          Maintainable and scalable Software Architectural Pattern (using the Porto SAP).
        </>
      ),
    },
    {
      icon: faRocket,
      description: (
        <>
          Code generator commands, for generating full CRUD operations, and other useful Commands.
        </>
      ),
    },
    {
      icon: faCubes,
      description: (
        <>
          Separation of UI's (Web, API and CLI) components (routes, controllers, requests, tests...).
        </>
      ),
    },
    {
      icon: faMap,
      description: (
        <>
          Fully detailed documentation, with code samples, principles, definitions and guidelines.
        </>
      ),
    },
    {
      icon: faCode,
      description: (
        <>
          100% customizable and open code. Using greatest frameworks, tools, packages and standards.
        </>
      ),
    },

  ];

  export default features
