import { Food } from "@/lib/generated/prisma";
import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export type ErrorResponse = { error: string };

export async function GET() {
  try {
    const foods = await prisma.food.findMany();
    return NextResponse.json<Food[]>(foods);
  } catch (error) {
    console.error("GET /api/food error:", error);
    return NextResponse.json<ErrorResponse>({ error: "データ取得に失敗しました" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Name, photo, amount, category, sales_status, Allergens } = body;
    const food = await prisma.food.create({
      data: {
        Name,
        photo,
        amount,
        category,
        sales_status,
        Allergens,
      },
    });
    return NextResponse.json<Food>(food);
  } catch (error) {
    console.error("POST /api/food error:", error);
    return NextResponse.json<ErrorResponse>({ error: "データ作成に失敗しました" }, { status: 500 });
  }
}