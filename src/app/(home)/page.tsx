'use client';

import { Hero } from './components';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Page() {
  const { scrollY } = useScroll();

  const innerHeight = typeof window !== 'undefined' && window.innerHeight;

  const boxY = useTransform(
    scrollY,
    [0, innerHeight as number],
    [0, innerHeight as number]
  );

  return (
    <main>
      <div className='h-dvh relative z-[1]'>
        <motion.section
          className='absolute w-full left-0'
          style={{ top: boxY }}
        >
          <Hero />
        </motion.section>
      </div>
      <section className='h-[200dvh] bg-black relative z-10'></section>
    </main>
  );
}
