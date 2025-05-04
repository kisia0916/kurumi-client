-- CreateTable
CREATE TABLE "Food" (
    "id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sales_status" TEXT NOT NULL,
    "Allergens" TEXT[],

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
