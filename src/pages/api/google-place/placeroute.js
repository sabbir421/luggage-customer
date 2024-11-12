/** @format */

import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("storename");
  const radius = searchParams.get("radius");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const res = await fetch(
    BASE_URL +
      "/textsearch/json?query=" +
      storename +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=" +
      radius +
      "&key=" +
      GOOGLE_API_KEY,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const stores = await res.json();

  return NextResponse.json({ stores });
}
