import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job, JobService } from '../services/job.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private jobs: Observable<Job[]>;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

}
