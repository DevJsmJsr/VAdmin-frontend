import {
  Calendar,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  CarFrontIcon,
  BookCheckIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~components/ui/sidebar";
import { ROUTES } from "~constants/appRoutes";
import AppLogo from '~assets/vadmin_black.svg';

export function AppSidebar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const items = [
    {
      title: "labels.start_checking",
      url: ROUTES.CAR_CHECKING,
      icon: BookCheckIcon,
    },
    {
      title: "Vehiculos",
      url: "#",
      icon: CarFrontIcon,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <NavLink to={ROUTES.PLATFORM} className="m-auto">
          <img
            src={AppLogo}
            alt="vadmin logo"
            className="w-[12rem] h-24"
          />
        </NavLink>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("labels.check")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      {t(item.title)}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => {
                  localStorage.clear();
                  navigate(ROUTES.LOGIN);
                }}>
                  <LogOut />{t("labels.logout")}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
