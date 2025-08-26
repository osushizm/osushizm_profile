
import React from 'react';
import { PROFILE_DATA } from './constants';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-bg font-sans">
      <div className="container mx-auto max-w-5xl p-4 md:p-8">
        <Header 
          profile={PROFILE_DATA.profile} 
          socialLinks={PROFILE_DATA.socialLinks} 
        />
        <main className="mt-8 md:mt-12 space-y-12">
          <About 
            bio={PROFILE_DATA.bio}
          />
          <Portfolio portfolioItems={PROFILE_DATA.portfolioItems} />
        </main>
        <Footer name={PROFILE_DATA.profile.name} />
      </div>
    </div>
  );
};

export default App;