/// <reference path="tailwind-merge" />
export type ClassNameValue = ClassNameArray | string | null | undefined | 0 | false;
type ClassNameArray = ClassNameValue[];
export declare function twJoin(...classLists: ClassNameValue[]): string;
export {};

export declare const twMerge: (...classLists: ClassNameValue[]) => string;
