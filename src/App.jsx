// import { Toaster } from "sonner";
import { AppProvidersWrapper, BackToTop } from "./components";
import AdminWallet from "./app/admin/wallet/page";

import "@/assets/css/style.css";
import { AdminLayout } from "./layouts";


const App = () => {
  return (
    <AppProvidersWrapper>``
      <BackToTop/>
      <AdminLayout >
      <AdminWallet />
      </AdminLayout>   
    </AppProvidersWrapper>
  );
};

export default App;
