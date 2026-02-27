import React, { useState, useEffect } from 'react';
import {
  Send,
  Copy,
  Check,
  Linkedin,
  Twitter,
  Video,
  Loader2,
  Smartphone,
  LayoutDashboard,
  Zap,
  Github,
  FileSearch,
  ArrowRight,
  ChevronRight,
  Shield,
  BarChart3,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const STORAGE_KEY = 'b2b-repurpose-form';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      SOURCE_CONTENT: '',
      TARGET_AUDIENCE: '',
      BRAND_VOICE: '',
      PRIMARY_GOAL: ''
    };
  });

  const [output, setOutput] = useState(null);
  const [view, setView] = useState('landing');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleGenerate = async () => {
    if (!formData.SOURCE_CONTENT) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/repurpose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to forge content');
      }

      const data = await response.json();
      setOutput(data);
    } catch (error) {
      console.error('Error generating assets:', error);
      // Fallback for demo purposes if server isn't running
      alert('Forge connection failed. Ensure backend server is running on port 3001.');
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ label, id, placeholder, isTextArea }) => (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={id}
          value={formData[id]}
          onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
          placeholder={placeholder}
          className="min-h-[300px] w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl p-4 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-700 transition-all resize-none"
        />
      ) : (
        <input
          id={id}
          type="text"
          value={formData[id]}
          onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
          placeholder={placeholder}
          className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl p-3 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-700 transition-all"
        />
      )}
    </div>
  );

  if (view === 'landing') {
    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden selection:bg-blue-500/30">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Zap size={20} className="text-slate-900" />
              </div>
              <span className="text-xl font-black tracking-tighter">SLATE</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Framework</a>
              <a href="#" className="hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <button
              onClick={() => setView('dashboard')}
              className="px-5 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-200 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now Powered by Investigative Journalist AI
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] max-w-4xl"
              >
                Transform Raw <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Transcripts</span> into Authority.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
              >
                The repo-first engine for high-ticket B2B operators. Turn 1 hour of raw conversation into 30 days of high-authority social assets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-4"
              >
                <button
                  onClick={() => setView('dashboard')}
                  className="group relative px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-lg flex items-center gap-3 overflow-hidden transition-all hover:pr-10 active:scale-95"
                >
                  <span className="relative z-10 font-bold">Try Out for Free</span>
                  <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </motion.div>
            </div>

            {/* Mockup Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-24 relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative aspect-video rounded-[24px] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <img
                  src="/dashboard_demo.webp"
                  alt="Slate Repurpose Dashboard Demo"
                  className="w-full h-full object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-32 px-6 border-t border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto md:mx-0">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold">Domain Intelligence</h3>
              <p className="text-slate-400 leading-relaxed">Pivots vocabulary from SaaS to Manufacturing instantly using detected keyword mapping.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mx-auto md:mx-0">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold">Investigative Extraction</h3>
              <p className="text-slate-400 leading-relaxed">Identifies "The Bleed" and "The Mechanism" to ensure your content is grounded in economic reality.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mx-auto md:mx-0">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold">Anti-Templating</h3>
              <p className="text-slate-400 leading-relaxed">Strict constraints prevent generic business advice. Every output is uniquely practitioner-focused.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col md:flex-row">
      <button
        onClick={() => setView('landing')}
        className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full shadow-lg hover:bg-slate-50 transition-colors"
      >
        <ChevronRight className="rotate-180" size={20} />
      </button>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700/50"
          >
            <Check size={18} />
            <span className="text-sm font-medium">Copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Pane - Form */}
      <div className="w-full md:w-[30%] h-auto md:h-screen p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col gap-8 bg-white dark:bg-slate-950 z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 dark:bg-white p-2 rounded-lg">
            <Zap size={20} className="text-white dark:text-slate-900" />
          </div>
          <h1 className="text-xl font-black tracking-tight">SLATE REPURPOSE</h1>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto pr-2 slate-scroll">
          <InputField
            label="Source Content"
            id="SOURCE_CONTENT"
            placeholder="Paste transcript here..."
            isTextArea
          />
          <InputField
            label="Target Audience"
            id="TARGET_AUDIENCE"
            placeholder="e.g., Series A SaaS Founders"
          />
          <InputField
            label="Brand Voice"
            id="BRAND_VOICE"
            placeholder="e.g., Direct, skeptical, operator"
          />
          <InputField
            label="Primary Goal"
            id="PRIMARY_GOAL"
            placeholder="e.g., Authority & Leads"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !formData.SOURCE_CONTENT}
          className={cn(
            "mt-auto w-full group py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95",
            loading
              ? "bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
              : "bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 hover:shadow-xl hover:-translate-y-1"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Forging Content...</span>
            </>
          ) : (
            <>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              <span>Generate Assets</span>
            </>
          )}
        </button>
      </div>

      {/* Right Pane - Output */}
      <div className="flex-1 h-auto md:h-screen overflow-y-auto p-6 md:p-12 relative bg-slate-50 dark:bg-slate-950 slate-scroll">
        {!output && !loading && (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center space-y-4">
            <LayoutDashboard size={48} className="opacity-20" />
            <p className="max-w-[280px] text-sm italic font-medium">
              Configure your inputs and hit generate to forge high-leverage assets.
            </p>
          </div>
        )}

        <div className={cn(
          "max-w-4xl mx-auto flex flex-col gap-12 transition-all duration-500 pb-20",
          loading ? "blur-sm grayscale pointer-events-none opacity-50" : "opacity-100"
        )}>
          {output && (
            <>
              {/* Strategic Briefing */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <FileSearch size={20} />
                  <h2 className="font-bold tracking-tight">Strategic Briefing</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">The Bleed</h3>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {output.analysis.the_bleed || "Analyzing inefficiency..."}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">The Mechanism</h3>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {output.analysis.the_mechanism || "Detecting solution..."}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">The ROI</h3>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {output.analysis.the_roi || "Calculating impact..."}
                    </p>
                  </div>
                </div>
                {output.analysis.domain_detected && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full w-fit">
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Domain: {output.analysis.domain_detected}
                    </span>
                  </div>
                )}
              </section>

              {/* LinkedIn Card */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Linkedin size={20} />
                    <h2 className="font-bold tracking-tight">LinkedIn Authority Post</h2>
                  </div>
                  <button
                    onClick={() => handleCopy(output.linkedin_post)}
                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                  >
                    <Copy size={18} className="text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-slate-300">
                  {output.linkedin_post}
                </div>
              </section>

              {/* Twitter Card */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Twitter size={20} />
                    <h2 className="font-bold tracking-tight">X (Twitter) Thread</h2>
                  </div>
                  <button
                    onClick={() => handleCopy(output.twitter_thread.join('\n\n'))}
                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                  >
                    <Copy size={18} className="text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  {output.twitter_thread.map((tweet, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </div>
                        {i < 4 && <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-800 mt-2 mb-2" />}
                      </div>
                      <div className="flex-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                        {tweet}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Video Script Card */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <Video size={20} />
                    <h2 className="font-bold tracking-tight">60s Video Script</h2>
                  </div>
                  <button
                    onClick={() => handleCopy(`${output.video_script.hook_visual}\n\n${output.video_script.script_body}`)}
                    className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors group"
                  >
                    <Copy size={18} className="text-slate-400 group-hover:text-slate-600" />
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-900 p-0 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Hook Visual</h3>
                    <p className="text-sm font-medium italic text-slate-600 dark:text-slate-400">
                      {output.video_script.hook_visual}
                    </p>
                  </div>
                  <div className="p-8 whitespace-pre-wrap leading-relaxed italic text-slate-700 dark:text-slate-300">
                    {output.video_script.script_body}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
