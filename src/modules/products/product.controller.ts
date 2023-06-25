import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductController {
    @Get()
    getProducts(): string {
        return 'Get Products';
    }

    @Post()
    createProduct(): string {
        return 'Post Product';
    }

    @Get('/:id')
    detailProduct(): string {
        return 'Product Detail';
    }

    @Put('/:id')
    updateProduct(): string {
        return 'Update Product';
    }

    @Delete('/:id')
    deleteProduct(): string {
        return 'Delete Product';
    }
}    