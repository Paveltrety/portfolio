import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Card } from '@/components/Card/Card';
import { Loader } from '@/components/ui/Loader/Loader';
import { Toaster } from '@/components/ui/Toaster';
import { useCreateFeedItemMutation, useGetFeedListQuery } from '@/store/api/feed';

import { FeedForm } from './components/FeedForm/FeedForm';
import { FeedList } from './components/FeedList/FeedList';
import styles from './FeedPage.module.scss';

export interface IFeedForm {
  name: string;
  message: string;
}

const DEFAULT_VALUES: IFeedForm = {
  name: '',
  message: '',
};

const FeedPage = () => {
  const { t } = useTranslation();

  const form = useForm<IFeedForm>({ defaultValues: DEFAULT_VALUES });
  const { reset } = form;

  const { data: messagesList, refetch, isLoading } = useGetFeedListQuery();

  const [createFeedItem] = useCreateFeedItemMutation();

  const onSubmit = async (data: IFeedForm) => {
    const { name, message } = data;

    try {
      await createFeedItem({ name: name || 'Аноним', message }).unwrap();
      reset(DEFAULT_VALUES);
      refetch();

      Toaster.success(t('toasts.success'));
    } catch (e) {
      console.log(e);
      Toaster.error(t('toasts.error'));
    }
  };

  return (
    <Card>
      <h1 className={styles.title}>{t('feed.title')}</h1>
      <div className={styles.root}>
        <FeedForm form={form} onSubmit={onSubmit} />
        {isLoading ? <Loader /> : <FeedList items={messagesList} />}
      </div>
    </Card>
  );
};

export default FeedPage;
