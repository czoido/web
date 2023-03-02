import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import ConanHeader from '../components/header';
import ConanHome from '../components/home';
import ConanFooter from '../components/footer';

function HomePage() {
    return (
    <React.StrictMode>
      <SSRProvider>
        <div>
          <div className="header-bg position-absolute"><img src="/kitchen-bg.svg" width="100%"></img></div>
          <ConanHeader/>
        </div>
        <ConanHome/>
        <ConanFooter/>
      </SSRProvider>
    </React.StrictMode>
  );
}

export default HomePage
