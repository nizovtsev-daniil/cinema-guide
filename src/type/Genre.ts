import { z } from 'zod';

export const GenreSchema = z.string();

export type Genre = z.infer<typeof GenreSchema>;

export const GenreObjSchema = z.object({
  id: z.string(),
  title: z.string(),
  poster: z.string(),
});

export type GenreObj = z.infer<typeof GenreObjSchema>;
