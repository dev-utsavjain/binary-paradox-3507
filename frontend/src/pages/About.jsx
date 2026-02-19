import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle2" className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-lg text-slate-900">TaskFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-indigo-600 duration-300">Dashboard</Link>
            <Link to="/about" className="text-slate-700 hover:text-indigo-600 duration-300">About</Link>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur border-t border-slate-200/60">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© 2024 TaskFlow. Built with React + Tailwind.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-indigo-600 duration-300"><Icon name="Github" className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-indigo-600 duration-300"><Icon name="Twitter" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/60 backdrop-blur rounded-2xl border border-slate-200/60 p-6 shadow-sm hover:shadow-lg duration-300">
      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
        <Icon name={icon} className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Step = ({ number, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: connect API endpoint
    alert('Thank you for reaching out! We\'ll get back soon.');
    setForm({ name: '', email: '', message: '' });
  };

  const features = [
    { icon: 'Zap', title: 'Lightning Fast', description: 'Add and manage tasks instantly with zero friction.' },
    { icon: 'Filter', title: 'Smart Filters', description: 'Focus on what matters with All, Active, and Completed views.' },
    { icon: 'BarChart3', title: 'Progress Tracking', description: 'Visualize your productivity with real-time completion stats.' },
    { icon: 'Smartphone', title: 'Mobile Ready', description: 'Beautifully responsive design that works on every device.' },
    { icon: 'Lock', title: 'Private by Default', description: 'Your data stays local until you choose to sync.' },
    { icon: 'Palette', title: 'Glassmorphism UI', description: 'A modern, calming interface that feels like a breath of fresh air.' },
  ];

  const steps = [
    { title: 'Create a task', description: 'Type your task and press Enter or click the plus button.' },
    { title: 'Mark progress', description: 'Click the circle to toggle between active and completed.' },
    { title: 'Filter & focus', description: 'Use the filter buttons to show only what you need right now.' },
    { title: 'Track success', description: 'Watch the progress bar grow as you complete more tasks.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        {/* Hero */}
        <section className="text-center mb-16 md:mb-24">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format"
            alt="Team collaboration"
            className="mx-auto w-full max-w-4xl h-64 md:h-80 object-cover rounded-3xl shadow-xl mb-8"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/1200x600/1a1a2e/eaeaea?text=About+TaskFlow';
            }}
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">About TaskFlow</h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
            TaskFlow is a minimalist task manager designed to cut the clutter and help you focus on what truly matters—getting things done.
          </p>
        </section>

        {/* Overview */}
        <section className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Simplicity meets power</h2>
              <p className="text-slate-600 mb-4">
                Born out of frustration with bloated productivity apps, TaskFlow strips away the noise and leaves you with a crystal-clear canvas for your daily goals.
              </p>
              <p className="text-slate-600 mb-6">
                Whether you're managing a team sprint or planning your grocery list, TaskFlow adapts to your workflow—not the other way around.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 duration-300 shadow-md hover:shadow-lg"
              >
                Try TaskFlow now
                <Icon name="ArrowRight" className="w-5 h-5" />
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&auto=format"
              alt="Minimal desk setup"
              className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/800x600/1a1a2e/eaeaea?text=Minimal+Desk';
              }}
            />
          </div>
        </section>

        {/* Features */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need, nothing you don't</h2>
            <p className="text-slate-600 mt-2">A focused set of features that just work.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
            <p className="text-slate-600 mt-2">Get productive in four simple steps.</p>
          </div>
          <div className="grid gap-6">
            {steps.map((s, i) => (
              <Step key={i} number={i + 1} {...s} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur rounded-3xl border border-slate-200/60 p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Get in touch</h2>
              <p className="text-slate-600 mt-2">Have questions or feedback? We'd love to hear from you.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-white/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/60 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex items-center justify-between">
                <a
                  href="mailto:hello@taskflow.app"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  or email us directly
                </a>
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 duration-300 shadow-md hover:shadow-lg"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}