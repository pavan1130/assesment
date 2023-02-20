const compare = (a, b) => {
  return a.start - b.start == 0 ? a.end - b.end : a.start - b.start;
};

const search = (jobs, current_end, index) => {
  let result = -1;
  let start = index;
  let end = jobs.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (jobs[mid].start >= current_end) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
};

const jobs_left = (input) => {
  let output = { task: 0, earnings: 0 };
  let n = input.no_of_jobs;
  let profitTracker = new Array(n);

  input.jobs.sort(compare);
  let jobs = input.jobs;
  profitTracker[n - 1] = jobs[n - 1].profit;
  output.task++;

  for (let i = n - 2; i >= 0; i--) {
    let index = search(jobs, jobs[i].end, i);
    let profit = index === -1 ? 0 : profitTracker[index];
    profitTracker[i] = Math.max(profitTracker[i + 1], profit + jobs[i].profit);
  }

  let max = profitTracker[0];
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += jobs[i].profit;
  }

  output.earnings = total - max;
  output.task++;
  return output;
};

module.exports = jobs_left;
