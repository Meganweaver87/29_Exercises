import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})

export class FavPhotosComponent implements OnInit {
  
  photosTitle = 'The Good Floof';
  image1 = 'https://www.dropbox.com/s/rxyxdbagtl60tb5/Rocky5.jpg?raw=1';
  image2 = 'https://www.dropbox.com/s/t895dnen5bzyw4i/Rocky%201%20Edited.png?raw=1';
  image3 = 'https://www.dropbox.com/s/mmwzdz683kswcmr/Rocky%202.JPG?raw=1';
  gif1 = 'https://www.dropbox.com/s/3i0lvam5jypp1wo/catcomputergif.gif?raw=1'
  gif2 = 'https://www.dropbox.com/s/bczl5wdv701va0h/catgif.webp?raw=1'

  constructor() {

  }

  ngOnInit() {

  }

}

// previous image 1 link: https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png