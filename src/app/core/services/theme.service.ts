import { Injectable, effect, signal, inject } from "@angular/core";
import { PrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import { definePreset } from "@primeng/themes";

export type ThemeMode = "light" | "dark";
export type ThemeColor = "rishvi" | "blue" | "green" | "purple" | "orange" | "cyan" | "pink";

const COLOR_PRESETS: Record<ThemeColor, Record<string, string>> = {
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

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly primeNG = inject(PrimeNG);

  // Signals for reactive theme state
  isDarkMode = signal<boolean>(this.getStoredTheme() === "dark");
  primaryColor = signal<ThemeColor>(this.getStoredColor());
  sidebarVisible = signal<boolean>(true);

  constructor() {
    // Apply theme on initialization
    this.applyTheme();

    // Watch for changes
    effect(() => {
      const _ = this.isDarkMode();
      const __ = this.primaryColor();
      this.applyTheme();
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode.update((value) => !value);
    localStorage.setItem("theme", this.isDarkMode() ? "dark" : "light");
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
    const MyPreset = definePreset(Aura, {
      semantic: {
        primary: colorPalette,
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

  private getStoredColor(): ThemeColor {
    return (localStorage.getItem("primaryColor") as ThemeColor) ?? "blue";
  }
}
