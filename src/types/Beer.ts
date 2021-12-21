export interface Beer {
  price: string;
  name: string;
  rating: {
    average: string;
    reviews: string;
  };
  image: string;
  id: number;
}
