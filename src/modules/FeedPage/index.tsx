import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';

import { Card } from '@/components/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Toaster } from '@/components/ui/Toaster';
import { useCreateFeedItemMutation, useGetFeedListQuery } from '@/store/api/feed';

import styles from './FeedPage.module.scss';

interface IForm {
  name: string;
  message: string;
}

const DEFAULT_VALUES: IForm = {
  name: '',
  message: '',
};

const FeedPage = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IForm>({ defaultValues: DEFAULT_VALUES });

  const { data: messagesList, refetch } = useGetFeedListQuery();

  const [createFeedItem] = useCreateFeedItemMutation();

  const onSubmit = async (data: IForm) => {
    const { name, message } = data;

    try {
      await createFeedItem({ name: name || 'Аноним', message }).unwrap();
      reset(DEFAULT_VALUES);
      refetch();
      Toaster.success('Ура! Все получилось');
    } catch (error) {
      console.log(error);
      Toaster.error('Увы! Что-то пошло не так');
    }
  };

  return (
    <Card>
      <h1 className={styles.title}>Можешь написать свое сообщение</h1>
      <div className={styles.root}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="name"
            control={control}
            rules={{ required: false }}
            render={({ field: { value, onChange } }) => (
              <Input name="name" placeholder="Вася Пупкин" label="Представься (по желанию)" value={value} onChange={onChange} />
            )}
          />
          <Controller
            name="message"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Заполни поле',
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Textarea
                name="message"
                label="Сообщение"
                placeholder="Паша, твой сайт чертовски крут!"
                value={value}
                onChange={onChange}
                maxLength={250}
                error={error?.message}
              />
            )}
          />

          <Button isDisabled={isSubmitting} type="submit" text="Отправить" />
        </form>
        <div className={styles.itemsWrapper}>
          {messagesList?.map((item) => (
            <div key={item.messageId} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.itemName}>{item.name}</span>
                <span>{dayjs(item.date).format('DD.MM.YYYY HH:mm')}</span>
              </div>
              <span>{item.message}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FeedPage;
