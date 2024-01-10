import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  selectedUser:any;
  projectForm!:FormGroup
  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }
  ngOnInit(): void {

    this.getProjects()
  }
  getProjects() {
    this.apiService.getProjects().subscribe((res) => {
      this.projects = res;
      console.log("project", res)
    })
  }
  deleteProject(projectId: any) {
    this.apiService.deleteProject(projectId).subscribe((res) => {
      // alert('Delete Successfully')
      this.getProjects()
    })
  }

  editUser(item: any) {
    this.projectForm.patchValue(item);
    console.log(item)
    this.selectedUser = item;
  }

}
