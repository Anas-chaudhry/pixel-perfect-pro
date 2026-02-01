import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectWeb from '@/assets/project-web.jpg';
import projectApp from '@/assets/project-app.jpg';
import projectBrand from '@/assets/project-brand.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A modern e-commerce platform with seamless user experience, integrated payment system, and responsive design.',
    image: projectWeb,
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'Fitness Tracking App',
    category: 'App Development',
    description:
      'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with beautiful data visualization.',
    image: projectApp,
    tags: ['React Native', 'Firebase', 'Charts', 'HealthKit'],
    link: '#',
    github: '#',
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description:
      'Complete brand identity including logo, color palette, typography, and marketing collateral for a tech startup.',
    image: projectBrand,
    tags: ['Branding', 'Logo', 'Print', 'Guidelines'],
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent work. Each project is a unique piece of development
            and design excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="project-card-overlay p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-heading font-semibold mt-1 mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="btn-outline inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
