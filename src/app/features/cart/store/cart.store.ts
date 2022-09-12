import { Injectable } from "@angular/core";
import { CourseStore, StepStore } from "./step-store";

@Injectable({providedIn: "root"})
export class CartStore
{
    constructor(
        public stepStore: StepStore, 
        public courseStore: CourseStore)
    { }
}