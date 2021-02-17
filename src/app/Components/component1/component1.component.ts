import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from 'src/app/utility-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  userName: string;
  constructor(private _utilityService:UtilityServiceService) { }

  ngOnInit(): void {
    this.subscribeUsername();
  }

  change(uName){
    this._utilityService.userName.next(uName.value);
  }

  subscribeUsername() {
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    });
  }
}
