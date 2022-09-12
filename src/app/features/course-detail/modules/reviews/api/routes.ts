import { ApiRouterHelper } from "src/app/shared/helpers/api-router.helper";

export const RATING_API_ROUTES = {
    rating: () => ApiRouterHelper.GetAbsoluteRoute('course/rating'),
    comments: () => ApiRouterHelper.GetAbsoluteRoute('course/comments'),
}