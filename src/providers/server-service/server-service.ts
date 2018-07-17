import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';

@Injectable()
export class ServerServiceProvider {
  // url: string = 'http://10.0.33.73:9000/api';
  // url: string = 'http://a8926e6a.ngrok.io';
  // url: string = 'http://hbbom.hbng.com:9000/api';
  url: string = '/api';
  
  header: Headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMDAwMDk4IiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNTMxODE4MjAzNzcyLCJleHAiOjE1MzQ4MTgyMDN9.7Iq5GZG-jR9RA9NJtygtKiC2qR0TGeejzydomHwZSNK-6qMS4vRcrAVbBDPxGyLh6bBWGyZXHHS4i7sUdOiTUw'
  });

  constructor(
    private http: Http 
  ) {
    console.log('Hello ServerProvider Provider');
  }

  async processData(body, funcName) {
    try {
      let response = await this.http.post(this.url + funcName, JSON.stringify(body), {headers: this.header})
      .timeout(60000)
      .toPromise();
      return response.json();
    }
    catch(err) {
      console.log(err);

      return {responseCode: "96", message: 'Something went wrong. Try again.'};
    }
  }

  // get api
async getData(funcName): Promise<any> {
  console.log(funcName);

  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');

  try {
    let response = await this.http.get(this.url + funcName, {headers: this.header}).toPromise();
    console.log(response.json());
    return response.json();
  }
  catch(err) {
    console.log(err.json()); 
    return {responseCode: "96", message: 'Something went wrong. Try again'};
  }
}

}
