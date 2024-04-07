import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "SmartServesa - Orders",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
