import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users';
  private getapiUrl = 'http://localhost:3000/users?role=manager';

  private timesheetUrl = 'http://localhost:3000/timesheets';
  private projectUrl = "  http://localhost:3000/projects";
  // private projectId = "http://localhost:3000/projects" ;


  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  storeProjects(user: any): Observable<any> {
    return this.http.post(this.projectUrl, user);
  }
  getProjects() {
    return this.http.get(this.projectUrl)
  }
  timesheetApi(t: any): Observable<any> {
    return this.http.post(this.timesheetUrl, t);
  }
  // updateProject(id: number, updatedProject: any): Observable<any> {
  //   const updateUrl = `${this.projectUrl}/${id}`;
  //   return this.http.put(updateUrl,id);
  // }
  updateProject(id: number, updatedProject: any): Observable<any> {
    const updateUrl = `${this.projectUrl}/${id}`;
    console.log('Update URL:', updateUrl);
    console.log('Updated Project Data:', updatedProject);
    return this.http.put(updateUrl, updatedProject);
  }

  deleteProject(id: number): Observable<any> {
    const deleteUrl = `${this.projectUrl}/${id}`;
    return this.http.delete(deleteUrl);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.get(this.getapiUrl)
  }
}

