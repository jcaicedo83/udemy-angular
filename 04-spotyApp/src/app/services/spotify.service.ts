import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor( private http:HttpClient) { 
		console.log('api spotify ready!!');

	}

	getNewReleases=()=>{

		const headers = new HttpHeaders({
			'Authorization':'Bearer BQDazYDbliOGpMDvzwTlrhylGuT7y_p7wqSA6lZExFgKgS5E8SvSNEN-LJeq_wK4XXTuRWZVVMLPMYnwr5Y'
		});

		return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers:headers });
	}
}
