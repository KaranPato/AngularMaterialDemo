import { Component, OnInit } from '@angular/core';
import { MainService } from '../../common/services/main.service';
import { NgForm, FormBuilder, Validators, FormGroup } from '../../../../node_modules/@angular/forms';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-recepi-list',
  templateUrl: './recepi-list.component.html',
  styleUrls: ['./recepi-list.component.css']
})
export class RecepiListComponent implements OnInit {
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

}
