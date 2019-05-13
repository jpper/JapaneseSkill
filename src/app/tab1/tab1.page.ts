import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Job, JobService} from '../services/job.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  private jobs: Observable<Job[]>;
  queryText: string;

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  /*
  updateJobs() {
    let queryTextLower = this.queryText.toLowerCase();
    let filteredJobs = [];
    let jobResults = _.filter(this.jobs, j => (j as any).title.toLowerCase().includes(queryTextLower));
    if (jobResults) {
      filteredJobs.push(jobResults);
    }
    */

}
