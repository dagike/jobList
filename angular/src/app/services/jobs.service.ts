import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobsService {

    id;
  constructor(private http: Http) { }

  getJobs () {
      return this.http.get('http://localhost:3000/jobs/list')
             .map(res => res.json());
  }

  getJobInfo () {
      return this.http.get('http://localhost:3000/jobs/title/' + this.id)
             .map(res => res.json());
  }

}
