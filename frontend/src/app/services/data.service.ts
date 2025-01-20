import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<string>('');
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: string): void {
    this.dataSource.next(data);
  }

  getData(): string {
    return this.dataSource.getValue();
  }
}
