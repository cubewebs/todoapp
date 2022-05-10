import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Duty } from 'src/app/models/duty';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  dutyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
    ) { 
    this.dutyForm = this.fb.group({
      Name: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  addDuty(){
    const DUTY: Duty = {
      Name: this.dutyForm.get('Name')?.value
    }
    console.log(DUTY)
    this.toastr.success('The new duty has been added successfully.', 'Duty Added!');
    this.router.navigate(['/']);
  }

}
