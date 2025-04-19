export interface ShowItem {
  title: string;
  link: string;
  year: number;
  seasons: number;
  streamer: string;
  status: Status;
  category?: 'anime' | 'tvshow';
}

export type Status = 
  | 'Complete' 
  | 'In Queue' 
  | 'Dropped' 
  | 'To Catch Up' 
  | 'Up to Date'
  | 'Watching';

export type SortKey = 'title' | 'year' | 'seasons' | 'streamer' | 'status';
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}
