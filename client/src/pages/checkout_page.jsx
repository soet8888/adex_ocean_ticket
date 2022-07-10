import React, { useEffect, useState } from 'react'
import paths from '../routes/paths';
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBackIcon } from "../assets/icons/svg_icons";
import LoadingIndicator from '../components/loading_indicator';
import { connect } from "react-redux";
import { createOrder } from "../api";
import { v4 as uuidv4 } from 'uuid';
import QRCode from "qrcode.react";
const CheckoutPage = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const ticket = location.state;
    const [submitting, setSubmitting] = useState(false);
    const [qr, setQr] = useState(null)
    const { user } = props
    console.log('user', user, '\n ticket', ticket, 'qr', qr)
    useEffect(() => {
        if (!ticket || !user) {
            navigate(paths.home)
        }
    }, [ticket, user]);

    const backHandler = () => {
        navigate(paths.home);
    }
    const handlePlaceOrder = async () => {
        setSubmitting(true);
        const qrCode = uuidv4();
        const status = "pending";
        const TicketId = ticket.id;
        const CustomerId = user.id;
        const note = ""
        const res = await createOrder({ status, qrCode, TicketId, CustomerId, note });
        console.log('res of order', res)
        if (res.success) {
            setQr(qrCode);
            setSubmitting(false)
        }
        // "status":"pending",
        // "qrCode":"code3",
        // "note":"pls send on office time",
        // "TicketId": 2,
        // "CustomerId":2,
        // "createdAt":"2022-07-10 05:55:16.409 +00:00",
        // "updatedAt":"2022-07-10 05:55:16.409 +00:00"
        setSubmitting(false)
    }
    const GenerateQ = () => {
        const downloadQRCode = () => {
            // Generate download with use canvas and stream
            const canvas = document.getElementById("qr-gen");
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `${qr}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };
        return (
            <div className="w-full flex flex-row h-[calc(100%-92px)] overflow-y-scroll p-4 m-auto place-content-center">

                <div className="flex flex-col">
                    <QRCode
                        id="qr-gen"
                        value={qr}
                        size={290}
                        level={"H"}
                        includeMargin={true}
                    />
                    <div className="mt-2 flex flex-row">
                        <h5>Click for Ticket</h5>
                        <button className="ml-auto btn btn-primary" onClick={downloadQRCode}>
                            Download QR Code
                        </button>
                    </div>
                    <button onClick={backHandler} className="btn btn-primary mt-4">Go To Tickets</button>
                </div>
            </div >
        )
    }
    return (
        <React.Fragment>
            {qr && <GenerateQ />}
            {!qr && <div className='w-full flex flex-row h-[calc(100%-92px)] overflow-y-scroll p-4 m-auto place-content-center'>
                <div className="px-0 mt-4 mx-0">
                    <div onClick={backHandler} className="btn mt-1 "><ArrowBackIcon /></div>
                    <div className="w-full my-0 text-center font-semibold text-lg justify-center">Order Summary</div>
                    <div className="px-0 mt-2 mx-0">
                        <div className="w-full flex flex-row py-2 items-center">
                            <div className="flex-grow flex flex-col">
                                <div className="pb-[1px] max-w-sm">{'1 x ' + ticket?.name}</div>
                            </div>
                            <div className="pl-1 font-semibold">{`SGD$ ${ticket?.price || 0}.00`} </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="px-0 mt-2 mx-0">
                        <div className="w-full flex flex-row py-2 items-center">
                            <div className="flex-grow flex flex-col">
                                <div className="pb-[1px] max-w-sm">Subtotal</div>
                            </div>
                            <div className="pl-1 font-semibold">{`SGD$ ${ticket?.price || 0}.00`} </div>
                        </div>
                    </div>
                    <div className="px-0 mt-2 mx-0">
                        <div className="w-full flex flex-row py-2 items-center">
                            <div className="flex-grow flex flex-col">
                                <div className="pb-[1px] max-w-sm">GST</div>
                            </div>
                            <div className="pl-1 font-semibold">{`SGD$ ${0}.00`} </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white"></div>
                    <div className="px-0 mt-2 mx-0">
                        <div className="w-full flex flex-row py-2 items-center">
                            <div className="flex-grow flex flex-col">
                                <div className="pb-[1px] max-w-sm">Total</div>
                            </div>
                            <div className="pl-1 font-semibold">{`SGD$ ${ticket?.price || 0}.00`} </div>
                        </div>
                    </div>
                    <div className="flex flex-row p-3 w-full justify-around">
                        <button onClick={handlePlaceOrder} disabled={!ticket || submitting} className="btn btn-primary">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            }
            <LoadingIndicator show={submitting} />
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);