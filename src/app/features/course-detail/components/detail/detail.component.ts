import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { CartStore } from 'src/app/features/cart/store/cart.store';
import { PipeAsyncItensBase } from 'src/app/shared/api/pipe-async-itens.base';
import { tryRunPromise } from 'src/app/shared/utils/util';
import { InfoResponse } from '../../api/models/info.response';
import { CourseDetailService } from '../../services/course-detail.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CourseDetailService, CartService]
})
export class DetailComponent extends PipeAsyncItensBase<InfoResponse>
{
    constructor(
        public route: ActivatedRoute, 
        private service: CourseDetailService,
        private cartStore: CartStore,
        private cartService: CartService) 
    { 
        super(); 
        this.getInfo();
    }

    public retry(): void
    {
        this.retryObservable(this.getInfoObservable());
    }

    private getInfo(): void
    {
        this.getItens(this.getInfoObservable());
    }

    private getInfoObservable(): Observable<InfoResponse>
    {
        const courseId = this.route.snapshot.params["id"];
        return this.service.getInfo(courseId);
    }

    public async addToCart(course: InfoResponse)
    {
        this.cartService.addCourseIdToStorage(course.courseId);
        const [courseCart, error] = await tryRunPromise(this.cartService.getCourse(course.courseId));
        
        if(error)
            //TODO: handle error
            return;

        this.cartStore.courseStore.addItem(courseCart![0]);
    }
}