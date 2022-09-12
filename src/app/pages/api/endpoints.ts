import { environment } from "src/environments/environment";

export const HOME_ENDPOINTS = {
    bestCourses: () => environment.api + "/home/best-courses",
    recentCourses: () => environment.api + "/home/recent-courses"
}