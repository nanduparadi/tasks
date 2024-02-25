import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute){}
  navbar = "mama"
  btn(){
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.router.navigate(['/about'],{queryParams:{name:"john",age:34,city:"NewYork"},fragment:'buttonClick'});
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
}}
