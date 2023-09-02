import { ls } from "./localstorage.service";

export class HttpService {
    public constructor(public baseURL = process.env.NEXT_PUBLIC_APP_API_URL) {}
    public post = (endpoint: string, options?: RequestInit) => fetch(`${this.baseURL}/${endpoint}`, {
        ...options,
        headers: this.setHeaders(options?.headers),
        method: "POST",
    });
    public get = (endpoint: string, options?: RequestInit) => fetch(`${this.baseURL}/${endpoint}`, {
        ...options,
        headers: this.setHeaders(options?.headers),
        method: "GET",
    });
    private setHeaders(baseHeaders?: HeadersInit) {
        const token = ls.get("token");
        const headers = new Headers({
            "content-type": "application/json",
            ...baseHeaders,
        });
        if (typeof token === "string") {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    };
}
