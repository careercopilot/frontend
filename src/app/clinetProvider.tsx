"use client";

import axios from "axios";
import React from "react";
import { Cookies, CookiesProvider } from "react-cookie";
import { SWRConfig } from "swr";

function ClinetProvider({ children }: { children: React.ReactNode }) {
  const token = new Cookies().get("cc-token");
  if (
    token &&
    axios.defaults.headers.common["Authorization"] != "Bearer " + token
  ) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }

  return (
    <SWRConfig
      value={{
        shouldRetryOnError: (err: any) => {
          if (err.response) {
            /**
             * If the error is 401, it means the token is invalid.
             * So, we return false to stop retrying.
             */
            if (err.response.status === 401) {
              return false;
            }
          }
          return true;
        },
      }}
    >
      <CookiesProvider>{children}</CookiesProvider>{" "}
    </SWRConfig>
  );
}

export default ClinetProvider;
