import { FC, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@components/FormField/FormField';
import { Button } from '@components/Button/Button';
import { login } from '@api/login';
import { queryClient } from '@api/queryClient';
import { LoginFormType, LoginSchema } from '@type/LoginFormType';
import IconEmail from '@svg/icon-email.svg?react';
import IconPassword from '@svg/icon-password.svg?react';
import './LoginForm.css';

export interface LoginFormProps {
  handleSwitch: () => void;
  onClose?: () => void;
}

export const LoginForm: FC<LoginFormProps> = ({ handleSwitch, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginMutation = useMutation(
    {
      mutationFn: login,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
        document
          .getElementById('modal-animation')
          ?.classList.add('modal-close');
        setTimeout(() => {
          onClose?.();
        }, 300);
      },
    },
    queryClient
  );

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <form
        className='login-form'
        onSubmit={handleSubmit(({ email, password }) => {
          loginMutation.mutate({ email, password });
          reset({ password: '' });
        })}
      >
        <div className='login-form__wrap-inputs'>
          <FormField errorMessage={errors.email?.message} icon={<IconEmail />}>
            <input
              type='text'
              placeholder='Электронная почта'
              className={errors.email && 'error'}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
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
        </div>

        {loginMutation.isError && (
          <span style={{ color: '#ff7575', fontSize: '12px' }}>
            Невозможно выполнить вход. Введен неверный адрес электронной почты
            или неверный пароль.
          </span>
        )}

        <Button
          className='btn-reset--modal button button--violet-text'
          type='submit'
          children='Войти'
          isLoading={loginMutation.isPending}
        />
      </form>

      <Button
        className='btn-reset modal__btn-switch'
        children='Регистрация'
        onClick={handleSwitch}
      />
    </>
  );
};
