import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const result = await query ({
        query: "SELECT * FROM posts ORDER BY createDate DESC",
        values: []
    });
    return NextResponse.json(result, {status: 200})
}

