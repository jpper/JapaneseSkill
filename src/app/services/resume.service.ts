import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Job} from './job.service';

export interface Resume {
  id?: string;
  title: string;
  languageAbilities: string;
  careerObjectives: string;
  specialties: string;
  educationalHistory: string;
  workHistory: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private resumes: Observable<Resume[]>;
  private resumeCollection: AngularFirestoreCollection<Resume>;

  constructor(private afs: AngularFirestore) {
    this.resumeCollection = this.afs.collection<Resume>('resumes');
    this.resumes = this.resumeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getResumes() {
    return this.resumes;
  }

  getResume(id: string): Observable<Resume> {
    return this.resumeCollection.doc<Resume>(id).valueChanges().pipe(
      take(1),
      map(resume => {
        resume.id = id;
        return resume;
      })
    );
  }

}
