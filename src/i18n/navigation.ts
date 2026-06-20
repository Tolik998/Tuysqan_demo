import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Локализованные обёртки над Link, redirect, usePathname, useRouter,
// которые автоматически учитывают текущий язык (/ru или /kk)
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
