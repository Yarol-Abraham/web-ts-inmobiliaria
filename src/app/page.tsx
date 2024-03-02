import DashboardLayout from "./dashboard/layout";
import Modal from "./components/modal";
import TableData from "./components/Table";

export default function Home() {
  return (
       <DashboardLayout>
        <section className="min-h-96" >
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">           
            <Modal />
          </div>
          {/* <div>
            <TableData />
          </div> */}
        </section>
      </DashboardLayout>
  );
}
