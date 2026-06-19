import { Geist_Mono, DM_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StoreProvider } from "@/lib/store/context";
import { TimerProvider } from "@/lib/store/timer-context";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Header } from "@/components/layout/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Android Prep — Learning Tracker",
  description: "An interactive tracker for the 12-week Android developer interview prep plan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable)}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <StoreProvider>
          <TimerProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                <SidebarProvider>
                  <div className="flex min-h-screen w-full">
                    <AppSidebar />
                    <div className="flex flex-1 flex-col min-w-0">
                      <Header />
                      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                        {children}
                      </main>
                    </div>
                  </div>
                </SidebarProvider>
              </TooltipProvider>
              <Toaster position="bottom-right" richColors />
            </ThemeProvider>
          </TimerProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
