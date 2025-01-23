import { z } from 'zod';
import { GenreObjSchema, GenreSchema } from '@type/Genre';

export const GenresArraySchema = z.array(GenreSchema).optional();

export type GenresArray = z.infer<typeof GenresArraySchema>;

export const GenresObjArraySchema = z.array(GenreObjSchema).optional();

export type GenresObjArray = z.infer<typeof GenresObjArraySchema>;
