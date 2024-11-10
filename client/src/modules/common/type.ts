import { ReactNode } from "react";

export interface ContextProviderChildren {
    children: ReactNode;
}


export interface UserData {
        _id: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
}

export interface ChatData {
    _id: string;
    members: string[];
    createdAt: Date;
    updatedAt: Date
}