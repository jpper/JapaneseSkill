import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Job {
  id?: string,
  title: string,
  company: string,
  industry: string,
  location: string,
  salary: string,
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobs: Observable<Job[]>;
  private jobCollection: AngularFirestoreCollection<Job>;

  constructor(private afs: AngularFirestore) {
    this.jobCollection = this.afs.collection<Job>('jobs');
    this.jobs = this.jobCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getJobs(): Observable<Job[]> {
    return this.jobs;
  }

  getJob(id: string): Observable<Job> {
    return this.jobCollection.doc<Job>(id).valueChanges().pipe(
      take(1),
      map(job => {
        job.id = id;
        return job
      })
    );
  }

  addJob(job: Job): Promise<DocumentReference> {
    return this.jobCollection.add(job);
  }

  updateJob(job: Job): Promise<void> {
    return this.jobCollection.doc(job.id).update({
      title: job.title,
      company: job.company,
      industry: job.industry,
      location: job.location,
      salary: job.salary,
    });
  }

  deleteJob(id: string): Promise<void> {
    return this.jobCollection.doc(id).delete();
  }

}
