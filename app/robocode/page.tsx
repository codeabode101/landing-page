'use client';

import { useState } from 'react';

const FEATURES = [
  {
    icon: '🎮',
    title: 'Story Mode',
    desc: 'Embark on quests that teach you Java concepts from the ground up. Each level builds on the last — just like a real RPG.',
  },
  {
    icon: '🧠',
    title: 'Practice Mode',
    desc: 'Grind through coding problems, earn XP, and unlock rewards. The more you code, the stronger you get.',
  },
  {
    icon: '⚔️',
    title: 'Code Battles',
    desc: 'Write logic that controls your fighter. Simulate battles against other players — your code determines the outcome.',
  },
  {
    icon: '🏠',
    title: 'Customization',
    desc: 'Upgrade your base, customize your character, and show off your grind. Style is part of the game.',
  },
];

export default function RobocodePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="robocode-page">
      {/* ===== HERO ===== */}
      <section className="r-hero">
        <div className="r-hero-overlay" />
        <div className="r-hero-content">
          <div className="r-badge">COMING SOON</div>
          <h1 className="r-hero-title">
            CODE. <span className="r-glow">COMPETE.</span> DOMINATE.
          </h1>
          <p className="r-hero-sub">
            Robocode is the gamified platform where <strong>your code becomes your strategy</strong>.
            Learn AP Computer Science A &amp; Harvard CS50 concepts by battling, grinding, and leveling up.
          </p>
          <div className="r-hero-ctas">
            <a href="#signup-form" className="r-btn r-btn-primary">
              Secure Early Access
            </a>
            <a href="#features" className="r-btn r-btn-ghost">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ===== DESCRIPTION ===== */}
      <section className="r-desc">
        <div className="r-desc-inner">
          <h2>Learn Java. Fight Battles. Win.</h2>
          <p>
            Robocode turns APCSA and CS50 prep into an actual game. You&apos;ll write real Java code to solve
            problems, earn rewards, and control your fighter in live code battles. It&apos;s not a tutorial —
            it&apos;s a battleground.
          </p>
          <div className="r-stats">
            <div className="r-stat">
              <span className="r-stat-num">AP CSA</span>
              <span className="r-stat-label">Curriculum Aligned</span>
            </div>
            <div className="r-stat">
              <span className="r-stat-num">CS50</span>
              <span className="r-stat-label">Harvard Track</span>
            </div>
            <div className="r-stat">
              <span className="r-stat-num">Java</span>
              <span className="r-stat-label">Real Language</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="r-features">
        <h2 className="r-section-title">Choose Your Path</h2>
        <div className="r-features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="r-feature-card">
              <div className="r-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SIGNUP / INCENTIVE ===== */}
      <section id="signup-form" className="r-form-section">
        <div className="r-form-card">
          <div className="r-form-badge">LIMITED — EARLY ACCESS</div>
          <h2>Get Free Premium at Launch</h2>
          <p className="r-form-sub">
            Sign up now and you&apos;ll receive a <strong>limited-time premium plan for free</strong> when
            Robocode launches. The reward will be sent straight to your inbox. Spots are limited.
          </p>

          {submitted ? (
            <div className="r-form-success">
              <div className="r-success-icon">✓</div>
              <h3>You&apos;re In!</h3>
              <p>We&apos;ll send your free premium code to your email when Robocode launches. See you on the battlefield.</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = { name: formData.get('name') as string, email: formData.get('email') as string, _subject: 'New Robocode Early Access Signup' };
                try {
                  await fetch('https://formsubmit.co/ajax/codeabode101@gmail.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  setSubmitted(true);
                } catch {
                  alert('Something went wrong. Please try again.');
                }
              }}
              className="r-form"
            >
              <div className="r-field">
                <label htmlFor="r-name">Name <small>(optional)</small></label>
                <input type="text" id="r-name" name="name" placeholder="Your name" />
              </div>

              <div className="r-field">
                <label htmlFor="r-email">Email <span className="r-required">*</span></label>
                <input type="email" id="r-email" name="email" required placeholder="you@example.com" />
              </div>

              <button type="submit" className="r-btn r-btn-primary r-btn-block">
                Join the First Wave
              </button>

              <p className="r-form-footnote">
                No spam. Just early access and a free premium plan at launch.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="r-final-cta">
        <div className="r-final-inner">
          <h2>Ready to Dominate?</h2>
          <p>Robocode is coming. Secure your free premium plan before the gates open.</p>
          <a href="#signup-form" className="r-btn r-btn-primary r-btn-lg">
            Secure Your Early Access
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="r-footer">
        <p>&copy; CodeAbode — Robocode. Coming soon.</p>
      </footer>
    </main>
  );
}
