import {
  Calendar,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
  CarFrontIcon,
  BookCheckIcon,
  IdCard,
  DollarSign,
  UserCheck,
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
  const itemsReview = [
    {
      title: "labels.scan_card",
      url: ROUTES.SCAN_CARD,
      icon: IdCard,
    },
    {
      title: "labels.vehicles",
      url: ROUTES.LIST_CARS,
      icon: CarFrontIcon,
    },
    {
      title: "labels.schedule_cars",
      url: "#",
      icon: Calendar,
    },
  ];

  const itemsClients = [
    {
      title: "labels.clients",
      url: ROUTES.SCAN_CARD,
      icon: UserCheck,
    },
    {
      title: "labels.payments",
      url: ROUTES.LIST_CARS,
      icon: DollarSign,
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
              {itemsReview.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel>{t("labels.users")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsClients.map((item) => (
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
