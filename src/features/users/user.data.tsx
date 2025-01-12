"use client";
import {
  IconCash,
  IconShield,
  IconUsersGroup,
  IconUserShield,
} from "@tabler/icons-react";

export const callTypes = new Map<any, string>([
  ["active", "bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200"],
  ["inactive", "bg-neutral-300/40 border-neutral-300"],
  ["invited", "bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300"],
  [
    "suspended",
    "bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10",
  ],
]);

export const userTypes = [
  {
    label: "Superadmin",
    value: "superadmin",
    icon: IconShield,
  },
  {
    label: "Admin",
    value: "admin",
    icon: IconUserShield,
  },
  {
    label: "Manager",
    value: "manager",
    icon: IconUsersGroup,
  },
  {
    label: "Cashier",
    value: "cashier",
    icon: IconCash,
  },
] as const;

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: "active" | "inactive" | "invited" | "suspended";
  role: "superadmin" | "admin" | "cashier" | "manager";
  createdAt: string;
  updatedAt: string;
};

export const users: User[] = [
  {
    id: "d1f5a6b4-c213-4b8f-a6d1-12e43567abcd",
    firstName: "John",
    lastName: "Doe",
    username: "john.doe",
    email: "john@example.com",
    phoneNumber: "+1234567891234",
    status: "active",
    role: "admin",
    createdAt: "2020-03-15T10:25:43Z",
    updatedAt: "2023-05-20T12:10:15Z",
  },
  {
    id: "e6a8c0f2-b3c4-4db9-a2b4-78dcb8912356",
    firstName: "Jane",
    lastName: "Smith",
    username: "jane.smith",
    email: "jane@example.com",
    phoneNumber: "+1234567892345",
    status: "inactive",
    role: "manager",
    createdAt: "2021-01-10T08:15:30Z",
    updatedAt: "2023-07-12T14:05:10Z",
  },
  {
    id: "a7b3e4c2-d561-4ea1-b9a6-90edc4567123",
    firstName: "Alice",
    lastName: "Johnson",
    username: "alice.johnson",
    email: "alice@example.com",
    phoneNumber: "+1234567893456",
    status: "invited",
    role: "cashier",
    createdAt: "2020-06-20T15:45:00Z",
    updatedAt: "2023-02-18T18:20:45Z",
  },
  {
    id: "f8c4b9d2-e768-4fab-a5d9-67cbfe345812",
    firstName: "Bob",
    lastName: "Brown",
    username: "bob.brown",
    email: "bob@example.com",
    phoneNumber: "+1234567894567",
    status: "suspended",
    role: "superadmin",
    createdAt: "2020-12-05T11:30:20Z",
    updatedAt: "2023-08-22T09:50:30Z",
  },
  {
    id: "g3e2a5d1-f869-4cab-a6d1-89bcfe234981",
    firstName: "Charlie",
    lastName: "Davis",
    username: "charlie.davis",
    email: "charlie@example.com",
    phoneNumber: "+1234567895678",
    status: "active",
    role: "cashier",
    createdAt: "2020-09-12T14:05:10Z",
    updatedAt: "2023-10-11T16:45:20Z",
  },
  {
    id: "h9d1e3b4-a768-4cda-a7d3-67cfde984621",
    firstName: "Eve",
    lastName: "Miller",
    username: "eve.miller",
    email: "eve@example.com",
    phoneNumber: "+1234567896789",
    status: "inactive",
    role: "admin",
    createdAt: "2021-04-22T09:20:40Z",
    updatedAt: "2023-11-14T13:55:35Z",
  },
  {
    id: "i8c2f1a6-b975-4dcb-a9d8-34abfe741230",
    firstName: "Frank",
    lastName: "Wilson",
    username: "frank.wilson",
    email: "frank@example.com",
    phoneNumber: "+1234567897890",
    status: "invited",
    role: "manager",
    createdAt: "2020-08-30T17:15:25Z",
    updatedAt: "2023-03-12T19:25:40Z",
  },
  {
    id: "j7f4e2b3-c865-4eda-a6d7-98cdfe623401",
    firstName: "Grace",
    lastName: "Taylor",
    username: "grace.taylor",
    email: "grace@example.com",
    phoneNumber: "+1234567898901",
    status: "suspended",
    role: "superadmin",
    createdAt: "2021-02-18T10:40:50Z",
    updatedAt: "2023-06-28T15:35:20Z",
  },
  {
    id: "k6a3b4d2-e469-4cab-a7e3-12bcfe745681",
    firstName: "Hank",
    lastName: "Anderson",
    username: "hank.anderson",
    email: "hank@example.com",
    phoneNumber: "+1234567899012",
    status: "active",
    role: "admin",
    createdAt: "2020-11-14T12:55:30Z",
    updatedAt: "2023-09-05T14:20:50Z",
  },
  {
    id: "l5c2a6b1-f372-4db9-a9e8-78defe821394",
    firstName: "Ivy",
    lastName: "Clark",
    username: "ivy.clark",
    email: "ivy@example.com",
    phoneNumber: "+1234567890123",
    status: "inactive",
    role: "cashier",
    createdAt: "2020-10-25T16:30:15Z",
    updatedAt: "2023-12-03T18:10:30Z",
  },
];
