import React from 'react';
import {
  faDatabase,
  faFileAlt,
  faFileCode,
  faHashtag,
  faHdd,
  faLanguage,
  faTags
} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGears} from "@fortawesome/free-solid-svg-icons/faGears";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faArrowsLeftRight} from "@fortawesome/free-solid-svg-icons/faArrowsLeftRight";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faSortNumericUpAlt} from "@fortawesome/free-solid-svg-icons/faSortNumericUpAlt";
import {faUserLock} from "@fortawesome/free-solid-svg-icons/faUserLock";
import {faTools} from "@fortawesome/free-solid-svg-icons/faTools";
import {faHandsHelping} from "@fortawesome/free-solid-svg-icons/faHandsHelping";

const features = [

  {
    icon: faGears,
    description: "Code Generators",
  },
  {
    icon: faFileCode,
    description: "Documentation Generators",
  },
  {
    icon: faSortNumericUpAlt,
    description: "API Versioning",
  },
  {
    icon: faLock,
    description: "OAuth2.0 Authentication",
  },

  {
    icon: faUserLock,
    description: "Role-Based Access Control",
  },
  {
    icon: faArrowsLeftRight,
    description: "Pagination Support",
  },


  {
    icon: faHdd,
    description: "Data Caching",
  },
  {
    icon: faTags,
    description: "ETag Support",
  },
  {
    icon: faTools,
    description: "Performance Profiler",
  },
  {
    icon: faLanguage,
    description: "Localization",
  },
  {
    icon: faFacebook,
    description: "Social Authentication",
  },
  {
    icon: faHandsHelping,
    description: "Test Helpers",
  },
  {
    icon: faFileAlt,
    description: "Multiple Response Formats",
  },
  {
    icon: faDatabase,
    description: "Query Parameters Support",
  },
  {
    icon: faHashtag,
    description: "Hash ID Support",
  },
  {
    icon: faBook,
    description: "Comprehensive Documentation",
  },
];

export default features
