import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from '../utility-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  userName: string;
  constructor(private _utilityService: UtilityServiceService) { }

  ngOnInit(): void {
    this.subscribeUsername();
  }

  subscribeUsername() {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    });
  }

}
