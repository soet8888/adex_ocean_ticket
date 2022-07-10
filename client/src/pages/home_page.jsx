import React, { useEffect, useState } from 'react';
import paths from '../routes/paths';
import { useNavigate } from "react-router-dom";
import LoadingIndicator from '../components/loading_indicator';
import { getTickets } from "../api";
import TicketCard from '../components/ticket_card';
export default function HomePage() {
    const navigate = useNavigate();
    const [state, setState] = useState({ status: 'loading' })
    useEffect(() => {
        getTickets().then(res => {
          //  console.log('res', res);
            setState({ status: 'loaded', data: res.data || [] })
        })
    }, [])

    const goPage = () => {
        navigate(paths.checkout);
    }
    return (
        <React.Fragment>
            <div className='w-full flex flex-row h-[calc(100%-92px)] overflow-y-scroll p-4 m-auto place-content-center'>
                <div className="flex flex-col items-center">
                    {(state?.data || []).map((tk, i) => (<TicketCard data={tk} key={`tk_${i}`} />))}
                </div>
            </div>
            <LoadingIndicator show={state.status === 'loading'} />
        </React.Fragment>
    )
}
