import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

export const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow-sm 
                focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
    >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
            <CheckIcon className="h-3 w-3" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = "Checkbox"
