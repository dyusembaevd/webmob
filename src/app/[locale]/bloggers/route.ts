import { redirect } from "@/navigation";

export async function GET(request: Request) {
  redirect("/");
}
