import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SephoraProductService } from '../sephora-products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  productList: ElementRef[] = [];

  categories: string[] = ['Toutes les catégories'];

  minPrice: number = 0;
  maxPrice: number = 0;
  category: string = 'Toutes les catégories';
  searchName: string = '';

  constructor(private productService: SephoraProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      data.forEach((product) => {
        if (this.categories.includes(product.category.trim()) == false) {
          let categoryName = product.category.toLowerCase();
          this.categories.push(
            categoryName[0].toUpperCase() + categoryName.substring(1)
          );
        }
      });
    });
  }

  onCategoryChange(event: Event): void {
    this.productService
      .getProductsByCategory(this.category)
      .subscribe((data) => {
        this.products = data;
      });
  }
  onApplyPriceFilter(): void {
    this.productService
      .getProductsByPrice(this.minPrice, this.maxPrice)
      .subscribe((data) => {
        this.products = data;
      });
  }
  onSearchByName(): void {
    this.productService.getProductsByName(this.searchName).subscribe((data) => {
      this.products = data;
    });
  }
}
