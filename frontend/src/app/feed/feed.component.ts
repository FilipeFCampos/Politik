import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [ RouterLink, CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  httpclient = inject(HttpClient);
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.httpclient.get(`http://127.0.0.1:8000/api/feed/?search=${this.dataService.getData()}`).subscribe((data: any) => {
      this.data = data.results;
    });
    console.log(this.data);
  }

  fetchData(){
    this.httpclient.get('http://127.0.0.1:8000/api/feed/').subscribe((data: any) => {
      console.log(data);
      this.data = data.results;
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
  
  groupCandidates(candidates: any[], groupSize: number): any[][] {
    const groups = [];
    for (let i = 0; i < candidates.length; i += groupSize) {
      groups.push(candidates.slice(i, i + groupSize));
    }
    return groups;
  }
  
}
