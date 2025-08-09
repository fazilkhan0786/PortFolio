import { User, FileText, Briefcase, Award, Mail } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'documents', label: 'Documents', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="modern-card p-2">
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-custom-md text-custom-sm font-medium transition-all duration-300 relative overflow-hidden group ${
              activeTab === item.id
                ? 'bg-gradient-primary text-white shadow-glow'
                : 'text-text-secondary hover:text-accent-primary hover:bg-card-secondary'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
            
            {activeTab === item.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-light/20 rounded-custom-md -z-10"></div>
            )}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-1 p-3 rounded-custom-md text-custom-xs font-medium transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-gradient-primary text-white'
                  : 'text-text-secondary hover:text-accent-primary hover:bg-card-secondary'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

    </nav>
  );
}
