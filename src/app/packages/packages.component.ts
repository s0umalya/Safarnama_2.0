import { Component, Input } from '@angular/core';
import { Package } from '../models/package.model';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent {
  @Input() regularPackagesArr: Package[] = [];

  specialPackageSelectedFlag: boolean = false;

  regularPackageArr: Package[] = [];
  specialPackageArr: Package[] = [];

  constructor(private packageService: PackageService) {
    this.getRegularPackages();
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    if (tabChangeEvent.index === 1) {
      this.specialPackageSelectedFlag = true;
    }
  }

  getRegularPackages() {
    this.packageService.getPackages().subscribe((res: any) => {
      console.log("REg REs",res)
      this.regularPackageArr = res.filter((item: any) => {
        console.log("item",item.packageType)
        return item.packageType == 'Regular';        
      });
      console.log("Regular packages",this.regularPackageArr)
    });
    
  }
}
