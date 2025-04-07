-- CreateTable
CREATE TABLE "Compatibility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name1" TEXT NOT NULL,
    "gender1" TEXT NOT NULL,
    "name2" TEXT NOT NULL,
    "gender2" TEXT NOT NULL,
    "percent" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Compatibility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
