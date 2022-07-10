import React from 'react'

export default function Footer() {
    return (
        <footer className="items-center min-h-12 footer text-primary-focus place-items-center">
            <div className="place-items-center text-center ">
                <p>© {new Date().getFullYear()} Adex Ocean - All right reserved</p>
            </div>
        </footer>
    )
}
