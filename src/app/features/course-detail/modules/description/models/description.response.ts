export interface DescriptionResponse
{
    sumarry: string;
    characteristics: ItemResponse[];
    targetAudience: ItemResponse[];
}

interface ItemResponse
{
    description: string;
}