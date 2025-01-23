import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .email(
      'Поле Email должно содержать корректный формат электронной почты, например user@mail.com'
    )
    .transform((val) => val.toLowerCase()),
  password: z.string().min(8, 'Пароль должен содержать не менее 8 символов'),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
