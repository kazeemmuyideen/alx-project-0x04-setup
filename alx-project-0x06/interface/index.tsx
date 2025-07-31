// interface/index.tsx

// From components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From Layout (optional, depending on your code)
export interface LayoutProps {
  children: React.ReactNode;
}
