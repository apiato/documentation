import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { AiAssistantProvider, AiAssistantButton } from '@sista/ai-assistant-react';

const Layout = (props) => {
  return (
    <OriginalLayout {...props}>
      {props.children}
      <AiAssistantButton />
    </OriginalLayout>
  );
};

const LayoutWrapper = (props) => {
  return (
    <AiAssistantProvider
      apiKey='pk-sista-7e69d0b8-4a98-4644-86c4-f908c9536005'
    >
      <Layout {...props} />
    </AiAssistantProvider>
  );
};

export default LayoutWrapper;
