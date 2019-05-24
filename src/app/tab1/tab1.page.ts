import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Job, JobService} from '../services/job.service';
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';
import {filter} from 'rxjs/operators';

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

  updateJobs() {
    /*
    const queryTextLower = this.queryText.toLowerCase();
    const jobResults = _.filter(this.jobs, j => (j as any).title.toLowerCase().includes(queryTextLower));
    if (jobResults) {
      this.jobs = jobResults;
    }
     */
  }

}
