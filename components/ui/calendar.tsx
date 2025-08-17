"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

// Experience timeline component colocated here per request
export function ExperienceTimeline() {
  const roles = [
    {
      company: "resumatch.io",
      title: "Software Engineer Intern",
      type: "Internship",
      location: "United States · Remote",
      from: "Jun 2025",
      to: "Present",
      duration: "3 mos",
      logo: "",
      bullets: [],
    },
    {
      company: "Margros",
      title: "Founding Engineer & Product Lead",
      type: "Part-time",
      location: "",
      from: "Nov 2024",
      to: "Present",
      duration: "10 mos",
      logo: "",
      bullets: [],
    },
    {
      company: "Institution's Innovation Council, BMSIT&M",
      title: "General Manager",
      type: "Full-time",
      location: "Bengaluru, Karnataka, India · On-site",
      from: "Apr 2025",
      to: "Present",
      duration: "5 mos",
      logo: "",
      bullets: [
        "Develop and execute yearly innovation roadmaps in line with IIC and MIC guidelines.",
        "Lead cross-functional teams to execute innovation-driven activities and ensure smooth operations.",
        "Build partnerships with industry leaders, startups, and mentors.",
        "Oversee outreach efforts and ensure IIC compliance and reporting.",
      ],
    },
    {
      company: "Institution's Innovation Council, BMSIT&M",
      title: "Marketing Team Member",
      type: "",
      location: "Remote",
      from: "Dec 2024",
      to: "Apr 2025",
      duration: "5 mos",
      logo: "",
      bullets: [
        "Strategic Planning, Social Media Marketing, Sponsorship Relations",
      ],
    },
    {
      company: "RedPaper",
      title: "Web Developer & AI Contributor | Concentration",
      type: "Internship",
      location: "Kathmandu, Nepal · Remote",
      from: "Feb 2025",
      to: "Apr 2025",
      duration: "3 mos",
      logo: "",
      bullets: [
        "Contributed to Art Attack and Turtle Justice projects (web and AI).",
        "Integrated AI-driven solutions and collaborated with cross-functional teams.",
      ],
    },
    {
      company: "Waycup Studios",
      title: "Co-Founder",
      type: "Freelance",
      location: "Bengaluru, India · Remote",
      from: "Jul 2022",
      to: "Dec 2024",
      duration: "2 yrs 6 mos",
      logo: "",
      bullets: ["Led projects across web and game design."],
    },
    {
      company: "Anime Canvas",
      title: "Senior Web Developer",
      type: "Freelance",
      location: "Bengaluru, India · Remote",
      from: "Aug 2024",
      to: "Nov 2024",
      duration: "4 mos",
      logo: "",
      bullets: [
        "Designed and developed the official website with e‑commerce, using Next.js, Tailwind, Vercel, and Framer Motion.",
        "Live: https://animecanvas.in",
      ],
    },
  ]

  return (
    <div className="space-y-4 p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur rounded-xl border border-gray-200/60 dark:border-gray-800/60">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Experience</h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-800 pl-6">
        {roles.map((role, idx) => (
          <li key={idx} className="mb-6">
            <div className="absolute -left-2 mt-1 size-3 rounded-full bg-blue-500" />
            <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">{role.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{role.company}{role.type ? ` · ${role.type}` : ""}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{role.from} - {role.to} · {role.duration}</div>
            {role.location && <div className="text-xs text-gray-500 dark:text-gray-400">{role.location}</div>}
            {role.bullets.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
