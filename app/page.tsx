import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/Server";
import Home from "@/components/Home";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <Home />;
}
