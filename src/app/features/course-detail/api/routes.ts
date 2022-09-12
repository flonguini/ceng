import { ApiRouterHelper } from "src/app/shared/helpers/api-router.helper";

export const HOME_API_ROUTES = {
    course: () => ApiRouterHelper.GetAbsoluteRoute("/course"),
    info: () => ApiRouterHelper.GetAbsoluteRoute("/course/info")
}