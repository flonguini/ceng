export interface CurriculumResponse
{
    sections: Section[];
}

export interface Section
{
    title: string;
    lessons: Lesson[];
}

export interface Lesson
{
    name: string;
    duration: string;
}