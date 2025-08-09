import { useState } from 'react';
import { Eye, ChevronDown } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const filterCategories = ['All', 'Healthcare', 'Management', 'AI/ML', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'AI Symptom Analyser',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/8439072/pexels-photo-8439072.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      description: 'AI-powered symptom analysis platform using machine learning for preliminary health assessments'
    },
    {
      id: 2,
      title: 'Construction Site Management',
      category: 'Management',
      image: 'https://images.pexels.com/photos/8961068/pexels-photo-8961068.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      description: 'Complete project management solution for construction sites with real-time tracking and reporting'
    },
    {
      id: 3,
      title: 'NuroCare Health Platform',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/7195438/pexels-photo-7195438.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      description: 'Comprehensive healthcare platform for patient management and medical record keeping'
    },
    {
      id: 4,
      title: 'Trashee Trash Management',
      category: 'Management',
      image: 'https://images.pexels.com/photos/17312358/pexels-photo-17312358.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      description: 'Smart waste management system with IoT integration for efficient waste collection and monitoring'
    },
    {
      id: 5,
      title: 'E-commerce Website',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      description: 'Modern e-commerce platform with advanced features like payment integration and inventory management'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setIsSelectOpen(false);
  };

  return (
    <article className="projects animate-fade">
      
      {/* Article Title */}
      <header>
        <h2 className="article-title mb-8">Projects</h2>
      </header>

      <section className="projects-section">

        {/* Filter List for Desktop */}
        <ul className="filter-list hidden lg:flex lg:items-center lg:gap-6 lg:pl-1 lg:mb-8">
          {filterCategories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={`text-fs-5 transition-colors duration-1 ${
                  activeFilter === category 
                    ? 'text-orange-yellow' 
                    : 'text-light-gray hover:text-light-gray-70'
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter Select for Mobile */}
        <div className="filter-select-box relative mb-6 lg:hidden">
          <button 
            className={`filter-select bg-eerie-black-2 text-light-gray flex justify-between items-center w-full px-4 py-3 border border-jet rounded-2xl text-fs-6 font-300 ${isSelectOpen ? 'active' : ''}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <div className="select-value">{activeFilter === 'All' ? 'Select category' : activeFilter}</div>
            <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isSelectOpen ? 'rotate-180' : ''}`} />
          </button>

          <ul className={`select-list absolute top-full mt-1.5 w-full p-1.5 bg-eerie-black-2 border border-jet rounded-2xl z-10 transition-all duration-150 ${
            isSelectOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
          }`}>
            {filterCategories.map((category) => (
              <li key={category} className="select-item">
                <button
                  className="bg-eerie-black-2 text-light-gray text-fs-6 font-300 capitalize w-full px-2.5 py-2 rounded-lg hover:bg-[hsl(240,2%,20%)] transition-colors duration-150"
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project List */}
        <ul className="project-list grid grid-cols-1 gap-8 mb-2.5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <li 
              key={project.id} 
              className="project-item block animate-scaleUp"
            >
              <a href={project.link} className="w-full group">
                <figure className="project-img relative w-full h-50 rounded-2xl overflow-hidden mb-4">
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 transition-all duration-1 z-10"></div>

                  {/* Icon */}
                  <div className="project-item-icon-box absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-jet text-orange-yellow p-4 rounded-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1 z-10">
                    <Eye className="w-5 h-5" />
                  </div>

                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1 group-hover:scale-110"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title text-white-2 text-fs-5 font-400 capitalize leading-tight ml-2.5 mb-2">
                  {project.title}
                </h3>

                <p className="project-category text-light-gray-70 text-fs-6 font-300 ml-2.5 mb-3">
                  {project.category}
                </p>

                <p className="project-description text-light-gray text-fs-7 font-300 ml-2.5 leading-relaxed">
                  {project.description}
                </p>
              </a>
            </li>
          ))}
        </ul>

      </section>

    </article>
  );
}
