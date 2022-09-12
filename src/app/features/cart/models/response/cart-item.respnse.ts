import { CartItem } from "../../components/cart/cart-item/cart.item";

export class CartItemResponse implements CartItem
{
    courseId: string;
    thumbnail: string;
    title: string;
    price: number;
}