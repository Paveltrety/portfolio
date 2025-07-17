import { useEffect, useRef } from 'react';

import { BREAKPOINTS } from '@/constants/breakpoints';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from './BouncingImage.module.scss';

export const BouncingImage = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS.md;

  useEffect(() => {
    const logo = logoRef.current;

    let x = 100;
    let y = 100;
    let dx = 1.2;
    let dy = 1.2;

    let animFrameId: number;

    const move = () => {
      if (isMobile) {
        return;
      }

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const logoW = logo!.offsetWidth;
      const logoH = logo!.offsetHeight;

      if (!isPaused.current) {
        x += dx;
        y += dy;

        if (x + logoW >= screenW || x <= 0) {
          dx = -dx;
        }
        if (y + logoH >= screenH || y <= 0) {
          dy = -dy;
        }

        logo!.style.left = `${x}px`;
        logo!.style.top = `${y}px`;
      }

      animFrameId = requestAnimationFrame(move);
    };

    move();

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile]);

  const pause = () => {
    isPaused.current = true;
    logoRef.current?.classList.add(styles.pause);
  };

  const resume = () => {
    isPaused.current = false;
    logoRef.current?.classList.remove(styles.pause);
  };

  return (
    <div
      ref={logoRef}
      onMouseDown={pause}
      onMouseUp={resume}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      className={styles.root}
    >
      <span>Эй, жук, отпусти меня!!!</span>
    </div>
  );
};
