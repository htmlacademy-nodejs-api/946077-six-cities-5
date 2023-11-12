import { Expose } from 'class-transformer';
import { City, HousingType } from '../../../types/index.js';

export class OfferPreviewRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public postDate: Date;

  @Expose()
  public city: City;

  @Expose()
  public previewImage: string;

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: HousingType;

  @Expose()
  public price: number;

  @Expose()
  public commentCount: number;
}
