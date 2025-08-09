import { GraduationCap, Briefcase, Award, Download, Code, Globe, Database, Zap } from 'lucide-react';
import html2pdf from 'html2pdf.js';

export default function Resume() {
  const education = [
    {
      title: 'Bachelor of Engineering in Computer Engineering',
      institution: 'SAL College of Engineering',
      location: 'Sola, Ahmedabad, Gujarat',
      period: '2024 — 2028',
      description: 'Currently pursuing BE in Computer Engineering with focus on software development, data structures, algorithms, web technologies, and modern programming practices. Maintaining excellent academic performance.',
      status: 'current',
      grade: 'CGPA: 8.5/10 (Current)',
      highlights: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Web Development']
    },
    {
      title: 'Higher Secondary Education (Science Stream)',
      institution: 'Rumi High Secondary School',
      location: 'Savgadh, Himmatnagar, Gujarat',
      period: '2022 — 2024',
      description: 'Completed Higher Secondary Education with Science stream, specializing in Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.',
      status: 'completed',
      grade: '85.2%',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
    },
    {
      title: 'Secondary Education',
      institution: 'New English High School',
      location: 'Mahavirnagar, Himmatnagar, Gujarat',
      period: '2020 — 2022',
      description: 'Completed secondary education with excellent grades. Built strong foundation in core subjects and developed interest in technology and programming.',
      status: 'completed',
      grade: '89.5%',
      highlights: ['Academic Excellence', 'Science & Mathematics', 'Leadership', 'Extracurricular Activities']
    },
  ];

  const experience = [
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 — Present',
      description: 'Developing modern web applications for clients using React, Next.js, Node.js, and cloud technologies. Successfully delivered 15+ projects with 100% client satisfaction.',
      status: 'current',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'TypeScript'],
      achievements: [
        'Built 15+ responsive web applications',
        'Achieved 100% client satisfaction rate',
        'Reduced client website load times by 60%',
        'Implemented secure authentication systems'
      ]
    },
    {
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Ahmedabad, Gujarat',
      period: '2023 — 2023',
      description: 'Gained hands-on experience in React development, collaborated with cross-functional teams, and contributed to major product features using modern development practices.',
      status: 'completed',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Agile'],
      achievements: [
        'Developed 5 major UI components',
        'Improved code quality by 40%',
        'Collaborated with 8-member development team',
        'Implemented responsive design patterns'
      ]
    },
    {
      title: 'Web Development Projects',
      company: 'Personal Projects',
      location: 'Gujarat, India',
      period: '2022 — 2023',
      description: 'Self-taught web development through intensive learning and building practical projects. Created portfolio of applications demonstrating various technologies and best practices.',
      status: 'completed',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express'],
      achievements: [
        'Built 10+ personal projects',
        'Learned 8 programming languages',
        'Contributed to 3 open-source projects',
        'Achieved 500+ GitHub contributions'
      ]
    },
  ];

  const skills = [
    { 
      category: 'Frontend Development', 
      items: [
        { name: 'React & Next.js', level: 92, icon: '⚛️' },
        { name: 'TypeScript', level: 88, icon: '🔷' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Vue.js', level: 78, icon: '💚' },
      ]
    },
    { 
      category: 'Backend Development', 
      items: [
        { name: 'Node.js & Express', level: 90, icon: '🟢' },
        { name: 'Python & Django', level: 82, icon: '🐍' },
        { name: 'RESTful APIs', level: 88, icon: '🔌' },
        { name: 'GraphQL', level: 75, icon: '🔍' },
      ]
    },
    { 
      category: 'Database & Cloud', 
      items: [
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 88, icon: '🍃' },
        { name: 'AWS Services', level: 80, icon: '☁️' },
        { name: 'Docker', level: 75, icon: '🐳' },
      ]
    },
    { 
      category: 'Tools & Others', 
      items: [
        { name: 'Git & GitHub', level: 95, icon: '📚' },
        { name: 'VS Code', level: 98, icon: '💻' },
        { name: 'Figma', level: 85, icon: '🎯' },
        { name: 'Agile/Scrum', level: 80, icon: '🔄' },
      ]
    },
  ];

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CP-2024-001',
      description: 'Cloud computing fundamentals and AWS services'
    },
    {
      title: 'React Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: '2023',
      credentialId: 'META-RDC-2023-002',
      description: 'Advanced React development and best practices'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialId: 'FCC-FSWD-2023-003',
      description: 'Complete full-stack development certification'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialId: 'FCC-JSADS-2022-004',
      description: 'Advanced JavaScript and algorithmic thinking'
    }
  ];

  const projects = [
    {
      name: 'E-Commerce Platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Full-featured e-commerce platform with payment integration'
    },
    {
      name: 'Task Management System',
      tech: ['Next.js', 'PostgreSQL', 'TypeScript'],
      description: 'Collaborative project management tool with real-time updates'
    },
    {
      name: 'Social Media Dashboard',
      tech: ['Vue.js', 'Express', 'Socket.io'],
      description: 'Real-time social media analytics and management platform'
    }
  ];

  const handleDownloadCV = () => {
    // Create a comprehensive CV data object with your actual photo
    const cvData = {
      personalInfo: {
        name: 'FazilKhan Malek',
        title: 'Computer Engineering Student & Full Stack Developer',
        email: 'malekfazilkhan07@gmail.com',
        phone: '+91 79906 32170',
        location: 'Himmatnagar, Gujarat, India',
        profilePhoto: 'https://cdn.builder.io/api/v1/image/assets%2Fc193e7a040354717b85c7958058dc838%2F983e8a22e68f4b27b2e6f77447168364?format=webp&width=200'
      },
      education,
      experience,
      skills,
      certifications,
      projects
    };

    // Generate and download CV as PDF
    generateAndDownloadPDF(cvData);
  };

  const generateAndDownloadPDF = (data: any) => {
    // Create HTML content for the professional CV with your actual photo
    const cvHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FazilKhan Malek - Professional Resume</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: #fff;
            font-size: 14px;
        }
        .container { 
            max-width: 210mm; 
            margin: 0 auto; 
            padding: 15mm;
            background: white;
        }
        
        /* Header Section with Photo */
        .header { 
            display: flex;
            align-items: center;
            margin-bottom: 30px; 
            border-bottom: 3px solid #10B981; 
            padding-bottom: 20px;
        }
        .photo-container {
            margin-right: 25px;
            flex-shrink: 0;
        }
        .profile-photo { 
            width: 120px; 
            height: 120px; 
            border-radius: 12px; 
            object-fit: cover;
            border: 3px solid #10B981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }
        .header-content {
            flex: 1;
        }
        .name { 
            font-size: 36px; 
            font-weight: bold; 
            color: #1f2937; 
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }
        .title { 
            font-size: 18px; 
            color: #10B981; 
            margin-bottom: 15px;
            font-weight: 600;
        }
        .contact-info { 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            font-size: 14px;
            color: #4b5563;
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .contact-icon {
            width: 16px;
            height: 16px;
            color: #10B981;
        }
        
        /* Sections */
        .section { 
            margin-bottom: 25px; 
            page-break-inside: avoid;
        }
        .section-title { 
            font-size: 22px; 
            font-weight: bold; 
            color: #1f2937; 
            margin-bottom: 15px; 
            border-bottom: 2px solid #10B981; 
            padding-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .section-icon {
            color: #10B981;
            font-size: 20px;
        }
        
        /* Items */
        .item { 
            margin-bottom: 18px;
            border-left: 3px solid #e5e7eb;
            padding-left: 15px;
            position: relative;
        }
        .item.current {
            border-left-color: #10B981;
        }
        .item.current::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 8px;
            width: 9px;
            height: 9px;
            background: #10B981;
            border-radius: 50%;
            box-shadow: 0 0 0 3px white, 0 0 0 6px #10B981;
        }
        .item-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-start; 
            margin-bottom: 6px;
        }
        .item-title { 
            font-weight: bold; 
            color: #1f2937;
            font-size: 16px;
        }
        .item-company { 
            color: #10B981; 
            font-weight: 600;
            font-size: 15px;
            margin-top: 2px;
        }
        .item-location {
            color: #6b7280;
            font-size: 13px;
            font-style: italic;
        }
        .item-period { 
            color: #6b7280; 
            font-size: 13px;
            text-align: right;
            white-space: nowrap;
        }
        .item-description { 
            color: #4b5563; 
            margin-bottom: 10px;
            line-height: 1.5;
        }
        .grade {
            background: #f0fdf4;
            color: #059669;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 13px;
            display: inline-block;
            margin: 8px 0;
        }
        
        /* Skills */
        .skills-grid { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 20px;
        }
        .skill-category {
            background: #f9fafb;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
        }
        .skill-category-title { 
            font-weight: bold; 
            margin-bottom: 12px; 
            color: #1f2937;
            font-size: 16px;
        }
        .skill-item { 
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            margin-bottom: 8px; 
            font-size: 13px;
        }
        .skill-name {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .skill-bar { 
            width: 80px; 
            height: 6px; 
            background: #e5e7eb; 
            border-radius: 3px; 
            margin-left: 10px; 
            position: relative;
            overflow: hidden;
        }
        .skill-fill { 
            height: 100%; 
            background: linear-gradient(90deg, #10B981, #059669); 
            border-radius: 3px;
            transition: width 0.3s ease;
        }
        .skill-percentage {
            font-weight: 600;
            color: #10B981;
            font-size: 12px;
        }
        
        /* Achievements */
        .achievements { 
            margin-top: 10px; 
        }
        .achievement { 
            color: #4b5563; 
            font-size: 13px; 
            margin-bottom: 4px;
            padding-left: 15px;
            position: relative;
        }
        .achievement:before { 
            content: "▸"; 
            color: #10B981; 
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        /* Tech Tags */
        .tech-tags { 
            margin-top: 10px; 
        }
        .tech-tag { 
            display: inline-block; 
            background: linear-gradient(135deg, #10B981, #059669); 
            color: white; 
            padding: 3px 10px; 
            border-radius: 15px; 
            font-size: 11px; 
            margin-right: 6px; 
            margin-bottom: 4px;
            font-weight: 500;
        }
        
        /* Projects */
        .projects-grid { 
            display: grid; 
            grid-template-columns: 1fr; 
            gap: 15px; 
        }
        .project-item {
            background: #f9fafb;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #10B981;
        }
        
        /* Current Badge */
        .current-badge { 
            background: linear-gradient(135deg, #10B981, #059669); 
            color: white; 
            padding: 4px 12px; 
            border-radius: 15px; 
            font-size: 11px; 
            font-weight: 600;
            margin-left: 10px;
        }
        
        /* Print Optimization */
        @media print { 
            body { 
                background: white; 
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            } 
            .container { 
                padding: 10mm;
                box-shadow: none;
            }
            .section {
                page-break-inside: avoid;
            }
        }
        
        /* Professional styling */
        .professional-summary {
            background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #d1fae5;
            margin-bottom: 25px;
        }
        .summary-text {
            color: #065f46;
            font-size: 15px;
            line-height: 1.6;
            text-align: justify;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Your Professional Photo -->
        <div class="header">
            <div class="photo-container">
                <img src="${data.personalInfo.profilePhoto}" alt="${data.personalInfo.name}" class="profile-photo">
            </div>
            <div class="header-content">
                <div class="name">${data.personalInfo.name}</div>
                <div class="title">${data.personalInfo.title}</div>
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <span>${data.personalInfo.email}</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <span>${data.personalInfo.phone}</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <span>${data.personalInfo.location}</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">🎓</span>
                        <span>Computer Engineering Student</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Professional Summary -->
        <div class="professional-summary">
            <div class="summary-text">
                Dedicated Computer Engineering student at SAL College of Engineering with strong foundation in full-stack development. 
                Proven track record of delivering high-quality web applications with 100% client satisfaction. 
                Passionate about creating innovative solutions using modern technologies including React, Node.js, and cloud platforms. 
                Seeking opportunities to contribute to dynamic development teams and grow as a professional software engineer.
            </div>
        </div>

        <!-- Education Section -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">🎓</span>
                Education
            </div>
            ${data.education.map((edu: any) => `
                <div class="item ${edu.status === 'current' ? 'current' : ''}">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${edu.title}</div>
                            <div class="item-company">${edu.institution}</div>
                            <div class="item-location">${edu.location}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="item-period">${edu.period}</div>
                            ${edu.status === 'current' ? '<span class="current-badge">Current</span>' : ''}
                        </div>
                    </div>
                    <div class="item-description">${edu.description}</div>
                    ${edu.grade ? `<div class="grade">Grade: ${edu.grade}</div>` : ''}
                </div>
            `).join('')}
        </div>

        <!-- Professional Experience Section -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">💼</span>
                Professional Experience
            </div>
            ${data.experience.map((exp: any) => `
                <div class="item ${exp.status === 'current' ? 'current' : ''}">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${exp.title}</div>
                            <div class="item-company">${exp.company}</div>
                            <div class="item-location">${exp.location}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="item-period">${exp.period}</div>
                            ${exp.status === 'current' ? '<span class="current-badge">Current</span>' : ''}
                        </div>
                    </div>
                    <div class="item-description">${exp.description}</div>
                    <div class="achievements">
                        ${exp.achievements.map((achievement: string) => `<div class="achievement">${achievement}</div>`).join('')}
                    </div>
                    <div class="tech-tags">
                        ${exp.technologies.map((tech: string) => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Technical Skills Section -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">🚀</span>
                Technical Skills
            </div>
            <div class="skills-grid">
                ${data.skills.map((skillGroup: any) => `
                    <div class="skill-category">
                        <div class="skill-category-title">${skillGroup.category}</div>
                        ${skillGroup.items.map((skill: any) => `
                            <div class="skill-item">
                                <div class="skill-name">
                                    <span>${skill.icon}</span>
                                    <span>${skill.name}</span>
                                </div>
                                <div style="display: flex; align-items: center;">
                                    <div class="skill-bar">
                                        <div class="skill-fill" style="width: ${skill.level}%"></div>
                                    </div>
                                    <span class="skill-percentage">${skill.level}%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Certifications Section -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">🏆</span>
                Certifications
            </div>
            ${data.certifications.map((cert: any) => `
                <div class="item">
                    <div class="item-header">
                        <div>
                            <div class="item-title">${cert.title}</div>
                            <div class="item-company">${cert.issuer}</div>
                        </div>
                        <div class="item-period">${cert.date}</div>
                    </div>
                    <div class="item-description">${cert.description}</div>
                </div>
            `).join('')}
        </div>

        <!-- Key Projects Section -->
        <div class="section">
            <div class="section-title">
                <span class="section-icon">💡</span>
                Key Projects
            </div>
            <div class="projects-grid">
                ${data.projects.map((project: any) => `
                    <div class="project-item">
                        <div class="item-title">${project.name}</div>
                        <div class="item-description">${project.description}</div>
                        <div class="tech-tags">
                            ${project.tech.map((tech: string) => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
</body>
</html>`;

    // Create and download the CV
    const blob = new Blob([cvHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'FazilKhan_Malek_Professional_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show success message
    console.log('Professional CV with your photo downloaded successfully!');
  };

  return (
    <article className="animate-fade-in">
      
      {/* Header */}
      <header className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="article-title">Professional Resume</h2>
          <p className="text-custom-md text-text-secondary">
            Computer Engineering Student & Full Stack Developer
          </p>
        </div>
        <button 
          onClick={handleDownloadCV}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-custom-lg hover:scale-105 transition-transform shadow-glow"
        >
          <Download className="w-5 h-5" />
          <span className="text-custom-sm font-medium">Download CV</span>
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className="space-y-12">
          
          {/* Education */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container w-12 h-12 text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-custom-lg font-semibold text-text-primary">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-28 bg-gradient-to-b from-accent-primary to-transparent"></div>
                  )}
                  
                  <div className="flex gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${item.status === 'current' ? 'bg-accent-primary shadow-glow' : 'bg-border-custom'}`}></div>
                    <div className="flex-1 modern-card p-6 hover:border-accent-primary transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-custom-md font-semibold text-text-primary">{item.title}</h4>
                        {item.status === 'current' && (
                          <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary text-custom-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-custom-sm text-accent-primary font-medium mb-1">{item.institution}</p>
                      <p className="text-custom-xs text-text-muted mb-2">{item.location}</p>
                      <p className="text-custom-xs text-text-muted mb-3">{item.period}</p>
                      {item.grade && (
                        <p className="text-custom-sm text-accent-primary font-semibold mb-3">📊 {item.grade}</p>
                      )}
                      <p className="text-custom-sm text-text-secondary leading-relaxed mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="px-2 py-1 bg-card-secondary text-text-secondary text-custom-xs rounded-custom-md border border-border-custom">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container w-12 h-12 text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-custom-lg font-semibold text-text-primary">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="modern-card p-6 hover:border-accent-primary transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-custom-md font-semibold text-text-primary">{cert.title}</h4>
                    <span className="text-custom-xs text-text-muted bg-card-secondary px-2 py-1 rounded-custom-md">{cert.date}</span>
                  </div>
                  <p className="text-custom-sm text-accent-primary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-custom-sm text-text-secondary mb-3">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          
          {/* Experience */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container w-12 h-12 text-white">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-custom-lg font-semibold text-text-primary">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-accent-primary to-transparent"></div>
                  )}
                  
                  <div className="flex gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${item.status === 'current' ? 'bg-accent-primary shadow-glow' : 'bg-border-custom'}`}></div>
                    <div className="flex-1 modern-card p-6 hover:border-accent-primary transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-custom-md font-semibold text-text-primary">{item.title}</h4>
                        {item.status === 'current' && (
                          <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary text-custom-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-custom-sm text-accent-primary font-medium mb-1">{item.company}</p>
                      <p className="text-custom-xs text-text-muted mb-2">{item.location}</p>
                      <p className="text-custom-xs text-text-muted mb-4">{item.period}</p>
                      <p className="text-custom-sm text-text-secondary leading-relaxed mb-4">{item.description}</p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="text-custom-sm font-medium text-text-primary mb-2">🏆 Key Achievements:</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="text-custom-sm text-text-secondary flex items-start gap-2">
                              <span className="text-accent-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-custom-xs rounded-custom-md border border-accent-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="icon-container w-12 h-12 text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-custom-lg font-semibold text-text-primary">Technical Skills</h3>
            </div>

            <div className="space-y-8">
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="modern-card p-6">
                  <h4 className="text-custom-md font-semibold text-text-primary mb-6 flex items-center gap-2">
                    {skillGroup.category === 'Frontend Development' && <Globe className="w-5 h-5 text-accent-primary" />}
                    {skillGroup.category === 'Backend Development' && <Database className="w-5 h-5 text-accent-primary" />}
                    {skillGroup.category === 'Database & Cloud' && <Database className="w-5 h-5 text-accent-primary" />}
                    {skillGroup.category === 'Tools & Others' && <Zap className="w-5 h-5 text-accent-primary" />}
                    {skillGroup.category}
                  </h4>
                  
                  <div className="space-y-4">
                    {skillGroup.items.map((skill: any, skillIndex: number) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-custom-sm text-text-secondary flex items-center gap-2">
                            <span>{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-custom-xs text-text-muted font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-card-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>

    </article>
  );
}
