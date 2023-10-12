import {
  City,
  GoodsType,
  HousingType,
  Location,
} from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: City;
  public previewImage: string;
  public images: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: HousingType;
  public bedrooms: number;
  public maxAdults: number;
  public price: number;
  public goods: GoodsType[];
  public hostId: string;
  public location: Location;
}
