import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})
export class ProjectManagementComponent implements OnInit {
  projects: any;
  roles: any;
  projectForm: FormGroup;
  isDialogwindow = false;
  modelstyle = 'display:none';
  selectedUser: any;
  dialogBox = false;
  searchText:any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.getRoles()
    this.getProjects();
  }

  createProject() {
    const project = this.projectForm.value;
    console.log('create project ', project);
    this.apiService.storeProjects(project).subscribe((res) => {
      this.getProjects()
      // this.projectForm.reset()
      this.dialogBox = true;

      this.modelstyle = "display:block;background: rgb(150 153 150 / 50%);"
      console.log("project added successfully")
      console.log(res)
    }, (error) => {
      console.log("failed")
    })
    this.getRoles()
  }
  userInfo() {
    // this.isDialogwindow = true;
    // console.log(data);
  }

  getProjects() {
    this.apiService.getProjects().subscribe((res) => {
      this.projects = res;
      console.log("project", res)
    })
  }
  getRoles() {
    this.apiService.signIn(this.roles).subscribe((res) => {
      console.log("roles", res)
      this.roles = res;
      console.log(this.roles)
    })
  }
  // editProject(projectId: any,data:any){
  //   const updatedProject = this.projectForm.value;
  //   this.apiService.updateProject(projectId, updatedProject).subscribe(
  //     (res) => {
  //       this.getProjects();
  //       // this.projectForm.reset();
  //       // this.projectId = null;
  //       console.log("Project updated successfully");
  //       console.log(res);
  //     },
  //     (error) => {
  //       console.log("Update failed");
  //     }
  //   );
  // }
  editProject(projectId: any, data: any) {
    const updatedProject = {
      projectName: this.projectForm.get('projectName')?.value,
      username: this.projectForm.get('username')?.value,
      startDate: this.projectForm.get('startDate')?.value,
      endDate: this.projectForm.get('endDate')?.value,
    };

    this.apiService.updateProject(projectId, updatedProject).subscribe(
      (res) => {
        this.getProjects();
        console.log("Project updated successfully");
        console.log(res);
      },
      (error) => {
        console.log("Update failed");
      }
    );
  }
  onSubmit() {
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
  editUser(item: any) {
    this.projectForm.patchValue(item);
    console.log(item)
    this.selectedUser = item;
  }
  deleteProject(projectId: any) {
    this.apiService.deleteProject(projectId).subscribe((res) => {
      // alert('Delete Successfully')
      this.getProjects()
    })
  }

  search(){
    this.getProjects()
  }
}
