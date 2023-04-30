import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PackageService } from '../services/package.service';
import { Package } from '../models/package.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css'],
})
export class AddPackageComponent {
  packageForm: FormGroup;
  //packageList: Package[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private packageService: PackageService,
    private router: Router
  ) {
    this.packageForm = this.formBuilder.group({
      packageName: new FormControl('', []),
      packageCaption: new FormControl('', []),
      packageDescription: new FormControl('', []),
      packageDayCount: new FormControl('', []),
      packageNightCount: new FormControl('', []),
      packagePrice: new FormControl('', []),
      packageCoverImageName: new FormControl('', []),
    });
  }

  addPackage() {
    let addedPackage: Package;
    addedPackage = this.packageForm.value;
    console.log('addedPackage', addedPackage);
    this.packageService.addPackage(addedPackage).subscribe((res: any) => {
      alert("Package added successfully")
    });
    this.packageForm.reset();
    this.router.navigate(['admin']);
  }
}
