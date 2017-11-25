import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Job } from '../../Job'
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    job: Job;
  constructor(private http: Http) { }
  registerJob(job){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/jobs/register', job, {headers: headers})
        .map(res => res.json());
  }
}
