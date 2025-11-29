
import { useState } from 'react';
import Lester from '../assets/lester.png';
import HfH from '../assets/habitat-for-humanity.png';
import StandardBank from '../assets/standard-bank.png';
import JA from '../assets/junior-achievement.png';
import UCT from '../assets/UCT.png';
import UWC from '../assets/UWC.png';
import TF from '../assets/TF.png';
import EPD from '../assets/EPD.png';
import GIoBS from '../assets/GIoBS.png';

import { Menu, X, Mail, MapPin, Phone, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { label: 'Sales & Scaling', href: '#sales' },
    { label: 'Marketing & Branding', href: '#marketing' },
    { label: 'Digital Marketing', href: '#digital' },
    { label: 'Financial Management & Fundraising', href: '#financial' },
    { label: 'Strategic Management & Leadership', href: '#strategic' },
  ];

  const socialLinks = [
    { label: '', href: '#', icon: Linkedin },
    { label: '', href: '#', icon: Instagram },
    { label: '', href: '#', icon: Youtube },
    { label: '', href: '#', icon: Facebook },
  ];

  return (
    <nav className="bg-[#0B1F3B] fixed top-0 z-50 w-full shadow-md">

      {/* Main Navbar */}
      <div className="px-[5%] py-4">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-15 lg:h-15 border-2 border-white flex items-center justify-center">
              <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold">LP</span>
            </div>
          </div>



          <div className="flex items-center w-full justify-end gap-6">
            <div className='flex-column '>
              {/* * Top Bar - Hidden on mobile */}
              <div className="hidden lg:block -ml-30 bg-[#0a1930]/50 border-b border-white/10">
                <div className="py-2">
                  <div className="flex items-center justify-between px-1 gap-6 xl:gap-8 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-white/60" />
                      <span>info@lesterphilander.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-white/60" />
                      <span>Cape Town, South Africa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-white/60" />
                      <span>+27 XX XXX XXXX</span>
                    </div>
                  </div>
                </div>
              </div>


              <ul className="hidden py-2 lg:flex xl:gap-8 lg:gap-8 items-center">
                <li>
                  <a
                    href="#consulting"
                    className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    PHILANDER CONSULTING
                  </a>
                </li>

                {/* Services Dropdown */}
                <li className="relative group">
                  <a
                    href="#services"
                    className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300 font-medium flex items-center gap-1"
                  >
                    SERVICES ▾
                  </a>
                  <ul className="absolute top-full left-0 bg-white shadow-lg min-w-[280px] py-2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <a
                          href={service.href}
                          className="block px-6 py-3 text-xs text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {service.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <a
                    href="#book-lester"
                    className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    BOOK LESTER
                  </a>
                </li>
                <li>
                  <a
                    href="#show"
                    className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    THE LESTER PHILANDER SHOW
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#store"
                    className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300 font-medium"
                  >
                    LP
                  </a>
                </li> */}
                <div className="flex gap-2  text-white/80">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center pl-1 w-5 h-5 gap-1 text-[#0B1F3B] bg-white/70 rounded-full hover:text-white hover:bg-[#0B1F3B] transition-colors duration-300"
                      >
                        <Icon size={14} />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>

              </ul>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul className="lg:hidden flex flex-col gap-6 pt-8 pb-4">
            <li>
              <a
                href="#consulting"
                onClick={() => setIsOpen(false)}
                className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                PHILANDER CONSULTING
              </a>
            </li>
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white text-xs tracking-[1.5px] font-medium w-full text-left"
              >
                SERVICES ▾
              </button>
              {servicesOpen && (
                <ul className="pl-4 mt-4 space-y-3">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 text-xs block"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a
                href="#book-lester"
                onClick={() => setIsOpen(false)}
                className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                BOOK LESTER
              </a>
            </li>
            <li>
              <a
                href="#show"
                onClick={() => setIsOpen(false)}
                className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                THE LESTER PHILANDERSHOW
              </a>
            </li>
            {/* <li>
              <a
                href="#store"
                onClick={() => setIsOpen(false)}
                className="text-white text-xs tracking-[1.5px] hover:text-gray-300 transition-colors duration-300"
              >
                LP
              </a>
            </li> */}
          </ul>
        )}
      </div>
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
    <section id="home" className="bg-[#0B1F3B] md-py-10 text-white flex flex-col lg:flex-row min-h-[90vh]">
      <div className="flex-1 px-[5%] py-12 md:py-24  flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-8 md:mb-12 tracking-tight">
          Over the past decade, Lester Philander has helped 951 businesses across industries with Sales, Marketing, Leadership, Systems, and Strategy.
        </h1>

        <div className="flex flex-row gap-8 md:gap-12 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 text-center md:text-left">
              <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none mb-2">
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

      <div className="flex-1 relative overflow-hidden min-h-[350px] lg:min-h-0 flex items-center justify-center">
        <img
          src={Lester}
          alt="Lester Philander"
          className="w-full h-80% object-cover object-center"
        />
      </div>
    </section>
  );
};


