import  { useEffect } from 'react';

const BlogSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate__animated').forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }, []);

  const blogPosts = [
    {
      category: 'AI Integration',
      title: 'AI Integrated in MERN Stack Projects',
      description: 'Incorporating AI into your MERN stack projects to enhance functionality and user experience...',
      date: 'Jan 30, 2025',
      slug: 'ai-integration-in-mern-stack',
      image: 'https://images.unsplash.com/photo-1738107450287-8ccd5a2f8806?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdGdwdCUyMHZzJTIwZGVlcHNlZWt8ZW58MHx8MHx8fDA%3D',
    },
    {
      category: 'Artificial Intelligence',
      title: 'DeepSeek vs ChatGPT: A Comparative Analysis',
      description: 'Comparing DeepSeek and ChatGPT, two leading AI models in natural language processing...',
      date: 'Jan 30, 2025',
      slug: 'deepseek-vs-chatgpt',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjBpbnRlZ3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              {/* Display the image */}
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="text-blue-500 text-sm font-semibold mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
