"use client";

const get = (key: string): unknown => {
    try {
        const item: unknown = localStorage.getItem(key);
        return typeof item === "string" && JSON.parse(item);
    } catch (error) {
        return undefined;
    }
};

const set = (key: string, value: unknown): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        return undefined;
    }
};

const remove = (key: string) => {
    localStorage.removeItem(key);
};
const clearAll = () => {
    localStorage.clear();
};

export const ls = {
    get,
    set,
    remove,
    clearAll,
};
