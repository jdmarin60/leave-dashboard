export interface NavItem {
  id: string;
  text: string;
  route: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: "nav-/leave-requests",
    text: "Leave Requests",
    route: "/leave-requests",
  },
  {
    id: "nav-/users",
    text: "Users",
    route: "/users",
  },
  {
    id: "nav-/departments",
    text: "Departments",
    route: "/departments",
  },
  {
    id: "nav-/approvals",
    text: "Approvals",
    route: "/approvals",
  },
];
