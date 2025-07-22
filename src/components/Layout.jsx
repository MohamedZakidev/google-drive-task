import Navbar from "./Navbar"
import SideBar from "./SideBar"

function Layout({ children }) {
    return (
        <main className="bg-primary min-h-screen grid grid-layout">
            <Navbar />
            <SideBar />
            <section className="area-content mb-4 mr-4">
                {children}
            </section>
        </main>
    )
}

export default Layout
