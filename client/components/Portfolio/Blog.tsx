export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Modern React Development Best Practices',
      category: 'Development',
      date: '2024-02-23',
      image: '/placeholder.svg',
      excerpt: 'Discover the latest best practices for React development in 2024, including hooks, performance optimization, and code organization.',
      link: '#',
    },
    {
      id: 2,
      title: 'Building Responsive Websites with Tailwind CSS',
      category: 'Design',
      date: '2024-02-20',
      image: '/placeholder.svg',
      excerpt: 'Learn how to create beautiful, responsive websites using Tailwind CSS utility classes and modern design principles.',
      link: '#',
    },
    {
      id: 3,
      title: 'TypeScript Tips for Better Code Quality',
      category: 'Development',
      date: '2024-02-18',
      image: '/placeholder.svg',
      excerpt: 'Improve your code quality and catch errors early with these essential TypeScript tips and techniques.',
      link: '#',
    },
    {
      id: 4,
      title: 'The Future of Web Development',
      category: 'Technology',
      date: '2024-02-15',
      image: '/placeholder.svg',
      excerpt: 'Explore upcoming trends and technologies that will shape the future of web development in the coming years.',
      link: '#',
    },
    {
      id: 5,
      title: 'UI/UX Design Principles for Developers',
      category: 'Design',
      date: '2024-02-12',
      image: '/placeholder.svg',
      excerpt: 'Essential design principles every developer should know to create better user interfaces and experiences.',
      link: '#',
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques',
      category: 'Development',
      date: '2024-02-10',
      image: '/placeholder.svg',
      excerpt: 'Boost your website performance with these proven optimization techniques and tools for faster loading times.',
      link: '#',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="blog animate-fade">
      
      {/* Article Title */}
      <header>
        <h2 className="article-title mb-8">Blog</h2>
      </header>

      <section className="blog-posts mb-2.5">
        
        <ul className="blog-posts-list grid grid-cols-1 gap-5 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <a 
                href={post.link} 
                className="relative border-gradient-onyx h-full shadow-4 rounded-2xl z-10 block group before:absolute before:inset-px before:rounded-2xl before:bg-eerie-black-1 before:-z-10"
              >
                
                <figure className="blog-banner-box w-full h-50 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1 group-hover:scale-110"
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content p-4">
                  
                  <div className="blog-meta flex items-center gap-2 mb-2.5">
                    <p className="blog-category text-light-gray-70 text-fs-6 font-300">
                      {post.category}
                    </p>

                    <span className="dot bg-light-gray-70 w-1 h-1 rounded-full"></span>

                    <time 
                      className="text-light-gray-70 text-fs-6 font-300" 
                      dateTime={post.date}
                    >
                      {formatDate(post.date)}
                    </time>
                  </div>

                  <h3 className="blog-item-title text-white-2 text-fs-5 font-400 leading-tight mb-2.5 transition-colors duration-1 group-hover:text-orange-yellow">
                    {post.title}
                  </h3>

                  <p className="blog-text text-light-gray text-fs-6 font-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                </div>

              </a>
            </li>
          ))}
        </ul>

      </section>

    </article>
  );
}
