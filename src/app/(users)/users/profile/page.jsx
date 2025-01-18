import React from "react";
import Userdashboard from "@/components/userdashboard";
import Topbar from "@/components/topbar";
import profileUpdate from "@/actions/auth/profileUpdate";
import ProfileForm from "@/components/ProfileForm";
import getAuthUser from "@/utils/getAuthUser";
import User from "@/models/User";
import { redirect } from 'next/navigation';  // Import redirect from Next.js

export default async function Profile() {
  // Authenticate the user
  const user = await getAuthUser();
  if (!user) return redirect("/");

  // Fetch the user's profile
  const profile = await User.findOne({ username: user.username });
 

  // Convert profile to JSON
  const profileJson = JSON.parse(JSON.stringify(profile));

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      {/* Sidebar */}
      <Userdashboard />

      {/* Main Content Area */}
      <div className="col-span-4 p-6 bg-gray-100 grid grid-cols-1 gap-6">
        {/* Topbar */}
        <Topbar />
    
        {/* Profile Form */}
        <ProfileForm handler={profileUpdate} defaultValues={profileJson} />
      </div>
    </div>
  );
}
