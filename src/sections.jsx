import React, { useState, useEffect, useRef, useMemo } from 'react';
import { skills, accentPresets, projects, journey, contactInfo } from './data.js';

// --- Icons ---
export const GH = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const Sun = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const Moon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const CopyIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const MailIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const PhoneIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ArrowUpIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

export const PaletteIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

// --- Scroll Progress Bar Component ---
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-border/40 pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out shadow-[0_0_8px_var(--color-accent)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// --- Dynamic Back To Top Button with Hover Animation ---
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = totalHeight > 0 ? Math.min(100, Math.round((scrollY / totalHeight) * 100)) : 0;
      setScrollPercent(percent);
      setVisible(scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={scrollToTop}
        className="back-to-top-btn group relative flex items-center gap-2 pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 py-2.5 rounded-full bg-surface/95 hover:bg-surface border border-border hover:border-accent shadow-lg backdrop-blur text-text hover:text-accent cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 min-h-[44px]"
        aria-label="Scroll back to top"
        title={`Scroll to top (${scrollPercent}%)`}
      >
        {/* Animated Arrow Icon */}
        <div className="w-6 h-6 rounded-full bg-surface-soft group-hover:bg-accent/15 flex items-center justify-center transition-colors">
          <ArrowUpIcon size={14} className="back-to-top-arrow text-accent" />
        </div>

        {/* Text and Percentage Label */}
        <span className="font-mono text-xs uppercase tracking-wider font-medium">
          Top
        </span>

        <span className="font-mono text-[10px] text-muted group-hover:text-accent transition-colors pl-0.5">
          {scrollPercent}%
        </span>
      </button>
    </div>
  );
}


// --- Clipboard Helper Hook ---
export function useClipboard() {
  const [copiedKey, setCopiedKey] = useState(null);

  const copy = async (text, key) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey((curr) => (curr === key ? null : curr));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return { copiedKey, copy };
}

// --- Sub-components ---

