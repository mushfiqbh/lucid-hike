"use client"

import React, { useEffect, useRef } from 'react';

const FinisherHeader = ({ options }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let particles = [];

    const parseColor = (hex) => {
      let c = hex.substring(1).split('');
      if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      const color = parseInt(c.join(''), 16);
      return {
        r: (color >> 16) & 255,
        g: (color >> 8) & 255,
        b: color & 255,
      };
    };

    const getRandomFromRange = (range) => {
      if (range.min === range.max) return range.min;
      return Math.random() * (range.max - range.min) + range.min;
    };

    const randomDirection = () => (Math.random() > 0.5 ? 1 : -1);

    const getShape = () => {
      const shapes = options.shapes;
      return shapes[Math.floor(Math.random() * shapes.length)];
    };

    class Particle {
      constructor(colorHex, quadrant) {
        this.color = parseColor(colorHex);
        this.shape = getShape();
        this.dir = randomDirection();
        this.size = Math.abs(getRandomFromRange(options.size));
        this.initPosition(quadrant);

        this.vx = getRandomFromRange(options.speed.x) * randomDirection();
        this.vy = getRandomFromRange(options.speed.y) * randomDirection();
      }

      initPosition(quadrant) {
        const halfW = canvas.width / 2;
        const halfH = canvas.height / 2;
        const x = Math.random() * halfW;
        const y = Math.random() * halfH;
        if (quadrant === 0) {
          this.x = x;
          this.y = y;
        } else if (quadrant === 1) {
          this.x = x + halfW;
          this.y = y;
        } else if (quadrant === 2) {
          this.x = x;
          this.y = y + halfH;
        } else {
          this.x = x + halfW;
          this.y = y + halfH;
        }
      }

      animate(ctx) {
        // bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;

        const radius = this.size / 2;

        const centerColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${options.opacity.center})`;
        const edgeColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${options.opacity.edge})`;

        const gradient = ctx.createRadialGradient(this.x, this.y, 0.01, this.x, this.y, radius);
        gradient.addColorStop(0, centerColor);
        gradient.addColorStop(1, edgeColor);
        ctx.fillStyle = gradient;

        ctx.beginPath();
        if (this.shape === 'c') {
          ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
        } else if (this.shape === 's') {
          ctx.rect(this.x - radius, this.y - radius, this.size, this.size);
        } else if (this.shape === 't') {
          const height = Math.tan(30 * (Math.PI / 180)) * radius;
          ctx.moveTo(this.x, this.y - height);
          ctx.lineTo(this.x - radius, this.y + height);
          ctx.lineTo(this.x + radius, this.y + height);
          ctx.closePath();
        }
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = window.innerWidth < 600 && options.count > 5 ? Math.floor(options.count / 2) : options.count;
      for (let i = 0; i < count; i++) {
        const color = options.colors.particles[i % options.colors.particles.length];
        particles.push(new Particle(color, i % 4));
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles();
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.animate(ctx));
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [options]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, width: '100vw', height: '100vh', left: 0, zIndex: -1 }} />;
};

export default FinisherHeader;
