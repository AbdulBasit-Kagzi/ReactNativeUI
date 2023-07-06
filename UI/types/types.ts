export interface ActivitesTypes {
  id: string;
  title: string;
  image: string | undefined;
}

export interface DiscoverCategoriesTypes {
  id: string;
  text: string;
}

export interface discoverDataType {
  id: string;
  title: string;
  location: string;
  image: string | undefined;
  imageBig: string | undefined;
  description: string;
  liked: boolean;
  price: number;
  rating: number;
  duration: number;
}

export interface learnMoreData {
  id: string;
  title: string;
  image: string | undefined;
}
