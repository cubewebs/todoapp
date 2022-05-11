import { Component, OnInit } from '@angular/core';
import { Duty } from 'src/app/models/duty';
import { DutyService } from '../../services/duty.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listDuties: Duty[] = [];
  markedDuty = 0;

  constructor(
    private _dutyService: DutyService,
    private Toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.obtainDuties();
  }

  obtainDuties() {
    this._dutyService.getDuties().subscribe( data => {
      this.listDuties = data;
    }, err => {
      console.log(err)
    })
  }

  deleteDuty(id: any) {
    this._dutyService.deleteDuty(id).subscribe( data => {
      this.Toastr.error('The duty has been deleted successfully', 'Duty deleted!');
      this.obtainDuties();
    })
  }

}
