/**
 * Copyright (c) 2025 Malek Fazilkhan. All rights reserved.
 * 
 * This software and associated documentation files (the "Software") are the 
 * proprietary and confidential information of Malek Fazilkhan. The Software 
 * is protected by copyright laws and international copyright treaties, as well 
 * as other intellectual property laws and treaties.
 * 
 * Unauthorized copying, distribution, modification, public display, or public 
 * performance of this Software is strictly prohibited and may result in severe 
 * civil and criminal penalties.
 * 
 * For licensing inquiries, contact: malekfazilkhan07@gmail.com
 */

import { useState } from 'react';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Documents from './Documents';
import Contact from './Contact';

export default function PortfolioMain() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'documents':
        return <Documents />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-bg font-inter">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-7xl lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-8">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            
            {/* Navigation */}
            <div className="mb-6">
              <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
            </div>

            {/* Content Area */}
            <div className="modern-card p-6 lg:p-8 min-h-[600px] animate-fade-in">
              {renderContent()}
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
