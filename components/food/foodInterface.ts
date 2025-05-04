export type FoodItem = {
    id: string; // PrismaのUUIDに合わせてString型に変更
    name: string;
    category: string;
    sales_status: "在庫あり" | "残りわずか" | "売り切れ"; // Prismaのsales_statusに合わせて変更
    allergens: string[];
    photo: string; // Prismaのphotoに合わせて変更
    amount: number; // Prismaのamountに合わせて変更
};