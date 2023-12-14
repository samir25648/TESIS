import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/navbar/navbar";
import { AdopcionPage } from "./pages/adopcionpage/adopcionpage";
import { CheckoutPage } from "./pages/checkoutpage/checkoutpage";
import { HomePage } from "./pages/homepage/homepage";
import { PaymentPage } from "./pages/paymentpage/paymentpage";
import {ListaAdopcionPage} from './pages/listadopcionpage/listadopcionpage'
import { Adoptados } from "./pages/adoptados/adoptados";
import {RegisterPage} from './pages/registerpage/registerpage'
import { PerrosAdoptados } from "./pages/perrosadoptados/perrosadoptados";
import {ListarDics} from './pages/listardics/listardics'
import { AccederPage } from "./pages/acceder/acceder";
import { SobreNosotros } from "./pages/sobrenosotros/sobrenosotros";
import { VerDic } from "./pages/verdic/verdic";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/inscripciondic",
    element: (
      <>
        <NavBar />
        <PaymentPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/adopcion",
    element: (
      <>
        <NavBar />
        <AdopcionPage />
      </>
    ),
  },
  {
    path: '/listardics',
    element: (
      <>
      <NavBar/>
      <ListarDics/>
      </>
    )
  },
  {
    path: "/checkout",
    element: (
      <>
        <NavBar />
        <CheckoutPage />
      </>
    ),
  },
  {
    path: "/crearcuenta",
    element: (
      <>
        <NavBar/>
        <RegisterPage/>
      </>
    )
  },{
    path: '/dogs',
    element: (
      <><NavBar /><ListaAdopcionPage /></>
    )
  },{
    path: '/adoptado/:id',
    element: (
      <>
      <NavBar/>
      <Adoptados/>
      </>
    )
  }, {
    path: '/listaadoptados',
    element: (
      <>
      <NavBar />
      <PerrosAdoptados/>
      </>
    )
  }, {
    path: '/acceder',
    element: (
      <>
      <NavBar/>
      <AccederPage/>
      </>
    )
  }, {
    path: '/sobrenosotros',
    element: (
      <>
        <NavBar/>
        <SobreNosotros/>
        <Footer/>
      </>
    )
  },{
    path: '/dic/:id',
    element: (
      <>
        <NavBar/>
        <VerDic/>
      </>
    )
  }
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
