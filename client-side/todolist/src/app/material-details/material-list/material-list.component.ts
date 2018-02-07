import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { MaterialService } from '../../services/materialService';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  /*
  * Employee Details
  */
  public employeeDetails; 

  /**
   * constructor.
   * @param http
   * @param router
   */
  
  constructor(private http: HttpClient, private router: Router, private ms: MaterialService) { }

  /*
  * ngOnInit
  */
  ngOnInit() {
    this.http.get('http://localhost:3000/todolist').subscribe(
      (data) =>  this.employeeDetails = data
    )
  }

  /*
  * edit
  */
  public edit(material) {
    this.ms.updateMaterial = material;
    this.router.navigate(['edit']);
  }

  /*
  * delete
  */
  public delete(id) {
    this.http.post('http://localhost:3000/delete',{id}).subscribe(
      (data) => {
        this.ngOnInit();
      } 
    )
  }

  /*
  * add
  */
  public addUser() {
    this.ms.updateMaterial = null;
    this.router.navigate(['add']);
  }
  }
