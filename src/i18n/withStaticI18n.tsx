import en from '@public/translations/en/common.json';
import ru from '@public/translations/ru/common.json';
import i18next from 'i18next';
import { AppProps } from 'next/app';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { I18nextProvider, useTranslation } from 'react-i18next';

export function withStaticI18n(App: React.FC<AppProps>) {
  const initI18n = (props: AppProps) => {
    const { i18n } = props.pageProps;
    const locale = i18n?.locale || '';

    if (!locale) {
      return <App {...props} />;
    }

    const instance = i18next.createInstance({
      ns: ['common'],
      defaultNS: 'common',
      lng: locale,
      resources: {
        ru: { common: ru },
        en: { common: en },
      },
      react: {
        useSuspense: false,
      },
    });

    instance.init();

    return (
      <I18nextProvider i18n={instance}>
        <App {...props} />
      </I18nextProvider>
    );
  };

  return initI18n;
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type StaticI18LinkProps = PartialBy<LinkProps, 'href'> & {
  className?: string;
};

export const StaticI18nLink = (props: React.PropsWithChildren<StaticI18LinkProps>) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const locale = props.locale || i18n.language || '';
  if (!locale) {
    const href = props.href || router.asPath;
    return <Link {...props} href={href} />;
  }
  const href = props.href ? `/${locale}${props.href}` : router.pathname.replace('[locale]', locale);
  return <Link {...props} href={href} locale={undefined} />;
};
