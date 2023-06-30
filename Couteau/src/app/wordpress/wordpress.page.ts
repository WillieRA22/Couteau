import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class WordPressPage implements OnInit {
  noticias!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.http.get<any[]>('https://www.angrybirds.com/wp-json/wp/v2/posts')
      .subscribe(response => {
        this.noticias = response.slice(0, 3);
      });
  }
}