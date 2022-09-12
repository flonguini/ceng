import { DateOnly } from "src/app/shared/models/date-only";

export interface CourseCommentResponse
{
    studentName: string;
    comment: string;
    date: DateOnly;
    studentInitials: string;
}