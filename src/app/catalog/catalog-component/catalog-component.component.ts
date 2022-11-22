import { Component, OnInit } from '@angular/core';
import { CatalogServiceService } from '../catalog-service.service';

@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css']
})




export class CatalogComponentComponent implements OnInit {

  constructor(private catalogService: CatalogServiceService) { }
  products: string[] = ['Cabbage', 'Pottato', 'Tomato']

  ngOnInit() {
      this.catalogService.getitems()
      this.catalogService.products.subscribe(res=>{
        this.products= res
      })
      console.log(this.products, 'catalog')
      }
    //this.products = this.catalogService.getitems()
}

