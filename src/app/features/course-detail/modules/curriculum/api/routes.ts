import { ApiRouterHelper } from "src/app/shared/helpers/api-router.helper";

export const CURRICULUM_API_ROUTES = {
    curriculum: () => ApiRouterHelper.GetAbsoluteRoute("/course/curriculum")
}