import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BREAKPOINTS } from '@/constants/breakpoints';
import { useWindowSize } from '@/hooks/useWindowSize';
import { sendYandexMetrikEvent } from '@/utils/sendYandexMetrikEvent';

import styles from './BouncingImage.module.scss';

export const BouncingImage = () => {
  const { t } = useTranslation();
  const logoRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  const { width, height } = useWindowSize();
  const isMobile = width < BREAKPOINTS.md;

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo || isMobile) return;
    logo.style.transform = 'none';
    const rect = logo.getBoundingClientRect();

    const logoW = logo.offsetWidth;
    const logoH = logo.offsetHeight;

    const startX = rect.left;
    const startY = rect.top;

    const maxX = window.innerWidth - logoW - startX;
    const maxY = window.innerHeight - logoH - startY;

    let x = 0;
    let y = 0;

    let dx = 1.2;
    let dy = 1.2;

    let animFrameId: number;

    const move = () => {
      if (!isPaused.current) {
        x += dx;
        y += dy;

        if (x >= maxX || x <= 0) {
          dx = -dx;
        }

        if (y >= maxY || y <= 0) {
          dy = -dy;
        }

        logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(move);
    };

    move();

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [isMobile, width, height]);

  const pause = () => {
    sendYandexMetrikEvent('click_desktop_photo');
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
      <span>{t('bouncing_image.title')}</span>
    </div>
  );
};
