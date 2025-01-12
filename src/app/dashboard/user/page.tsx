"use clint";
import { Main } from "@/components/main";
import { columns } from "@/features/users/components/users-columns";
import { UsersDialogs } from "@/features/users/components/users-dialogs";
import { UsersPrimaryButtons } from "@/features/users/components/users-primary-buttons";
import { UsersTable } from "@/features/users/components/users-table";
import UsersProvider from "@/features/users/context/users-context";
import { users } from "@/features/users/user.data";

export default function Users() {
  return (
    <UsersProvider>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">User List</h2>
            <p className="text-muted-foreground">
              Manage your users and their roles here.
            </p>
          </div>
          <UsersPrimaryButtons />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <UsersTable data={users} columns={columns} />
        </div>
      </Main>
      <UsersDialogs />
    </UsersProvider>
  );
}
