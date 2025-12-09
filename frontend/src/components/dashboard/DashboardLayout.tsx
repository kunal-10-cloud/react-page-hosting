"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  Zap,
  FolderGit2,
  Settings,
  User,
  CreditCard,
  Bell,
  LogOut,
  ChevronDown,
  Plus,
} from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ProtectedRoute } from "../ProtectedRoute";

interface Workspace {
  id: string;
  name: string;
  avatar: string;
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [workspaces] = useState<Workspace[]>([
    { id: "1", name: "Personal Workspace", avatar: "PW" },
    { id: "2", name: "Team Alpha", avatar: "TA" },
  ]);
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0]);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push("/signin");
  };

  const navItems = [
    { path: "/dashboard", label: "Projects", icon: FolderGit2 },
    { path: "/dashboard/settings", label: "Settings", icon: Settings },
    { path: "/dashboard/billing", label: "Billing", icon: CreditCard },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside className="w-64 bg-sidebar text-sidebar-foreground border-r-2 border-sidebar-border flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b-2 border-sidebar-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg border-2 border-sidebar-border">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg">DeployHub</span>
            </Link>
          </div>

          {/* Workspace Switcher */}
          <div className="p-4 border-b-2 border-sidebar-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-sidebar-accent hover:bg-sidebar-primary/10 transition-all border-2 border-sidebar-border">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-medium">
                    {currentWorkspace.avatar}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium truncate">
                      {currentWorkspace.name}
                    </div>
                    <div className="text-xs text-sidebar-foreground/70">Workspace</div>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {workspaces.map((workspace) => (
                  <DropdownMenuItem
                    key={workspace.id}
                    onClick={() => setCurrentWorkspace(workspace)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs">
                        {workspace.avatar}
                      </div>
                      {workspace.name}
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Workspace
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === item.path
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-sidebar-accent"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t-2 border-sidebar-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-sidebar-accent transition-all">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-destructive to-primary flex items-center justify-center text-white text-sm font-medium">
                    {user ? user.username?.substring(0, 2).toUpperCase() : "JD"}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">{user?.username || "Guest"}</div>
                    <div className="text-xs text-sidebar-foreground/70">
                      {user?.email || "guest@example.com"}
                    </div>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="h-16 border-b-2 border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <h1 className="text-xl">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </main>
      </div>
    </ProtectedRoute>
  );
}