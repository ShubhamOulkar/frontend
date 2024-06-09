'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('https://financial-dashboard-shubhu-oulkar.vercel.app');
  ReactDOM.preconnect('https://financial-dashboard-shubhu-oulkar.vercel.app');
  ReactDOM.prefetchDNS('https://financial-dashboard-shubhu-oulkar.vercel.app');

  return null;
}
