import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import paths from '../routes/paths';
import { getCustomer, updateOrder } from "../api";
import QRCode from "qrcode.react";
import LoadingIndicator from '../components/loading_indicator';
const CustomerTicketPage = (props) => {
    const navigate = useNavigate();
    const [state, setState] = useState({ status: "loading" });
    const [submitting, setSubmitting] = useState(false)
    const { user } = props
    useEffect(() => {
        if (!user) {
            navigate(paths.home)
        } else {
            getCustomer(user.id).then(res => {
                setState({ status: 'loaded', data: res.data?.Orders || [] })
            });
        }
    }, [user]);
    const handleUse = async (order) => {
        setSubmitting(true);
        const res = await updateOrder(order.id, { status: 'used' });
        if (res.success) {
            setState({ status: 'loading' });
            getCustomer(user.id).then(res => {
                setState({ status: 'loaded', data: res.data?.Orders || [] })
            });
        }
        setSubmitting(false);
    }
    return (
        <React.Fragment>
            <div className="w-full flex flex-row h-[calc(100%-92px)] overflow-y-scroll p-4 m-auto place-content-center">
                <div className="flex flex-col">
                    <div className="text-center text-lg pb-1">Your Tickets</div>
                    <div className="grid grid-cols-2 gap-2 content-center">
                        {(state.data || []).map((order, i) => (
                            <div key={`oi_${i}`} className=" bg-white rounded-md border text-gray-700 place-content-center">
                                <div className="text-center max-w-sm">{order?.Ticket?.name}</div>
                                <div className=" flex items-center justify-center">
                                    <QRCode
                                        id="qr-gen"
                                        value={order?.qrCode}
                                        size={100}
                                        level={"H"}
                                        includeMargin={true}
                                    />
                                </div>
                                {(order.status && order.status === "pending") && <div className="text-center text-primary ">
                                    <button onClick={() => handleUse(order)} disabled={(state.status === 'loading') || submitting} className="mb-1 btn btn-secondary btn-sm" >
                                        Use Now
                                    </button>
                                </div>
                                }
                                {(order.status && order.status !== "pending") && <div className={`text-center font-bold text-lg mb-1 text-success`}> {order?.status} </div>}
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <LoadingIndicator show={(state.status === 'loading') || submitting} />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: state.App.User,
});
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTicketPage)
