"use client";
import { getToken } from "@/msal/msal";
import { useEffect, useState } from "react";

export default function GetTokenTestPage() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    async function fetchToken() {
      await getToken().then((response) => {
        if (response) {
          setToken(response);
        }
      });
    }
    fetchToken();
  });
  return (
    <div className="w-1/2 bg-gray-100 p-4 rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
        Get Token Test Page
      </h1>
      <hr />
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
          Token
        </h2>
        <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-6">
          {token}
        </div>
      </div>
    </div>
  );
}
