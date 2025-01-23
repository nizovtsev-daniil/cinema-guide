import { z } from 'zod';
import { changeUpperFirstChar } from '@utils/changeUpperFirstChar';

export const RegistrationSchema = z
  .object({
    email: z
      .string()
      .email(
        'Поле "Email" должно содержать корректный формат электронной почты, например user@mail.com'
      )
      .transform((val) => val.toLowerCase()),
    name: z
      .string()
      .min(2, 'Поле "Имя" обязательно для заполнения')
      .transform((val) => changeUpperFirstChar(val)),
    surname: z
      .string()
      .min(2, 'Поле "Фамилия" обязательно для заполнения')
      .transform((val) => changeUpperFirstChar(val)),
    password: z.string().min(8, 'Пароль должен содержать не менее 8 символов'),
    confirmPassword: z
      .string()
      .min(8, 'Пароль должен содержать не менее 8 символов'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type RegistrationFormType = z.infer<typeof RegistrationSchema>;
