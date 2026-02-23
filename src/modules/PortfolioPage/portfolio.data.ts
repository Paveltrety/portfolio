import { TFunction } from 'i18next';

import { Routes } from '@/constants/routes';
import { IPortfolioItem } from '@/types/portfolio';

export const getPortfolioList = (t: TFunction): IPortfolioItem[] => [
  {
    id: 1,
    name: 'cover-letter',
    title: t('portfolio.coverLetter.titleCard'),
    description: t('portfolio.coverLetter.descriptionCard'),
    image: 'cover-letter.jpg',
    href: Routes.portfolioCoverLetter,
  },
];
