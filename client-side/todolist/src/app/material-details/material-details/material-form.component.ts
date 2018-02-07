import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { MaterialService } from '../../services/materialService';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  /*
  * Employee form
  */
  public employeeForm: any;

  /*
  * params
  */
  public params: any;

  /*
  * params
  */
  public buttonLabel: string;

  /**
   * constructor.
   * @param formBuilder
   * @param router
   * @param http
   */

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ms: MaterialService
  ) {
    this.buttonLabel = 'Add';
    this.employeeForm = this.formBuilder.group({
      'id': ['', Validators.required],
      'itemName': ['', Validators.required],
      'sellerName': ['', Validators.required],
      'email': ['', Validators.required],
      'location': ['', Validators.required]
    });
    if(this.ms.updateMaterial){    
      this.employeeForm.id = this.ms.updateMaterial.id;
      this.employeeForm.itemName = this.ms.updateMaterial.itemName;
      this.employeeForm.sellerName = this.ms.updateMaterial.sellerName;
      this.employeeForm.email = this.ms.updateMaterial.email;
      this.employeeForm.location = this.ms.updateMaterial.location;
      this.buttonLabel = 'Update';  
    }
    
   }

  /*
  * ngOnInit
  */
  ngOnInit() {    
  }

  /*
  * submit
  */
  public submit() {
    if (this.buttonLabel === 'Add') {
    this.http.post('http://localhost:3000/add', this.employeeForm.value).subscribe(
      (data) =>  {
        alert('Added Successfully!');
        this.router.navigate(['list']);
      }
    ) 
    } else {
    this.http.post('http://localhost:3000/modify/', this.employeeForm.value).subscribe(
      (data) =>  {
        alert('Updated Successfully!')
        this.router.navigate(['list']);
      }
    )

    }
  }

}
