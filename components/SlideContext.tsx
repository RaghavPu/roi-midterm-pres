"use client";

import { createContext, useContext } from "react";

interface SlideContextValue {
  step: number;
  isActive: boolean;
}

export const SlideContext = createContext<SlideContextValue>({ step: 0, isActive: false });

export function useSlideStep() {
  return useContext(SlideContext).step;
}

export function useSlideActive() {
  return useContext(SlideContext).isActive;
}
