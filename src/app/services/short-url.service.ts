import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  url: string;
  token: string;

  constructor(private http: HttpClient) {

    this.url = 'https://api-ssl.bitly.com/v4/shorten';
  }

  shortenUrl(longUrl: string): Observable<object> {

    const body = {
      "long_url": `${longUrl}`
    }
    
    return this.http.post(this.url, body)

  }

}
