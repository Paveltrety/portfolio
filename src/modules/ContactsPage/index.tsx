import { Card } from '@/components/Card/Card';
import { useForm, Controller } from 'react-hook-form';

import { Input } from '@/components/ui/Input/Input';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { Button } from '@/components/ui/Button/Button';

import styles from './ContactsPage.module.scss';
import { Toaster } from '@/components/ui/Toaster';

interface IForm {
  name: string;
  message: string;
}

const DEFAULT_VALUES: IForm = {
  name: '',
  message: '',
};

const ContactsPage = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
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

      Toaster.success('Ура! Все получилось');
    } catch (error) {
      console.log(error);
      Toaster.error('Увы! Что-то пошло не так');
    }
  };

  return (
    <Card>
      <p className={styles.title}>
        Можешь написать мне <b>анонимное сообщение</b>
      </p>
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
    </Card>
  );
};

export default ContactsPage;
