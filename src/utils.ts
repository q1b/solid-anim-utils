import { Accessor } from "solid-js";

export const isClient = typeof window !== "undefined"

export function unref<T>(v: Accessor<T> | T): T {
    return isFunction(v) ? v() : v
}

export const now = () => Date.now()
export const timestamp = () => +Date.now()

export const isFunction = <T extends Function>(v: any): v is T => typeof v === 'function'
export const isNumber = (v: any): v is number => typeof v === 'number'

export const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))
export const noop = () => { }

export const identity = <T>(arg: T): T => {
    return arg
}

export function roundTo(n: number, decimals: number) {
    const p = Math.pow(10, decimals);
    return Math.round(n * p) / p;
}
