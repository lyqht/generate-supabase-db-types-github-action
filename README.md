# GitHub action to generate Supabase Database types

This GitHub action workflow aims to help you to create Supabase database definition types based on the Swagger OpenAPI specification of your Supabase REST data endpoint.

> 🔖 Here's an [article](https://blog.esteetey.dev/how-to-create-and-test-a-github-action-that-generates-types-from-supabase-database#heading-how-to-create-the-github-workflow) that explains more in-depth the rationale & implementation of this GitHub action.
## What it does

This workflow is a composite action:

- To generate database types based on the Swagger OpenAPI specification of your Supabase project REST data endpoint, [openapi-typescript](https://github.com/drwpow/openapi-typescript) is used.
- Commit and push github actions to your repo are performed by the [git-auto-commit action](https://github.com/stefanzweifel/git-auto-commit-action).
- Creating the pull request is performed by [pull-request action](https://github.com/repo-sync/pull-request).

## How to use

<details><summary>If you don't have an existing GitHub Action workflow for your repository</summary>

1. Create a folder `.github/workflows` if you don't have it already 
2. Inside that folder, create a YAML file say `update-types.yml`
3. In the `update-types.yml` file, you can copy the example above and modify it to your usage.
4. You can choose to declare the `schedule` with a cron expression to run the job at a specified frequency e.g. every day once.
</details>

Otherwise, you can get started by referring to to the example given and the input options available.

### Simple Example

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
          SUPABASE_REF_ID: ${{ secrets.SUPABASE_REF_ID }}
          SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
          OUTPUT_PATH: db.types.ts
```

### For autogeneration of types

```yml
name: Update database types
on:
  push:
    branches: [ main ]
    paths:
      - '*.sql'

jobs:
  build:
    if: github.head_ref != 'supabot**'
    runs-on: ubuntu-latest
      steps:
        - uses: lyqht/generate-supabase-db-types-github-action@main
          with:
            SUPABASE_REF_ID: ${{ secrets.SUPABASE_REF_ID }}
            SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
            DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
            OUTPUT_PATH: db.types.ts
```

---

## Cavaets

> Note that if your Supabase project is paused or deleted, this bot will only result in failed jobs.
