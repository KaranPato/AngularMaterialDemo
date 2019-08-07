import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/common/services/main.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-update-recepi',
  templateUrl: './add-update-recepi.component.html',
  styleUrls: ['./add-update-recepi.component.css']
})
export class AddUpdateRecepiComponent implements OnInit {
  dataSource: any;
  employeeForm: FormGroup
  isAdd: boolean = false;
  isEdit: boolean = false;
  submitted: boolean = false;
  model: any;
  isLoading: boolean = false;
  recepiId: number;

  constructor(private mainService: MainService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      recepiName: ['', Validators.required],
      recepiDesc: ['', Validators.required]
    });

    this.route.params.subscribe(s => {
      this.recepiId = s['id'];
      if (this.recepiId > 0) {
        this.mainService.GetRecipeById({ recepiId: this.recepiId }).subscribe((data: any) => {
          this.employeeForm.controls.recepiName.setValue(data.content.recepiName);
          this.employeeForm.controls.recepiDesc.setValue(data.content.recepiDesc);
        });
        this.isEdit = true;
      }
      else {
        this.isAdd = true;
      }
    });
  }

  GetRecipes() {

    this.mainService.GetRecipes().subscribe((data: any) => {
      this.dataSource = data.content;
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
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

    this.mainService.AddRecepi(this.model).subscribe(() => {
      this.isAdd = false;
      this.isLoading = false;
      this.router.navigate(["/recepi-list"]);
      this.GetRecipes();
    }, (err: HttpErrorResponse) => {
      this.isLoading = false;
      alert(err.statusText);
    });
  }

}
