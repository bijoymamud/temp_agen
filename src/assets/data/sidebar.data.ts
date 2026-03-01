import { type ISidebarData } from '@/types/sidebar.types'
import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconError404,
  IconHelp,
  IconLockAccess,
  IconNotification,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
} from '@tabler/icons-react'


export const sidebarData: ISidebarData = {
  user: {
    name: 'shakeeb',
    email: 'shakeeb@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navGroups: [
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'OTP',
              url: '/recover/otp',
            },
            {
              title: 'Forgot Password',
              url: '/recover',
            },
            {
              title: 'Reset Password',
              url: '/recover/reset-password',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Not Found',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Maintenance Error',
              url: '/maintenance',
              icon: IconBarrierBlock,
            },
            {
              title: 'Coming Soon',
              url: '/coming-soon',
              icon: IconServerOff,
            }
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/contact-us',
          icon: IconHelp,
        },
      ],
    },
  ],
}
