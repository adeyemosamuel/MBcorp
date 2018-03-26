import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage/dist/storage';

@Injectable()
export class ServerServiceProvider {
  
//  url: string ='http://192.168.141.1:8082/api';
 
  url: string = '/api';

  constructor(public http: Http, private store: Storage) {
    console.log('Hello ServerService Provider');
  }
//post api
  async processData(body, funcName): Promise<any> {
    console.log(body);
    console.log(funcName);
    // let varToken= await this.store.get('token')
    let headers = new Headers();
  headers.append('Content-Type', 'application/json'); 

    try {
      let response = await this.http.post(this.url + funcName, JSON.stringify(body), {headers: headers}).toPromise();
      console.log(response.json());
      return response.json();
    }
    catch(err) {
      console.log(err.json());
      return {responseCode: "96", message: err.json().Message};
    }
  }

// get api
async getData(funcName): Promise<any> {
  console.log(funcName);

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  try {
    let response = await this.http.get(this.url + funcName, {headers: headers}).toPromise();
    console.log(response.json());
    return response.json();
  }
  catch(err) {
    console.log(err.json()); 
    return {responseCode: "96", message: err.json().Message};
  }
}

}
