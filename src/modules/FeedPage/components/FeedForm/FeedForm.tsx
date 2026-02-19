import { Controller, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
          <Input name="name" placeholder={t('form.name_placeholder')} label={t('form.name_label')} value={value} onChange={onChange} />
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{
          required: {
            value: true,
            message: t('errors.fill_in_the_field'),
          },
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Textarea
            name="message"
            label={t('form.message_label')}
            placeholder={t('form.message_placeholder')}
            value={value}
            onChange={onChange}
            maxLength={250}
            error={error?.message}
          />
        )}
      />

      <Button isDisabled={isSubmitting} type="submit" text={t('form.send')} />
    </form>
  );
};
