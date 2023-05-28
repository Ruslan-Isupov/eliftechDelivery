import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Navigation } from "../Navigation/Navigation";
import { Dna } from 'react-loader-spinner';
import css from './Layout.module.css'

export const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <nav>
            <Navigation/>
            </nav>
        </header>
        <main className={css.container}>   <Suspense
          fallback={
            <Dna
              visible={true}
              height="40"
              width="40"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass={css.blocksWrapper}
            />
          }
        >
          <Outlet />
        </Suspense></main>
            
        </>
    )
}