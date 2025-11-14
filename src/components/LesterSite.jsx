import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'PHILANDER CONSULTING', href: '#consulting' },
    { label: 'BOOKS', href: '#books' },
    { label: 'BOOK LESTER', href: '#book-lester' },
    { label: 'THE LESTER PHILANDERSHOW', href: '#show' },
    { label: 'LP', href: '#store' },
  ];

  return (
    <nav className="bg-[#0B1F3B] sticky top-0 z-50 px-[5%] py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs">□</span>
          </div>
          <span className="text-white font-bold text-sm md:text-base tracking-[3px]">
            Lester's Logo
          </span>
        </div>

        <ul className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-white text-[10px] xl:text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-6 pt-8 pb-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const stats = [
    { number: '951', label: 'Businesses Helped' },
    { number: '400', label: 'Jobs Created' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="bg-[#0B1F3B] text-white flex flex-col lg:flex-row min-h-[90vh]">
      <div className="flex-1 px-[5%] py-12 md:py-24 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 md:mb-12 tracking-tight">
          Over the past decade, Lester Philander has helped 951 businesses across industries with Sales, Marketing, Leadership, Systems, and Strategy.
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 text-center md:text-left">
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-2">
                {stat.number}
              </span>
              <span className="text-sm md:text-base">{stat.label}</span>
            </div>
          ))}
        </div>

        <button className="bg-transparent text-white border-2 border-white px-8 py-4 text-xs tracking-[2px] font-semibold uppercase hover:bg-white hover:text-[#0B1F3B] transition-all duration-300 w-full md:w-auto">
          SCHEDULE A FREE ASSESSMENT
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden min-h-[400px] lg:min-h-0">
        <img
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=1000&fit=crop&q=80"
          alt="Lester Philander"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="bg-gray-100 px-[5%] py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      <div className="flex-1 max-w-md w-full">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop&q=80"
          alt="Lester Philander"
          className="w-full h-auto"
        />
      </div>

      <div className="flex-1 lg:flex-[1.8]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-black tracking-tight">
          ABOUT LESTER
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8">
          Lester Philander is an award-winning business coach and Strategist who founded Philander Consulting in 2014 and the Philander Foundation. Through his work, he has impacted thousands of businesses and created hundreds of jobs.
        </p>
        <button className="bg-[#0B1F3B] text-white px-8 py-4 text-xs tracking-[2px] font-semibold uppercase hover:bg-[#152c4f] transition-all duration-300 w-full md:w-auto">
          READ MORE
        </button>
      </div>
    </section>
  );
};

// Tagline Component
const Tagline = () => {
  const ctas = [
    { label: 'SCHEDULE A CONSULTATION', href: '#consultation' },
    { label: 'BOOK LESTER PHILANDER', href: '#book-lester' },
    { label: 'SCHEDULE A FREE ASSESSMENT', href: '#assessment' },
  ];

  return (
    <section className="bg-[#0B1F3B] text-white px-[5%] py-16 md:py-20 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight mb-8 md:mb-12">
        BUILDING BUSINESSES. EMPOWERING PEOPLE.
        <br />
        TRANSFORMING ECONOMIES.
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 flex-wrap">
        {ctas.map((cta, index) => (
          <a
            key={index}
            href={cta.href}
            className="bg-transparent text-white border-2 border-white px-7 py-4 text-xs tracking-[2px] font-semibold uppercase hover:bg-white hover:text-[#0B1F3B] transition-all duration-300 inline-block w-full md:w-auto max-w-md"
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    'Sales & Scaling',
    'Marketing & Branding',
    'Digital Marketing',
    'Financial Management & Fundraising',
    'Strategic Management & Leadership',
  ];

  return (
    <section id="consulting" className="bg-white px-[5%] py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-black tracking-tight">
          HOW I CAN HELP
        </h2>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="text-base md:text-lg text-gray-700 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-black before:font-bold"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full bg-gray-300">
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&h=800&fit=crop&q=80"
          alt="Lester Philander Speaking"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Newsletter subscription: ${email}`);
    setEmail('');
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Philander Consulting', href: '#consulting' },
    { label: 'Books', href: '#books' },
    { label: 'Book Lester', href: '#book-lester' },
  ];

  const socialLinks = [
    { label: 'LINKEDIN', href: '#' },
    { label: 'INSTAGRAM', href: '#' },
    { label: 'YOUTUBE', href: '#' },
    { label: 'CORP RADIO', href: '#' },
  ];

  return (
    <footer className="bg-[#0B1F3B] text-[#BFC3C9] px-[5%] py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="text-white text-base tracking-wider mb-6 font-bold">
              CONTACT
            </h4>
            <p className="text-sm mb-3">info@lesterphilander.com</p>
            <p className="text-sm">Cape Town, South Africa</p>
          </div>

          <div>
            <h4 className="text-white text-base tracking-wider mb-6 font-bold">
              QUICK LINKS
            </h4>
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-sm mb-3 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-white text-base tracking-wider mb-6 font-bold">
              NEWSLETTER
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-[#BFC3C9] text-white placeholder-[#BFC3C9] text-sm focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#BFC3C9] text-[#0B1F3B] px-6 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-white transition-all duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-[#BFC3C9]/20 text-sm">
          <p>© 2025 Lester Philander. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Tagline />
      <Services />
      <Footer />
    </div>
  );
}