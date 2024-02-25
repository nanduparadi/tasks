import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  selectedUser:any;
  projectForm!:FormGroup;
  searchText: any;
    isFormOpen = false;
  roles: any;
  modelstyle = 'display:none';
  dialogBox = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  ngOnInit(): void {

    this.getProjects()
    this.getRoles()
  }
  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
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
  onSubmit(){
    this.toggleForm();
    if (this.projectForm.value.id) {
      console.log('Form Value:', this.projectForm.value);
      console.log(this.projectForm.value.id)
      this.apiService.updateProject(this.projectForm.value.id, this.projectForm.value).subscribe(
        (data: any) => {
          console.log('Update Success:', data);
          this.getProjects();
        },
        (err: any) => {
          console.error('Update Error:', err);
        }
      );
    } else {
      this.createProject();
    }
  }

  createProject() {
    const project = this.projectForm.value;
    console.log('create project ', project);
    this.apiService.storeProjects(project).subscribe((res) => {
      this.getProjects()
      // this.projectForm.reset()
      console.log("project added successfully")
      console.log(res)
    }, (error) => {
      console.log("failed")
    })
    this.getRoles()
    // location.reload();

  }
  getRoles() {
    this.apiService.signIn(this.roles).subscribe((res) => {
      console.log("roles", res)
      this.roles = res;
      console.log(this.roles)
    })
  }

  editUser(item: any) {
    this.projectForm.patchValue(item);
    console.log(item)
    this.selectedUser = item;
  }

}
