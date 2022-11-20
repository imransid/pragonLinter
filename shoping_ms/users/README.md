# Custom Script

    - prisma:dev:deploy : `To Deploy migrate prisma table`
    - db:dev:rm : `Docker To Stop DB && remove  DB`
    - db:dev:up : `Docker To Start DB`
    - db:dev:restart : `Restart Everything Docker && Migration`

## migration DB :: `npx prisma migrate dev`

## show DB :: `npx prisma studio`

## run Docker :: `docker compose up dev-db -d`

## check Docker :: `docker ps`

## DTO : Data Transfer Object

# All Dependency Package

- @prisma/client ** for DB manage **
- argon2 ** for password encrypt **
- class-validator ** for validation nest Pipes **
- class-transformer ** for validation nest Pipes **
