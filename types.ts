
import type React from 'react';

export interface Profile {
  name: string;
  avatar: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export interface ProfileData {
  profile: Profile;
  bio: string;
  socialLinks: SocialLink[];
  portfolioItems: PortfolioItem[];
}
