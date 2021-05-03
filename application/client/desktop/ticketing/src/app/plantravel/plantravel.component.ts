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
}