import React, { useRef, useEffect, useCallback, useState } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { Bone, Trees, History, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import './MagicFeaturesBand.css';

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const GLOW_COLOR = '230, 200, 117'; // Gold
const MOBILE_BREAKPOINT = 768;

const featureData = [
  { icon: <Bone size={18} color="#e6c875" strokeWidth={1.5} />, title: 'ESPECIES INCREÍBLES', desc: 'Conoce los dinosaurios más fascinantes que jamás existieron.' },
  { icon: <Trees size={18} color="#e6c875" strokeWidth={1.5} />, title: 'HÁBITATS REALISTAS', desc: 'Descubre los ecosistemas donde vivieron y cómo era su entorno.' },
  { icon: <History size={18} color="#e6c875" strokeWidth={1.5} />, title: 'HISTORIA EVOLUTIVA', desc: 'Desde su origen hasta su extinción. La historia completa.' },
  { icon: <Map size={18} color="#e6c875" strokeWidth={1.5} />, title: 'FÓSILES Y DESCUBRIMIENTOS', desc: 'Los últimos hallazgos y cómo se reconstruye el pasado.' },
];

const createParticleElement = (x: number, y: number, color = GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `position: absolute; width: 3px; height: 3px; border-radius: 50%; background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6); pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;`;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({ proximity: radius * 0.5, fadeDistance: radius * 0.75 });

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;
  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard = ({ children, className = '', disableAnimations = false }: { children: ReactNode, className?: string, disableAnimations?: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLElement[]>([]);
  const timeoutsRef = useRef<number[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<any>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: DEFAULT_PARTICLE_COUNT }, () =>
      createParticleElement(Math.random() * width, Math.random() * height)
    );
    particlesInitialized.current = true;
  }, []);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)',
        onComplete: () => particle.parentNode?.removeChild(particle)
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = window.setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, { x: (Math.random() - 0.5) * 60, y: (Math.random() - 0.5) * 60, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, index * 80);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      gsap.to(element, { rotateX: 3, rotateY: 3, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      magnetismAnimationRef.current = gsap.to(element, { x: (x - centerX) * 0.05, y: (y - centerY) * 0.05, duration: 0.3, ease: 'power2.out' });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations]);

  return (
    <div ref={cardRef} className={`${className} particle-container`} style={{ position: 'relative' }}>
      {children}
    </div>
  );
};

const GlobalSpotlight = ({ gridRef, disableAnimations }: { gridRef: React.RefObject<HTMLDivElement | null>, disableAnimations: boolean }) => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `position: fixed; width: 600px; height: 600px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(${GLOW_COLOR}, 0.15) 0%, rgba(${GLOW_COLOR}, 0.05) 20%, transparent 60%); z-index: 200; opacity: 0; transform: translate(-50%, -50%); mix-blend-mode: screen;`;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current;
      const rect = section.getBoundingClientRect();
      const mouseInside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      const cards = gridRef.current.querySelectorAll('.magic-feature-card') as NodeListOf<HTMLElement>;

      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
        cards.forEach(card => card.style.setProperty('--glow-intensity', '0'));
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(DEFAULT_SPOTLIGHT_RADIUS);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) glowIntensity = 1;
        else if (effectiveDistance <= fadeDistance) glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        updateCardGlowProperties(card, e.clientX, e.clientY, glowIntensity, DEFAULT_SPOTLIGHT_RADIUS);
      });

      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1 });
      const targetOpacity = minDistance <= proximity ? 0.8 : minDistance <= fadeDistance ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: targetOpacity, duration: targetOpacity > 0 ? 0.2 : 0.5 });
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll('.magic-feature-card').forEach((card: any) => card.style.setProperty('--glow-intensity', '0'));
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (spotlightRef.current && spotlightRef.current.parentNode) {
        spotlightRef.current.parentNode.removeChild(spotlightRef.current);
      }
    };
  }, [gridRef, disableAnimations]);

  return null;
};

export default function MagicFeaturesBand() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <GlobalSpotlight gridRef={gridRef} disableAnimations={isMobile} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
        ref={gridRef} className="magic-features-grid" style={{ zIndex: 10, margin: isMobile ? '0 20px 10px 20px' : '0 60px 10px 60px' }}>
        {featureData.map((item, index) => (
          <ParticleCard key={index} className="magic-feature-card magic-feature-card--border-glow" disableAnimations={isMobile}>
            <div style={{ marginBottom: 4, display: 'flex', filter: 'drop-shadow(0 0 8px rgba(230,200,117,0.4))' }}>{item.icon}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#fff', marginBottom: 2, position: 'relative', zIndex: 2 }}>{item.title}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)', lineHeight: 1.2, position: 'relative', zIndex: 2 }}>{item.desc}</div>
          </ParticleCard>
        ))}
      </motion.div>
    </>
  );
}
