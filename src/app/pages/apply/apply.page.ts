import { Component, OnInit } from '@angular/core';
import {Job, JobService} from '../../services/job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {
  id = null;
  job: Job = null;

  constructor(
      private activatedRoute: ActivatedRoute,
      private jobService: JobService,
      private router: Router

  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.id) {
      this.jobService.getJob(this.id).subscribe(job => {
        this.job = job;
      });
    }
  }

}
