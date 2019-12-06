import { Component, OnInit } from '@angular/core';
import { MainService } from '../../common/services/main.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recepi-list',
  templateUrl: './recepi-list.component.html',
  styleUrls: ['./recepi-list.component.css']
})
export class RecepiListComponent implements OnInit {

  dataSource: any;
  isAdd: boolean = false;
  isEdit: boolean = false;
  submitted: boolean = false;
  model: any;
  isLoading: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.GetRecipes();
  }

  GetRecipes() {

    this.mainService.GetRecipes().subscribe((data: any) => {
      this.dataSource = data.content;
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  DeleteRecepi(Id: number) {
    if (Id > 0) {
      this.mainService.DeleteRecepi(Id).subscribe((data: any) => {
        if (data.isSuccess) {
          this.GetRecipes();
          alert(data.message);
        }
        else {
          alert(data.message);
        }
      }, (err: HttpErrorResponse) => {
        console.log(err);
      });
    }
  }

}
