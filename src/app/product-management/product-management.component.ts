import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
{ActivatedRoute}

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  userArray = [];
  products: any[] = [];
  selectedProduct: any;
  productForm!: FormGroup;
  showForm: boolean = false;
  p: number = 1;

  // showUpdateForm: boolean = false;
  showDuplicateForm: boolean = false;
  constructor(private fb: FormBuilder, private apiService: ApiService,private route:ActivatedRoute) {
    this.productForm = this.fb.group({
      id: [],
      productName: ['', [Validators.required, this.specialCharacterValidator()]],
      createdDate: [this.getCurrentDateFormatted()],
    })
  }
  ngOnInit(): void {
    this.getProducts();
    // this.getCurrentDateFormatted()
  }
  get productName() {
    return this.productForm.get("productName")!;
  }
  specialCharacterValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
      return forbidden ? { 'specialCharacter': { value: control.value } } : null;
    };
  }

  // getCurrentDateFormatted(): string {
  //   const currentDate = new Date();
  //   const day = currentDate.getDate().toString().padStart(2, '0');
  //   const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  //   const year = currentDate.getFullYear();
  //   console.log(day)
  //   console.log(month)
  //   console.log(year)

  //   return `${day}/${month}/${year}`;
  // }
  getCurrentDateFormatted(): string {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${year}-${month}-${day}`;
  }

  closeDialogBox() {
    this.showForm = false;
    this.showDuplicateForm = false;
  }
  // duplicateName() {
  //   const originalName = this.productForm.get('productName')?.value;
  //   let newName = originalName + ' copy';

  //   // Check if the name already exists
  //   if (this.isNameExists(newName)) {
  //     let copyNumber = 1;
  //     newName = originalName + ' copy (' + copyNumber + ')';
  //     console.log(newName)

  //     // Increment the copy number until a unique name is found
  //     while (this.isNameExists(newName)) {
  //       copyNumber++;
  //       newName = originalName + ' copy (' + copyNumber + ')';
  //       console.log(newName)
  //     }
  //   }
  //   let pro = this.productForm.get('productName')?.setValue(newName);
  //   this.apiService.addProduct(pro).subscribe((res)=>{
  //     console.log("success");
  //     this.getProducts();
  //   },
  //   (error)=>console.log(error))
  // }
  isNameExists(name: string): boolean {
    return this.products.some(item => item.productName === name);
  }

  // duplicateName() {
  //   // Get the original product name from the form
  //   const originalName = this.productForm.get('productName')?.value;
  //   // const duplicateProductId = this.productForm.get('id')?.value;
  //   const duplicateProductId = this.productForm.value.id;


  //   // Initialize the new name by appending ' copy' to the original name
  //   let newName = originalName + ' copy';

  //   // Check if the name already exists
  //   if (this.isNameExists(newName)) {
  //     let copyNumber = 1;

  //     // If the name already exists, modify the new name by appending a copy number
  //     newName = originalName + ' copy (' + copyNumber + ')';
  //     console.log(newName);

  //     // Increment the copy number until a unique name is found
  //     while (this.isNameExists(newName)) {
  //       copyNumber++;
  //       newName = originalName + ' copy (' + copyNumber + ')';
  //       console.log(newName);
  //     }
  //   }

  //   // Set the form value to the unique new name
  //   this.productForm.get('productName')?.setValue(newName);

  //   // Get the ID of the selected product for duplication
  //   const productId = duplicateProductId;

  //   // Create a new product object with the modified name
  //   const updatedProduct = { productName: newName, createdDate: this.getCurrentDateFormatted() };

  //   // Update the existing product in the database
  //   this.apiService.updateProduct(productId, updatedProduct).subscribe(
  //     (res) => {
  //       console.log("Product duplicated successfully");
  //       this.getProducts();
  //     },
  //     (error) => console.log(error)
  //   );
  // }
  duplicateName() {
    const originalName = this.productForm.get('productName')?.value;
    let newName = originalName + ' copy';
    if (this.isNameExists(newName)) {
      let copyNumber = 1;
      newName = originalName + ' copy (' + copyNumber + ')';
      console.log(newName);
      // Increment the copy number until a unique name is found
      while (this.isNameExists(newName)) {
        copyNumber++;
        newName = originalName + ' copy (' + copyNumber + ')';
        console.log(newName);
      }
    }

    // Set the form value to the unique new name
    this.productForm.get('productName')?.setValue(newName);

    // Get the ID of the selected product for duplication
    const productId = this.selectedProduct.id;

    // Create a new product object with the modified name
    const updatedProduct = { productName: newName, createdDate: this.getCurrentDateFormatted() };

    // Update the existing product in the database
    this.apiService.addProduct(newName).subscribe(
      (res) => {
        console.log("Product duplicated successfully");
        this.getProducts();
      },
      (error) => console.log(error)
    );
  }


  resetForm() {
    this.productForm.reset();
    this.showForm = false;

    // this.showDuplicateForm = false;
  }
  increment() {
    if (this.productForm.invalid) {
      for (const control of Object.keys(this.productForm.controls)) {
        this.productForm.controls[control].markAsTouched();
      }
      return
    }
    const originalName = this.productForm.get('productName')?.value;
    console.log(originalName)
    this.isNameExists(originalName)
    let newName = originalName + ' copy';
    console.log(newName)
    let copyNumber = 1;
    newName = originalName + ' copy (' + copyNumber + ')';
    console.log(newName)
    copyNumber++;
    newName = originalName + ' copy (' + copyNumber + ')';
    console.log(newName)
  }

  addDb() {
    if (this.productForm.invalid) {
      for (const control of Object.keys(this.productForm.controls)) {
        this.productForm.controls[control].markAsTouched();
      }
      return;
    }
    this.productForm.patchValue({
      createdDate: this.getCurrentDateFormatted(),
    });
    const product = this.productForm.value;
    // const newProduct = this.productForm.value;
    // this.products.unshift(newProduct);

    this.apiService.addProduct(product).subscribe((res: any) => {
      this.productForm.reset();
      this.getProducts();
    },
      (err) => console.error(err))
  }
  getProducts() {
    this.apiService.getAllProducts().subscribe((res: any) => {
      this.products = res;
      console.log(this.products)
    })
  }

  updateProduct(product: any) {
    this.showDuplicateForm = false;
    this.showForm = true;
    this.scrollToTop()
    this.productForm.patchValue(product);
  }
  // duplicateProduct(product: any){
  //   this.showForm = false;
  //   this.showDuplicateForm = true;
  //   this.productForm.patchValue(product);
  // }


  duplicateProduct(product: any) {
    // Set the selected product for duplication
    this.selectedProduct = product;

    // Show the duplicate product form
    this.showDuplicateForm = true;

    // Set the form value to the selected product name
    this.productForm.get('productName')?.setValue(this.getUniqueDuplicateName(product.productName));
  }

  getUniqueDuplicateName(originalName: string): string {
    let newName = originalName + ' Copy';

    // Check if the name already exists
    if (this.isNameExists(newName)) {
      let copyNumber = 1;

      // Increment the copy number until a unique name is found
      while (this.isNameExists(newName)) {
        copyNumber++;
        newName = originalName + ' Copy (' + copyNumber + ')';
      }
    }

    return newName;
  }

  scrollToTop(): void {
    window.scrollTo(500, 0);
  }

  updateProductt() {
    if (this.productForm.invalid) {
      for (const control of Object.keys(this.productForm.controls)) {
        this.productForm.controls[control].markAsTouched();
      }
      return
    }
    const updatedProduct = this.productForm.value;
    const id = this.productForm.value.id;
    this.apiService.updateProduct(id, updatedProduct).subscribe(() => {
      this.getProducts();
    });
    this.productForm.reset();
    this.showForm = false;
  }


}

