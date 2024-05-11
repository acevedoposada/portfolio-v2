'use client';

import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import scrollAnimation from '@/components/animations/scroll-animation.json';
import { AuroraBackground, HeroHighlight, Highlight } from '@/components';

import styles from './hero.module.scss';
import { cn } from '@/utils/cn';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <AuroraBackground className='bg-transparent z-30 pointer-events-none opacity-40' />
      <HeroHighlight containerClassName='h-dvh absolute top-0 left-0'>
        <h1 className={styles.hero__title}>
          <span
            className={cn(
              'text-5xl md:text-6xl lg:text-[6rem]',
              styles.hero__title__section
            )}
          >
            <motion.span
              className='inline-block'
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
            >
              I&apos;m
            </motion.span>{' '}
            <motion.span
              className={cn('inline-block', styles.hero__title__highlight)}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              David
            </motion.span>
          </span>
          <span className={cn('lg:-mb-6', styles.hero__title__section)}>
            <Highlight>
              <motion.span
                className='inline-block'
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Creative
              </motion.span>{' '}
              <motion.span
                className='inline-block'
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Frontend
              </motion.span>
            </Highlight>
          </span>
          <span className={styles.hero__title__section}>
            <motion.span
              className='inline-block'
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Developer.
            </motion.span>
          </span>
        </h1>
        <motion.p
          className={styles.hero__description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          I develop accessible, responsive, interactive, and animated websites
          and applications with a strong focus on performance.
        </motion.p>
      </HeroHighlight>
      <motion.div
        className={styles.hero__scroll}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: scrollAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
        />
        <motion.p
          className='whitespace-nowrap font-light'
          initial={{ opacity: 0, y: -25, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Scroll down
        </motion.p>
      </motion.div>
    </div>
  );
}
