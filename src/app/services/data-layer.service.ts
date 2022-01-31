import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RootObject } from '../models'
import { Observable } from 'rxjs'
  
@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  public apiPeopleURL: string = 'https://randomuser.me/api/'
  
  constructor(private httpClient: HttpClient) { 
  }
 
  public getAddressBook(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(`${this.apiPeopleURL}?results=100`)
  }
}