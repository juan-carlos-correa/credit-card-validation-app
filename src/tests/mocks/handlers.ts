import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/v1/credit-cards/validation", () => {
    return HttpResponse.json({}, { status: 200 });
  }),
];
