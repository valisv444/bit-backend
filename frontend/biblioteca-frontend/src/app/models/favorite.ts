
export interface Favorite {
  _id?: string;
  user: string;
  type: 'libro' | 'autor' | 'tema';
  title: string;
  personalNote?: string;
  rating?: number;
  originalRefId?: string;
}
