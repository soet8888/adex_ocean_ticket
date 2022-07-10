import React from 'react';
import { ThreeDots } from 'react-loader-spinner'

export default function LoadingIndicator(props) {
    return (
        <div className={`loading-spinner  opacity-  bg-transparent ${props.show ? "block" : "hidden"}`}>
            <ThreeDots color="#ff5724" height={80} width={80} />
        </div>
    )
}
