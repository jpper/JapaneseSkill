import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Resume, ResumeService} from '../services/resume.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private resumes: Observable<Resume[]>;

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit() {
    this.resumes = this.resumeService.getResumes();
  }
}
