import React, { useEffect } from "react";
import { useRouter } from "next/router";
export default function Myaccount({ cookie }) {
  const router = useRouter();
  useEffect(() => {
    if (!cookie.value) {
      router.push("/");
    }
  }, [router.query]);
  return <div>My account</div>;
}
