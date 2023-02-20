const jobs_left = require("../src/index");

test("Testing the jobs function with first example", () => {
  const input = {
    no_of_jobs: 3,
    jobs: [
      { start: 900, end: 1030, profit: 100 },
      { start: 1000, end: 1200, profit: 500 },
      { start: 1100, end: 1200, profit: 300 },
    ],
  };
  expect(jobs_left(input)).toEqual({ task: 2, earnings: 400 });
});

test("Testing the jobs function with second example", () => {
  const input = {
    no_of_jobs: 3,
    jobs: [
      { start: 900, end: 1000, profit: 250 },
      { start: 945, end: 1200, profit: 550 },
      { start: 1130, end: 1500, profit: 150 },
    ],
  };
  expect(jobs_left(input)).toEqual({ task: 2, earnings: 400 });
});

test("Testing the jobs function with third example", () => {
  const input = {
    no_of_jobs: 3,
    jobs: [
      { start: 900, end: 1030, profit: 100 },
      { start: 1000, end: 1200, profit: 100 },
      { start: 900, end: 1200, profit: 100 },
    ],
  };
  expect(jobs_left(input)).toEqual({ task: 2, earnings: 200 });
});
