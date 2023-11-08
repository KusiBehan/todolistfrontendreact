import { http } from "msw";
import { HttpResponse } from "msw";

const MockData = [
  { id: 1, task: "First Task", status: true },
  { id: 2, task: "Second Task", status: true },
];

export const handlers = [
  http.get("/tasks", () => {
    return HttpResponse.json(MockData);
  }),
];
