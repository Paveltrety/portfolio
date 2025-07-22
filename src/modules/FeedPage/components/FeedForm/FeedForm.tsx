import { Controller, UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';

import { IFeedForm } from '../..';
import styles from './FeedForm.module.scss';

interface IFeedFormProps {
  form: UseFormReturn<IFeedForm>;
  onSubmit: (data: IFeedForm) => void;
}

export const FeedForm = ({ form, onSubmit }: IFeedFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  return (
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
  );
};
