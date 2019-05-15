import { Component, OnInit } from '@angular/core';
import {Resume, ResumeService} from '../../services/resume.service';
import {JobService} from '../../services/job.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  private resumes: Observable<Resume[]>;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumes = this.resumeService.getResumes();
  }

}
