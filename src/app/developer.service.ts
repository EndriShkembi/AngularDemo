import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  devs!: Developer[];
  baseURL: string = "https://tech-services-1000201953.uc.r.appspot.com/";

  postHeader = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // constructor() {
  //   this.devs = [
  //     new Developer("123","endri","shkembi","c++",1993),
  //     new Developer("456","jon","hoff","java",2019)
  //  ];

  // }

  constructor(private httpClient: HttpClient) { }

  // getAllDevelopers() : Developer[] {
  //   return this.devs;
  // }

  addDevelopers(developer: Developer) : boolean{
    this.httpClient.post<Developer>(this.baseURL+"developer",developer,this.postHeader)
    .subscribe(res => {},
      (err)=> {console.log(err)});

    return true;

  }

  getAllDevelopers(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>(this.baseURL + "developers")
      .pipe(
        map(response => {
          this.devs = response;
          return response;

        }),
        catchError(this.handlerError<any>()!)
      );
  }

  private handlerError<T>(result?:T) {
    console.log('error occur')
    return null;
  }

  getDeveloperById(devId: string): Developer { 
    return this.devs.find(i => i.id == devId)!;

  }

}
