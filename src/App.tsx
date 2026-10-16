import React, { useState, useEffect } from 'react';
import {
  Play,
  Download,
  Film,
  Tv,
  AlertCircle,
  Copy,
  Check,
  Settings,
  X,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Info,
  Sliders,
  Code
} from 'lucide-react';

// Default 5 Destination URLs as specified
const DEFAULT_DESTINATIONS = {
  site1: 'https://auctionr.org/4/e4ff61714b2c2b4418bc12bc723c480c',
  site2: 'https://auctionr.org/4/26f65c93974c9edba3d228aa59795b02',
  site3: 'https://auctionr.org/4/63ceef5870c6657a2750b71fcc05310b',
  site4: 'https://asiaso.org/4/14e30f57a0099fcbdefc8313cfdc447c',
  site5: 'https://directyp.org/4/63c25427152decce488a826c105eddec',
};

interface RelatedPost {
  id: number;
  title: string;
  image: string;
  destinationUrl: string;
  duration: string;
  viewCount: string | null;
  label: string;
}

const INITIAL_RELATED_POSTS: RelatedPost[] = [
  {
    id: 1,
    title: 'Top Bangladeshi Video Collection',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site1,
    duration: '12:45',
    viewCount: null,
    label: 'Trending',
  },
  {
    id: 2,
    title: 'New Trending Video Collection',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site2,
    duration: '09:30',
    viewCount: null,
    label: 'Popular',
  },
  {
    id: 3,
    title: 'Latest HD Video Updates',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site3,
    duration: '16:15',
    viewCount: null,
    label: 'HD',
  },
  {
    id: 4,
    title: 'Popular Bangla Video Collection',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site4,
    duration: '14:50',
    viewCount: null,
    label: 'Trending',
  },
  {
    id: 5,
    title: 'New Video Collection — Watch Now',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site5,
    duration: '21:05',
    viewCount: null,
    label: '',
  },
  {
    id: 6,
    title: 'Trending Video Updates',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site1,
    duration: '08:40',
    viewCount: null,
    label: 'Popular',
  },
  {
    id: 7,
    title: 'Explore More Video Collections',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site2,
    duration: '11:20',
    viewCount: null,
    label: '',
  },
  {
    id: 8,
    title: 'Latest Video Highlights',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site3,
    duration: '15:35',
    viewCount: null,
    label: 'HD',
  },
  {
    id: 9,
    title: 'Popular Video Updates',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site4,
    duration: '10:15',
    viewCount: null,
    label: 'Trending',
  },
  {
    id: 10,
    title: 'More Videos to Explore',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site5,
    duration: '18:22',
    viewCount: null,
    label: '',
  },
  {
    id: 11,
    title: 'Recently Added Collection',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site1,
    duration: '13:50',
    viewCount: null,
    label: 'New',
  },
  {
    id: 12,
    title: 'Featured Video Collection',
    image: '',
    destinationUrl: DEFAULT_DESTINATIONS.site2,
    duration: '24:10',
    viewCount: null,
    label: 'Featured',
  },
];

