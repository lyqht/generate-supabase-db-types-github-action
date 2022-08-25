# GitHub action to generate Supabase Database types

This GitHub action workflow aims to help you to create Supabase database definition types based on the Swagger OpenAPI specification of your Supabase REST data endpoint.

> 🔖 Here's an [article](https://blog.esteetey.dev/how-to-create-and-test-a-github-action-that-generates-types-from-supabase-database#heading-how-to-create-the-github-workflow) that explains more in-depth the rationale & implementation of this GitHub action.
## What it does

This workflow is a composite action:

- To generate database types based on the Swagger OpenAPI specification of your Supabase project REST data endpoint, [openapi-typescript](https://github.com/drwpow/openapi-typescript) is used.
- Commit and push github actions to your repo are performed by the [git-auto-commit action](https://github.com/stefanzweifel/git-auto-commit-action).
- Creating the pull request is performed by [pull-request action](https://github.com/repo-sync/pull-request).

## How to use

If you are new to GitHub Actions, refer to [this section](#if-you-dont-have-an-existing-github-action-workflow-for-your-repository). Otherwise, you can get started by referring to to the example given and the input options available.

### Example

```yml
name: Update database types
on:
  schedule:
    - cron: '*/60 * * * *'
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: lyqht/generate-supabase-db-types-github-action@main
        with:
            SUPABASE_URL: ${{secrets.SUPABASE_URL }} # e.g. https://interestingproject.supabase.co
            SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
            OUTPUT_PATH: src/types/supabase.ts
```

### If you don't have an existing GitHub Action workflow for your repository

1. Create a folder `.github/workflows` if you don't have it already 
2. Inside that folder, create a YAML file say `update-types.yml`
3. In the `update-types.yml` file, you can copy the example above and modify it to your usage.
4. You can choose to declare the `schedule` with a cron expression to run the job at a specified frequency e.g. every day once.

---

> Note that if your Supabase project is paused or deleted, this bot will only result in failed jobs.
