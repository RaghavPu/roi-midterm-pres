"use client";

import { createContext, useContext } from "react";

interface SlideContextValue {
  step: number;
  isActive: boolean;
  isMinimap: boolean;
  minimapHighlight?: string;
}

export const SlideContext = createContext<SlideContextValue>({ step: 0, isActive: false, isMinimap: false });

export function useSlideStep() {
  return useContext(SlideContext).step;
}

export function useSlideActive() {
  return useContext(SlideContext).isActive;
}

export function useSlideMinimap() {
  return useContext(SlideContext).isMinimap;
}

export function useMinimapHighlight() {
  return useContext(SlideContext).minimapHighlight;
}
