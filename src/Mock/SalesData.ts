import {products} from './Products';
import {format, subDays} from 'date-fns';

interface SaleRecord {
    id:number;
    name: string;
    category: string;
    price: number;
    soldQuantity: number;
    soldDate: string;
}

export const salesData: SaleRecord[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    soldQuantity: Math.floor(Math.random() * 50) + 1,
    soldDate: format(subDays(new Date(), Math.floor(Math.random() * 730)), 'yyyy-MM-dd'),
}));
