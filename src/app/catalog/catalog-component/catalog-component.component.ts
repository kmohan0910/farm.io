import { Component, OnInit } from '@angular/core';
import { CatalogServiceService } from '../catalog-service.service';

@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css']
})




export class CatalogComponentComponent implements OnInit {

  constructor(private catalogService: CatalogServiceService) { }
  products: string[] = ['Cabbage', 'Pottato', 'Tomato', 'Beans']

  ngOnInit(): void {

    //this.products = this.catalogService.getitems()
    console.log(this.products);

  }

}

