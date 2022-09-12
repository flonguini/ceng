import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, finalize } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { markAllAsDirtyAndTouched, markAsDirtyAndTouched } from 'src/app/shared/utils/util';
import { CartService } from '../../services/cart.service';

export type IdSteps = "VerifyEmail" | "Register" | "SignIn";

export enum MYFORM  {
    email = "email",
    password = "password",
    name = "name"
}

@Component({
    selector: 'app-id',
    templateUrl: './id.component.html',
    styleUrls: ['./id.component.scss'],
    providers: [CartService, LoadingService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdComponent implements OnInit
{
    private step = new BehaviorSubject<IdSteps>("VerifyEmail");
    public step$ = this.step.asObservable();
    public formGroup: FormGroup;
    public nome: string;
    public FORM: typeof MYFORM = MYFORM;

    constructor(
        public foo: LoadingService,
        private fb: FormBuilder,
        private service: CartService) 
    { 
       
    }

    ngOnInit(): void
    {
        this.formGroup = this.fb.group({
            [MYFORM.email]: [null, [Validators.required, Validators.email]],
            [MYFORM.password]: [null],
            [MYFORM.name]: [null]
        })
    }

    public verifyUser(): void
    {
        markAsDirtyAndTouched(this.formGroup, MYFORM.email);

        if(this.formGroup.invalid)
            return;

        const email = this.formGroup.get(MYFORM.email)?.value;

        if(!email)
            return;

        this.foo.isLoading();

        this.service
            .isUserRegister(email)
            .pipe(finalize(() => this.foo.stopLoading()))
            .subscribe((res: any) => {
                if(res.emailResponse)
                {
                    this.nome = res.emailResponse;
                    this.step.next("SignIn")
                }
                else
                {
                    this.formGroup.get(MYFORM.name)?.addValidators(Validators.required)
                    this.step.next("Register")
                }
                this.formGroup.get(MYFORM.password)?.addValidators(Validators.required)
            });
    }

    public register(): void
    {
        markAllAsDirtyAndTouched(this.formGroup);
    }

    public login(): void
    {
        markAllAsDirtyAndTouched(this.formGroup);
    }
}