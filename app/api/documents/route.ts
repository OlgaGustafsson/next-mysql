import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    const result = await query ({
        query: "SELECT * FROM posts ORDER BY createDate DESC",
        values: []
    });
    return NextResponse.json(result, {status: 200})
}

export async function POST(req: Request, res: Response) {

    const body = await req.json();
    const {title, content} = body;

    const results = await query ({
        query: "INSERT INTO posts (title, content) VALUES (?, ?)",
        values: [title, content]
    });
    return NextResponse.json(results, {status: 200})
}

