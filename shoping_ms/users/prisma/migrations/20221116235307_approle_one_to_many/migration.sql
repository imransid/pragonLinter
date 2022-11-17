/*
  Warnings:

  - You are about to drop the column `userId` on the `users_role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[approveId]` on the table `users_role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "users_role" DROP CONSTRAINT "users_role_userId_fkey";

-- AlterTable
ALTER TABLE "users_role" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "users_role_approveId_key" ON "users_role"("approveId");

-- AddForeignKey
ALTER TABLE "users_role" ADD CONSTRAINT "users_role_approveId_fkey" FOREIGN KEY ("approveId") REFERENCES "users"("email") ON DELETE SET NULL ON UPDATE CASCADE;
