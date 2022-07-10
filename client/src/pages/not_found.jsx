import React from 'react';

export default function NotFound() {
    return (
        <div className='w-full flex flex-row h-[calc(100%-92px)] items-center overflow-y-scroll p-4 m-auto place-content-center'>
            <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
            <div class="bg-secondary   text-secondary-content px-2 text-lg rounded rotate-12 absolute">
                Page Not Found
            </div>
        </div>
    )
}
