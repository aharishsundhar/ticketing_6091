import { Component, OnInit } from '@angular/core';
import { PlantravelService } from './plantravel.service';

@Component({
  selector: 'app-plantravel',
  templateUrl: './plantravel.component.html',
  styleUrls: ['./plantravel.component.scss'],
})

export class PlantravelComponent implements OnInit {
    public travel = {
        name: '',
        age: '',
        email: '',
        phone: '',
    }

    constructor (
        private plantravelService: PlantravelService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.plantravelService.GpCreate(this.travel).subscribe(data => {
            this.travel.name = ''
 	 	this.travel.age = ''
 	 	this.travel.email = ''
 	 	this.travel.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}