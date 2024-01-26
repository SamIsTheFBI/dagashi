<div align="center">

# Dagashi - A Food Delivery Web App
 _Built with Nextjs, ShadcnUI & Clerk_ 

|![iPhone 12 Pro-1706168520061](https://github.com/SamIsTheFBI/reown-now/assets/70562711/f87c4a3b-d9dc-48d2-a27e-b7cdb513e49d)|![iPhone 12 Pro-1706168719014](https://github.com/SamIsTheFBI/reown-now/assets/70562711/2209f87a-b446-4b74-a871-4daac2f0aa25)|![iPhone 12 Pro-1706168693639](https://github.com/SamIsTheFBI/reown-now/assets/70562711/b03f9b46-b3a9-42a9-b2a4-01bc50353829)|![iPhone 12 Pro-1706168703685](https://github.com/SamIsTheFBI/reown-now/assets/70562711/b35c27ce-ad1a-423f-8a46-62c3c6d39a53)|
|--|--|--|--|

</div>

</div>

## Table of contents

- [Overview](#overview)
- [Dependencies](#dependencies)
- [How to deploy](#how-to-deploy)

## Overview
Check the live deployment [here](https://dagashi.vercel.app/).

## Dependencies
This project is built with Nextjs Pages Router bootstrapped with [Create T3 App](https://create.t3.gg/). The beautiful frontend uses ShadcnUI + Tailwind and backend is held together by Prisma + Supabase & tRPC. Further dependencies can be checked from `package.json`.

## How to deploy

> [!IMPORTANT]
> This project is still a WIP. Deployment procedure may change in upcoming commits.
> Even the packages!
> <br />Supabase integration in `supabase` branch.
> `main` branch uses sqlite for database. 

- **Clone the repository**: First off, clone this repository by downloading the zip file from the above <kbd>Code</kbd> button. Or better yet, if you have Git installed in your system, run the following command in your terminal:
   
  ```bash
  git clone https://github.com/SamIsTheFBI/dagashi
  ```
- **Install dependencies**: Go to the directory of the code & run the following command.

  ```bash
  npm install
  ```
  If you have any other Node package manager (`yarn`, `bun`, or `pnpm`) do as required to install the packages as defined in [package.json](https://github.com/SamIsTheFBI/dagashi/blob/main/package.json).
-  **Create an ENV file**: Create a `.env` in the root directory and fill the values as given in [.env.example](https://github.com/SamIsTheFBI/dagashi/blob/main/.env.example)

    ```env
    # Prisma
    # https://www.prisma.io/docs/reference/database-reference/connection-urls#env
    DATABASE_URL="file:./db.sqlite"
    
    # Clerk Auth Provider
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  
    ```
    **Now you're ready to run the app! 🚀**

- **Start the project**: Run the following commands:

  ```bash
  npm run db:push
  npm run dev
  ```
