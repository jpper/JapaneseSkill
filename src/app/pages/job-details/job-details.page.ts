import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Job, JobService} from '../../services/job.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {

  job: Job = {
    title: '',
    company: '',
    industry: '',
    location: '',
    salary: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private toastCtrl: ToastController,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.jobService.getJob(id).subscribe(job => {
        this.job = job;
      });
    }
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
