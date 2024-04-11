import Cashier from "@/components/Dashboard/Cashier";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Kitchen from "@/components/Dashboard/kitchen";

export const metadata: Metadata = {
  title:
    "SmartServesa Admin Dashboard",
  description: "This is SmartServesa Admin Dashboard",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Kitchen />
      </DefaultLayout>
    </>
  );
}
