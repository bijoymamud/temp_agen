import { LinkProps } from "next/link"

interface IUser {
  name: string
  email: string
  avatar: string
}

interface IBaseNavItem {
  title: string
  badge?: string
  icon?: React.ElementType
}

type NavLink = IBaseNavItem & {
  url: LinkProps['href']
  items?: never
}

type NavCollapsible = IBaseNavItem & {
  items: (IBaseNavItem & { url: LinkProps['href'] })[]
  url?: never
}

type NavItem = NavCollapsible | NavLink

interface INavGroup {
  title: string
  items: NavItem[]
}

interface ISidebarData {
  user: IUser
  navGroups: INavGroup[]
}

export type { INavGroup, ISidebarData, NavCollapsible, NavItem, NavLink }

