import * as React from "react"
import { PageProps } from "gatsby"
import './layout.css'



const Layout: React.FC<PageProps> = (props:PageProps) => {
    return (
        <>
            <header className="font-serif text-3xl">This is my starter</header>
            <main>{props.children}</main>
            <footer></footer>
        </>
    )
}


export default Layout
