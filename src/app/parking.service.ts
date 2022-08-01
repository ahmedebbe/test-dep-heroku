import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkings/parkingInfo';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpclient:HttpClient) { }
  getParking():Observable<ParkingInfo[]>{
   
    return this.httpclient.get<ParkingInfo[]>('http://localhost:8080/listeProduit')

  }
}
