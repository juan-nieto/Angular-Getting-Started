import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log("Product Detail page for id: " + id);
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
