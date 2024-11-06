import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <section className="p-4">
        {/* header rummer også Navbar */}
        <Header/>

        <main className="my-5 ">
            <Outlet />
        </main>

        <Footer/>

    </section>
  )
}

export default Layout