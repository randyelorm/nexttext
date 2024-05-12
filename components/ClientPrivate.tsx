"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/Client";
import { useRouter } from "next/navigation";

type User = {
  email: string;
};

const ClientRoute = () => {
  const [user, SetUser] = useState<User | null>(null);
  const route = useRouter();

  useEffect(() => {
    async function getUser() {
      const supabse = createClient();
      const { data, error } = await supabse.auth.getUser();
      if (data?.user) {
        SetUser(data.user as User);
      } else {
        alert(error);
      }
    }

    getUser();
  }, [route]);

  return user === null ? <div>user</div> : <div>{user?.email}</div>;
};

export default ClientRoute;
