import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    title: String;
    companyName: String;
    location: String;
    description: String;
    term:  String;
    requiredSkills: String;
    dueDate: String;
    payRate: String;
    email: String;
  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
  }

    onRegisterSubmit () {
        const job = {
            title: this.title,
            companyName: this.companyName,
            location: this.location,
            description: this.description,
            term:  this.term,
            requiredSkills: this.requiredSkills,
            dueDate: this.dueDate,
            payRate: this.payRate,
            email: this.email
        }

        // Register Job
        this.registerService.registerJob(job).subscribe(data => {
            if(data.success){
                console.log('Success');
                this.router.navigate(['/']);
            } else {
                console.log('Failure');
            }
        });
    }
}
