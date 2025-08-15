import { makeAutoObservable } from "mobx";

export interface BannerItem {
  text: string;
  type: 'success' | 'error' | 'info';
}

export class BannerManager {

  static shared = new BannerManager();
  banner: BannerItem | undefined

  private constructor() {
    makeAutoObservable(this);
  }

  public pushBanner(banner: BannerItem): void {
    this.banner = banner;

    setTimeout(() => {
      this.banner = undefined;
    }, 3000);
  }

}