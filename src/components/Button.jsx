export const Button = ({className = "", size = "default", children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/80 shadow-lg shadow-[var(--color-primary)]/25 cursor-pointer";

const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
        <button className={classes}>
            <span className = "relative flex items-center justify-center gap-2"></span>
            {children}
        </button>
    );
};