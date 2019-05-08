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

  addJob() {
    this.jobService.addJob(this.job).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Job deleted');
    }, err => {
      this.showToast('Error deleting your job :(');
    });
  }

  updateJob() {
    this.jobService.updateJob(this.job).then(() => {
      this.showToast('Job updated');
    }, err => {
      this.showToast('There was a problem updating your job');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
