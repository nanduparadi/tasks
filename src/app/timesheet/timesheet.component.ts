// timesheet.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../auth/auth.service';
// import { TimesheetService } from './timesheet.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent implements OnInit {
  timesheetForm!: FormGroup;
  totalWeekTimeSpent: any;
  total:any;
  constructor(private apiService:ApiService,
    private fb: FormBuilder){}
  ngOnInit(){
    this.timesheetForm = this.fb.group({
      monday:['',[Validators.required]],
      tuesday:['',[Validators.required]],
      wednesday: ['', Validators.required ],
      thursday: ['', Validators.required],
      friday: ['',Validators.required],
      saturday:['',Validators.required],
      sunday:['',Validators.required],
    },
   )
  }


  // onSubmit(): void {
  //   if (this.timesheetForm.valid) {
  //     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //     const timesheet = {
  //       userId: currentUser.id,
  //       hours: this.timesheetForm.value.hours,
  //       description: this.timesheetForm.value.description,
  //     };
  //     this.timesheetService.saveTimesheet(timesheet);
  //     this.timesheetForm.reset();
  //   }
  // }

  dayValues = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  };

  calculateTime() {
    this.total = 0;

    Object.values(this.dayValues).forEach(value => {
      console.log(typeof value)
      this.total += +value || 0;
    });

    this.totalWeekTimeSpent = this.total;
    console.log(this.totalWeekTimeSpent)
  }


  onSubmit() {
    // Assuming you have a valid API service and your API expects an object with day values and total
    const timesheetData = {
      days: this.timesheetForm.value,  // Your individual day values
      total: this.totalWeekTimeSpent    // Your total value
    };

    this.apiService.timesheetApi(timesheetData).subscribe(
      (res) => {
        console.log("Successfully added the data", res);
      },
      (err) => {
        console.log("Error in adding the data", err);
      }
    );
  }

  // onSubmit(){
  //   // alert("cli")
  //   const timesheetData = this.timesheetForm.value  ;
  //   this.apiService.timesheetApi(timesheetData).subscribe((res)=>{
  //     this.onSubmitt()
  //     console.log("Successfully added the data",res);
  //   },(err) => {
  //     console.log("Error in adding the data",err);
  //   })
  // }
}
