import { Observable, Observer, Subject, Subscriber, Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  /* 

  // Observables exemple 1
  observable: Observable<number> = new Observable((subscriber) => {
    subscriber.next(0);
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
  });

  observer: Observer<number> = new Subscriber({
    next: (nb) => console.log("L'observable a émis :", nb),
    complete: () => console.log("L'observable a fini d'émettre !"),
    error: (err) => console.error("L'observable a émis une erreur ! :( ", err),
  });
  subscription: Subscription;
  
  constructor() {
    this.subscription = this.observable.subscribe(this.observer);
  }

  */
  subscription: Subscription;
  subject: Subject<string> = new Subject();
  constructor() {
    this.subject.next("Hey quelqu'un m'entend ?");
    this.subscription = this.subject.subscribe((v) => console.log(v));
    this.subject.next("ya quelqu'un ???");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
