import { HousingLocation } from '../@types/housing-location';

export const filterByName =
  (search: string) =>
  ({ name }: HousingLocation) => {
    return name.toLowerCase().includes(search.toLowerCase());
  };
