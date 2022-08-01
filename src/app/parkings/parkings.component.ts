import { Component, OnInit } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import { ParkingService } from '../parking.service'; 
@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {
  
  parkings: ParkingInfo[];
  isLoaded=false;
  constructor(private parkingservice:ParkingService) { }

  ngOnInit(): void {
     this.parkingservice.getParking().subscribe(
      reponse=>{
        this.parkings = reponse;
        this.isLoaded=true;

      }
     );
  
  }

}
