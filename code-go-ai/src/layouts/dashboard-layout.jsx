import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSelector } from "react-redux";
import { NewProblem, NewQuiz } from "../pages/getting-started";

export default function DashboardPage() {
  const storeData = useSelector((state) => state.page.value);

  const pages = {
    newProblem: <NewProblem />,
    newQuiz: <NewQuiz />,
  };
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center justify-between gap-2 border-b px-4">
          <div className="flex justify-center items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{storeData.title}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div>
            <p>profile</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {pages[storeData.key]}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
