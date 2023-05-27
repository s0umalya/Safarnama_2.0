import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  dayArr: string[] = [];
  //packageList: Package[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private packageService: PackageService,
    private router: Router
  ) {
    this.packageForm = this.formBuilder.group({
      packageName: new FormControl('', [Validators.required]),
      packageType: new FormControl('', [Validators.required]),
      packageCaption: new FormControl('', [Validators.required]),
      packageDescription: new FormControl('', [Validators.required]),
      packageDayCount: new FormControl('', [Validators.required]),
      packageNightCount: new FormControl('', [Validators.required]),
      packagePrice: new FormControl('', [Validators.required]),
      packageCoverImageName: new FormControl('', [Validators.required]),
      packageCardImageName: new FormControl('', [Validators.required]),
      packageGalleryImages: new FormControl('', [Validators.required]),
    });
  }

  cancel() {
    this.router.navigate(['admin']);
  }

  loadItineraryForm() {
    for (let i = 1; i <= this.packageForm.value.packageDayCount; i++) {
      this.dayArr.push('Day ' + i);
      this.packageForm.addControl(
        'Day ' + i,
        new FormControl('', Validators.required)
      );
    }
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

  onFileChange(event: any) {
    let imagesArr = [];
    let files = event.target.files;
    console.log('files', files);
    if (files) {
      for (let file of files) {
        imagesArr.push(file.name);
      }
    }
    this.packageForm.value.packageGalleryImages=imagesArr
    //this.packageForm.value.packageGalleryImages.push()
    //   this.FileImage = event.target.files[0];
    //   var reader = new FileReader();
    //   reader.onload = (event:any) => {
    //     this.ImageUrl = event.target.result;
    //  }
    //   reader.readAsDataURL(this.FileImage);
    //}
  }

  test() {
    console.log('Total', this.packageForm.value);
  }
}