export function ThemeModal({ isOpen, onClose, theme, setTheme, accent, setAccent }) {
  if (!isOpen) return null;
  const isDark = theme === 'dark';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-ink/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full sm:max-w-md bg-surface border-t sm:border border-border rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl overflow-y-auto max-h-[85vh] transition-all">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center border border-accent/30">
              <PaletteIcon size={18} />
            </div>
            <div>
              <h3 className="font-display text-lg tracking-tight text-text leading-tight">Appearance &amp; Theme</h3>
              <p className="font-mono text-[11px] text-muted">Choose color mode &amp; accent</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-surface-soft hover:bg-border/60 text-text border border-border cursor-pointer transition-colors"
            aria-label="Close theme settings"
          >
            ✕
          </button>
        </div>

        {/* Color Mode Selection */}
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-2.5">Display Mode</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all min-h-[56px] ${
                !isDark
                  ? 'border-accent bg-surface-soft shadow-sm ring-2 ring-accent/40'
                  : 'border-border bg-surface hover:border-border-strong text-muted'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${!isDark ? 'bg-accent text-accent-contrast' : 'bg-surface-soft text-muted'}`}>
                <Sun size={16} />
              </div>
              <div className="text-left">
                <p className={`font-mono text-xs font-bold ${!isDark ? 'text-text' : 'text-secondary'}`}>Light Mode</p>
                <p className="text-[10px] text-muted leading-tight">Crisp &amp; clear</p>
              </div>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all min-h-[56px] ${
                isDark
                  ? 'border-accent bg-surface-soft shadow-sm ring-2 ring-accent/40'
                  : 'border-border bg-surface hover:border-border-strong text-muted'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-accent text-accent-contrast' : 'bg-surface-soft text-muted'}`}>
                <Moon size={16} />
              </div>
              <div className="text-left">
                <p className={`font-mono text-xs font-bold ${isDark ? 'text-text' : 'text-secondary'}`}>Dark Mode</p>
                <p className="text-[10px] text-muted leading-tight">Easy on eyes</p>
              </div>
            </button>
          </div>
        </div>

        {/* Accent Color Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Accent Color</p>
            <span className="font-mono text-[11px] text-accent font-semibold">{accent?.name || 'Amber'}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {accentPresets.map((a) => {
              const accentValue = isDark ? a.dark : a.light;
              const isSelected = accent && accent.name === a.name;
              return (
                <button
                  key={a.name}
                  onClick={() => setAccent(a)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-left cursor-pointer transition-all min-h-[48px] ${
                    isSelected
                      ? 'border-accent bg-surface-soft ring-2 ring-accent/40 shadow-sm'
                      : 'border-border bg-surface hover:border-border-strong'
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full shrink-0 shadow-sm border border-border"
                    style={{ backgroundColor: accentValue }}
                  />
                  <span className={`font-mono text-xs truncate ${isSelected ? 'text-text font-bold' : 'text-secondary'}`}>
                    {a.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Preview Pill */}
        <div className="p-3 rounded-xl bg-surface-soft border border-border/80 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-secondary">Active Accent Preview</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-accent text-accent-contrast font-bold">
            Live Look
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl font-mono text-xs uppercase tracking-widest bg-accent text-accent-contrast font-bold hover:opacity-90 transition-opacity border-0 cursor-pointer shadow-md min-h-[44px]"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export function ThemeControls({ theme, setTheme, accent, setAccent, compact, onOpenModal }) {
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <div className={`flex items-center gap-3 ${compact ? 'flex-wrap justify-between w-full' : ''}`}>
      {/* Accent color palette swatches */}
      <div className="flex gap-2 items-center pr-2 border-r border-border">
        {accentPresets.map((a) => {
          const accentValue = isDark ? a.dark : a.light;
          const isSelected = accent && accent.name === a.name;
          return (
            <button
              key={a.name}
              title={`Theme accent: ${a.name}`}
              onClick={() => setAccent(a)}
              className="swatch w-5 h-5 sm:w-4 sm:h-4 rounded-full border-0 cursor-pointer transition-transform p-0"
              style={{
                backgroundColor: accentValue,
                boxShadow: isSelected ? `0 0 0 2px var(--color-bg), 0 0 0 3.5px ${accentValue}` : 'none',
              }}
              aria-label={`Set accent color to ${a.name}`}
            />
          );
        })}
      </div>

      {/* Theme Toggle Switch */}
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        className="theme-switch-track relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border border-border bg-surface-soft p-0.5 hover:border-accent focus:outline-none transition-colors"
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        aria-label="Toggle light and dark mode"
      >
        <span className="sr-only">Toggle theme</span>
        <div className="flex w-full justify-between px-1.5 text-muted pointer-events-none">
          <Sun size={12} className={`${!isDark ? 'text-accent opacity-100' : 'opacity-40'}`} />
          <Moon size={12} className={`${isDark ? 'text-accent opacity-100' : 'opacity-40'}`} />
        </div>
        <span
          className={`theme-switch-thumb absolute left-0.5 inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-surface shadow-sm border border-border transition-transform ${
            isDark ? 'translate-x-8 text-accent' : 'translate-x-0 text-accent'
          }`}
        >
          {isDark ? <Moon size={13} /> : <Sun size={13} />}
        </span>
      </button>

      {/* Optional Modal trigger for deep customization */}
      {onOpenModal && (
        <button
          onClick={onOpenModal}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-soft hover:bg-border/60 text-secondary hover:text-accent border border-border cursor-pointer transition-colors p-0"
          title="Open Theme & Palette customizer"
          aria-label="Open Theme Settings"
        >
          <PaletteIcon size={14} />
        </button>
      )}
    </div>
  );
}

