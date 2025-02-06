// components/ui/button.jsx

import React from "react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
  destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
  outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900",
  ghost: "hover:bg-gray-100 text-gray-900",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-8",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";
    
    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="mr-2 animate-spin">⚪</span>
        ) : null}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };