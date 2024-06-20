import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import AiAssistant from '../../components/AiAssistant';
import { AiAssistantProvider } from '@sista/ai-assistant-react';

const Layout = (props) => {
  return (
    <OriginalLayout {...props}>
      {props.children}
      <AiAssistant />
    </OriginalLayout>
  );
};

const LayoutWrapper = (props) => {
  return (
    <AiAssistantProvider
      debug={true}
      apiKey={'pk-sista-7e69d0b8-4a98-4644-86c4-f908c9536005'}
      // apiKey={'pk-sista-e76c0d5d-1881-4ec7-9373-3d7d2d5d4c10'}
      // apiUrl="http://localhost:3077"
    >
      <Layout {...props} />
    </AiAssistantProvider>
  );
};

export default LayoutWrapper;
