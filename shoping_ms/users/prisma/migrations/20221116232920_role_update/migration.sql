/*
  Warnings:

  - The `role` column on the `users_role` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'SERVICEADMIN', 'ADMIN');

-- AlterTable
ALTER TABLE "users_role" ADD COLUMN     "approveId" TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
