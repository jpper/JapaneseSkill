import { Component, OnInit } from '@angular/core';
import {Resume, ResumeService} from '../../services/resume.service';
import {ActivatedRoute, Router } from '@angular/router';
import {Job, JobService} from '../../services/job.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  id = null;
  resume: Resume = null;

  constructor(private resumeService: ResumeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.id) {
      this.resumeService.getResume(this.id).subscribe(resume => {
        this.resume = resume;
      });
    }
  }

}
