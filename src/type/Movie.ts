import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string().nullish(),
  originalTitle: z.string().nullish(),
  language: z.string().nullish(),
  relaseYear: z.number().nullish(),
  releaseDate: z.string().nullish(),
  genres: z.array(z.string()),
  plot: z.string().nullish(),
  runtime: z.number(),
  budget: z.string().nullish(),
  revenue: z.string().nullish(),
  homepage: z.string().nullish(),
  status: z.string().nullish(),
  posterUrl: z.string().nullish(),
  backdropUrl: z.string().nullish(),
  trailerUrl: z.string().nullish(),
  trailerYoutubeId: z.string().nullish(),
  tmdbRating: z.number().nullish(),
  searchL: z.string().nullish(),
  keywords: z.array(z.string()).nullish(),
  countriesOfOrigin: z.array(z.string()).nullish(),
  languages: z.array(z.string()).nullish(),
  cast: z.array(z.string()).nullish(),
  director: z.string().nullish(),
  production: z.string().nullish(),
  awardsSummary: z.string().nullish(),
});

export type Movie = z.infer<typeof MovieSchema>;
