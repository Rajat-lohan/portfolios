import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Manage Projects
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Manage Skills
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Contact Messages
        </div>
      </div>
    </div>
  );
}