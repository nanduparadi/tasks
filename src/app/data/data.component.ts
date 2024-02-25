// data.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data: any[] = [];
  dataForm: FormGroup;

  constructor(private dataService: ApiService, private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  addData() {
    this.dataService.addData(this.dataForm.value).subscribe(() => {
      this.loadData();
      this.resetForm();
    });
  }

  editData(item: any) {
    if (this.dataForm.get('name')) {
      this.dataForm.setValue(item);
    }
  }

  duplicateName() {
    const originalName = this.dataForm.get('name')?.value;
    let newName = originalName + ' copy';

    // Check if the name already exists
    if (this.isNameExists(newName)) {
      let copyNumber = 1;
      newName = originalName + ' copy (' + copyNumber + ')';

      // Increment the copy number until a unique name is found
      while (this.isNameExists(newName)) {
        copyNumber++;
        newName = originalName + ' copy (' + copyNumber + ')';
      }
    }

    this.dataForm.get('name')?.setValue(newName);
  }

  isNameExists(name: string): boolean {
    return this.data.some(item => item.name === name);
  }

  updateData() {
    const id = this.dataForm.value.id;
    console.log(id)
    this.dataService.updateData(id, this.dataForm.value).subscribe(() => {
      this.loadData();
      this.resetForm();
    });
  }

  deleteData(id: number) {
    this.dataService.deleteData(id).subscribe(() => {
      this.loadData();
    });
  }

  resetForm() {
    this.dataForm.reset();
  }
}
