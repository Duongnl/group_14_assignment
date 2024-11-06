import { AppProvider } from "@/context/assignment7/AppContext";

export default function Assignment7Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppProvider> {children}</AppProvider>;
}
