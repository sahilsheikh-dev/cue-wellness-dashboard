"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

const Calendar = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={className}>
        <DayPicker {...props} />
    </div>
))
Calendar.displayName = "Calendar"

export { Calendar }
