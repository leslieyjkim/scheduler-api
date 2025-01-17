const request = require("supertest");
const generateApplication = require("../../application");

describe("Days", () => {
  let app;

  beforeAll(() => {
    app = generateApplication("test");
  });

  afterEach(async () => {
    await request(app).post("/api/debug/reset");
  });

  afterAll(async () => {
    await app.close();
  });

  test("GET /api/days", async () => {
    await request(app)
      .get("/api/days")
      .expect(200, [
        {
          id: 1,
          name: 'Monday',
          appointments: [ 1, 2, 3, 4, 5 ],
          interviewers: [ 1, 2, 5, 6, 7 ],
          spots: 4
        },
        {
          id: 2,
          name: 'Tuesday',
          appointments: [ 6, 7, 8, 9, 10 ],
          interviewers: [ 3, 4, 7, 8, 10 ],
          spots: 3
        },
        {
          id: 3,
          name: 'Wednesday',
          appointments: [ 11, 12, 13, 14, 15 ],
          interviewers: [ 2, 3, 6, 8, 9 ],
          spots: 2
        },
        {
          id: 4,
          name: 'Thursday',
          appointments: [ 16, 17, 18, 19, 20 ],
          interviewers: [ 1, 5, 6, 7, 8 ],
          spots: 2
        },
        {
          id: 5,
          name: 'Friday',
          appointments: [ 21, 22, 23, 24, 25 ],
          interviewers: [ 2, 4, 5, 8, 10 ],
          spots: 4
        }
      ]);
  });
});
