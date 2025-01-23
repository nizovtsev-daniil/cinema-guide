import { z } from 'zod';
import { MovieSchema } from '@type/Movie';

export const MovieListSchema = z.array(MovieSchema);

export type MovieList = z.infer<typeof MovieListSchema>;
