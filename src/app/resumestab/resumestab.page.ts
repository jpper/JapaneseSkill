import { Component, OnInit } from '@angular/core';
import {Resume, ResumeService} from '../services/resume.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-resumestab',
  templateUrl: './resumestab.page.html',
  styleUrls: ['./resumestab.page.scss'],
})
export class ResumestabPage implements OnInit {
  private resumes: Observable<Resume[]>;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumes = this.resumeService.getResumes();
  }

}
