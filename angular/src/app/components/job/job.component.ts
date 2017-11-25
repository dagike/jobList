import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { Job } from '../../../Job';

@Component({
    selector: 'app-job',
    // templateUrl: './job.component.html',
    template: `
        <div>
            <p><strong>Title: </strong>{{job.title}}</p>
            <p><strong>Company Name: </strong>{{job.companyName}}</p>
            <p><strong>Location: </strong>{{job.location}}</p>
            <p><strong>Description: </strong>{{job.description}}</p>
            <p><strong>Term: </strong>{{job.term}}</p>
            <p><strong>Required Skills: </strong>{{job.requiredSkills}}</p>
            <p><strong>Due Date: </strong>{{job.dueDate}}</p>
            <p><strong>Pay Rate: </strong>{{job.payRate}}</p>
            <p><strong>Email: </strong>{{job.email}}</p>
        </div>
        <form name="sendResume">
            <div class="form-group">
                <label for="email">From:<input type="email" class="form-control" ng-model="resume.email"></label>
            </div>
            <div class="form-group">
                <label for="resume">Attach Resume<input type="file" id="file" name="file"/>
                <button ng-click="add()">Add</button></label>
            </div>
        </form>
    `,
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    job: Job;

    constructor(private jobsService: JobsService, private router: Router) {
        this.jobsService.getJobInfo()
        .subscribe(job => {
            this.job = job;
        });
    }

    ngOnInit() {
    }
}
