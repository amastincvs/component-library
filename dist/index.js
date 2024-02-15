"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Badge: () => Badge,
  Button: () => Button,
  Calendar: () => Calendar,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  ContextMenu: () => ContextMenu,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuShortcut: () => ContextMenuShortcut,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Form: () => Form,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  Header: () => Header2,
  HeaderThemeToggle: () => HeaderThemeToggle,
  Input: () => Input,
  Label: () => Label3,
  Popover: () => Popover,
  PopoverClose: () => PopoverClose,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  RadioGroup: () => RadioGroup3,
  RadioGroupItem: () => RadioGroupItem,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator4,
  Slider: () => Slider,
  Sonner: () => Sonner,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea,
  ThemeProvider: () => ThemeProvider,
  ThemeProviderContext: () => ThemeProviderContext,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastClose: () => ToastClose,
  ToastDescription: () => ToastDescription,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toaster: () => Toaster2,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  reducer: () => reducer,
  sonnerToast: () => import_sonner.toast,
  toast: () => toast2,
  useFormField: () => useFormField,
  useTheme: () => useTheme2,
  useToast: () => useToast
});
module.exports = __toCommonJS(src_exports);

// src/components/Accordion/index.tsx
var React2 = __toESM(require("react"));
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_react_icons = require("@radix-ui/react-icons");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Accordion/index.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React2.createElement(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-border", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React2.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React2.createElement(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React2.createElement(import_react_icons.ChevronDownIcon, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
)));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React2.createElement(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props
  },
  /* @__PURE__ */ React2.createElement("div", { className: cn("pb-4 pt-0", className) }, children)
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/Badge/index.tsx
var React3 = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/Button/index.tsx
var React4 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React4.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React4.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Calendar/index.tsx
var React5 = __toESM(require("react"));
var import_react_icons2 = require("@radix-ui/react-icons");
var import_react_day_picker = require("react-day-picker");
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return /* @__PURE__ */ React5.createElement(
    import_react_day_picker.DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent",
          props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ React5.createElement(import_react_icons2.ChevronLeftIcon, { className: "h-4 w-4" }),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ React5.createElement(import_react_icons2.ChevronRightIcon, { className: "h-4 w-4" })
      },
      ...props
    }
  );
}
Calendar.displayName = "Calendar";

