"use client";

import { createContext, useContext } from "react";

interface SlideContextValue {
  step: number;
}

export const SlideContext = createContext<SlideContextValue>({ step: 0 });

export function useSlideStep() {
  return useContext(SlideContext).step;
}
