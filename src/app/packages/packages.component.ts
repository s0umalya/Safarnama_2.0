import { Component, Input } from '@angular/core';
import { Package } from '../models/package.model';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
})
export class PackagesComponent {
  @Input() regularPackagesArr: Package[] = [];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
  }
}
