import { z } from 'zod';
import { FavoritesBodySchema } from '@type/User';

export const FavoritesListSchema = z.array(FavoritesBodySchema);

export type FavoritesList = z.infer<typeof FavoritesListSchema>;
