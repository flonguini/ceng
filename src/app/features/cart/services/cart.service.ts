import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { StorageService } from "src/app/core/services/storage/storage.service";
import { StorageKeys } from "src/app/shared/enums/storage-keys.enum";
import { tryRun } from "src/app/shared/utils/util";
import { API_CART_ROUTES } from "../api/api.routes";
import { CartStorage } from "../models/cart-storage";
import { CartItemResponse } from "../models/response/cart-item.respnse";

@Injectable()
export class CartService
{
    constructor(
        private http: HttpClient,
        private storage: StorageService)
    { }

    public async myCart(): Promise<CartItemResponse[] | null>
    {
        const apiUrl = API_CART_ROUTES.cart();
        const [cart, error] = this.getCartStorage()

        if (error)
            //TODO: handle error
            return null;

        if (!cart)
            return null;

        let params = this.addParams(cart);
        const courses$ = this.http.get<CartItemResponse[]>(apiUrl, { params: params });
        return lastValueFrom(courses$);
    }

    public async getCourse(courseId: string): Promise<CartItemResponse[] | null>
    {
        const apiUrl = API_CART_ROUTES.cart();

        let params = new HttpParams().append("CoursesIds", courseId);
        const courses$ = this.http.get<CartItemResponse[]>(apiUrl, { params: params });
        return lastValueFrom(courses$);
    }

    public numberOfCoursesInCart(): number
    {
        const [cart, _] = this.getCartStorage()

        if(cart)
            return cart.coursesIds.length;
        return 0;
    }

    public addCourseIdToStorage(courseId: string)
    {
        let [cart, error] = this.getCartStorage()

        if (!cart)
            cart = new CartStorage();

        if (error)
            // TODO: handle error
            return;

        const index = cart.coursesIds.findIndex(c => c == courseId);
        
        if (index != -1)
            return;
        
        cart.coursesIds.push(courseId);
        this.saveCartToStorage(cart);
    }

    public removeCourseIdFromStorage(courseId: string)
    {
        const [cart, error] = this.getCartStorage()

        if (!cart)
            return;

        if (error)
            return;

        const index = cart.coursesIds.findIndex(c => c == courseId);

        if (index == -1)
            return;

        cart.coursesIds.splice(index, 1);
        this.saveCartToStorage(cart);
    }

    public isUserRegister(email: string)
    {
        const apiRoute = API_CART_ROUTES.isUserRegister(email);
        return this.http.get(apiRoute);
    }

    private saveCartToStorage(cart: CartStorage)
    {
        this.storage.setKey(StorageKeys.cart, cart);
    }

    private getCartStorage(): [CartStorage | null, any]
    {
        return tryRun<CartStorage>(() => this.storage.getKey(StorageKeys.cart));
    }

    private addParams(cart: CartStorage): HttpParams
    {
        let params = new HttpParams();

        cart.coursesIds.forEach(courseId => params = params.append("CoursesIds", courseId));

        if (cart.userId)
            params = params.append("UserId", cart.userId);

        if (cart.coupom)
            params = params.append("Coupon", cart.coupom);

        return params;
    }
}