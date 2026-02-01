import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Smartphone, Layers, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description:
      'Eye-catching visuals that communicate your brand story. From logos to complete brand identities.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Social Media'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Modern, responsive websites built with the latest technologies. Fast, secure, and scalable.',
    features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'SEO Optimized'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Ready'],
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality for maximum engagement.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    icon: Zap,
    title: 'Performance',
    description:
      'Lightning-fast applications optimized for speed and performance across all devices.',
    features: ['Code Optimization', 'Image Compression', 'CDN Setup', 'Caching'],
  },
  {
    icon: Shield,
    title: 'Maintenance',
    description:
      'Ongoing support and maintenance to keep your digital products running smoothly.',
    features: ['Bug Fixes', 'Updates', 'Monitoring', '24/7 Support'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your needs. From concept to completion,
            I deliver excellence in every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
