import { Injectable } from '@nestjs/common'
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {

    private products: Product [] = [
        {id: 1, categoryId: 1, price: 8000, productName: "Keyboard"},
        {id: 2, categoryId: 1, price: 3300, productName: "Mouse"},
        {id: 3, categoryId: 2, price: 5000, productName: "laptop"},
    ];

    getProducts(): Product [] {
        return this.products;
    }

    createProduct(): string {
        return 'Post Product';
    }

    detailProduct(): string {
        return 'Product Detail';
    }

    updateProduct(): string {
        return 'Update Product';
    }

    deleteProduct(): string {
        return 'Delete Product';
    }
}