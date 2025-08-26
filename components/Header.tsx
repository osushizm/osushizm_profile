
import React from 'react';
import type { Profile, SocialLink } from '../types';

interface HeaderProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

const Header: React.FC<HeaderProps> = ({ profile, socialLinks }) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 p-6 bg-soft-card rounded-2xl shadow-md">
      <div className="flex items-center space-x-6">
        <img 
          src={profile.avatar} 
          alt={profile.name} 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-brand-primary object-cover" 
        />
        <h1 className="text-3xl md:text-5xl font-bold font-orbitron tracking-wider text-text-dark">
          {profile.name}
        </h1>
      </div>
      <nav className="flex items-center space-x-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-text-light hover:text-brand-primary transition-colors duration-300 transform hover:scale-110"
          >
            <div className="w-8 h-8">{link.icon}</div>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;