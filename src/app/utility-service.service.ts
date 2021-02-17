import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  userName=new BehaviorSubject<string>('Chandrashekhar Singh');
  constructor() { }

  print(val, ContainerId) {
    let el = document.createElement('li');
    el.innerText = val;

    document.getElementById(ContainerId).appendChild(el);
  }
}
