import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, from, fromEvent, of, zip } from 'rxjs';
import { UtilityServiceService } from '../utility-service.service';
import { map, pluck, toArray, withLatestFrom } from "rxjs/operators";

@Component({
  selector: 'app-ob-servable',
  templateUrl: './ob-servable.component.html',
  styleUrls: ['./ob-servable.component.scss']
})
export class ObServableComponent implements OnInit, AfterViewInit {

  // Source
  Name = ['Ram', 'Manoj', 'Shekhar'];
  Colors = ['Red', 'Green', 'Yellow'];

  // Template Reference
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;


  constructor(private utilityService: UtilityServiceService) { }

  ngOnInit(): void {

    // Of Operator
    const obs = of('Ram', 'Manoj', 'Shekhar');
    obs.subscribe(res => {
      this.utilityService.print(res, 'elContainer');
    });

    // FROM Operator
    const arr = ['Ram', 'TH', 'Shekhar'];
    const obs1 = from(arr);
    obs1.subscribe(res => {
      this.utilityService.print(res, 'elContainer1');
    });

    // ToArray Operator
    const obs3 = of('Ram', 'TH', 'Shekhar');
    obs3.pipe(toArray()).subscribe(res => { console.log(res) });

    // Map Operator
    const obs4 = from(
      [{ id: 1, Name: 'Ram' },
      { id: 2, Name: 'TH' },
      { id: 3, Name: 'VS' }]
    );

    obs4.pipe(map(res => res.Name)).subscribe(data => {
      console.log(data);
    });

  }

  ngAfterViewInit(): void {

    // Observable
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change')
    .pipe(map(event => event.target.value));
    const ColorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(event => event.target.value));

    // combineLatest
    combineLatest(nameObs, ColorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer3');
    });

    // withLatestFrom
    // master = nameObs
    // slave = ColorObj
    nameObs.pipe(withLatestFrom(ColorObs)).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer4');
    });

    // Zip
    zip(nameObs, ColorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer5');
    });

    // fromEvent
    // fromEvent<any>(this.color.nativeElement, 'change')
    //   .pipe(map(event => event.target.value)).subscribe(res => {
    //     console.log(res);
    //   });

    // Pluck Operator
    // fromEvent<any>(this.color.nativeElement, 'change')
    //   .pipe(pluck('target', 'value')).subscribe(res => {
    //     console.log(res);
    //   });

  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId).appendChild(el);
  }

}
