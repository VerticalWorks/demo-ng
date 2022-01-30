import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Person, ApiResult } from '../models'
import { inject } from '@angular/core/testing'
import { concatMap, map, switchMap, tap } from 'rxjs/operators'
import { Observable, of, pipe, forkJoin, from } from 'rxjs'

  


@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  public apiPeopleURL: string = 'https://randomuser.me/api/'
  
  constructor(private httpClient: HttpClient) { 
  }
  
  public getAddressBook(): Observable<any> {
    return this.httpClient.get(this.apiPeopleURL);  
  } 
}