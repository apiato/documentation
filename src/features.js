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
    icon: faBook,
    description: (
      <>
        Detailed Documentation, with Examples, Definitions, Principles and Guidelines.
      </>
    ),
  },
  {
    icon: faGears,
    description: (
      <>
        Powerful Code Generator
      </>
    ),
  },
  {
    icon: faFileCode,
    description: (
      <>
        API Documentations Generator <br/> (using APIDocJS)
      </>
    ),
  },
  {
    icon: faSortNumericUpAlt,
    description: (
      <>
        API Versioning
      </>
    ),
  },
  {
    icon: faLock,
    description: (
      <>
        OAuth2.0 Authentication <br/> (using Laravel Passport)
      </>
    ),
  },
  {
    icon: faHashtag,
    description: (
      <>
        Hash ID Support
      </>
    ),
  },
  {
    icon: faUserLock,
    description: (
      <>
        Role-Based Access Control (RBAC) <br/> (using Laravel Permission)
      </>
    ),
  },
  {
    icon: faDatabase,
    description: (
      <>
        Query Parameters <br/> (orderBy, sortedBy, etc...)
      </>
    ),
  },
  {
    icon: faArrowsLeftRight,
    description: (
      <>
        Pagination, Limit & Offset
      </>
    ),
  },
  {
    icon: faHdd,
    description: (
      <>
        Data Caching
      </>
    ),
  },
  {
    icon: faTags,
    description: (
      <>
        Shallow ETag Support
      </>
    ),
  },
  {
    icon: faTools,
    description: (
      <>
        Performance Profiler
      </>
    ),
  },
  {
    icon: faLanguage,
    description: (
      <>
        Localization
      </>
    ),
  },
  {
    icon: faFacebook,
    description: (
      <>
        Social Authentication <br/> (using Laravel Socialite)
      </>
    ),
  },
  {
    icon: faHandsHelping,
    description: (
      <>
        Useful Tests Helpers
      </>
    ),
  },
  {
    icon: faFileAlt,
    description: (
      <>
        Multiple Response Payload Formats <br/> (JSON, Data Array & Pure Data)
      </>
    ),
  },
];

export default features
