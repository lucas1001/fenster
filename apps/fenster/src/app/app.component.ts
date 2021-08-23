import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fenster-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fenster';
  value = '';

  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(): void{
    this.getData().subscribe();
    }

  getData(){
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return  this.http.get<any>('http://localhost:3333/api')
    .pipe(
      map((res) => {
        console.log(res)
        this.value = res.message;
      }),
     
    );
  }
}
