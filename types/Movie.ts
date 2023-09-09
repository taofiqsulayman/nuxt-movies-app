import { MovieCredits } from "./MovieCredits";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number | null;
  videos?: {
    results: [
      {
        iso_639_1: "";
        iso_3166_1: "";
        name: "";
        key: "";
        site: "";
        size: number;
        type: "";
        official: boolean;
        published_at: "";
        id: "";
      }
    ];
  };
  credits?: MovieCredits
};
