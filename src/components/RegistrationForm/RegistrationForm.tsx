import { FC, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@components/Button/Button';
import { FormField } from '@components/FormField/FormField';
import {
  RegistrationFormType,
  RegistrationSchema,
} from '@type/RegistrationFormType';
import { registration } from '@api/registration';
import { queryClient } from '@api/queryClient';
import IconEmail from '@svg/icon-email.svg?react';
import IconPassword from '@svg/icon-password.svg?react';
import IconUser from '@svg/icon-user.svg?react';
import './RegistrationForm.css';

export interface RegistrationFormProps {
  handleSwitchLogin: () => void;
  handleSwitchSuccess: () => void;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({
  handleSwitchLogin,
  handleSwitchSuccess,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<RegistrationFormType>({
    resolver: zodResolver(RegistrationSchema),
  });

  const registrationMutation = useMutation(
    {
      mutationFn: registration,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
        handleSwitchSuccess();
      },
    },
    queryClient
  );

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <h2 className='modal__title'>Регистрация</h2>

      <form
        className='registration-form'
        onSubmit={handleSubmit(({ email, password, name, surname }) => {
          registrationMutation.mutate({ email, password, name, surname });
          reset({ password: '', confirmPassword: '' });
        })}
      >
        <div className='registration-form__wrap-inputs'>
          <FormField errorMessage={errors.email?.message} icon={<IconEmail />}>
            <input
              type='text'
              placeholder='Электронная почта'
              className={errors.email && 'error'}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
          </FormField>

          <FormField errorMessage={errors.name?.message} icon={<IconUser />}>
            <input
              type='text'
              placeholder='Имя'
              className={errors.name && 'error'}
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name')}
            />
          </FormField>

          <FormField errorMessage={errors.surname?.message} icon={<IconUser />}>
            <input
              type='text'
              placeholder='Фамилия'
              className={errors.surname && 'error'}
              aria-invalid={errors.surname ? 'true' : 'false'}
              {...register('surname')}
            />
          </FormField>

          <FormField
            errorMessage={errors.password?.message}
            icon={<IconPassword />}
          >
            <input
              type='password'
              placeholder='Пароль'
              className={errors.password && 'error'}
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password')}
            />
          </FormField>

          <FormField
            errorMessage={errors.confirmPassword?.message}
            icon={<IconPassword />}
          >
            <input
              type='password'
              placeholder='Подтвердите пароль'
              className={errors.confirmPassword && 'error'}
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
              {...register('confirmPassword')}
            />
          </FormField>
        </div>

        {registrationMutation.isError && (
          <span style={{ color: '#ff7575', fontSize: '12px' }}>
            Невозможно создать аккаунт. Такой пользователь уже существует.
          </span>
        )}

        <Button
          className='btn-reset--modal button button--violet-text'
          type='submit'
          children='Создать аккаунт'
          isLoading={registrationMutation.isPending}
        />
      </form>

      <Button
        className='btn-reset modal__btn-switch'
        children='У меня есть пароль'
        onClick={handleSwitchLogin}
      />
    </>
  );
};
