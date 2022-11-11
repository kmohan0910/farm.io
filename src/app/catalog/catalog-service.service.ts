import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService implements OnInit{

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(
      'https://farmio-3fb6e-default-rtdb.firebaseio.com/products.json'
    ).subscribe(data=>{
    
      this.products= data;
      console.log(this.products)
    })
    
  }
    
  products : any;

  getitems(){
    return this.products
  }
}
type product= {item : string , quantity : number}
