import { initAnimations } from './js/animations.js';
import { initAuth } from './js/signup_signin.js';
import { initDashboard } from './js/dashboard.js';
import { initPublicProfile } from './js/public_profile.js';
import { initCommunity } from './js/community.js';
import { initDirectMessages } from './js/direct_messages.js';

console.log("Main script loaded");

// 1. Initialize Animations (Global - runs on all pages)
initAnimations();

const path = window.location.pathname;

// 2. Initialize Auth (Landing Page Only)
if (path === '/' || path === '/index.html' || path.endsWith('/index.html') || path.endsWith('/index')) {
    console.log("Initializing auth (Landing Page)...");
    initAuth();
}

// 3. Initialize Dashboard (handles both /dashboard.html and /dashboard)
if (path.endsWith('/dashboard.html') || path.endsWith('/dashboard') || path.includes('/dashboard/')) {
    console.log("Initializing dashboard...");
    initDashboard();
}

// 4. Initialize Public Profile (handles both /public_profile.html and /public_profile)
if (path.endsWith('/public_profile.html') || path.endsWith('/public_profile') || path.includes('/u/')) {
    console.log("Initializing Public Profile...");
    initPublicProfile();
}

// 5. Initialize Community (handles both /community.html and /community)
if (path.endsWith('/community.html') || path.endsWith('/community') || path.includes('/community/')) {
    initCommunity();
}

// 6. Initialize Direct Messages (handles both /direct_messages.html and /direct_messages)
if (path.endsWith('/direct_messages.html') || path.endsWith('/direct_messages') || path.includes('/messages/')) {
    initDirectMessages();
}
