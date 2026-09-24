// AEGIS INTERNATIONAL TRADING FZ LLC - JAVASCRIPT & LIVE TRADING ANIMATION

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 3. Quote Form Submission Handling
  const quoteForm = document.getElementById('quoteForm');
  const formMessage = document.getElementById('formMessage');

  if (quoteForm && formMessage) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formMessage.className = 'form-message success';
      formMessage.innerText = '✓ Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.';
      
      setTimeout(() => {
        quoteForm.reset();
      }, 1000);

      setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.innerText = '';
      }, 6000);
    });
  }

  // 4. LIVE TRADING & MATERIAL SUPPLY CHAIN ANIMATION ENGINE
  initTradingAnimation();
});

function initTradingAnimation() {
  const canvas = document.getElementById('tradingCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let animationFrameId;
  let isVisible = true;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  function resize() {
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resize);
  resize();

  // Mouse Parallax on Hero
  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.targetX = nx * 40;
      mouse.targetY = ny * 30;
    });
    heroSection.addEventListener('mouseleave', () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    });
  }

  // Optimize performance: pause when hero is off-screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId) {
        animate(performance.now());
      }
    });
  }, { threshold: 0.05 });
  observer.observe(heroSection || canvas);

  // Global Trading Hubs (normalized 0..1 coordinates)
  const hubs = [
    { name: 'UAE (AEGIS HUB)', x: 0.65, y: 0.48, isCenter: true, pulse: 0, color: '#0085CA' },
    { name: 'CHINA SOURCING', x: 0.88, y: 0.28, isCenter: false, pulse: 1.2, color: '#F59E0B' },
    { name: 'INDIA SOURCING', x: 0.74, y: 0.72, isCenter: false, pulse: 2.4, color: '#10B981' },
    { name: 'EUROPE TRADING', x: 0.22, y: 0.32, isCenter: false, pulse: 0.8, color: '#38BDF8' },
    { name: 'SINGAPORE PORT', x: 0.92, y: 0.78, isCenter: false, pulse: 1.8, color: '#0085CA' },
    { name: 'GLOBAL SUPPLY', x: 0.12, y: 0.65, isCenter: false, pulse: 3.1, color: '#F59E0B' }
  ];

  // Cargo Transit Packets along Trade Routes
  const packets = [];
  const uaeHub = hubs[0];

  for (let i = 1; i < hubs.length; i++) {
    const origin = hubs[i];
    for (let p = 0; p < 3; p++) {
      packets.push({
        origin: origin,
        target: uaeHub,
        progress: (p / 3) + Math.random() * 0.1,
        speed: 0.0018 + Math.random() * 0.0012,
        size: 3.5 + Math.random() * 2,
        cargoType: ['STEEL', 'PIPES', 'VALVES', 'ELECTRICAL', 'FASTENERS', 'TOOLS'][Math.floor(Math.random() * 6)]
      });
    }
  }

  // Floating 3D Geometric Trading Material Models
  const materials = [
    { type: 'container', x: 0.78, y: 0.22, z: 1.2, rx: 0.3, ry: 0.5, rz: 0.1, spin: 0.006, size: 48, label: 'CARGO CONTAINER' },
    { type: 'ibeam', x: 0.82, y: 0.62, z: 0.9, rx: 0.4, ry: 0.2, rz: 0.6, spin: 0.008, size: 44, label: 'STRUCTURAL STEEL' },
    { type: 'gear', x: 0.52, y: 0.20, z: 1.1, rx: 0.5, ry: 0.1, rz: 0.3, spin: 0.012, size: 38, label: 'MECHANICAL GEAR' },
    { type: 'pipe', x: 0.58, y: 0.82, z: 0.8, rx: 0.2, ry: 0.6, rz: 0.4, spin: 0.007, size: 36, label: 'PIPE FITTINGS' },
    { type: 'cargo_box', x: 0.90, y: 0.45, z: 1.0, rx: 0.1, ry: 0.3, rz: 0.2, spin: 0.005, size: 34, label: 'SAFETY & PPE' }
  ];

  // Ambient Floating Energy Particles
  const ambientParticles = [];
  for (let i = 0; i < 35; i++) {
    ambientParticles.push({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      size: 1.5 + Math.random() * 2,
      alpha: 0.2 + Math.random() * 0.5
    });
  }

  function draw3DBox(cx, cy, size, rx, ry, rz, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = color || 'rgba(0, 133, 202, 0.7)';
    ctx.lineWidth = 1.5;

    const s = size / 2;
    const w = s * 1.5;
    const h = s * 0.8;
    const d = s * 0.9;

    const vertices = [
      [-w, -h, -d], [w, -h, -d], [w, h, -d], [-w, h, -d],
      [-w, -h, d],  [w, -h, d],  [w, h, d],  [-w, h, d]
    ];

    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const cosZ = Math.cos(rz), sinZ = Math.sin(rz);

    const projected = vertices.map(v => {
      let x = v[0], y = v[1], z = v[2];
      let x1 = x * cosY + z * sinY;
      let z1 = -x * sinY + z * cosY;
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;
      let x3 = x1 * cosZ - y2 * sinZ;
      let y3 = x1 * sinZ + y2 * cosZ;
      return [x3, y3];
    });

    const edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7]
    ];

    ctx.beginPath();
    edges.forEach(([i, j]) => {
      ctx.moveTo(projected[i][0], projected[i][1]);
      ctx.lineTo(projected[j][0], projected[j][1]);
    });
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0, 133, 202, 0.25)';
    ctx.lineWidth = 1;
    for (let f = -0.5; f <= 0.5; f += 0.3) {
      let pA = [projected[0][0] + (projected[1][0] - projected[0][0]) * (f + 0.5), projected[0][1] + (projected[1][1] - projected[0][1]) * (f + 0.5)];
      let pB = [projected[3][0] + (projected[2][0] - projected[3][0]) * (f + 0.5), projected[3][1] + (projected[2][1] - projected[3][1]) * (f + 0.5)];
      ctx.beginPath();
      ctx.moveTo(pA[0], pA[1]);
      ctx.lineTo(pB[0], pB[1]);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawIBeam(cx, cy, size, rx, ry, rz) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.75)';
    ctx.lineWidth = 1.6;

    const h = size * 0.8;
    const w = size * 0.6;

    ctx.beginPath();
    ctx.moveTo(-w/2, -h/2); ctx.lineTo(w/2, -h/2);
    ctx.moveTo(0, -h/2); ctx.lineTo(0, h/2);
    ctx.moveTo(-w/2, h/2); ctx.lineTo(w/2, h/2);
    ctx.stroke();

    ctx.restore();
  }

  function drawGear(cx, cy, size, angle) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.strokeStyle = 'rgba(0, 133, 202, 0.8)';
    ctx.fillStyle = 'rgba(0, 75, 135, 0.15)';
    ctx.lineWidth = 1.5;

    const teeth = 10;
    const outerR = size * 0.6;
    const innerR = size * 0.45;
    const holeR = size * 0.18;

    ctx.beginPath();
    for (let i = 0; i < teeth; i++) {
      const a1 = (i / teeth) * Math.PI * 2;
      const a2 = ((i + 0.3) / teeth) * Math.PI * 2;
      const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
      const a4 = ((i + 0.8) / teeth) * Math.PI * 2;

      ctx.lineTo(Math.cos(a1) * innerR, Math.sin(a1) * innerR);
      ctx.lineTo(Math.cos(a2) * outerR, Math.sin(a2) * outerR);
      ctx.lineTo(Math.cos(a3) * outerR, Math.sin(a3) * outerR);
      ctx.lineTo(Math.cos(a4) * innerR, Math.sin(a4) * innerR);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, holeR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  function animate(timestamp) {
    if (!isVisible) {
      animationFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    const uaeX = uaeHub.x * width + mouse.x * 0.6;
    const uaeY = uaeHub.y * height + mouse.y * 0.6;

    // 1. Draw Ambient Particles
    ambientParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;

      const px = p.x * width + mouse.x * 0.3;
      const py = p.y * height + mouse.y * 0.3;

      ctx.fillStyle = `rgba(0, 133, 202, ${p.alpha * 0.6})`;
      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Draw Trade Routes & Transit Packets
    hubs.forEach((hub, idx) => {
      const hx = hub.x * width + mouse.x * (hub.isCenter ? 0.6 : 0.8);
      const hy = hub.y * height + mouse.y * (hub.isCenter ? 0.6 : 0.8);

      if (!hub.isCenter) {
        const cpX = (hx + uaeX) / 2 + (hy - uaeY) * 0.25;
        const cpY = (hy + uaeY) / 2 + (uaeX - hx) * 0.15;

        ctx.save();
        ctx.strokeStyle = 'rgba(0, 133, 202, 0.22)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(hx, hy);
        ctx.quadraticCurveTo(cpX, cpY, uaeX, uaeY);
        ctx.stroke();
        ctx.restore();
      }

      hub.pulse += 0.025;
      const ringSize = (hub.isCenter ? 32 : 20) + (Math.sin(hub.pulse) + 1) * 8;
      const ringAlpha = Math.max(0, 0.5 - (Math.sin(hub.pulse) + 1) * 0.2);

      ctx.save();
      ctx.strokeStyle = hub.color;
      ctx.globalAlpha = ringAlpha;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hx, hy, ringSize, 0, Math.PI * 2);
      ctx.stroke();

      if (hub.isCenter) {
        ctx.beginPath();
        ctx.arc(hx, hy, ringSize * 1.7, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      ctx.fillStyle = hub.color;
      ctx.beginPath();
      ctx.arc(hx, hy, hub.isCenter ? 6 : 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '600 10px Inter, sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText(hub.name, hx + 10, hy + 3);
    });

    // Animate Packets along Arcs
    packets.forEach(pkt => {
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) pkt.progress = 0;

      const ox = pkt.origin.x * width + mouse.x * 0.8;
      const oy = pkt.origin.y * height + mouse.y * 0.8;
      const cpX = (ox + uaeX) / 2 + (oy - uaeY) * 0.25;
      const cpY = (oy + uaeY) / 2 + (uaeX - ox) * 0.15;

      const t = pkt.progress;
      const curX = (1 - t) * (1 - t) * ox + 2 * (1 - t) * t * cpX + t * t * uaeX;
      const curY = (1 - t) * (1 - t) * oy + 2 * (1 - t) * t * cpY + t * t * uaeY;

      ctx.save();
      ctx.fillStyle = '#0085CA';
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(curX, curY, pkt.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // 3. Animate 3D Floating Trading Materials
    materials.forEach(mat => {
      mat.rx += mat.spin * 0.7;
      mat.ry += mat.spin * 1.1;
      mat.rz += mat.spin * 0.5;

      const mx = mat.x * width + mouse.x * mat.z;
      const my = mat.y * height + mouse.y * mat.z;

      if (mat.type === 'container' || mat.type === 'cargo_box') {
        draw3DBox(mx, my, mat.size, mat.rx, mat.ry, mat.rz, mat.type === 'container' ? '#0085CA' : '#F59E0B');
      } else if (mat.type === 'ibeam') {
        drawIBeam(mx, my, mat.size, mat.rx, mat.ry, mat.rz);
      } else if (mat.type === 'gear') {
        drawGear(mx, my, mat.size, mat.rz);
      } else if (mat.type === 'pipe') {
        draw3DBox(mx, my, mat.size * 0.8, mat.rx, mat.ry, mat.rz, '#10B981');
      }

      ctx.font = '700 9px Inter, monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.fillText(`• ${mat.label}`, mx - 20, my + mat.size * 0.7);
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animationFrameId = requestAnimationFrame(animate);
}
