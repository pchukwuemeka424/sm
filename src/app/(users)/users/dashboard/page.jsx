import getAuthUser from "@/utils/getAuthUser";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getAuthUser();

  if (!user) {
    console.log("User not authenticated, redirecting...");
    redirect("/login");
    return null; // Ensure no rendering happens after redirect
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>{user.phone}</p>
    </div>
  );
}
