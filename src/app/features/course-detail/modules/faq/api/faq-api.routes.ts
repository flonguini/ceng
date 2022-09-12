import { ApiRouterHelper } from "src/app/shared/helpers/api-router.helper";

export const FAQ_API_ROUTES = {
    faq: () => ApiRouterHelper.GetAbsoluteRoute("/course/faq")
}