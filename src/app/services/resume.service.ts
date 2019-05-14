import { Injectable } from '@angular/core';

export interface Resume {
  id?: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  salary: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
}
