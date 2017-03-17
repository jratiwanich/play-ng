import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//import {Rx} from 'rxjs/Rx';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  s = [1,2,3,4,5];

  testOb(ar: any){

    Observable.from(ar).subscribe(
      x => console.log(`onNext: ${x}`),
      e => console.log(`onError: ${e}`),
      () => console.log('onCompleted'));

  }

  testOb2(){
    console.log("nothing yet");
  }
}
