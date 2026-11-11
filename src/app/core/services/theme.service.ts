import { Injectable, effect, signal, inject } from "@angular/core";
import { PrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import { definePreset } from "@primeng/themes";

export type ThemeMode = "light" | "dark";
export type ThemeColor =
  | "rishvi" | "blue" | "green" | "purple" | "orange" | "cyan" | "pink"
  | "violet" | "magenta" | "emerald" | "teal" | "sky" | "indigo" | "amber" | "rose";
export type HeroStyle = "grid" | "orbit";
export type SurfaceName = "slate" | "gray" | "zinc" | "neutral" | "stone" | "ocean" | "plum" | "midnight";

export interface PaletteOption<K extends string> {
  key: K;
  label: string;
  /** Swatch colour. */
  hex: string;
}

const COLOR_PRESETS: Record<string, Record<string, string>> = {
  // Rishvi brand palette (Electric Blue #118CFF at 500)
  rishvi: {
    50: "#eef7ff",
    100: "#d9edff",
    200: "#bce0ff",
    300: "#8eceff",
    400: "#59b2ff",
    500: "#118cff",
    600: "#0a72f0",
    700: "#0b5ccc",
    800: "#104ea4",
    900: "#134581",
    950: "#0f2b52",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724",
  },
};

// ---- Palette generation helpers (extra primary colours and surface palettes) ----
function mixHex(a: string, b: string, t: number): string {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return "#" + pa.map((v, i) => Math.round(v + (pb[i] - v) * t).toString(16).padStart(2, "0")).join("");
}

function primaryScale(base: string): Record<string, string> {
  return {
    50: mixHex(base, "#ffffff", 0.93),
    100: mixHex(base, "#ffffff", 0.85),
    200: mixHex(base, "#ffffff", 0.7),
    300: mixHex(base, "#ffffff", 0.5),
    400: mixHex(base, "#ffffff", 0.28),
    500: base,
    600: mixHex(base, "#000000", 0.14),
    700: mixHex(base, "#000000", 0.28),
    800: mixHex(base, "#000000", 0.42),
    900: mixHex(base, "#000000", 0.56),
    950: mixHex(base, "#000000", 0.72),
  };
}

function surfaceScale(base: string): Record<string, string> {
  return {
    0: "#ffffff",
    50: mixHex(base, "#ffffff", 0.95),
    100: mixHex(base, "#ffffff", 0.9),
    200: mixHex(base, "#ffffff", 0.8),
    300: mixHex(base, "#ffffff", 0.64),
    400: mixHex(base, "#ffffff", 0.34),
    500: base,
    600: mixHex(base, "#000000", 0.22),
    700: mixHex(base, "#000000", 0.42),
    800: mixHex(base, "#000000", 0.62),
    900: mixHex(base, "#000000", 0.8),
    950: mixHex(base, "#000000", 0.9),
  };
}

const EXTRA_PRIMARY: Record<string, string> = {
  violet: "#7d5bff",
  magenta: "#e42bfd",
  emerald: "#10b981",
  teal: "#14b8a6",
  sky: "#0ea5e9",
  indigo: "#6366f1",
  amber: "#f59e0b",
  rose: "#f43f5e",
};
Object.entries(EXTRA_PRIMARY).forEach(([key, hex]) => (COLOR_PRESETS[key] = primaryScale(hex)));

/** Primary colour options shown in the home-page customizer. */
export const PRIMARY_OPTIONS: PaletteOption<ThemeColor>[] = (
  [
    ["rishvi", "Rishvi"], ["violet", "Violet"], ["purple", "Purple"], ["magenta", "Magenta"],
    ["emerald", "Emerald"], ["teal", "Teal"], ["cyan", "Cyan"], ["sky", "Sky"],
    ["indigo", "Indigo"], ["orange", "Orange"], ["amber", "Amber"], ["rose", "Rose"],
  ] as [ThemeColor, string][]
).map(([key, label]) => ({ key, label, hex: COLOR_PRESETS[key][500] }));

const SURFACE_BASES: Record<SurfaceName, string> = {
  slate: "#64748b",
  gray: "#6b7280",
  zinc: "#71717a",
  neutral: "#737373",
  stone: "#78716c",
  ocean: "#3b6ea5",
  plum: "#7a5fb0",
  midnight: "#2b3b63",
};

/** Surface options. `scale` is null for slate, which is PrimeNG Aura's own default. */
export const SURFACE_OPTIONS: (PaletteOption<SurfaceName> & { scale: Record<string, string> | null })[] = (
  Object.keys(SURFACE_BASES) as SurfaceName[]
).map((key) => ({
  key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
  hex: SURFACE_BASES[key],
  scale: key === "slate" ? null : surfaceScale(SURFACE_BASES[key]),
}));

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly primeNG = inject(PrimeNG);

  // Signals for reactive theme state
  isDarkMode = signal<boolean>(this.getStoredTheme() === "dark");
  primaryColor = signal<ThemeColor>(this.getStoredColor());
  surface = signal<SurfaceName>(this.getStoredSurface());
  /** Home page hero layout. */
  heroStyle = signal<HeroStyle>((localStorage.getItem("heroStyle") as HeroStyle) === "orbit" ? "orbit" : "grid");
  sidebarVisible = signal<boolean>(true);

  constructor() {
    // Apply theme on initialization
    this.applyTheme();

    // Watch for changes
    effect(() => {
      const _ = this.isDarkMode();
      const __ = this.primaryColor();
      const ___ = this.surface();
      this.applyTheme();
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode.update((value) => !value);
    localStorage.setItem("theme", this.isDarkMode() ? "dark" : "light");
  }

  setDarkMode(dark: boolean): void {
    this.isDarkMode.set(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  setHeroStyle(style: HeroStyle): void {
    this.heroStyle.set(style);
    localStorage.setItem("heroStyle", style);
  }

  changeSurface(name: SurfaceName): void {
    this.surface.set(name);
    localStorage.setItem("surface", name);
  }

  changePrimaryColor(color: ThemeColor): void {
    this.primaryColor.set(color);
    localStorage.setItem("primaryColor", color);
  }

  toggleSidebar(): void {
    this.sidebarVisible.update((value) => !value);
  }

  private applyTheme(): void {
    const mode = this.isDarkMode();
    const color = this.primaryColor();

    // Apply dark theme class to document element FIRST
    if (mode) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }

    // Get the color palette
    const colorPalette = COLOR_PRESETS[color];

    // Directly set CSS variables on document root for immediate update
    const root = document.documentElement;
    Object.entries(colorPalette).forEach(([shade, value]) => {
    root.style.setProperty(`--p-primary-${shade}`, value);
  });

    // Also set the main primary color variable
    root.style.setProperty("--p-primary-color", colorPalette[500]);
    root.style.setProperty("--p-primary-contrast-color", "#ffffff");

    // Then update PrimeNG theme configuration (for future updates)
    const surfaceScale = SURFACE_OPTIONS.find((o) => o.key === this.surface())?.scale;
    const MyPreset = definePreset(Aura, {
      semantic: {
        primary: colorPalette,
        ...(surfaceScale ? { colorScheme: { light: { surface: surfaceScale }, dark: { surface: surfaceScale } } } : {}),
      },
    });

    this.primeNG.theme.set({
      preset: MyPreset,
      options: {
        darkModeSelector: ".dark-theme",
        cssLayer: false,
      },
    });
  }

  private getStoredTheme(): string {
    return localStorage.getItem("theme") ?? "light";
  }

  private getStoredSurface(): SurfaceName {
    return (localStorage.getItem("surface") as SurfaceName) ?? "slate";
  }

  private getStoredColor(): ThemeColor {
    return (localStorage.getItem("primaryColor") as ThemeColor) ?? "blue";
  }
}