export function MediaSlide({ item }) {
  if (!item) return null;

  return (
    <div className="relative w-full h-full">
      {item.type === 'video' ? (
        <video src={item.src} controls muted loop playsInline className="w-full h-full object-cover" />
      ) : (
        <img src={item.src} alt="" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 pointer-events-none bg-img-overlay" />
    </div>
  );
}

export function MediaCarousel({ media }) {
  const [idx, setIdx] = useState(0);
  const total = media.length;
  const dragStart = useRef(null);

  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (dx < -40 && idx < total - 1) setIdx((i) => i + 1);
    if (dx > 40 && idx > 0) setIdx((i) => i - 1);
    dragStart.current = null;
  };

  if (total === 0) {
    return (
      <div className="w-full aspect-video bg-surface-soft flex flex-col items-center justify-center p-6 text-center border-b border-border">
        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent mb-3 shadow-xs">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="font-mono text-xs tracking-wider text-text font-semibold uppercase mb-1">Architecture &amp; Implementation Overview</p>
        <p className="font-mono text-[11px] text-muted">Production &amp; Internal Repository Documentation</p>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-surface-soft overflow-hidden select-none">
      <div
        className="media-track h-full drag-area"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {media.map((item, i) => (
          <div key={i} className="media-slide h-full overflow-hidden">
            <MediaSlide item={item} />
          </div>
        ))}
      </div>
      {idx > 0 && (
        <button
          onClick={() => setIdx((i) => i - 1)}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-surface/90 hover:bg-surface text-text shadow transition-colors border border-border cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      {idx < total - 1 && (
        <button
          onClick={() => setIdx((i) => i + 1)}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-surface/90 hover:bg-surface text-text shadow transition-colors border border-border cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={16} />
        </button>
      )}
      {total > 1 && (
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full border-0 cursor-pointer transition-colors ${i === idx ? 'bg-accent scale-125' : 'bg-text/30'}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
      {total > 1 && (
        <p className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 font-mono text-[11px] sm:text-xs text-text bg-surface/85 backdrop-blur px-2 py-0.5 border border-border rounded">
          {idx + 1} / {total}
        </p>
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink/75 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-enter relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-surface border border-border rounded-xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 flex items-center justify-center text-sm font-bold bg-surface/90 backdrop-blur rounded-full border border-border text-text hover:bg-accent hover:text-accent-contrast transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>
        <MediaCarousel media={project.media || []} />
        <div className="p-5 sm:p-8">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-4 flex-wrap">
            <span
              className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-2.5 py-1 rounded font-semibold ${
                project.type === 'work'
                  ? 'bg-accent text-accent-contrast'
                  : 'bg-surface-soft border border-border text-text'
              }`}
            >
              {project.type === 'work' ? 'Work Experience' : 'Academic Project'}
            </span>
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] sm:text-xs uppercase tracking-wide border border-border text-secondary bg-surface-soft px-2.5 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl tracking-tight mb-3 text-text">{project.title}</h3>
          <p className="text-sm sm:text-base leading-relaxed text-secondary mb-5">{project.desc}</p>

          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6">
              {project.stats.map((s, i) => (
                <div key={i} className="bg-surface-soft border border-border rounded-lg p-3 sm:px-4 sm:py-3">
                  <p className="font-display text-xl sm:text-2xl tracking-tight leading-none mb-1 text-text">{s.value}</p>
                  <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wide text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-2.5 mb-6 list-none p-0">
            {project.features.map((f, i) => (
              <li key={i} className="text-sm text-secondary pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent font-normal leading-relaxed">
                {f}
              </li>
            ))}
          </ul>

          {project.componentTags && (
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
                {project.type === 'work' ? 'Components covered' : 'Key Modules & Highlights'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.componentTags.map((c) => (
                  <span key={c} className="font-mono text-xs border border-border text-secondary bg-surface-soft px-2.5 py-0.5 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 flex-wrap pt-4 border-t border-border">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border text-text px-4 py-2.5 hover:bg-accent hover:text-accent-contrast hover:border-accent transition-colors no-underline bg-surface-soft min-h-[44px]"
              >
                <GH size={13} /> Source Code
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border text-muted px-4 py-2.5 bg-surface-soft min-h-[44px]">
                <GH size={13} /> {project.type === 'work' ? 'Private Repo' : 'Source Code'}
              </span>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-accent border-b border-accent pb-px hover:opacity-70 transition-opacity no-underline self-center py-2"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardThumb({ media }) {
  const [loaded, setLoaded] = useState(false);
  const first = media?.[0];
  const count = media?.length || 0;

  if (!first) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-surface-soft text-muted p-4 text-center select-none">
        <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-1.5 shadow-xs">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="font-mono text-[11px] tracking-wider uppercase text-text font-semibold">Technical Case Study</p>
        <span className="font-mono text-[10px] text-muted">Click to view breakdown</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-surface-soft">
      {!loaded && <div className="absolute inset-0 skeleton-shimmer z-0" />}
      {first.type === 'video' ? (
        <video
          src={first.src}
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
          className={`w-full h-full object-cover relative z-1 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <img
          src={first.src}
          alt=""
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover relative z-1 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      <div className="absolute inset-0 bg-img-overlay pointer-events-none z-2" />
      {count > 1 && (
        <span className="absolute bottom-2 right-2 font-mono text-xs bg-surface/90 text-text px-1.5 py-0.5 z-3 border border-border">
          +{count - 1} more
        </span>
      )}
    </div>
  );
}

// --- Skeleton Loaders for Perceived Performance ---

export function SkillCardSkeleton() {
  return (
    <div
      className="h-56 w-full rounded-lg bg-surface border border-border p-6 flex flex-col justify-between select-none"
      aria-hidden="true"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="h-4 w-28 rounded skeleton-shimmer" />
          <div className="h-4 w-12 rounded skeleton-shimmer" />
        </div>
        <div className="space-y-2.5">
          <div className="h-3.5 w-full rounded skeleton-shimmer" />
          <div className="h-3.5 w-4/5 rounded skeleton-shimmer" />
          <div className="h-3.5 w-3/5 rounded skeleton-shimmer" />
        </div>
      </div>
      <div className="pt-3 border-t border-border/60 flex items-center justify-between">
        <div className="h-3 w-20 rounded skeleton-shimmer" />
        <div className="h-3 w-16 rounded skeleton-shimmer" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div
      className="proj-slide border-r border-border last:border-r-0 flex flex-col bg-surface select-none"
      aria-hidden="true"
    >
      {/* Media thumbnail shimmer */}
      <div className="w-full aspect-video relative overflow-hidden skeleton-shimmer border-b border-border">
        <div className="absolute top-2 left-2 h-4 w-14 rounded bg-surface/80" />
      </div>
      {/* Card Content Shimmer */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <div className="h-4 w-14 rounded skeleton-shimmer" />
          <div className="h-4 w-16 rounded skeleton-shimmer" />
          <div className="h-4 w-12 rounded skeleton-shimmer" />
        </div>
        {/* Title */}
        <div className="h-6 w-3/4 rounded skeleton-shimmer mb-3" />
        {/* Description */}
        <div className="space-y-2 mb-6 flex-1">
          <div className="h-3.5 w-full rounded skeleton-shimmer" />
          <div className="h-3.5 w-5/6 rounded skeleton-shimmer" />
          <div className="h-3.5 w-4/6 rounded skeleton-shimmer" />
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="h-3.5 w-24 rounded skeleton-shimmer" />
          <div className="w-8 h-8 rounded skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}

// --- Main Page Sections ---

export function Nav({ theme, setTheme, accent, setAccent }) {
  const [open, setOpen] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const isDark = theme === 'dark';

  const links = [
    { name: 'About', href: '#about', num: '01' },
    { name: 'Skills', href: '#skills', num: '02' },
    { name: 'Work', href: '#work', num: '03' },
    { name: 'Journey', href: '#journey', num: '04' },
    { name: 'Contact', href: '#contact', num: '05' },
  ];

  // Prevent background scrolling when mobile menu or modal is open
  useEffect(() => {
    if (open || showThemeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, showThemeModal]);

  const accentValue = accent ? (isDark ? accent.dark : accent.light) : '#D97706';

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-14 py-3 sm:py-4 bg-surface/90 backdrop-blur border-b border-border transition-colors">
        <a
          href="#about"
          className="font-display text-lg sm:text-xl tracking-tight text-text no-underline hover:text-accent transition-colors flex items-center gap-2"
        >
          <span>Khai Yun</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 lg:gap-10 list-none m-0 p-0">
          {links.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-accent transition-colors no-underline py-1.5"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Theme Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeControls
            theme={theme}
            setTheme={setTheme}
            accent={accent}
            setAccent={setAccent}
            onOpenModal={() => setShowThemeModal(true)}
          />
        </div>

        {/* Mobile Top Actions (Theme Quick Button + Hamburger) */}
        <div className="md:hidden flex items-center gap-2">
          {/* Quick Theme Popup Trigger */}
          <button
            onClick={() => setShowThemeModal(true)}
            className="flex items-center gap-2 px-3 py-2 bg-surface-soft hover:bg-border/60 text-text rounded-lg border border-border cursor-pointer transition-colors text-xs font-mono min-h-[40px]"
            aria-label="Open theme and color picker"
            title="Theme Settings"
          >
            <PaletteIcon size={15} className="text-accent" />
            <span
              className="w-3 h-3 rounded-full border border-border shadow-xs"
              style={{ backgroundColor: accentValue }}
            />
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 bg-surface-soft hover:bg-border/60 rounded-lg border border-border cursor-pointer transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${open ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-surface/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="font-display text-lg tracking-tight text-text no-underline flex items-center gap-2"
            >
              <span>Cheong Khai Yun</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </a>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-soft hover:bg-border/60 text-text border border-border cursor-pointer text-base font-bold transition-colors"
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 flex-1 flex flex-col justify-center max-w-sm w-full mx-auto">
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {links.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="flex items-center justify-between p-3.5 rounded-xl text-text hover:text-accent hover:bg-surface-soft border border-transparent hover:border-border transition-all no-underline min-h-[48px]"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent font-semibold">{s.num}</span>
                      <span className="font-display text-xl tracking-tight">{s.name}</span>
                    </div>
                    <span className="font-mono text-xs text-muted">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Footer & Quick Theme Card */}
          <div className="pt-4 border-t border-border flex flex-col gap-3 max-w-sm w-full mx-auto">
            {/* Theme trigger button inside menu */}
            <button
              onClick={() => {
                setShowThemeModal(true);
              }}
              className="flex items-center justify-between p-3 rounded-xl bg-surface-soft hover:bg-border/60 border border-border cursor-pointer transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <PaletteIcon size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold text-text">Customize Theme</p>
                  <p className="font-mono text-[10px] text-muted capitalize">
                    {theme} mode · {accent?.name || 'Amber'}
                  </p>
                </div>
              </div>
              <span
                className="w-4 h-4 rounded-full border border-border shadow-xs"
                style={{ backgroundColor: accentValue }}
              />
            </button>

            {/* Quick links */}
            <div className="flex items-center justify-between px-1 text-xs font-mono text-muted">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1.5 no-underline text-secondary"
              >
                <GH size={13} /> GitHub Profile ↗
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-accent hover:underline transition-colors no-underline"
              >
                Email Me ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Theme & Palette Modal */}
      <ThemeModal
        isOpen={showThemeModal}
        onClose={() => setShowThemeModal(false)}
        theme={theme}
        setTheme={setTheme}
        accent={accent}
        setAccent={setAccent}
      />
    </>
  );
}

export function Hero() {
  const { copiedKey, copy } = useClipboard();

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-accent mb-6 sm:mb-8 bg-surface-soft px-3 py-1 rounded-full border border-border">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Open to Full-Time Roles · {contactInfo.availability}</span>
        </div>
        <h1 className="font-display text-text leading-[1.05] tracking-tight mb-5 sm:mb-6" style={{ fontSize: 'clamp(2.75rem, 10vw, 7.5rem)' }}>
          Cheong<br />
          <span className="text-accent italic">Khai Yun</span>
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-secondary max-w-2xl mb-8 sm:mb-10">
          Computer Science graduate (Software Engineering) from INTI International University. I build practical full-stack software — from Laravel CRUD systems to Vue and React component libraries — and I'm currently interning at Current Tech Industries, shipping production-facing features.
        </p>
        <div className="flex gap-4 sm:gap-6 flex-wrap items-center">
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-widest text-text border-b-2 border-text pb-1 hover:text-accent hover:border-accent transition-colors no-underline"
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest text-text border-b-2 border-text pb-1 hover:text-accent hover:border-accent transition-colors no-underline"
          >
            Get in Touch →
          </a>
          <button
            onClick={() => copy(contactInfo.email, 'hero-email')}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors bg-transparent border-0 cursor-pointer p-0 min-h-[36px]"
            title="Copy Gmail to clipboard"
          >
            {copiedKey === 'hero-email' ? (
              <span className="inline-flex items-center gap-1 text-accent font-medium">
                <CheckIcon size={13} /> Copied Gmail!
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 hover:underline">
                <CopyIcon size={12} /> Copy Email
              </span>
            )}
          </button>
        </div>
      </div>
      <p className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 font-mono text-xs tracking-widest uppercase text-soft/60 select-none" style={{ writingMode: 'vertical-rl' }}>
        Software Engineering · Computer Science
      </p>
    </section>
  );
}

export function Skills() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="skills" className="px-4 sm:px-8 md:px-14 py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2 sm:mb-3">02 — Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-text">What I Work With</h2>
          </div>
          <p className="font-mono text-[11px] sm:text-xs text-muted flex items-center gap-1.5 bg-surface-soft px-3 py-1.5 rounded-full border border-border self-start sm:self-auto">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            Hover or tap cards to flip details
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" aria-label="Loading skills grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkillCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 fade-in-content">
            {skills.map((s, index) => {
              const isFlipped = flippedIndex === index;
              const tags = s.tags || s.items.split('  ·  ');

              return (
                <div
                  key={s.cat}
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.cat} skills card, click or hover to flip`}
                  onClick={() => toggleFlip(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFlip(index);
                    }
                  }}
                  className={`skill-flip-card h-52 sm:h-56 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg select-none ${
                    isFlipped ? 'is-flipped' : ''
                  }`}
                >
                  <div className="skill-flip-inner relative w-full h-full">
                    {/* FRONT FACE */}
                    <div className="backface-hidden absolute inset-0 bg-surface border border-border rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-accent hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">{s.cat}</p>
                          <span className="font-mono text-[10px] uppercase text-muted tracking-widest bg-surface-soft px-2 py-0.5 rounded border border-border/50">
                            Flip ↺
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-secondary line-clamp-3">
                          {s.items}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/60 flex items-center justify-between text-muted text-xs font-mono">
                        <span>{tags.length} Competencies</span>
                        <span className="text-accent text-[11px] group-hover:underline font-medium">View Tags →</span>
                      </div>
                    </div>

                    {/* BACK FACE */}
                    <div className="backface-hidden rotate-y-180 absolute inset-0 bg-surface-soft border border-accent/60 rounded-lg p-4 sm:p-5 flex flex-col justify-between shadow-lg">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                            {s.cat}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        </div>

                        {s.highlight && (
                          <p className="text-[11px] sm:text-xs text-text font-medium leading-normal mb-2.5 pb-2 border-b border-border">
                            {s.highlight}
                          </p>
                        )}

                        {/* Tag Cloud */}
                        <div className="flex flex-wrap gap-1 max-h-24 sm:max-h-24 overflow-y-auto pr-1">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-surface border border-border text-secondary whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 text-[10px] font-mono text-muted text-right tracking-wider uppercase">
                        ↺ Flip back
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function Projects() {
  const [active, setActive] = useState(null);
  const [idx, setIdx] = useState(0);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(
    () => projects.filter((p) => (filter === 'all' ? true : p.type === filter)),
    [filter]
  );

  const getVisible = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visible, setVisible] = useState(getVisible());

  useEffect(() => {
    const fn = () => setVisible(getVisible());
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => { setIdx(0); }, [filter]);

  const maxIdx = Math.max(0, filtered.length - visible);
  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(maxIdx, i + 1));

  const dragStart = useRef(null);
  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (dx < -40) next();
    if (dx > 40) prev();
    dragStart.current = null;
  };

  const slideW = 100 / visible;
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'work', label: 'Work' },
    { key: 'academic', label: 'Academic' },
  ];

  return (
    <section id="work" className="px-4 sm:px-8 md:px-14 py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-6 sm:mb-8 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2 sm:mb-3">03 — Things I've Built</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-text">Work &amp; Projects</h2>
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-mono text-xs text-muted mr-1 sm:mr-2">
              {filtered.length ? idx + 1 : 0} – {Math.min(idx + visible, filtered.length)} / {filtered.length}
            </span>
            <button
              onClick={prev}
              disabled={idx === 0 || loading}
              className="w-10 h-10 flex items-center justify-center rounded border border-border text-secondary hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-surface cursor-pointer"
              aria-label="Previous project slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={idx >= maxIdx || loading}
              className="w-10 h-10 flex items-center justify-center rounded border border-border text-secondary hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors bg-surface cursor-pointer"
              aria-label="Next project slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="inline-flex border border-border rounded-lg p-0.5 bg-surface-soft mb-6 sm:mb-8 w-full sm:w-auto overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex-1 sm:flex-initial font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md border-0 cursor-pointer transition-colors ${filter === f.key ? 'bg-accent text-accent-contrast shadow-sm font-semibold' : 'bg-transparent text-secondary hover:text-text'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="overflow-hidden border border-border" aria-label="Loading projects carousel">
            <div className="proj-track">
              {Array.from({ length: visible }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden border border-border rounded-xl fade-in-content shadow-xs">
            <div
              className="proj-track drag-area"
              style={{ transform: `translateX(-${idx * slideW}%)` }}
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
            >
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="proj-slide border-r border-border last:border-r-0 flex flex-col cursor-pointer bg-surface hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  onClick={() => setActive(p)}
                >
                  <div className="w-full aspect-video bg-surface-soft overflow-hidden relative border-b border-border">
                    <CardThumb media={p.media} />
                    <span
                      className={`absolute top-2.5 left-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 rounded font-semibold shadow-xs z-10 ${
                        p.type === 'work'
                          ? 'bg-accent text-accent-contrast'
                          : 'bg-surface/90 backdrop-blur text-text border border-border'
                      }`}
                    >
                      {p.type === 'work' ? 'Work' : 'Academic'}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="font-mono text-xs uppercase tracking-wide border border-border text-secondary bg-surface-soft px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-2 text-text group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-secondary flex-1 mb-4">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/70">
                      <span className="font-mono text-xs uppercase tracking-widest text-accent border-b border-accent pb-px font-medium group-hover:opacity-80 transition-opacity">
                        View Details →
                      </span>
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View source on GitHub"
                          className="w-8 h-8 rounded flex items-center justify-center border border-border text-secondary hover:bg-surface-soft hover:text-accent hover:border-accent transition-colors no-underline"
                        >
                          <GH size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && filtered.length > visible && (
          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full border-0 cursor-pointer transition-colors ${i === idx ? 'bg-accent' : 'bg-ink/20'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="px-4 sm:px-8 md:px-14 py-16 sm:py-20 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 sm:mb-10">04 — Journey</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-10 sm:mb-14 text-text">Experience &amp; Education</h2>
        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
          {journey.map((e, i) => (
            <div key={i} className="relative pb-10 sm:pb-14 last:pb-6 group">
              <div className={`absolute -left-[25px] sm:-left-10 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 transition-all duration-200 group-hover:scale-125 group-hover:ring-4 group-hover:ring-border ${i === 0 ? 'bg-accent' : 'bg-text'}`} />
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1.5 sm:mb-2">{e.period}</p>
              <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-2">
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight text-text">{e.org}</h3>
                <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-widest px-2 py-0.5 leading-tight rounded ${i === 0 ? 'bg-accent text-accent-contrast font-medium' : 'border border-border text-secondary bg-surface-soft'}`}>{e.badge}</span>
              </div>
              <p className="text-sm sm:text-base text-secondary font-medium mb-2">{e.role}</p>
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-muted mb-4 sm:mb-5">{e.note}</p>
              <div className="inline-flex items-baseline gap-2 bg-surface-soft px-3 py-1.5 rounded-lg border border-border">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-text leading-none">{e.statValue}</span>
                <span className="font-mono text-xs sm:text-sm text-muted">{e.statLabel === 'CGPA' ? '/ 4.00 CGPA' : e.statLabel}</span>
              </div>
            </div>
          ))}
          <div className="relative pt-2">
            <div className="absolute -left-[25px] sm:-left-10 top-2 w-3 h-3 rounded-full border border-border bg-surface -translate-x-1/2" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted">Started Aug 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alias for backwards compatibility
export const JourneySection = Journey;

export function Contact() {
  const { copiedKey, copy } = useClipboard();

  const contactCards = [
    {
      key: 'email',
      label: 'Gmail / Email',
      value: contactInfo.email,
      copyText: contactInfo.email,
      actionHref: `mailto:${contactInfo.email}`,
      actionLabel: 'Open Mail',
      icon: <MailIcon size={16} />,
    },
    {
      key: 'phone',
      label: 'Phone / WhatsApp',
      value: contactInfo.phone,
      copyText: contactInfo.phoneRaw,
      actionHref: `tel:${contactInfo.phoneRaw}`,
      actionLabel: 'Call / Dial',
      icon: <PhoneIcon size={16} />,
    },
    {
      key: 'github',
      label: 'GitHub Profile',
      value: contactInfo.githubUsername,
      copyText: contactInfo.github,
      actionHref: contactInfo.github,
      actionLabel: 'Visit',
      icon: <GH size={16} />,
      isExternal: true,
    },
  ];

  return (
    <>
      <section id="contact" className="px-4 sm:px-8 md:px-14 py-16 sm:py-20 md:py-24 bg-surface-soft/60 border-t border-border transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6 sm:mb-10">05 — Contact &amp; Connect</p>
          <h2 className="font-display leading-tight tracking-tight mb-5 sm:mb-6 text-text" style={{ fontSize: 'clamp(2.25rem,6vw,5rem)' }}>
            Let's Build<br /><span className="text-secondary italic">Something Together</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-secondary max-w-xl mb-8 sm:mb-12">
            Currently interning at Current Tech Industries, and open to full-time software engineering and web development roles from October 5, 2026. Feel free to copy contact details directly or get in touch.
          </p>

          {/* Interactive Contact & Copy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 sm:mb-10">
            {contactCards.map((c) => {
              const isCopied = copiedKey === c.key;
              return (
                <div
                  key={c.key}
                  className="bg-surface border border-border rounded-xl p-5 flex flex-col justify-between hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-2 text-muted">
                      <span className="font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
                        {c.icon} {c.label}
                      </span>
                      {isCopied && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent bg-accent/15 px-2 py-0.5 rounded animate-pulse">
                          Copied!
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-sm text-text font-medium break-all select-all">
                      {c.value}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <button
                      onClick={() => copy(c.copyText, c.key)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider py-2.5 px-3 bg-surface-soft hover:bg-accent hover:text-accent-contrast text-text rounded transition-colors border border-transparent hover:border-accent cursor-pointer min-h-[42px]"
                      title={`Copy ${c.label} to clipboard`}
                    >
                      {isCopied ? (
                        <>
                          <CheckIcon size={13} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon size={13} />
                          <span>Copy Info</span>
                        </>
                      )}
                    </button>
                    <a
                      href={c.actionHref}
                      target={c.isExternal ? '_blank' : undefined}
                      rel={c.isExternal ? 'noreferrer' : undefined}
                      className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider py-2.5 px-3 border border-border text-secondary hover:text-text hover:border-accent rounded transition-colors no-underline bg-surface min-h-[42px]"
                    >
                      {c.actionLabel}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="bg-surface border-t border-border px-4 sm:px-8 md:px-14 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 transition-colors duration-300">
        <p className="font-mono text-xs tracking-widest text-muted">© 2026 Cheong Khai Yun</p>
        <p className="font-mono text-xs tracking-widest text-muted">{contactInfo.location}</p>
      </footer>
    </>
  );
}

// Fallback to window for backward compatibility
if (typeof window !== 'undefined') {
  window.PortfolioSections = {
    ScrollProgressBar,
    BackToTopButton,
    ThemeModal,
    ThemeControls,
    MediaSlide,
    MediaCarousel,
    ProjectModal,
    CardThumb,
    SkillCardSkeleton,
    ProjectCardSkeleton,
    Projects,
    Nav,
    Hero,
    Skills,
    Journey,
    JourneySection,
    Contact,
  };
}

export default {
  ScrollProgressBar,
  BackToTopButton,
  ThemeModal,
  ThemeControls,
  MediaSlide,
  MediaCarousel,
  ProjectModal,
  CardThumb,
  SkillCardSkeleton,
  ProjectCardSkeleton,
  Projects,
  Nav,
  Hero,
  Skills,
  Journey,
  JourneySection,
  Contact,
};
