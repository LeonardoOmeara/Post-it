import Nav from "./Nav";

export default function Layout({ children }){
    return(
        <div className="mx-6 md:max-w-2xl md:mx-auto bg-red-300">
            <Nav />
            {/* <h1 className="text-3xl"> hola hola</h1> */}
            <main>{children}</main>
        </div>
    )
}