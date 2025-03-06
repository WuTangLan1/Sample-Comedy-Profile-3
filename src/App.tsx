// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import About from './components/About';
// Import additional components/pages as needed

const App: React.FC = () => {
  return (
    <Layout>
      <About />
      {/* Add other sections like Projects, Contact, etc. */}
    </Layout>
  );
};

export default App;
