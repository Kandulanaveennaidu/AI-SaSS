"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("30ee1985-23f9-433d-944d-309e50af47df");
  }, []);

  return null;
};
