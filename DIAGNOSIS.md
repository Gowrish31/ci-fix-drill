# CI Failure Diagnosis

## Failure 1

Step:
Test

Error:
Expected: 90
Received: 100

Cause:
Discount calculation assertion is incorrect.

## Failure 2

Step:
Install Dependencies

Error:
npm ERR! package-lock.json out of sync

Cause:
Lockfile does not match package.json.

## Failure 3

Step:
Workflow

Error:
Test job starts before install job.

Cause:
Missing needs: dependency.