import { Coment } from "./Coment";

export interface Moment{
    id?: number;
    title: string,
    description: string,
    image: string,
    createdAt?: string,
    updatedAt?: string,
    comment?: Coment[]
}