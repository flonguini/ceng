import { environment } from "src/environments/environment";

export class ApiRouterHelper
{
    public static GetAbsoluteRoute(relativeRoute: string)
    {
        const host = environment.api;

        if(!relativeRoute)
            return host;

        if(!host.endsWith("/") && !relativeRoute.startsWith("/"))
            return host + "/" + relativeRoute;
        else if(host.endsWith("/") && relativeRoute.startsWith("/"))
            return host + relativeRoute.substring(1, relativeRoute.length);
        return host + relativeRoute;
    }
}