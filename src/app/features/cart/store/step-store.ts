import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { isDefined } from "src/app/shared/utils/util";
import { CartItem } from "../components/cart/cart-item/cart.item";
import { Cart } from "../models/cart";
import { CartStep } from "../models/cart-step";

@Injectable({ providedIn: "root" })
export class StepStore
{
    private cartStep: CartStep = "Carrinho";
    private cartStepSubject = new BehaviorSubject<CartStep>(this.cartStep);
    private set step(step: CartStep)
    {
        this.cartStep = step;
        this.cartStepSubject.next(this.cartStep);
    }

    public cartStep$ = this.cartStepSubject.asObservable();

    public nextStep()
    {
        if (this.cartStep == "Carrinho")
            this.step = "Identificação";
        else if (this.cartStep == "Identificação")
            this.step = "Pagamento";
        else if (this.cartStep == "Pagamento")
            this.step = "Finalização";
    }
}
@Injectable({providedIn: "root"})
export class CourseStore
{
    private cart: Cart;
    private cartSubject: BehaviorSubject<Cart>;
    public cart$: Observable<Cart>;

    constructor()
    {
        this.cart = new Cart()
        this.cartSubject = new BehaviorSubject<Cart>(this.cart);
        this.cart$ = this.cartSubject.asObservable();
    }

    public emptyCart(): void
    {
        this.cart.numberOfCourses = 0;
        this.cart.courses = []
    }

    public setNumberOfCourses(coursesCount: number)
    {
        this.cart.numberOfCourses = coursesCount;
    }

    public addItem(item: CartItem)
    {
        this.cart.addCourse(item);
        this.updateCard();
    }

    public removeItem(item: CartItem)
    {
        this.cart.removeCourse(item);
        this.updateCard();
    }

    private updateCard()
    {
        this.cartSubject.next(this.cart);
    }
}