// import { cookies } from 'next/headers';

import etf from "@/mocks/etf";

import type { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
  // const searchParams = request.nextUrl.searchParams
  // const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello

  return Response.json(etf);
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
