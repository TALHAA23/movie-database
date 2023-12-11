interface Reviewer {
  featured?: boolean;
  title: string;
  review: string;
  rating: number;
  reviewDate: string;
  helpful: number;
  unhelpful: number;
}

export type { Reviewer };
