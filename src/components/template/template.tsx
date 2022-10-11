import React from 'react'
import Footer from './footer'
import Header from './header'


type Props = {
    children?: React.ReactNode
}

function Template({children}: Props) {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default Template