import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService implements OnInit{

  constructor(private http : HttpClient) { }
  products = new  BehaviorSubject<string[]>(['potato', 'apple']);
  ngOnInit(){
    
  }

  getitems(){
   let resp : product[]

    this.http.post('https://farmio-3fb6e-default-rtdb.firebaseio.com/products.json' , { 'value' : 'Carrot'}).subscribe(res=>{
      console.log(res , 'post')
    }, error=> console.log(error))

    var req= this.http.get<string[]>('https://farmio-3fb6e-default-rtdb.firebaseio.com/products.json')
  req.subscribe(res=>{
    // workking console.log([...res])
    const result =res.filter(res=>{
      return res!==null;// filtering out Null values
    })
    console.log(res,'this')
    this.products.next(result) // using subject because getting data from server is slow and will take time
    console.log(result,'that')
  })
}
}
type product= {item : string }
