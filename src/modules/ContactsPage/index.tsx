import { Controller, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Toaster } from '@/components/ui/Toaster';

import styles from './ContactsPage.module.scss';

interface IForm {
  name: string;
  message: string;
}

const DEFAULT_VALUES: IForm = {
  name: '',
  message: '',
};

const ContactsPage = () => {
  const { t } = useTranslation();

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IForm>({ defaultValues: DEFAULT_VALUES });

  const onSubmit = async (data: IForm) => {
    const { name, message } = data;
    const queryParams = new URLSearchParams({ p1: name, p2: message, p3: String(window.innerWidth), p4: String(window.innerHeight) });
    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbz3xSEDTm6ZBj0bFVs25ju2yjegBjbd_FJIafIdW4erYwiHxLxEnVk7p_f7gyKIGS9frw/exec?${queryParams}`,
        {
          method: 'POST',
        },
      );
      reset(DEFAULT_VALUES);
      Toaster.success(t('toasts.success'));
    } catch (error) {
      console.log(error);
      Toaster.error(t('toasts.error'));
    }
  };

  return (
    <>
      <p className={styles.title}>
        <Trans
          i18nKey={t('contacts.title')}
          t={t}
          components={{
            b: <b />,
          }}
        />
      </p>
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
    </>
  );
};

export default ContactsPage;
