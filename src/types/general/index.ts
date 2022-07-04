
export interface Sizes {
    sm: string;
    m: string;
    l: string;
}

export type SizesType = keyof Sizes;

export const SizeObj: Sizes = {
    sm: "small",
    m: "medium",
    l: "large"
}