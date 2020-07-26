import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map }  from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor( private http:HttpClient) { 
		console.log('api spotify ready!!');

	}

	getQuery(query:string){
		const url =`https://api.spotify.com/v1/${ query }`;

		const headers = new HttpHeaders({
			'Authorization':'Bearer BQCdDWhAT-3cs-jqy1rYfqFoCEzZldnGS_OvkvAD___YRfd-d_sWPh8xYkugvHLDX61d4nt9gvNsW8KhE14'
		});

		return this.http.get(url, {headers:headers});
	}
	getNewReleases=()=>{

		return this.getQuery('browse/new-releases?limit=20')
		.pipe(map((data:any)=> data['albums'].items));
		// return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers:headers })

	}

	getArtists(value:string){
		return this.getQuery(`search?q=${ value }&type=artist&limit=15`)
		.pipe(map((data:any)=> data['artists'].items));
	}

	getArtist(id:string){
		return this.getQuery(`artists/${ id }`);
	//	.pipe(map((data:any)=> data['artists'].items));
	}

	getTopTracks(id:string){
		//https://api.spotify.com/v1/artists/{id}/top-tracks
		return this.getQuery(`artists/${ id }/top-tracks?country=co`);
	//	.pipe(map((data:any)=> data['artists'].items));
	}
}
