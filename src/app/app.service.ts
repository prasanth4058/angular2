import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class MyHttpService {
	
	constructor(private http:Http) {
		// code...
	}

	getData(url, successHandler, failureHandler) {
		
		return this.http.get(url)
		 .subscribe(data => 
                       {
                       	console.log("success response:  ", data);
                       successHandler(data);
                   },
                       error => 
                       {
                       	console.log("An error occurred when requesting api/foobar.", error);
                       	failureHandler(error);
                       }
                       
                       );
	}

	postData(url, data, headers, successHandler, failureHandler) {
		
		return this.http.post(url, data, headers)
		 .subscribe(data => 
                       {
                       	console.log("success response:  ", data);
                       successHandler(data);
                   },
                       error => 
                       {
                       	console.log("An error occurred when requesting api/foobar.", error);
                       	failureHandler(error);
                       }
                       
                       );
	}

	
}

