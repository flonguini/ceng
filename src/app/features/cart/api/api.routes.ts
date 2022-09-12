import { ApiRouterHelper } from "src/app/shared/helpers/api-router.helper";

export const API_CART_ROUTES = {
    cart: () => ApiRouterHelper.GetAbsoluteRoute("/cart"),
    isUserRegister: (email: string) => ApiRouterHelper.GetAbsoluteRoute(`/auth/user/${email}`)
}