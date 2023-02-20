# Coding Assignment
## Problem Statement :
 A factory has a list of jobs to perform. Each job has a start time, end time, and profit value. The manager has asked his employee Lokesh to pick jobs of his choice. Lokesh wants to select jobs for him in such a way that would maximize his earnings.

Given a list of jobs how many jobs and total earnings are left for other employees once Lokesh picks jobs of his choice.
> Note: Lokesh can perform only one job at a time.

## Input format:
Each Job has 3 pieces of info – Start Time, End Time, and Profit
The first line contains the number of Jobs for the day. Say `n`. So there will be `3n` lines following as each job has 3 lines.
Each of the next ‘3n’ lines contains jobs in the following format:
- start_time
- end-time
- Profit

> start-time and end-time are in HHMM 24HRS format i.e. 9am is 0900 and 9PM is 2100

### Constraints:
The number of jobs in the day is less than 100 i.e. 0<_n<_10
The start time is always less than the end, and Hours can go only up to 2359.

### Output format:
The program should return an array of 2 integers where 1st one is the number of jobs left and the earnings of other employees.

#### Sample Input: 1
- Enter the number of Jobs
    - `3`
- Enter job start time, end time, and earnings
    - `0900`
    - `1030`
    - `100`
    - `1000`
    - `1200`
    - `500`
    - `1100`
    - `1200`
    - `300`
#### Sample Output: 1
- The number of tasks and earnings available for others
    - Task: `2`
    - Earnings: `400`

#### Sample Input: 2
- Enter the number of Jobs
    - `3`
- Enter job start time, end time, and earnings
    - `0900`
    - `1000`
    - `250`
    - `0945`
    - `1200`
    - `550`
    - `1130`
    - `1500`
    - `150`
#### Sample Output: 2
- The number of tasks and earnings available for others
    - Task: `2`
    - Earnings: `400`

#### Sample Input:3
- Enter the number of Jobs
    - `3`
- Enter job start time, end time, and earnings
    - `0900`
    - `1030`
    - `100`
    - `1000`
    - `1200`
    - `100`
    - `0900`
    - `1200`
    - `100`
#### Sample Output: 3
- The number of tasks and earnings available for others
    - Task: `2`
    - Earnings: `200` 