// src/components/Card/index.tsx
var React6 = __toESM(require("react"));
var Card = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "div",
  {
    ref,
    className: cn("p-6 pt-0", className),
    ...props
  }
));
CardContent.displayName = "CardContent";
var CardFooter = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React6.createElement(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/Checkbox/index.tsx
var React7 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_icons_react = require("@tabler/icons-react");
var Checkbox = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React7.createElement(
    CheckboxPrimitive.Indicator,
    {
      className: cn("flex items-center justify-center text-current")
    },
    /* @__PURE__ */ React7.createElement(import_icons_react.IconCheck, { className: "h-4 w-4" })
  )
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/Command/index.tsx
var React8 = __toESM(require("react"));
var import_react_icons3 = require("@radix-ui/react-icons");
var import_cmdk = require("cmdk");
var Command = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = import_cmdk.Command.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ React8.createElement(Dialog, { ...props }, /* @__PURE__ */ React8.createElement(DialogContent, { className: "overflow-hidden p-0" }, /* @__PURE__ */ React8.createElement(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children)));
};
var CommandInput = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  "div",
  {
    className: "flex items-center border-b px-3",
    "cmdk-input-wrapper": ""
  },
  /* @__PURE__ */ React8.createElement(import_react_icons3.MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ React8.createElement(
    import_cmdk.Command.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React8.forwardRef((props, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React8.createElement(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React8.createElement(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/ContextMenu/index.tsx
var React9 = __toESM(require("react"));
var ContextMenuPrimitive = __toESM(require("@radix-ui/react-context-menu"));
var import_icons_react2 = require("@tabler/icons-react");
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = React9.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React9.createElement(import_icons_react2.IconChevronRight, { className: "ml-auto h-4 w-4" })
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(ContextMenuPrimitive.Portal, null, /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
)));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React9.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React9.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React9.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(import_icons_react2.IconCheck, { className: "h-4 w-4" }))),
  children
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = React9.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React9.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React9.createElement(ContextMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React9.createElement(import_icons_react2.IconPointFilled, { className: "h-4 w-4 fill-current" }))),
  children
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = React9.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(
  ContextMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React9.createElement(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// src/components/Dialog/index.tsx
var React10 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_icons_react3 = require("@tabler/icons-react");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Portal,
  {
    className: cn(className),
    ...props
  }
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;
var DialogOverlay = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogClose = React10.forwardRef(({ children, className, ...props }, ref) => /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Close,
  {
    "aria-label": "Close",
    ref,
    className: cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      className
    ),
    ...props
  },
  children
));
DialogClose.displayName = DialogPrimitive.Content.displayName;
var DialogContent = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React10.createElement(DialogPortal, null, /* @__PURE__ */ React10.createElement(DialogOverlay, null), /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
      className
    ),
    ...props
  },
  children,
  props.close ?? /* @__PURE__ */ React10.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, /* @__PURE__ */ React10.createElement(import_icons_react3.IconX, { className: "h-4 w-4" }), /* @__PURE__ */ React10.createElement("span", { className: "sr-only" }, "Close"))
)));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React10.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ React10.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React10.createElement(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/DropdownMenu/index.tsx
var React11 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_icons_react4 = require("@tabler/icons-react");
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React11.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React11.createElement(import_icons_react4.IconChevronRight, { className: "ml-auto h-4 w-4" })
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React11.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
)));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React11.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React11.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React11.createElement(import_icons_react4.IconCheck, { className: "h-4 w-4" }))),
  children
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React11.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React11.createElement(import_icons_react4.IconPointFilled, { className: "h-4 w-4 fill-current" }))),
  children
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React11.createElement(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/Form/index.tsx
var React12 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React12.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ React12.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React12.createElement(import_react_hook_form.Controller, { ...props }));
};
var useFormField = () => {
  const fieldContext = React12.useContext(FormFieldContext);
  const itemContext = React12.useContext(FormItemContext);
  const { getFieldState, formState } = (0, import_react_hook_form.useFormContext)();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React12.createContext(
  {}
);
var FormItem = React12.forwardRef(({ className, ...props }, ref) => {
  const id = React12.useId();
  return /* @__PURE__ */ React12.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React12.createElement(
    "div",
    {
      ref,
      className: cn("space-y-2", className),
      ...props
    }
  ));
});
FormItem.displayName = "FormItem";
var FormLabel = React12.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ React12.createElement(
    Label3,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React12.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ React12.createElement(
    import_react_slot2.Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React12.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ React12.createElement(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-[0.8rem] text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React12.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ React12.createElement(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-[0.8rem] font-medium text-destructive", className),
      ...props
    },
    body
  );
});
FormMessage.displayName = "FormMessage";

