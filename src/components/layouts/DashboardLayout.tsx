"use client";

import {
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  FlexBox,
} from "@ui5/webcomponents-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS, NavItem } from "@/config/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    setNavItems(NAV_ITEMS);
  }, []);

  const handleNavigationChange = (e: CustomEvent) => {
    const route = e.detail.item.dataset.route;
    if (route && route !== pathname) {
      router.push(route);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ShellBar
        primaryTitle="Leave Management"
        onLogoClick={() => router.push("/")}
      />

      <FlexBox direction="Row" style={{ flex: 1 }}>
        <SideNavigation
          style={{ width: "250px" }}
          onSelectionChange={handleNavigationChange}
        >
          {navItems.map(({ id, text, route }) => (
            <SideNavigationItem
              key={id}
              id={id}
              text={text}
              data-route={route}
              selected={pathname === route}
            />
          ))}
        </SideNavigation>

        <main style={{ flex: 1, padding: "2rem", overflow: "auto" }}>
          {children}
        </main>
      </FlexBox>
    </div>
  );
}
