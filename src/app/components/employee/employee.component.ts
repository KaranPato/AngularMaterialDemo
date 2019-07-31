import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../common/services/main.service';
import { NgForm, FormBuilder, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // @ViewChild('fileInput') fileInput: any;

  dataSource: any;
  employeeForm: FormGroup
  isAdd: boolean = false;
  isEdit: boolean = false;
  submitted: boolean = false;
  model: any;
  isLoading: boolean = false;
  files: any;
  input = new FormData();
  recepiId: number;
  updateRecepi = "Update Recepi";
  addRecepi = "Add Recepi";

  constructor(private mainService: MainService, private fb: FormBuilder) { }

  ngOnInit() {
    this.GetRecipes();
  }

  GetRecipes() {

    this.mainService.GetRecipes().subscribe((data: any) => {
      this.dataSource = data.content;
      console.log(this.dataSource);
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );

    this.employeeForm = this.fb.group({
      recepiName: ['', Validators.required],
      recepiDesc: ['', Validators.required]
    });
  }

  AddRecepi() {
    this.isAdd = true;
  }

  GoBack() {
    this.isAdd = false;
  }

  onSubmit() {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    this.isLoading = true;

    if (this.recepiId > 0) {
      this.model = {
        recepiName: this.employeeForm.controls['recepiName'].value,
        recepiDesc: this.employeeForm.controls['recepiDesc'].value,
        recepiId: this.recepiId
      }
    }
    else {
      this.model = {
        recepiName: this.employeeForm.controls['recepiName'].value,
        recepiDesc: this.employeeForm.controls['recepiDesc'].value,
      }
    }

    this.mainService.AddRecepi(this.model).subscribe((data: any) => {
      this.isAdd = false;
      this.isLoading = false;
      this.GetRecipes();
    })
  }

  recepiImageUpload(event) {

    this.input.append("filesData", event);
    //this.files = input;

  }

  DeleteRecepi(Id) {
    if (Id > 0) {
      this.mainService.DeleteRecepi(Id).subscribe((data: any) => {
        if (data.isSuccess) {
          this.GetRecipes();
          alert(data.message);
          console.log(data.message);
        }
        else {
          alert(data.message);
          console.log(data.message);
        }
      })
    }
  }

  EditEmployee(data) {
    if (data.recepiId > 0) {
      this.recepiId = data.recepiId;
      this.employeeForm.controls['recepiName'].setValue(data.recepiName),
        this.employeeForm.controls['recepiDesc'].setValue(data.recepiDesc),
        this.isAdd = true;
        this.isEdit = true;
    }
  }

}