// src/components/Header/index.tsx
var React13 = __toESM(require("react"));
var import_icons_react5 = require("@tabler/icons-react");
function CVSHealthLogo() {
  return /* @__PURE__ */ React13.createElement(
    "svg",
    {
      "aria-label": "CVS Health logo",
      version: "1.2",
      baseProfile: "tiny",
      id: "Layer_1",
      x: "0px",
      y: "0px",
      viewBox: "0 0 606.67 100.67",
      overflow: "visible",
      height: 32
    },
    /* @__PURE__ */ React13.createElement("g", null, /* @__PURE__ */ React13.createElement(
      "path",
      {
        className: "dark:fill-white",
        d: "M461.84,87.85h14.02v-6.19h-6.37V46.88h6.37v-6.19h-14.02v7.01c-4.01-5.19-10.01-8.38-17.12-8.38\n  c-13.38,0-23.3,10.74-23.3,24.94c0,14.2,9.92,24.95,23.3,24.95c7.1,0,13.11-3.19,17.12-8.38V87.85z M414.77,75.2h-7.65\n  c-2.73,4.73-7.65,7.65-14.66,7.65c-10.65,0-16.39-6.47-17.12-16.02h40.51v-3.37c0-14.38-9.19-24.12-23.67-24.12\n  c-14.57,0-24.67,10.29-24.67,24.94c0,14.75,10.1,24.95,24.67,24.95C402.85,89.22,411.04,83.85,414.77,75.2 M315.36,48.07V25.95\n  h6.83v-6.37h-21.58v6.37h6.83v55.53h-6.83v6.37h21.58v-6.37h-6.83V54.26h34.23v27.22h-6.83v6.37h21.58v-6.37h-6.83V25.95h6.83\n  v-6.37h-21.58v6.37h6.83v22.12H315.36z M549.69,81.66h-6.37V60.54c0-9.83,5.01-14.75,13.84-14.75c7.92,0,13.02,4.92,13.02,14.75\n  v21.12h-6.37v6.19h20.39v-6.19h-6.37V60.54c0-11.74-7.01-21.21-19.75-21.21c-6.65,0-11.56,2.55-14.75,6.65v-26.4H529.3v6.19h6.37\n  v55.9h-6.37v6.19h20.39V81.66z M429.25,64.27c0-10.74,6.83-18.48,16.48-18.48c9.74,0,16.38,7.92,16.38,18.48\n  c0,10.56-6.64,18.48-16.38,18.48C436.08,82.75,429.25,75.02,429.25,64.27 M392.2,45.7c10.01,0,15.2,7.1,16.02,15.02h-32.86\n  C376.27,52.07,382.09,45.7,392.2,45.7 M515.46,75.65V46.88h9.56v-6.19h-9.56V28.68h-7.65v12.02h-7.28v6.19h7.28v29.13\n  c0,8.38,3.73,12.47,12.56,12.47c1.37,0,3.55-0.27,4.64-0.64v-6.19c-1.46,0.27-2.73,0.36-3.91,0.36\n  C517.28,82.03,515.46,80.66,515.46,75.65 M496.53,88.49c1.28,0,3.28-0.27,4.28-0.64v-6.19c-1.27,0.27-2.37,0.36-3.37,0.36\n  c-3.28,0-4.83-1.73-4.83-6.83V19.57h-14.02v6.19h6.37v49.8C484.96,84.03,488.33,88.49,496.53,88.49"
      }
    ), /* @__PURE__ */ React13.createElement(
      "path",
      {
        fill: "#CC0000",
        d: "M254.73,66.46c1.09,5.1,4.01,6.92,10.01,6.92c5.28,0,8.19-1.91,8.19-4.92c0-4.28-3.91-4.64-12.02-6.74\n  c-9.47-2.46-15.57-4.55-18.39-6.56c-5.28-3.73-7.83-9.01-7.83-15.75c0-13.2,10.38-21.76,28.49-21.76\n  c17.57,0,27.95,7.74,29.13,21.48h-20.67c-0.73-4.1-3.55-6.01-8.83-6.01c-4.64,0-6.92,1.55-6.92,4.64c0,3.64,3.55,4.28,10.1,6.01\n  c8.47,2.19,15.2,3.55,19.48,6.46c6.01,4.01,8.74,8.92,8.74,15.93c0,14.84-10.65,23.49-30.41,23.49c-18.3,0-29.04-8.65-30.41-23.21\n  H254.73z M174.35,61.27c-1.18,17.93-13.02,28.4-32.59,28.4c-21.76,0-35.05-13.84-35.05-35.96c0-22.3,13.38-36.05,34.59-36.05\n  c19.75,0,31.41,10.01,32.68,27.68h-20.85c-0.64-6.92-4.55-10.56-11.56-10.56c-8.56,0-12.84,6.28-12.84,18.94\n  c0,12.38,4.64,18.84,13.47,18.84c6.65,0,10.83-4.01,11.47-11.29H174.35z M169.7,19.57h22.3l11.47,44.06l12.29-44.06h21.48\n  l-22.94,68.19h-21.76L169.7,19.57z M36.7,17.75c-2.59,0-5.17,0.99-7.14,2.97l-14.3,14.3c-3.94,3.94-3.94,10.35,0.01,14.3\n  l40.35,40.36l40.35-40.36c3.95-3.95,3.94-10.35-0.01-14.3L81.68,20.73c-1.97-1.98-4.56-2.97-7.14-2.97c-2.59,0-5.19,1-7.17,2.99\n  L55.62,32.49L43.86,20.73C41.88,18.75,39.29,17.75,36.7,17.75L36.7,17.75z"
      }
    )),
    /* @__PURE__ */ React13.createElement("g", null, /* @__PURE__ */ React13.createElement(
      "path",
      {
        className: "dark:fill-white",
        d: "M595.7,88.15c-4.03,0-6.89-3.01-6.89-7c0-4.21,3.18-7,6.89-7c3.67,0,6.85,2.79,6.85,7\n		C602.55,85.36,599.37,88.15,595.7,88.15z M595.7,75.36c-3.03,0-5.39,2.38-5.39,5.79c0,3.18,2.06,5.79,5.39,5.79\n		c3,0,5.35-2.36,5.35-5.79C601.05,77.74,598.69,75.36,595.7,75.36z M594.31,85.15h-1.27V77.4h2.94c1.87,0,2.83,0.66,2.83,2.23\n		c0,1.4-0.86,1.98-2.02,2.12l2.17,3.41h-1.44l-2-3.31h-1.2V85.15z M595.73,80.75c0.96,0,1.8-0.09,1.8-1.22\n		c0-0.94-0.92-1.05-1.68-1.05h-1.54v2.27H595.73z"
      }
    ))
  );
}
function ApplicationName(props) {
  return /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React13.createElement("div", { className: "h-6 w-px bg-border" }), /* @__PURE__ */ React13.createElement("span", { className: "text-sm font-medium tracking-tight text-muted-foreground" }, props.name));
}
function Header2(props) {
  return /* @__PURE__ */ React13.createElement(
    "header",
    {
      ...props,
      className: cn(
        "relative z-20 flex items-center justify-between border-b bg-background p-6 shadow-sm",
        props.className
      )
    },
    /* @__PURE__ */ React13.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React13.createElement(CVSHealthLogo, null), props.name ? /* @__PURE__ */ React13.createElement(ApplicationName, { name: props.name }) : null),
    props.children
  );
}
var HeaderThemeToggle = React13.forwardRef((props, ref) => {
  return /* @__PURE__ */ React13.createElement(TooltipProvider, { delayDuration: 0 }, /* @__PURE__ */ React13.createElement(Tooltip, null, /* @__PURE__ */ React13.createElement(TooltipTrigger, { asChild: true }, /* @__PURE__ */ React13.createElement(
    Button,
    {
      ...props,
      "aria-label": "Toggle theme",
      variant: "outline",
      size: "icon",
      onClick: props.onClick,
      ref
    },
    /* @__PURE__ */ React13.createElement(
      import_icons_react5.IconSunFilled,
      {
        "aria-label": "Click to switch to light mode",
        size: 20,
        className: "hidden dark:block"
      }
    ),
    /* @__PURE__ */ React13.createElement(
      import_icons_react5.IconMoonStars,
      {
        "aria-label": "Click to switch to dark mode",
        size: 20,
        className: "dark:hidden"
      }
    )
  )), /* @__PURE__ */ React13.createElement(TooltipContent, { "aria-hidden": "true" }, "Toggle theme")));
});
HeaderThemeToggle.displayName = "HeaderThemeToggle";

