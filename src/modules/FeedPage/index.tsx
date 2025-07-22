import { useForm } from 'react-hook-form';

import { Card } from '@/components/Card/Card';
import { Toaster } from '@/components/ui/Toaster';
import { useCreateFeedItemMutation, useGetFeedListQuery } from '@/store/api/feed';

import styles from './FeedPage.module.scss';
import { FeedList } from './components/FeedList/FeedList';
import { Loader } from '@/components/ui/Loader/Loader';
import { FeedForm } from './components/FeedForm/FeedForm';

export interface IFeedForm {
  name: string;
  message: string;
}

const DEFAULT_VALUES: IFeedForm = {
  name: '',
  message: '',
};

const FeedPage = () => {
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

      Toaster.success('Ура! Все получилось');
    } catch (error) {
      Toaster.error('Увы! Что-то пошло не так');
    }
  };

  return (
    <Card>
      <h1 className={styles.title}>Можешь написать свое сообщение</h1>
      <div className={styles.root}>
        <FeedForm form={form} onSubmit={onSubmit} />
        {isLoading ? <Loader /> : <FeedList items={messagesList} />}
      </div>
    </Card>
  );
};

export default FeedPage;
