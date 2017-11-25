import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { Job } from '../../../Job';

@Component({
    selector: 'app-home',
    //templateUrl: './home.component.html',
    template:`
        <div *ngFor="let job of jobs; let i = start">
            <button (click)="open(job._id)">{{job.title}}</button>
            <p><strong>Company Name: </strong>{{job.companyName}}</p>
            <p><strong>Location: </strong>{{job.location}}</p>
            <p><strong>Term: </strong>{{job.term}}</p><br>
        </div>`,
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    jobs: Job;

    constructor(private jobsService: JobsService, private router: Router) {
        this.jobsService.getJobs()
        .subscribe(jobs => {
            this.jobs = jobs;
        });
    }
    open(id) {
        this.router.navigate(['/job']);
        this.jobsService.id = id;
    }

    ngOnInit() {
    }


}