// src/components/Input/index.tsx
var React14 = __toESM(require("react"));
var Input = React14.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ React14.createElement(
    "div",
    {
      className: cn(
        props.icon ? "relative flex items-center hover:!text-card-foreground [&:has(input:invalid)]:text-muted-foreground [&:has(input:valid)]:text-card-foreground [&>svg]:absolute [&>svg]:left-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:transition-all" : void 0,
        props.icon && props.disabled ? "cursor-not-allowed text-muted-foreground opacity-50 hover:!text-muted-foreground" : void 0
      )
    },
    props.icon ?? null,
    /* @__PURE__ */ React14.createElement(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
          props.icon ? "pl-11 pr-3" : "px-3"
        ),
        ref,
        ...props
      }
    )
  );
});
Input.displayName = "Input";

// src/components/Label/index.tsx
var React15 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority3 = require("class-variance-authority");
var labelVariants = (0, import_class_variance_authority3.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label3 = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React15.createElement(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label3.displayName = LabelPrimitive.Root.displayName;

// src/components/Popover/index.tsx
var React16 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverClose = PopoverPrimitive.Close;
var PopoverContent = React16.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React16.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React16.createElement(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
)));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/RadioGroup/index.tsx
var React17 = __toESM(require("react"));
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_icons_react6 = require("@tabler/icons-react");
var RadioGroup3 = React17.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ React17.createElement(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup3.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React17.forwardRef(({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ React17.createElement(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React17.createElement(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center" }, /* @__PURE__ */ React17.createElement(import_icons_react6.IconCircleFilled, { className: "h-3 w-3 fill-primary" }))
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/ScrollArea/index.tsx
var React18 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
var import_class_variance_authority4 = require("class-variance-authority");
var scrollbarVariants = (0, import_class_variance_authority4.cva)("flex touch-none select-none transition-colors", {
  variants: {
    orientation: {
      vertical: "h-full border-l border-l-transparent p-[1px]",
      horizontal: "h-2.5 border-t border-t-transparent p-[1px]"
    },
    size: {
      default: "",
      sm: ""
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      size: "sm",
      class: "h-[5px] border-t border-t-transparent p-[1px]"
    }
  ],
  defaultVariants: {
    orientation: "vertical",
    size: "default"
  }
});
var ScrollArea = React18.forwardRef(
  ({
    className,
    children,
    orientation = "vertical",
    size = "default",
    ...props
  }, ref) => /* @__PURE__ */ React18.createElement(
    ScrollAreaPrimitive.Root,
    {
      ref,
      className: cn("relative overflow-hidden", className),
      ...props
    },
    /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit] [&>div]:h-full" }, children),
    /* @__PURE__ */ React18.createElement(
      ScrollBar,
      {
        orientation,
        size
      }
    ),
    /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Corner, null)
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React18.forwardRef(
  ({ className, orientation = "vertical", size = "default", ...props }, ref) => /* @__PURE__ */ React18.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      ref,
      orientation,
      className: cn(scrollbarVariants({ orientation, size, className })),
      ...props
    },
    /* @__PURE__ */ React18.createElement(
      ScrollAreaPrimitive.ScrollAreaThumb,
      {
        className: cn(
          "relative flex-1 rounded-full bg-border dark:bg-stone-700",
          size === "sm" && "bg-muted-foreground/50"
        ),
        style: { width: orientation === "vertical" ? "7px" : void 0 }
      }
    )
  )
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/Select/index.tsx
var React19 = __toESM(require("react"));
var import_icons_react7 = require("@tabler/icons-react");
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React19.createElement(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React19.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React19.createElement(import_icons_react7.IconSelector, { className: "h-4 w-4 opacity-50" }))
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React19.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ React19.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React19.createElement(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props
  },
  /* @__PURE__ */ React19.createElement(
    SelectPrimitive.Viewport,
    {
      className: cn(
        "p-1",
        position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )
    },
    children
  )
)));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React19.createElement(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React19.createElement("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React19.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React19.createElement(import_icons_react7.IconCheck, { className: "h-4 w-4" }))),
  /* @__PURE__ */ React19.createElement(SelectPrimitive.ItemText, null, children)
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React19.createElement(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/Separator/index.tsx
var React20 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var Separator4 = React20.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ React20.createElement(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator4.displayName = SeparatorPrimitive.Root.displayName;

// src/components/Slider/index.tsx
var React21 = __toESM(require("react"));
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"));
var Slider = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React21.createElement(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React21.createElement(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20" }, /* @__PURE__ */ React21.createElement(SliderPrimitive.Range, { className: "absolute h-full bg-primary" })),
  /* @__PURE__ */ React21.createElement(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
));
Slider.displayName = SliderPrimitive.Root.displayName;

// src/components/Sonner/index.tsx
var import_next_themes = require("next-themes");
var import_sonner = require("sonner");
var import_react = __toESM(require("react"));
var Sonner = ({ ...props }) => {
  const { theme } = (0, import_next_themes.useTheme)();
  return /* @__PURE__ */ import_react.default.createElement(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg font-sans p-4 gap-3 rounded-md border bg-background grid grid-cols-[auto,1fr] shadow-2xl [&>div[data-icon]]:mx-0 [&>div[data-icon]]:mt-1 min-[600px]:min-w-[364px]",
          description: "group-[.toast]:text-muted-foreground text-sm !text-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          title: "font-medium",
          error: "text-rose-600",
          info: "text-blue-600",
          success: "text-emerald-600",
          warning: "text-amber-600"
        }
      },
      ...props
    }
  );
};

// src/components/Switch/index.tsx
var React23 = __toESM(require("react"));
var SwitchPrimitives = __toESM(require("@radix-ui/react-switch"));
var Switch = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React23.createElement(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref
  },
  /* @__PURE__ */ React23.createElement(
    SwitchPrimitives.Thumb,
    {
      className: cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )
    }
  )
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/Table/index.tsx
var React24 = __toESM(require("react"));
var Table = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement("div", { className: "relative w-full overflow-auto" }, /* @__PURE__ */ React24.createElement(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
)));
Table.displayName = "Table";
var TableHeader = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "thead",
  {
    ref,
    className: cn("[&_tr]:border-b", className),
    ...props
  }
));
TableHeader.displayName = "TableHeader";
var TableBody = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "tfoot",
  {
    ref,
    className: cn("bg-primary font-medium text-primary-foreground", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React24.createElement(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

// src/components/Tabs/index.tsx
var React25 = __toESM(require("react"));
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));
var Tabs = TabsPrimitive.Root;
var TabsList = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React25.createElement(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React25.createElement(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React25.createElement(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/Textarea/index.tsx
var React26 = __toESM(require("react"));
var Textarea = React26.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ React26.createElement(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/Toast/index.tsx
var React27 = __toESM(require("react"));
var import_icons_react8 = require("@tabler/icons-react");
var ToastPrimitives = __toESM(require("@radix-ui/react-toast"));
var import_class_variance_authority5 = require("class-variance-authority");
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React27.createElement(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority5.cva)(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React27.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React27.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React27.createElement(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React27.createElement(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React27.createElement(import_icons_react8.IconX, { className: "h-4 w-4" })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React27.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React27.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/Toaster/index.tsx
var React29 = __toESM(require("react"));

// src/hooks/use-toast.ts
var React28 = __toESM(require("react"));
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast3) => {
          addToRemoveQueue(toast3.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast2({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open)
          dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React28.useState(memoryState);
  React28.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast: toast2,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/Toaster/index.tsx
function Toaster2() {
  const { toasts } = useToast();
  return /* @__PURE__ */ React29.createElement(ToastProvider, null, toasts.map(function({ id, title, description, action, ...props }) {
    return /* @__PURE__ */ React29.createElement(
      Toast,
      {
        key: id,
        ...props
      },
      /* @__PURE__ */ React29.createElement("div", { className: "grid gap-1" }, title && /* @__PURE__ */ React29.createElement(ToastTitle, null, title), description && /* @__PURE__ */ React29.createElement(ToastDescription, null, description)),
      action,
      /* @__PURE__ */ React29.createElement(ToastClose, null)
    );
  }), /* @__PURE__ */ React29.createElement(ToastViewport, null));
}

// src/components/Tooltip/index.tsx
var React30 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React30.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React30.createElement(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/context/ThemeProvider/index.tsx
var import_react2 = require("react");
var initialState = {
  theme: "light",
  setTheme: () => null
};
var ThemeProviderContext = (0, import_react2.createContext)(initialState);
function ThemeProvider({
  children,
  defaultTheme = "light",
  ...props
}) {
  const [theme, setTheme] = (0, import_react2.useState)(
    () => typeof window !== "undefined" ? localStorage.getItem(props.storageKey) || defaultTheme : defaultTheme
  );
  (0, import_react2.useEffect)(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(props.storageKey, theme2);
        setTheme(theme2);
      }
    }
  };
  return /* @__PURE__ */ React.createElement(
    ThemeProviderContext.Provider,
    {
      ...props,
      value
    },
    children
  );
}

// src/hooks/use-theme.ts
var import_react3 = require("react");
var useTheme2 = () => {
  const context = (0, import_react3.useContext)(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Header,
  HeaderThemeToggle,
  Input,
  Label,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Sonner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  ThemeProvider,
  ThemeProviderContext,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  reducer,
  sonnerToast,
  toast,
  useFormField,
  useTheme,
  useToast
});
