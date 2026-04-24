"use server";
import { supabase } from "@/components/serverComp/supabase";

export async function GET() {
  const { data, error } = await supabase.from("options").select("*");
    if (error) {
        return new Response(JSON.stringify({ error: error.message , code: 500 }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(request: Request) {
   
    
    const { name, value } = await request.json();
    const { data, error } = await supabase.from("options").insert({ data_type: name, data_value: value }).select("*").single();
    if (error) {
        return new Response(JSON.stringify({ error: error.message , code: 500 }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new Response(JSON.stringify({ data }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}