const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="bg-gray-100 px-[5%] py-16 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      
<div className="flex-1 w-32 sm:w-48 md:w-64 lg:max-w-md">
  <img
    src={Lester}
    alt="Lester Philander"
    className="w-full h-auto"
  />
</div>
      <div className="flex-1 lg:flex-[1.8]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-black tracking-tight">
          ABOUT LESTER PHILANDER
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-black tracking-tight"> A Visionary Architect of Business Excellence</h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8">
          A seasoned entrepreneur who has left an indelible mark in the coffee shop industry with the renowned Corp Cafe. However, my entrepreneurial ventures extend beyond coffee, reflecting a passion for driving positive change in the business landscape.
          As the Founder and Director of PHL International Consulting (PTY) Ltd, my commitment lies in empowering businesses through innovative solutions. The company has played a pivotal role in assisting call center startups, contributing to their growth and success.        </p>

        {showMore && (
          <>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8">One of my proudest achievements is the creation of Empire 629, a Business Development Program designed to empower aspiring entrepreneurs. This initiative imparts the knowledge and skills necessary to build thriving businesses, showcasing a commitment to nurturing the next generation of business leaders.

              Lester Philander has authored a compelling book, delving into his own real-life experiences when he embarked on the journey of starting his own business. In this book, he shares insightful descriptions and narratives, aiming to inspire and assist other aspiring business owners on their entrepreneurial path. </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-900 mb-6 md:mb-8 italic">What to expect when going self-employed - Lester Philander</p>
          </>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-[#0B1F3B] text-white px-8 py-4 text-xs tracking-[2px] font-semibold uppercase hover:bg-[#152c4f] transition-all duration-300 w-full md:w-auto"
        >
          {showMore ? 'HIDE' : 'READ MORE'}
        </button>
      </div>
    </section>
  );
};

// Affiliations Component
const Affiliations = () => {
  const logos = [
    { name: 'Company 1', src: [UCT] },
    { name: 'Company 2', src: [UWC] },
    { name: 'Company 3', src: [HfH] },
    { name: 'Company 4', src: [StandardBank] },
    { name: 'Company 5', src: [JA] },
    { name: 'Company 6', src: [TF] },
    { name: 'Company 7', src: [EPD] },
    { name: 'Company 8', src: [GIoBS] },
    // { name: 'Company 9', src: '/path/to/logo9.png' },
  ];

  return (
    <section className="bg-white px-[5%] py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0B1F3B] tracking-tight uppercase">
          Affiliations & Collaborations
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">
          Trusted by leading organizations across industries to drive growth and innovation
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full h-24 md:h-32 flex items-center justify-center p-1 bg-white shadow-md hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain  transition-all duration-300"
              />
            </div>
          ))}
        </div>
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

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      quote: "One of the very important lessons by Lester that I still remember and practice today is to clarify your SMART goals, and I still use so much of Lester's wisdom and advice in my business today.",
      author: "Pholoso",
      role: ""
    },
    {
      quote: "I had a radio interview with Lester in 2019. Lester is a very confident and ambitious person. He is a real motivator to business people. I did not have my business yet in 2019, but when I started my business in 2022, I could go back to the advice and tools he mentioned that night and also on his radio sessions. Lester has vision and is definitely not just an entrepreneur but also someone who can teach, encourage and mentor business people.",
      author: "Tanya Jenken",
      role: "084 295 6121"
    },
    {
      quote: "Lester Philander is a force to be remembered and he is a highly sought after individual. He is a bold and intelligent entrepreneur with a true love for small business and a heart for the small business owner.",
      author: "Nicole Philander",
      role: "084 011 0922"
    }
  ];

  return (
    <section className="bg-gray-100 px-[5%] py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-[#0B1F3B] tracking-tight uppercase">
          What People Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          Real stories from entrepreneurs and business leaders transformed by Lester's guidance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#0B1F3B]"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#0B1F3B] opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#0B1F3B] text-lg">
                  {testimonial.author}
                </p>
                {testimonial.role && (
                  <p className="text-gray-600 text-sm mt-1">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
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
          src={Lester}
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
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage({ type: '', text: '' });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Success
    setMessage({ type: 'success', text: 'Thank you for subscribing to our newsletter!' });
    setEmail('');

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 5000);
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

              <a key={index}
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
              />
              <button
                type="submit"
                className="w-full bg-[#BFC3C9] text-[#0B1F3B] px-6 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-white transition-all duration-300"
              >
                SUBSCRIBE
              </button>

              {message.text && (
                <div
                  className={`p-3 text-sm rounded ${message.type === 'success'
                      ? 'bg-green-500/20 border border-green-500 text-green-100'
                      : 'bg-red-500/20 border border-red-500 text-red-100'
                    }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-8">
          {socialLinks.map((link, index) => (

            <a key={index}
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
      <div className="pt-10 md:pt-10">
        <Hero />
        <About />
        <Affiliations />
        <Tagline />
        <Testimonials />

        <Services />
        <Footer />
      </div>
    </div>
  );
}
