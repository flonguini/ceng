import { CartItem } from "../components/cart/cart-item/cart.item";

export class Cart 
{
    public subtotal: number = 0;
    public courses: CartItem[] = []
    public numberOfCourses: number = 0;

    public addCourse(course: CartItem)
    {
        const index = this.courses.findIndex(c => c.courseId == course.courseId);

        if (index != -1)
            return;

        this.numberOfCourses++;
        this.courses.push(course);
        this.updateSubtotal();
    }

    public removeCourse(course: CartItem)
    {
        const index = this.courses.findIndex(i => i.courseId == course.courseId);

        if (index == -1)
            throw new Error("Não foi possível remover do carrinho, atualize a página e tente novamente.");

        this.numberOfCourses--;
        this.courses.splice(index, 1);
        this.updateSubtotal();
    }

    private updateSubtotal()
    {
        this.subtotal = this.courses.reduce((partialSum, course) => partialSum + course.price, 0);
    }
}