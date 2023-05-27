export interface Package {
  packageName: string;
  packageType: string;
  packageCaption: string;
  packageDescription: string;
  packageDayCount: number;
  packageNightCount: number;
  packagePrice: number;
  packageCoverImageName: string; //To be displayed in home page carousel
  packageCardImageName: string; //To be displayed in packages component cards
  packageGalleryImages:string[];
}
