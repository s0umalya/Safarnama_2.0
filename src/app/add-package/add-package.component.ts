import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      packageName: new FormControl('', [Validators.required]),
      packageType: new FormControl('', []),
      packageCaption: new FormControl('', []),
      packageDescription: new FormControl('', []),
      packageDayCount: new FormControl('', []),
      packageNightCount: new FormControl('', []),
      packagePrice: new FormControl('', []),
      packageCoverImageName: new FormControl('', []),
      packageCardImageName: new FormControl('', []),
    });
  }

  cancel() {
    this.router.navigate(['admin']);
  }

  addPackage() {
    let addedPackage: Package;
    addedPackage = this.packageForm.value;
    console.log('addedPackageBefore', addedPackage);
    addedPackage.packageCoverImageName =
      addedPackage.packageCoverImageName.split('\\')[
        addedPackage.packageCoverImageName.split('\\').length - 1
      ];
      addedPackage.packageCardImageName =
      addedPackage.packageCardImageName.split('\\')[
        addedPackage.packageCardImageName.split('\\').length - 1
      ];
    console.log('addedPackageAfter', addedPackage);
    this.packageService.addPackage(addedPackage).subscribe((res: any) => {
      alert('Package added successfully');
    });
    this.packageForm.reset();
    this.router.navigate(['admin']);
  }
}
