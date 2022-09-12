export interface CourseRatingResponse
{
    totalRatingCount: number;
    average: number;
    totalRatingVm: TotalRatingVm[];
}

export interface TotalRatingVm
{
    rate: number;
    countByRate: number;
}