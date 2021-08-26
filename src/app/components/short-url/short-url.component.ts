import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {
  longUrl: string;
  showlongUrl: string;
  shortUrl: string;
  err: boolean;
  loading: boolean;

  constructor(
    private _shortUrl: ShortUrlService,

  ) {
    this.shortUrl = '';
    this.err = false;
    this.loading = false
  }

  ngOnInit(): void { }

  shortenUrl(form: NgForm) {
    this.loading = true;
    setTimeout(() => {
      this._shortUrl.shortenUrl(this.longUrl).subscribe(data => {
        this.loading = false;
        this.shortUrl = data['link'];
        this.showlongUrl = this.longUrl;
        this.err = false;
        form.reset();
      },
        err => {
          this.err = true;
          this.loading = false;
        });

    }, 1500)

  }



}
