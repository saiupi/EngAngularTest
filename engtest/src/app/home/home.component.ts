import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[];
  subscription: Subscription;
  modalWindowResp: any;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.httpService.getMethod())
    )
      .subscribe((res: any[]) => {
        console.log(res);
        this.list = res['hits'];
        console.log("this.resul", this.list)
      })

  }
  modalWindow(resp) {
    this.modalWindowResp = resp

  }
}
