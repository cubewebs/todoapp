import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Duty } from 'src/app/models/duty';
import { DutyService } from 'src/app/services/duty.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  dutyForm: FormGroup;
  dutyTitle = 'CREATE NEW DUTY';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _dutyService: DutyService,
    private aRouter: ActivatedRoute
    ) { 
    this.dutyForm = this.fb.group({
      Name: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.isEdit();
  }

  addDuty(){

    const DUTY: Duty = {
      Name: this.dutyForm.get('Name')?.value
    }

    if(this.id !== null) {

      // edit duty
      this._dutyService.editDuty(this.id, DUTY).subscribe( data => {
        this.toastr.info('The duty has been updated successfully', 'Duty Updated!');
        this.router.navigate(['/']);
      },  err => {
        console.log(err);
        this.dutyForm.reset();
      })

    } else {

      // add duty
      this._dutyService.saveDuty(DUTY).subscribe( data => {
        this.toastr.success('The new duty has been added successfully.', 'Duty Added!');
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
        this.dutyForm.reset();
      })

    }


  }

  isEdit() {
    if(this.id !== null) {
      this.dutyTitle = 'EDIT DUTY';
      this._dutyService.obtainDuty(this.id).subscribe( data => {
        this.dutyForm.setValue({
          Name: data.Name
        })
      })
    }
  }

}
