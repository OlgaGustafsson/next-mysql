import { query } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(req: Request, {params}: {params: {id: string}}) {
    const {id} = params;
    console.log("id", id);
    
    const result = await query ({
        query: "SELECT * FROM posts WHERE id = " + parseInt(id) 
        
    });
    return NextResponse.json(result, {status: 200})


}
export async function PATCH(req: Request, {params}: {params: {id: string}}) {

    const {id} = params;
    const body = await req.json();
    const {title, content} = body;


    const result = await query({
        query: "UPDATE posts SET title = ?, content = ? WHERE id = " + parseInt(id),
        values: [title, content]
    });
    return NextResponse.json(result, {status: 200})
}