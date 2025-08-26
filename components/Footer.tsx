import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center text-text-light py-8 mt-12 border-t border-slate-200">
      <p>&copy; {currentYear} {name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;