export default function App() {
  // Live Config State (Reflects siteConfig)
  const [pageTitle, setPageTitle] = useState('Maasranga TV Te Viral Mehazabien Er Full Video');
  const [mainThumbnail, setMainThumbnail] = useState('');
  const [mainVideoUrl, setMainVideoUrl] = useState('');
  const [mainDestinationUrl, setMainDestinationUrl] = useState(DEFAULT_DESTINATIONS.site1);
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DESTINATIONS.site2);
  const [hdUrl, setHdUrl] = useState(DEFAULT_DESTINATIONS.site3);
  const [playerUrl, setPlayerUrl] = useState(DEFAULT_DESTINATIONS.site1);
  const [videoDuration, setVideoDuration] = useState('');
  const [ageNoticeEnabled, setAgeNoticeEnabled] = useState(true);
  
  // Ad slots configuration
  const [firstSlotEnabled, setFirstSlotEnabled] = useState(true);
  const [secondSlotEnabled, setSecondSlotEnabled] = useState(false);
  const [thirdSlotEnabled, setThirdSlotEnabled] = useState(false);

  // Related posts
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>(INITIAL_RELATED_POSTS);

  // UI Helper States
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [showUnavailableModal, setShowUnavailableModal] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [previewViewport, setPreviewViewport] = useState<'full' | 'laptop' | 'tablet' | 'mobile'>('full');
  const [copiedCode, setCopiedCode] = useState(false);

  // Load Ad Slot A Script dynamically once
  useEffect(() => {
    if (firstSlotEnabled) {
      const scriptId = 'ad-script-ecf352c2efc57308c0f5db036880cad2';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://pl29761639.effectivecpmnetwork.com/ecf352c2efc57308c0f5db036880cad2/invoke.js';
        document.body.appendChild(script);
      }
    }
  }, [firstSlotEnabled]);

  // Main Play Button Action
  const handleMainPlay = () => {
    if (mainVideoUrl && mainVideoUrl.trim() !== '') {
      setIsPlayingVideo(true);
      return;
    }
    if (mainDestinationUrl && mainDestinationUrl.trim() !== '') {
      window.open(mainDestinationUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setShowUnavailableModal(true);
  };

  // Safe CTA click handler
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!url || url.trim() === '') {
      e.preventDefault();
      setShowUnavailableModal(true);
    }
  };

  // Generate the clean standalone single-file index.html code for download/copy
  const generateStandaloneHtml = () => {
    const serializedRelatedPosts = JSON.stringify(relatedPosts, null, 2);
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>${pageTitle}</title>
  <meta name="description" content="Watch high-definition video collections, streaming updates, and verified media highlights." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="video.other" />
  <meta property="og:title" content="${pageTitle}" />
  <meta property="og:description" content="Watch high-definition video collections, streaming updates, and verified media highlights." />
  <meta property="og:image" content="${mainThumbnail}" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="Watch high-definition video collections, streaming updates, and verified media highlights." />
  <meta name="twitter:image" content="${mainThumbnail}" />
  <link rel="canonical" href="" />

  <!-- Google Fonts: Plus Jakarta Sans & Noto Sans Bengali -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --bg-color: #080808;
      --card-bg: #121212;
      --card-hover-bg: #181818;
      --primary-red: #ff1b35;
      --primary-red-hover: #e0142d;
      --primary-red-glow: rgba(255, 27, 53, 0.45);
      --border-subtle: rgba(255, 27, 53, 0.18);
      --border-active: #ff1b35;
      --text-white: #ffffff;
      --text-gray: #a3a3a3;
      --text-muted: #737373;
      --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-bengali: 'Noto Sans Bengali', 'SolaimanLipi', 'Kalpurush', sans-serif;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-white);
      font-family: var(--font-main);
      line-height: 1.5;
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    .page-container {
      width: 100%;
      max-width: 1080px;
      margin: 0 auto;
      padding: 0 16px 40px;
    }

    @media (min-width: 768px) {
      .page-container {
        padding: 0 24px 60px;
      }
    }

    .age-notice-bar {
      width: 100%;
      background-color: #111111;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 8px 16px;
      font-size: 12px;
      color: var(--text-gray);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-align: center;
    }

    .age-badge {
      background-color: var(--primary-red);
      color: #ffffff;
      font-weight: 800;
      font-size: 11px;
      padding: 2px 7px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      flex-shrink: 0;
    }

    .header-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      margin-bottom: 24px;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 800;
      font-size: 20px;
      letter-spacing: -0.5px;
    }

    .brand-dot {
      color: var(--primary-red);
    }

    .header-tag {
      font-size: 11px;
      color: var(--text-muted);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 4px 10px;
      border-radius: 20px;
    }

    .main-video-wrapper {
      position: relative;
      width: 100%;
      background-color: #000000;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid var(--border-subtle);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(255, 27, 53, 0.08);
      margin-bottom: 20px;
    }

    .aspect-16-9 {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
    }

    .main-thumbnail-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: ${mainThumbnail ? 'block' : 'none'};
    }

    .thumbnail-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.45) 45%,
        rgba(0, 0, 0, 0.94) 100%
      );
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 16px;
      pointer-events: none;
    }

    @media (min-width: 640px) {
      .thumbnail-overlay {
        padding: 28px;
      }
    }

    .play-button-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      cursor: pointer;
    }

    .play-button {
      width: 68px;
      height: 68px;
      background-color: var(--primary-red);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-shadow: 0 0 32px var(--primary-red-glow), 0 4px 16px rgba(0, 0, 0, 0.6);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }

    .play-button::before {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 2px solid rgba(255, 27, 53, 0.4);
      animation: pulse-ring 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    @keyframes pulse-ring {
      0% { transform: scale(0.9); opacity: 0.8; }
      50% { transform: scale(1.15); opacity: 0.2; }
      100% { transform: scale(1.3); opacity: 0; }
    }

    .play-button svg {
      width: 30px;
      height: 30px;
      fill: #ffffff;
      margin-left: 5px;
    }

    .play-button-container:hover .play-button {
      transform: scale(1.08);
      background-color: var(--primary-red-hover);
      box-shadow: 0 0 42px rgba(255, 27, 53, 0.7);
    }

    .play-button-container:active .play-button {
      transform: scale(0.95);
    }

    @media (min-width: 640px) {
      .play-button {
        width: 86px;
        height: 86px;
      }
      .play-button svg {
        width: 38px;
        height: 38px;
        margin-left: 6px;
      }
    }

    .video-headline {
      font-size: clamp(1.2rem, 3.8vw, 2.1rem);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.25;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95), 0 0 20px rgba(0, 0, 0, 0.8);
      margin-top: auto;
      max-width: 880px;
      word-break: break-word;
    }

    .video-headline .highlight {
      color: var(--primary-red);
      text-shadow: 0 0 14px rgba(255, 27, 53, 0.6);
    }

    .cta-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }

    @media (min-width: 600px) {
      .cta-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .cta-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: linear-gradient(180deg, #181818 0%, #101010 100%);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 14px 20px;
      color: var(--text-white);
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.2px;
      min-height: 52px;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      text-decoration: none;
    }

    .cta-btn:hover {
      border-color: var(--primary-red);
      background: linear-gradient(180deg, #222222 0%, #151515 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 27, 53, 0.2);
    }

    .cta-btn.primary-cta {
      background: linear-gradient(180deg, #ff1b35 0%, #d41128 100%);
      border-color: #ff3850;
      color: #ffffff;
      box-shadow: 0 4px 16px rgba(255, 27, 53, 0.35);
    }

    .cta-btn.primary-cta:hover {
      background: linear-gradient(180deg, #ff334b 0%, #e0142d 100%);
      box-shadow: 0 6px 24px rgba(255, 27, 53, 0.55);
    }

    .cta-btn svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .bengali-instruction-box {
      background-color: #121212;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 28px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }

    .bengali-instruction-box .info-icon {
      color: var(--primary-red);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .bengali-text {
      font-family: var(--font-bengali);
      font-size: 14px;
      line-height: 1.65;
      color: #e5e5e5;
    }

    .bengali-highlight {
      color: var(--primary-red);
      font-weight: 700;
    }

    .ad-slot-wrapper {
      width: 100%;
      max-width: 100%;
      margin: 24px 0 32px;
      padding: 14px;
      background-color: #0d0d0d;
      border: 1px dashed rgba(255, 255, 255, 0.12);
      border-radius: 10px;
      text-align: center;
      overflow: hidden;
      box-sizing: border-box;
      min-height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .ad-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      margin-bottom: 8px;
      align-self: flex-start;
    }

    .ad-content-box {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }

    .section-header {
      margin-bottom: 18px;
    }

    .section-title {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.3px;
    }

    .section-title::before {
      content: '';
      display: inline-block;
      width: 4px;
      height: 20px;
      background-color: var(--primary-red);
      border-radius: 2px;
    }

    .section-subtitle {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 4px;
      padding-left: 12px;
    }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    @media (min-width: 640px) {
      .related-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
      }
    }

    @media (min-width: 1024px) {
      .related-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
    }

    .video-card {
      background-color: var(--card-bg);
      border: 1px solid rgba(255, 27, 53, 0.14);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
    }

    .video-card:hover {
      background-color: var(--card-hover-bg);
      border-color: var(--primary-red);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), 0 0 16px rgba(255, 27, 53, 0.25);
    }

    .card-thumb-wrap {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      background-color: #000000;
      overflow: hidden;
    }

    .card-thumb-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .video-card:hover .card-thumb-img {
      transform: scale(1.05);
    }

    .card-thumb-placeholder {
      position: absolute;
      inset: 0;
      background-color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333333;
    }

    .video-card:hover .card-thumb-placeholder {
      color: var(--primary-red);
    }

    .card-thumb-placeholder svg {
      width: 32px;
      height: 32px;
    }

    .card-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background-color: var(--primary-red);
      color: #ffffff;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 2px 6px;
      border-radius: 4px;
      z-index: 2;
    }

    .card-duration {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.8);
      color: #ffffff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 2;
    }

    .card-play-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.2s ease;
      z-index: 3;
    }

    .card-play-icon {
      width: 40px;
      height: 40px;
      background-color: var(--primary-red);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-shadow: 0 0 15px rgba(255, 27, 53, 0.6);
      transform: scale(0.85);
      transition: transform 0.2s ease;
    }

    .card-play-icon svg {
      width: 18px;
      height: 18px;
      fill: #ffffff;
      margin-left: 2px;
    }

    .video-card:hover .card-play-overlay {
      opacity: 1;
    }

    .video-card:hover .card-play-icon {
      transform: scale(1);
    }

    .card-info {
      padding: 12px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card-title {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .card-meta {
      font-size: 11px;
      color: var(--text-muted);
      margin-top: auto;
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(6px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-box {
      background-color: #161616;
      border: 1px solid var(--border-subtle);
      border-radius: 14px;
      max-width: 440px;
      width: 100%;
      padding: 24px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 27, 53, 0.15);
    }

    .page-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 30px 0 20px;
      margin-top: 40px;
      text-align: center;
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <!-- 18+ Adult Disclaimer Notice Bar -->
  <div class="age-notice-bar" id="ageNoticeBanner">
    <span class="age-badge">18+</span>
    <span>ADULT CONTENT NOTICE: This media archive is strictly intended for mature audiences aged 18 and older. All content is lawful and consensual.</span>
  </div>

  <div class="page-container">
    
    <!-- Header Brand Navigation -->
    <header class="header-nav">
      <div class="brand-logo">
        <span>VIDEO<span class="brand-dot">HUB</span></span>
      </div>
      <div class="header-tag">HD Stream</div>
    </header>

    <!-- Main Thumbnail / Video Stage -->
    <main>
      <section class="main-video-wrapper" id="mainVideoContainer" aria-label="Featured Video Player">
        <div class="aspect-16-9">
          <!-- Main Thumbnail: Strictly BLACK initially; populated dynamically if URL is provided -->
          <img id="mainThumbnailImg" class="main-thumbnail-img" src="${mainThumbnail}" alt="Video Thumbnail" loading="lazy" />

          <!-- Interactive Play Button -->
          <div class="play-button-container" id="mainPlayButton" role="button" tabindex="0" aria-label="Play video">
            <div class="play-button">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>

          <!-- Headline and Scrim Overlay -->
          <div class="thumbnail-overlay">
            <h1 class="video-headline" id="mainHeadline">
              Maasranga TV Te <span class="highlight">Viral</span> Mehazabien Er <span class="highlight">Full Video</span>
            </h1>
          </div>

          <iframe id="mainVideoIframe" style="display:none; position:absolute; inset:0; width:100%; height:100%; border:none; z-index:20; background:#000;" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </section>

      <!-- Main CTA Buttons (Download, HD, Watch With Your Player) -->
      <section class="cta-grid" aria-label="Action Buttons">
        <a id="downloadBtn" href="${downloadUrl || '#'}" target="_blank" rel="noopener noreferrer" class="cta-btn primary-cta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download</span>
        </a>

        <a id="hdBtn" href="${hdUrl || '#'}" target="_blank" rel="noopener noreferrer" class="cta-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <span>HD</span>
        </a>

        <a id="playerBtn" href="${playerUrl || '#'}" target="_blank" rel="noopener noreferrer" class="cta-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Watch With Your Player</span>
        </a>
      </section>

      <!-- Bengali Visitor Instructions -->
      <section class="bengali-instruction-box" aria-label="Visitor Instructions">
        <div class="info-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>
        <p class="bengali-text">
          <span class="bengali-highlight">নির্দেশনা:</span> কোনো লিংকে ক্লিক করলে অন্য ওয়েবসাইট খুলতে পারে। সেখানে ভিডিও না পেলে এই পেজে ফিরে আসুন এবং ভিডিওর জন্য নির্ধারিত বাটনটি ব্যবহার করুন। ভিডিও চালু না হলে পেজের নির্দেশনা অনুসরণ করুন।
        </p>
      </section>

      <!-- Native Banner Ad Slot A (Below instructions) -->
      <section id="adSlotAWrapper" class="ad-slot-wrapper" aria-label="Advertisement Slot A">
        <div class="ad-label">Advertisement</div>
        <div class="ad-content-box">
          <!-- SUPPLIED NATIVE AD UNIT A -->
          <script async="async" data-cfasync="false" src="https://pl29761639.effectivecpmnetwork.com/ecf352c2efc57308c0f5db036880cad2/invoke.js"><\\/script>
          <div id="container-ecf352c2efc57308c0f5db036880cad2"></div>
        </div>
      </section>

      <!-- Related Videos Section -->
      <section class="section-header" style="margin-top: 36px;">
        <h2 class="section-title">Related Videos</h2>
        <p class="section-subtitle">Explore More Trending Collections</p>
      </section>

      <!-- Related Videos Grid -->
      <section class="related-grid" id="relatedPostsContainer" aria-label="Related Videos Grid">
        <!-- Generated from relatedPosts array -->
      </section>

      <div id="adSlotBWrapper" class="ad-slot-wrapper" style="display: ${secondSlotEnabled ? 'flex' : 'none'}; margin-top: 36px;">
        <div class="ad-label">Sponsored Highlight</div>
        <div class="ad-content-box" id="adContainerB"></div>
      </div>

      <div id="adSlotCWrapper" class="ad-slot-wrapper" style="display: ${thirdSlotEnabled ? 'flex' : 'none'}; margin-top: 36px;">
        <div class="ad-label">Sponsored</div>
        <div class="ad-content-box" id="adContainerC"></div>
      </div>
    </main>

    <footer class="page-footer">
      <div style="display:flex; justify-content:center; gap:16px; margin-bottom:12px; flex-wrap:wrap;">
        <a href="#terms">Terms of Service</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#dmca">DMCA / Compliance</a>
        <a href="#contact">Contact Support</a>
      </div>
      <p>18+ Disclaimer: All media models were at least 18 years of age at the time of production. Unlawful content is strictly prohibited.</p>
      <p style="margin-top: 6px;">&copy; 2026 VideoHub Media. All rights reserved.</p>
    </footer>

  </div>

  <div class="modal-backdrop" id="videoUnavailableModal" style="display:none;" role="dialog" aria-modal="true">
    <div class="modal-box">
      <h3 style="font-size:18px; font-weight:700; margin-bottom:8px;">Video Currently Unavailable</h3>
      <p style="font-size:13px; color:#a3a3a3; margin-bottom:20px;">This media stream is undergoing scheduled verification or has not yet been linked to an active player.</p>
      <button onclick="document.getElementById('videoUnavailableModal').style.display='none'" style="background:#ff1b35; color:#fff; font-weight:700; padding:10px 24px; border-radius:8px; width:100%;">Dismiss</button>
    </div>
  </div>

  <script>
    // Configuration Object
    const siteConfig = {
      pageTitle: "${pageTitle}",
      mainThumbnail: "${mainThumbnail}",
      mainVideoUrl: "${mainVideoUrl}",
      mainDestinationUrl: "${mainDestinationUrl}",
      downloadUrl: "${downloadUrl}",
      hdUrl: "${hdUrl}",
      playerUrl: "${playerUrl}",
      ageNoticeEnabled: ${ageNoticeEnabled},
      ads: {
        firstSlotEnabled: ${firstSlotEnabled},
        secondSlotEnabled: ${secondSlotEnabled},
        thirdSlotEnabled: ${thirdSlotEnabled}
      },
      destinations: ${JSON.stringify(DEFAULT_DESTINATIONS, null, 2)}
    };

    const relatedPosts = ${serializedRelatedPosts};

    document.addEventListener("DOMContentLoaded", function () {
      const container = document.getElementById("relatedPostsContainer");
      if (!container) return;

      relatedPosts.forEach(function (post) {
        const card = document.createElement("a");
        card.className = "video-card";
        card.href = post.destinationUrl || "#";
        if (post.destinationUrl) {
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }

        const thumbWrap = document.createElement("div");
        thumbWrap.className = "card-thumb-wrap";

        if (post.image && post.image.trim() !== "") {
          const img = document.createElement("img");
          img.className = "card-thumb-img";
          img.src = post.image;
          img.alt = post.title;
          img.loading = "lazy";
          thumbWrap.appendChild(img);
        } else {
          const ph = document.createElement("div");
          ph.className = "card-thumb-placeholder";
          ph.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line></svg>';
          thumbWrap.appendChild(ph);
        }

        if (post.label) {
          const b = document.createElement("div");
          b.className = "card-badge";
          b.textContent = post.label;
          thumbWrap.appendChild(b);
        }

        if (post.duration) {
          const d = document.createElement("div");
          d.className = "card-duration";
          d.textContent = post.duration;
          thumbWrap.appendChild(d);
        }

        const playOver = document.createElement("div");
        playOver.className = "card-play-overlay";
        playOver.innerHTML = '<div class="card-play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>';
        thumbWrap.appendChild(playOver);

        card.appendChild(thumbWrap);

        const info = document.createElement("div");
        info.className = "card-info";
        const t = document.createElement("h3");
        t.className = "card-title";
        t.textContent = post.title;
        info.appendChild(t);

        const meta = document.createElement("div");
        meta.className = "card-meta";
        meta.textContent = post.viewCount ? post.viewCount + " views" : "Verified Stream";
        info.appendChild(meta);

        card.appendChild(info);
        container.appendChild(card);
      });

      const playBtn = document.getElementById("mainPlayButton");
      if (playBtn) {
        playBtn.addEventListener("click", function() {
          if (siteConfig.mainVideoUrl) {
            const ifr = document.getElementById("mainVideoIframe");
            ifr.src = siteConfig.mainVideoUrl;
            ifr.style.display = "block";
            playBtn.style.display = "none";
          } else if (siteConfig.mainDestinationUrl) {
            window.open(siteConfig.mainDestinationUrl, "_blank", "noopener,noreferrer");
          } else {
            document.getElementById("videoUnavailableModal").style.display = "flex";
          }
        });
      }
    });
  <\\/script>
</body>
</html>`;
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateStandaloneHtml());
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadFile = () => {
    const code = generateStandaloneHtml();
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Helper to format headline with red highlights
  const renderFormattedHeadline = (titleText: string) => {
    if (!titleText) return null;
    const parts = titleText.split(/(Viral|Full Video)/gi);
    return (
      <>
        {parts.map((part, index) => {
          if (part.toLowerCase() === 'viral' || part.toLowerCase() === 'full video') {
            return (
              <span key={index} className="text-[#ff1b35] drop-shadow-[0_0_12px_rgba(255,27,53,0.5)]">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  // Dynamic viewport width style for testing responsive layouts
  const getViewportContainerClass = () => {
    switch (previewViewport) {
      case 'mobile':
        return 'max-w-[390px] border-x border-[#262626] shadow-2xl';
      case 'tablet':
        return 'max-w-[768px] border-x border-[#262626] shadow-2xl';
      case 'laptop':
        return 'max-w-[1024px] border-x border-[#262626] shadow-2xl';
      default:
        return 'max-w-[1080px]';
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans antialiased selection:bg-[#ff1b35] selection:text-white">
      {/* Top Floating Control Bar (Admin Settings, Responsive Previewer & 1-Click Code Export) */}
      <div className="sticky top-0 z-50 bg-[#101010]/95 backdrop-blur-md border-b border-white/10 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff1b35] animate-pulse"></span>
            Landing Page Live Engine
          </span>
          <span className="text-[#a3a3a3] hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1 bg-[#181818] p-0.5 rounded-lg border border-white/5">
            <button
              onClick={() => setPreviewViewport('full')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${previewViewport === 'full' ? 'bg-[#ff1b35] text-white font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
              title="Full Width"
            >
              <Monitor className="w-3.5 h-3.5" /> Full
            </button>
            <button
              onClick={() => setPreviewViewport('laptop')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${previewViewport === 'laptop' ? 'bg-[#ff1b35] text-white font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
              title="Laptop (1024px)"
            >
              <Monitor className="w-3.5 h-3.5" /> 1024px
            </button>
            <button
              onClick={() => setPreviewViewport('tablet')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${previewViewport === 'tablet' ? 'bg-[#ff1b35] text-white font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
              title="Tablet (768px)"
            >
              <Tablet className="w-3.5 h-3.5" /> 768px
            </button>
            <button
              onClick={() => setPreviewViewport('mobile')}
              className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${previewViewport === 'mobile' ? 'bg-[#ff1b35] text-white font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
              title="Mobile (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowConfigDrawer(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-white/10 text-white font-medium transition-all"
          >
            <Sliders className="w-3.5 h-3.5 text-[#ff1b35]" />
            <span>Customize URLs & Images</span>
          </button>

          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff1b35] hover:bg-[#e0142d] text-white font-bold transition-all shadow-md shadow-[#ff1b35]/25"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Get Standalone HTML</span>
          </button>
        </div>
      </div>

      {/* 18+ Adult Content Disclaimer Bar */}
      {ageNoticeEnabled && (
        <div className="w-full bg-[#0e0e0e] border-b border-white/5 py-2 px-4 text-center text-xs text-[#a3a3a3] flex items-center justify-center gap-2">
          <span className="bg-[#ff1b35] text-white font-black text-[10px] px-1.5 py-0.5 rounded tracking-wide">
            18+
          </span>
          <span className="leading-snug">
            ADULT CONTENT NOTICE: This media showcase is strictly intended for mature audiences aged 18 and older. All content is lawful, consensual, and restricted to adults.
          </span>
        </div>
      )}

      {/* Main Responsive Canvas Container */}
      <div className={`mx-auto transition-all duration-300 ${getViewportContainerClass()} px-4 sm:px-6 pt-4 pb-16`}>
        {/* Header Navigation Bar */}
        <header className="flex items-center justify-between py-4 border-b border-white/5 mb-6">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <span>VIDEO<span className="text-[#ff1b35]">HUB</span></span>
          </div>
          <div className="text-[11px] font-semibold tracking-wider text-[#a3a3a3] border border-white/10 px-2.5 py-1 rounded-full uppercase">
            HD Stream Network
          </div>
        </header>

        {/* =========================================================================
            MAIN THUMBNAIL AND HEADLINE SECTION
            - Initially completely BLACK
            - Large red circular play button
            - Configurable image & video
            - Responsive 16:9 aspect ratio
            ========================================================================= */}
        <section className="relative w-full bg-black rounded-2xl overflow-hidden border border-[#ff1b35]/20 shadow-[0_12px_40px_rgba(0,0,0,0.9)] mb-6 group">
          <div className="relative w-full pt-[56.25%] bg-black">
            {/* Main Thumbnail Image: Strictly pitch black if empty */}
            {mainThumbnail && mainThumbnail.trim() !== '' ? (
              <img
                src={mainThumbnail}
                alt="Main Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : null}

            {/* Video Player Embed (Active if player is triggered with video URL) */}
            {isPlayingVideo && mainVideoUrl ? (
              <iframe
                src={mainVideoUrl}
                title="Main Video Stream"
                className="absolute inset-0 w-full h-full border-none z-30 bg-black"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                {/* Dark Gradient Scrim Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/15 pointer-events-none" />

                {/* Duration Badge if set */}
                {videoDuration && (
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-bold px-2.5 py-1 rounded-md z-10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff1b35]"></span>
                    {videoDuration}
                  </div>
                )}

                {/* Large Red Circular Play Button */}
                <div
                  onClick={handleMainPlay}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleMainPlay();
                    }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group-hover:scale-105 active:scale-95 transition-transform duration-200"
                  aria-label="Play Featured Video"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#ff1b35] text-white shadow-[0_0_35px_rgba(255,27,53,0.55),0_6px_20px_rgba(0,0,0,0.8)] transition-all group-hover:bg-[#e0142d] group-hover:shadow-[0_0_45px_rgba(255,27,53,0.75)]">
                    {/* Pulsing ring animation */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#ff1b35]/40 animate-ping opacity-30 pointer-events-none" />
                    <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-white translate-x-0.5 sm:translate-x-1" />
                  </div>
                </div>

                {/* Headline Positioned in Lower-Middle/Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7 z-10 pointer-events-none">
                  <h1 className="text-white font-extrabold text-lg sm:text-2xl md:text-3xl leading-snug drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)] max-w-3xl">
                    {renderFormattedHeadline(pageTitle)}
                  </h1>
                </div>
              </>
            )}
          </div>
        </section>

        {/* =========================================================================
            MAIN CTA BUTTONS (Download, HD, Watch With Your Player)
            ========================================================================= */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6" aria-label="Quick Actions">
          {/* Button 1: Download */}
          <a
            href={downloadUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleCtaClick(e, downloadUrl)}
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-b from-[#ff1b35] to-[#d41128] hover:from-[#ff334b] hover:to-[#e0142d] text-white font-bold text-sm sm:text-base tracking-tight shadow-lg shadow-[#ff1b35]/30 border border-[#ff3850] active:scale-[0.98] transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </a>

          {/* Button 2: HD */}
          <a
            href={hdUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleCtaClick(e, hdUrl)}
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-b from-[#181818] to-[#101010] hover:bg-[#202020] text-white font-bold text-sm sm:text-base tracking-tight border border-[#ff1b35]/20 hover:border-[#ff1b35] shadow-md hover:shadow-[#ff1b35]/20 active:scale-[0.98] transition-all"
          >
            <Film className="w-5 h-5 text-[#ff1b35]" />
            <span>HD</span>
          </a>

          {/* Button 3: Watch With Your Player */}
          <a
            href={playerUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleCtaClick(e, playerUrl)}
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-b from-[#181818] to-[#101010] hover:bg-[#202020] text-white font-bold text-sm sm:text-base tracking-tight border border-[#ff1b35]/20 hover:border-[#ff1b35] shadow-md hover:shadow-[#ff1b35]/20 active:scale-[0.98] transition-all"
          >
            <Tv className="w-5 h-5 text-[#ff1b35]" />
            <span>Watch With Your Player</span>
          </a>
        </section>

        {/* =========================================================================
            BENGALI VISITOR INSTRUCTIONS BOX
            Exact text:
            “নির্দেশনা: কোনো লিংকে ক্লিক করলে অন্য ওয়েবসাইট খুলতে পারে। সেখানে ভিডিও না পেলে এই পেজে ফিরে আসুন এবং ভিডিওর জন্য নির্ধারিত বাটনটি ব্যবহার করুন। ভিডিও চালু না হলে পেজের নির্দেশনা অনুসরণ করুন।”
            ========================================================================= */}
        <section className="bg-[#121212] border border-[#ff1b35]/25 rounded-xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 shadow-lg shadow-black/60">
          <div className="text-[#ff1b35] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <p className="font-bengali text-[#e5e5e5] text-sm sm:text-base leading-relaxed">
            <span className="text-[#ff1b35] font-bold">নির্দেশনা:</span> কোনো লিংকে ক্লিক করলে অন্য ওয়েবসাইট খুলতে পারে। সেখানে ভিডিও না পেলে এই পেজে ফিরে আসুন এবং ভিডিওর জন্য নির্ধারিত বাটনটি ব্যবহার করুন। ভিডিও চালু না হলে পেজের নির্দেশনা অনুসরণ করুন।
          </p>
        </section>

        {/* =========================================================================
            AD SLOT A: Native Ad Unit (Below instructions)
            Exact container ID: container-ecf352c2efc57308c0f5db036880cad2
            ========================================================================= */}
        {firstSlotEnabled && (
          <section className="w-full max-w-full my-6 p-3.5 bg-[#0d0d0d] border border-dashed border-white/10 rounded-xl text-center box-border overflow-hidden">
            <div className="text-[10px] tracking-widest uppercase text-[#737373] text-left mb-2">
              Sponsored Placement
            </div>
            <div className="w-full overflow-hidden flex flex-col items-center justify-center min-h-[70px]">
              {/* Native Ad Container matching provider specifications */}
              <div id="container-ecf352c2efc57308c0f5db036880cad2" className="w-full flex justify-center"></div>
              <div className="text-[11px] text-[#555555] py-2">
                Ad Slot A: Verified Network Placement Active
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            RELATED VIDEOS SECTION
            - 2 columns on mobile, 3 on tablet, 4 on desktop
            - Black thumbnail backgrounds by default
            - Red accented cards with smooth hover
            - 12 neutral customizable entries
            ========================================================================= */}
        <section className="mt-10" aria-label="Related Videos Showcase">
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-[#ff1b35]" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Related Videos
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#737373] mt-1 pl-3">
              Explore More Trending Collections
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
            {relatedPosts.map((post) => (
              <a
                key={post.id}
                href={post.destinationUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleCtaClick(e, post.destinationUrl)}
                className="group flex flex-col bg-[#121212] hover:bg-[#181818] border border-[#ff1b35]/15 hover:border-[#ff1b35] rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.8),0_0_15px_rgba(255,27,53,0.2)] focus-visible:outline-2 focus-visible:outline-[#ff1b35]"
              >
                {/* 16:9 Thumbnail Area: Pure Black Default */}
                <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                  {post.image && post.image.trim() !== '' ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    /* Clean film icon inside black placeholder */
                    <div className="absolute inset-0 bg-black flex items-center justify-center text-[#2a2a2a] group-hover:text-[#ff1b35] transition-colors">
                      <Film className="w-7 h-7" />
                    </div>
                  )}

                  {/* Optional Label Badge (Trending, Popular, HD) */}
                  {post.label && (
                    <span className="absolute top-2 left-2 bg-[#ff1b35] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wide uppercase shadow">
                      {post.label}
                    </span>
                  )}

                  {/* Optional Duration Badge */}
                  {post.duration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-1.5 py-0.5 rounded border border-white/10">
                      {post.duration}
                    </span>
                  )}

                  {/* Hover Mini Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#ff1b35] text-white flex items-center justify-center shadow-lg shadow-[#ff1b35]/50 scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-4 h-4 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug mb-2 group-hover:text-white">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-[11px] text-[#737373]">
                    <span>{post.viewCount ? `${post.viewCount} views` : 'Verified Media'}</span>
                    <ExternalLink className="w-3 h-3 text-[#555] group-hover:text-[#ff1b35] transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Optional Ad Slot B */}
        {secondSlotEnabled && (
          <section className="w-full my-8 p-3.5 bg-[#0d0d0d] border border-dashed border-white/10 rounded-xl text-center">
            <div className="text-[10px] tracking-widest uppercase text-[#737373] text-left mb-2">
              Sponsored Unit B
            </div>
            <div className="min-h-[60px] flex items-center justify-center text-xs text-[#555]">
              Ad Slot B Enabled (Inject Additional Network Code Here)
            </div>
          </section>
        )}

        {/* Optional Ad Slot C */}
        {thirdSlotEnabled && (
          <section className="w-full my-8 p-3.5 bg-[#0d0d0d] border border-dashed border-white/10 rounded-xl text-center">
            <div className="text-[10px] tracking-widest uppercase text-[#737373] text-left mb-2">
              Sponsored Unit C
            </div>
            <div className="min-h-[60px] flex items-center justify-center text-xs text-[#555]">
              Ad Slot C Enabled (Inject Additional Network Code Here)
            </div>
          </section>
        )}

        {/* Page Footer */}
        <footer className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-[#737373] space-y-3">
          <div className="flex flex-wrap justify-center gap-4 text-[#a3a3a3]">
            <a href="#terms" className="hover:text-[#ff1b35] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-[#ff1b35] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#dmca" className="hover:text-[#ff1b35] transition-colors">DMCA / Compliance</a>
            <span>•</span>
            <a href="#contact" className="hover:text-[#ff1b35] transition-colors">Contact Support</a>
          </div>
          <p className="max-w-xl mx-auto leading-relaxed">
            18+ Compliance Statement: All content hosted or indexed adheres to applicable regulatory guidelines. Access restricted to legal adults.
          </p>
          <p className="text-[11px] text-[#555555]">
            &copy; 2026 VideoHub Media Networks. All rights reserved.
          </p>
        </footer>
      </div>

      {/* =========================================================================
          MODAL: Video Unavailable Notice
          ========================================================================= */}
      {showUnavailableModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-[#ff1b35]/30 rounded-2xl p-6 max-w-md w-full shadow-2xl text-center relative animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#ff1b35]/15 border border-[#ff1b35] text-[#ff1b35] flex items-center justify-center">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Video Currently Unavailable</h3>
            <p className="text-xs sm:text-sm text-[#a3a3a3] mb-6 leading-relaxed">
              This media file is currently awaiting player stream configuration or undergoing verification. Please check back shortly or explore the related collections below.
            </p>
            <button
              onClick={() => setShowUnavailableModal(false)}
              className="w-full py-2.5 px-4 rounded-lg bg-[#ff1b35] hover:bg-[#e0142d] text-white font-bold text-sm transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          DRAWER: Customizer / Config Panel
          Allows live editing of headline, images, and destination URLs
          ========================================================================= */}
      {showConfigDrawer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
          <div className="bg-[#121212] border-l border-white/10 w-full max-w-md h-full flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#ff1b35]" />
                <h3 className="font-bold text-base text-white">Configure Landing Page</h3>
              </div>
              <button
                onClick={() => setShowConfigDrawer(false)}
                className="p-1 rounded-lg text-[#a3a3a3] hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs">
              {/* Page Title / Headline */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Main Headline (`pageTitle`)
                </label>
                <input
                  type="text"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* Main Thumbnail URL */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Main Thumbnail Image URL (`mainThumbnail`)
                </label>
                <input
                  type="text"
                  placeholder="Paste image URL here (leave empty for pure black)"
                  value={mainThumbnail}
                  onChange={(e) => setMainThumbnail(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
                <span className="text-[11px] text-[#737373] mt-1 block">
                  Starts completely pitch black until an image URL is supplied.
                </span>
              </div>

              {/* Video URL */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Video URL / Embed (`mainVideoUrl`)
                </label>
                <input
                  type="text"
                  placeholder="e.g. https://... or leave empty to use Destination URL"
                  value={mainVideoUrl}
                  onChange={(e) => setMainVideoUrl(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* Play Button Destination Fallback */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Main Play Destination (`mainDestinationUrl`)
                </label>
                <input
                  type="text"
                  value={mainDestinationUrl}
                  onChange={(e) => setMainDestinationUrl(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* CTA 1: Download URL */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Download Button URL (`downloadUrl`)
                </label>
                <input
                  type="text"
                  value={downloadUrl}
                  onChange={(e) => setDownloadUrl(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* CTA 2: HD URL */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  HD Button URL (`hdUrl`)
                </label>
                <input
                  type="text"
                  value={hdUrl}
                  onChange={(e) => setHdUrl(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* CTA 3: Player URL */}
              <div>
                <label className="block text-white font-semibold mb-1">
                  Player Button URL (`playerUrl`)
                </label>
                <input
                  type="text"
                  value={playerUrl}
                  onChange={(e) => setPlayerUrl(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-lg p-2.5 text-white focus:border-[#ff1b35] outline-none"
                />
              </div>

              {/* Verified Destinations Quick Picker */}
              <div className="p-3 bg-[#181818] rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-white block">Provided Destination Sites:</span>
                <div className="space-y-1 text-[11px] text-[#a3a3a3]">
                  <div className="truncate"><b className="text-white">Site 1:</b> {DEFAULT_DESTINATIONS.site1}</div>
                  <div className="truncate"><b className="text-white">Site 2:</b> {DEFAULT_DESTINATIONS.site2}</div>
                  <div className="truncate"><b className="text-white">Site 3:</b> {DEFAULT_DESTINATIONS.site3}</div>
                  <div className="truncate"><b className="text-white">Site 4:</b> {DEFAULT_DESTINATIONS.site4}</div>
                  <div className="truncate"><b className="text-white">Site 5:</b> {DEFAULT_DESTINATIONS.site5}</div>
                </div>
              </div>

              {/* Ad Slots Toggles */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="font-bold text-white block">Ad Slots Activation</span>
                <label className="flex items-center gap-2 text-[#a3a3a3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={firstSlotEnabled}
                    onChange={(e) => setFirstSlotEnabled(e.target.checked)}
                    className="accent-[#ff1b35]"
                  />
                  <span>Ad Slot A (Below instructions - Active with network script)</span>
                </label>
                <label className="flex items-center gap-2 text-[#a3a3a3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={secondSlotEnabled}
                    onChange={(e) => setSecondSlotEnabled(e.target.checked)}
                    className="accent-[#ff1b35]"
                  />
                  <span>Ad Slot B (Between sections)</span>
                </label>
                <label className="flex items-center gap-2 text-[#a3a3a3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={thirdSlotEnabled}
                    onChange={(e) => setThirdSlotEnabled(e.target.checked)}
                    className="accent-[#ff1b35]"
                  />
                  <span>Ad Slot C (Bottom of page)</span>
                </label>
                <label className="flex items-center gap-2 text-[#a3a3a3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ageNoticeEnabled}
                    onChange={(e) => setAgeNoticeEnabled(e.target.checked)}
                    className="accent-[#ff1b35]"
                  />
                  <span>18+ Compliance Banner</span>
                </label>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <button
                onClick={() => setShowConfigDrawer(false)}
                className="w-full py-2.5 rounded-lg bg-[#ff1b35] hover:bg-[#e0142d] text-white font-bold transition-colors"
              >
                Apply & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: Export / Download Standalone Single-File index.html
          ========================================================================= */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-[#ff1b35]/30 rounded-2xl max-w-3xl w-full p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-[#ff1b35]" />
                <h3 className="font-bold text-base text-white">Standalone Single-File index.html</h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1 rounded-lg text-[#a3a3a3] hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#a3a3a3] my-3 leading-relaxed">
              This is the complete, self-contained single-file HTML document containing all CSS, HTML, and JavaScript embedded directly with zero external build tools needed. Host it anywhere or paste it directly into your server!
            </p>

            <div className="relative flex-grow bg-[#090909] border border-white/10 rounded-lg p-3 font-mono text-[11px] text-[#d4d4d4] overflow-auto max-h-[50vh]">
              <pre className="whitespace-pre">{generateStandaloneHtml()}</pre>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 mt-4">
              <div className="text-xs text-[#737373]">
                Saved also at <span className="text-[#ff1b35]">/public/standalone_index.html</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] border border-white/10 text-white font-bold text-xs transition-colors"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={handleDownloadFile}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ff1b35] hover:bg-[#e0142d] text-white font-bold text-xs transition-colors shadow-md shadow-[#ff1b35]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download index.html</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
