
import React from 'react';
import { TwitterIcon, TwitchIcon, YouTubeIcon, BlogIcon } from './components/IconComponents';
import type { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  profile: {
    name: "CyberRonin_2077",
    avatar: "https://picsum.photos/seed/gamer_avatar/200/200",
  },
  bio: "Just a streamer navigating the neon-drenched streets of the digital world. I play everything from retro classics to the latest AAA titles. My goal is to build a fun and welcoming community. Let's create some epic moments together!",
  socialLinks: [
    {
      name: "X (Twitter)",
      url: "https://x.com/",
      icon: React.createElement(TwitterIcon),
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/",
      icon: React.createElement(TwitchIcon),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/",
      icon: React.createElement(YouTubeIcon),
    },
    {
      name: "Blog",
      url: "#",
      icon: React.createElement(BlogIcon),
    },
  ],
  portfolioItems: [
    {
      title: "Championship Win - Apex Legends",
      description: "Secured the final kill to win the Season 20 Championship. An unforgettable moment for the whole community.",
      image: "https://picsum.photos/seed/apex/600/400",
      url: "#",
    },
    {
      title: "24-Hour Charity Stream",
      description: "Raised over $5,000 for a great cause during our annual charity event. Thank you for the incredible support!",
      image: "https://picsum.photos/seed/charity/600/400",
      url: "#",
    },
    {
      title: "First Look: Cyberpunk 2077 DLC",
      description: "An exclusive early look at the latest DLC, exploring every new corner of Night City.",
      image: "https://picsum.photos/seed/cyberpunk/600/400",
      url: "#",
    },
    {
      title: "Retro Gaming Night",
      description: "A throwback stream where we tackled the classics. The nostalgia was real!",
      image: "https://picsum.photos/seed/retro/600/400",
      url: "#",
    },
    {
      title: "Building a Custom Keyboard",
      description: "A different kind of stream where I built my dream mechanical keyboard from scratch. The clicks are satisfying.",
      image: "https://picsum.photos/seed/keyboard/600/400",
      url: "#",
    },
     {
      title: "Cosplay Showcase",
      description: "Showcasing my latest cosplay build, inspired by my favorite in-game character.",
      image: "https://picsum.photos/seed/cosplay/600/400",
      url: "#",
    },
  ],
};
