import { z } from 'zod';

export const FavoritesBodySchema = z.string();

export type FavoritesBody = z.infer<typeof FavoritesBodySchema>;

export const UserSchema = z.object({
  favorites: z.array(FavoritesBodySchema),
  surname: z.string(),
  name: z.string(),
  email: z.string(),
});

export type User = z.infer<typeof UserSchema>;
