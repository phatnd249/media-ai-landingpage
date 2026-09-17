import { useState } from 'react';
import Container from '../layout/Container';
import './VideoAnalysisSection.css';

export default function VideoAnalysisSection() {
  const [activeMarker, setActiveMarker] = useState('00:18 - PAN');
  const [isPlaying, setIsPlaying] = useState(true);

  const markers = [
    { time: '00:18 - PAN', icon: '↔', type: 'pan', color: 'yellow', left: '26%' },
    { time: '00:42 - ZOOM', icon: '🔍', type: 'zoom', color: 'blue', left: '42%' },
    { time: '01:15 - HANDHELD', icon: '🔄', type: 'handheld', color: 'blue', left: '62%' },
    { time: '01:47 - ABNORMAL MOTION', icon: '⚠️', type: 'warning', color: 'yellow', left: '78%' },
  ];

  return (
    <section className="video-analysis" id="video-analysis">
      <div className="video-analysis__bg-decor"></div>
      
      <Container>
        <div className="video-analysis__wrapper">
          {/* Section Heading Badge */}
          <div className="video-analysis__title-bar">
            <h2 className="video-analysis__title">
              AI hỗ trợ phân tích kỹ thuật video
              <span className="video-analysis__title-icon">›</span>
            </h2>
          </div>

          {/* Main Glass Dashboard Card */}
          <div className="video-analysis__card">
            {/* Video Player Display */}
            <div className="video-player">
              <div className="video-player__viewport">
                {/* SVG Mockup of Drone Cityscape with HUD Graphics */}
                <div className="video-player__scene">
                  <svg className="video-player__vector-art" viewBox="0 0 1000 360" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0B1B3D" />
                        <stop offset="60%" stopColor="#1E2A5E" />
                        <stop offset="90%" stopColor="#4A3B69" />
                        <stop offset="100%" stopColor="#C47D68" />
                      </linearGradient>
                      <linearGradient id="droneGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#0284C7" />
                      </linearGradient>
                    </defs>

                    {/* Sunset Sky */}
                    <rect width="1000" height="360" fill="url(#skyGrad)" />

                    {/* Distant Skyline */}
                    <path d="M 0 300 L 40 300 L 40 260 L 70 260 L 70 300 L 120 300 L 120 230 L 150 230 L 150 300 L 220 300 L 220 200 L 240 180 L 260 200 L 260 300 L 320 300 L 320 240 L 350 240 L 350 300 L 420 300 L 420 210 L 450 210 L 450 300 L 520 300 L 520 190 L 550 190 L 550 300 L 600 300 L 600 230 L 630 230 L 630 300 L 690 300 L 690 170 L 710 170 L 710 300 L 760 300 L 760 250 L 790 250 L 790 300 L 850 300 L 850 220 L 880 220 L 880 300 L 1000 300 L 1000 360 L 0 360 Z" fill="#091326" opacity="0.85" />
                    {/* Foreground Skyline */}
                    <path d="M 0 320 L 60 320 L 60 270 L 100 270 L 100 320 L 180 320 L 180 240 L 210 240 L 210 320 L 300 320 L 300 250 L 330 250 L 330 320 L 400 320 L 400 280 L 430 280 L 430 320 L 650 320 L 650 250 L 680 250 L 680 320 L 750 320 L 750 270 L 780 270 L 780 320 L 880 320 L 880 260 L 920 260 L 920 320 L 1000 320 L 1000 360 L 0 360 Z" fill="#040A17" />

                    {/* HUD Targeting Graphics */}
                    {/* Left HUD Panel */}
                    <g transform="translate(190, 80)">
                      <rect x="0" y="0" width="100" height="65" fill="#0F172A" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" rx="4" />
                      <circle cx="20" cy="20" r="10" stroke="#38BDF8" strokeWidth="1.5" fill="none" strokeDasharray="15 30" />
                      <line x1="40" y1="18" x2="85" y2="18" stroke="#38BDF8" strokeWidth="2" />
                      <line x1="40" y1="26" x2="70" y2="26" stroke="#38BDF8" strokeWidth="1.5" />
                      <line x1="15" y1="45" x2="85" y2="45" stroke="#F59E0B" strokeWidth="2" />
                    </g>

                    {/* Center Drone */}
                    <g transform="translate(430, 95)">
                      {/* Drone Body */}
                      <ellipse cx="70" cy="40" rx="35" ry="12" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
                      {/* Drone Arms */}
                      <line x1="20" y1="25" x2="120" y2="55" stroke="#334155" strokeWidth="4" />
                      <line x1="20" y1="55" x2="120" y2="25" stroke="#334155" strokeWidth="4" />
                      {/* Rotors */}
                      <ellipse cx="20" cy="25" rx="22" ry="3" fill="#38BDF8" opacity="0.8" />
                      <ellipse cx="120" cy="55" rx="22" ry="3" fill="#38BDF8" opacity="0.8" />
                      <ellipse cx="20" cy="55" rx="22" ry="3" fill="#38BDF8" opacity="0.8" />
                      <ellipse cx="120" cy="25" rx="22" ry="3" fill="#38BDF8" opacity="0.8" />
                      {/* Camera gimbal */}
                      <circle cx="70" cy="52" r="7" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
                    </g>

                    {/* Right HUD Panel */}
                    <g transform="translate(560, 80)">
                      <rect x="0" y="0" width="80" height="55" fill="#0F172A" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" rx="4" />
                      <rect x="10" y="10" width="60" height="6" fill="#38BDF8" opacity="0.7" />
                      <rect x="10" y="22" width="45" height="4" fill="#38BDF8" opacity="0.5" />
                      <rect x="10" y="32" width="55" height="4" fill="#38BDF8" opacity="0.5" />
                    </g>
                  </svg>
                </div>

                {/* Markers On Top of Video */}
                <div className="video-player__markers">
                  {markers.map((m) => (
                    <button
                      key={m.time}
                      type="button"
                      className={`video-marker video-marker--${m.color} ${activeMarker === m.time ? 'video-marker--active' : ''}`}
                      style={{ left: m.left }}
                      onClick={() => setActiveMarker(m.time)}
                    >
                      <span className="video-marker__icon">{m.icon}</span>
                      <span className="video-marker__text">{m.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress & Controls Bar */}
              <div className="video-player__controls">
                <div className="video-player__timeline">
                  <div className="video-player__progress-track">
                    <div className="video-player__progress-fill" style={{ width: '45%' }}></div>
                    {/* Glowing marker indicator points on timeline */}
                    <span className="timeline-pin timeline-pin--active" style={{ left: '26%' }}></span>
                    <span className="timeline-pin" style={{ left: '42%' }}></span>
                    <span className="timeline-pin" style={{ left: '62%' }}></span>
                    <span className="timeline-pin" style={{ left: '78%' }}></span>
                  </div>
                </div>

                <div className="video-player__buttons">
                  <div className="video-player__left-controls">
                    <button
                      type="button"
                      className="player-btn"
                      onClick={() => setIsPlaying(!isPlaying)}
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? '⏸' : '▶'}
                    </button>
                    <button type="button" className="player-btn" title="Rewind">⏮</button>
                    <button type="button" className="player-btn" title="Fast Forward">⏭</button>
                    <button type="button" className="player-btn" title="Volume">🔊</button>
                  </div>

                  <div className="video-player__right-controls">
                    <button type="button" className="player-btn" title="Settings">⚙</button>
                    <button type="button" className="player-btn" title="Fullscreen">⛶</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Section */}
            <div className="video-telemetry">
              {/* Panel 1: Motion Tracking Waves */}
              <div className="telemetry-panel telemetry-panel--waves">
                <div className="telemetry-panel__header">
                  <span className="telemetry-panel__title">MOTION TRACKING WAVES</span>
                  <div className="telemetry-panel__legend">
                    <span className="legend-item"><span className="legend-dot legend-dot--yellow"></span>Horizontal</span>
                    <span className="legend-item"><span className="legend-dot legend-dot--blue"></span>Vertical</span>
                  </div>
                </div>

                <div className="waves-chart">
                  <svg className="waves-chart__svg" viewBox="0 0 400 130" preserveAspectRatio="none">
                    {/* Y-axis labels */}
                    <text x="5" y="20" fill="#64748B" fontSize="10">2</text>
                    <text x="5" y="55" fill="#64748B" fontSize="10">1</text>
                    <text x="5" y="80" fill="#64748B" fontSize="10">0</text>
                    <text x="5" y="105" fill="#64748B" fontSize="10">-1</text>
                    <text x="5" y="125" fill="#64748B" fontSize="10">-2</text>

                    {/* Vertical Highlight Bands */}
                    <rect x="120" y="10" width="22" height="110" fill="#EAB308" fillOpacity="0.22" rx="3" />
                    <rect x="175" y="10" width="22" height="110" fill="#EAB308" fillOpacity="0.22" rx="3" />
                    <rect x="235" y="10" width="22" height="110" fill="#38BDF8" fillOpacity="0.25" rx="3" />

                    {/* Grid lines */}
                    <line x1="25" y1="80" x2="395" y2="80" stroke="#1E293B" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Yellow Curve: Horizontal */}
                    <path
                      d="M 25 80 Q 55 45, 80 80 T 135 25 T 190 95 T 245 40 T 300 110 T 355 60 T 395 80"
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="2.5"
                    />

                    {/* Blue Curve: Vertical */}
                    <path
                      d="M 25 80 Q 55 105, 80 80 T 135 110 T 190 60 T 245 25 T 300 70 T 355 95 T 395 80"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                    />

                    <text x="200" y="125" fill="#64748B" fontSize="9" textAnchor="middle">Time</text>
                  </svg>
                </div>
              </div>

              {/* Panel 2: Frame Stability Scores */}
              <div className="telemetry-panel telemetry-panel--stability">
                <div className="telemetry-panel__header">
                  <span className="telemetry-panel__title">FRAME STABILITY SCORES</span>
                  <span className="telemetry-badge">Real-time Analysis</span>
                </div>

                <div className="stability-content">
                  {/* Line Graph */}
                  <div className="stability-chart">
                    <svg className="stability-chart__svg" viewBox="0 0 240 100" preserveAspectRatio="none">
                      {/* Levels */}
                      <text x="0" y="20" fill="#64748B" fontSize="9">100</text>
                      <text x="0" y="55" fill="#64748B" fontSize="9">80</text>
                      <text x="0" y="90" fill="#64748B" fontSize="9">70</text>

                      <line x1="25" y1="18" x2="235" y2="18" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="25" y1="52" x2="235" y2="52" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="25" y1="88" x2="235" y2="88" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Blue trend line */}
                      <path d="M 30 75 Q 85 45, 130 35 T 230 45" fill="none" stroke="#38BDF8" strokeWidth="2" />

                      {/* Yellow stability line */}
                      <path d="M 30 70 L 75 42 L 125 32 L 175 48 L 225 38" fill="none" stroke="#FACC15" strokeWidth="2.5" />

                      {/* Data Points with Scores */}
                      <circle cx="75" cy="42" r="4" fill="#FACC15" stroke="#0B1530" strokeWidth="2" />
                      <text x="75" y="32" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">92%</text>

                      <circle cx="125" cy="32" r="4" fill="#FACC15" stroke="#0B1530" strokeWidth="2" />
                      <text x="125" y="22" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">95%</text>

                      <circle cx="175" cy="48" r="4" fill="#FACC15" stroke="#0B1530" strokeWidth="2" />
                      <text x="175" y="62" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">88%</text>

                      <circle cx="225" cy="38" r="4" fill="#FACC15" stroke="#0B1530" strokeWidth="2" />
                      <text x="225" y="28" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">90%</text>
                    </svg>
                  </div>

                  {/* Circular Gauge */}
                  <div className="gauge-card">
                    <div className="gauge-circle">
                      <svg className="gauge-svg" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1E293B" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="8"
                          strokeDasharray="251.2"
                          strokeDashoffset="22.6"
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="gauge-value">
                        <span className="gauge-number">91%</span>
                        <span className="gauge-label">- Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specs footer tags */}
                <div className="telemetry-specs">
                  <div className="spec-tag">
                    <div className="spec-tag__icon">📷</div>
                    <div className="spec-tag__content">
                      <span className="spec-tag__label">CAMERA MODEL DETECTED:</span>
                      <strong className="spec-tag__value">DRONE-X7</strong>
                    </div>
                  </div>

                  <div className="spec-tag">
                    <div className="spec-tag__icon">🖥️</div>
                    <div className="spec-tag__content">
                      <span className="spec-tag__label">RESOLUTION:</span>
                      <strong className="spec-tag__value">4K (3840x2160)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
