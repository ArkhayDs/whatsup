import QRCode from "react-qr-code";

import './qrcode_style.scss'
import {DarkModeAction} from "../../Action/DrakModeAction";
import {useEffect} from "react";
import {LoginAction} from "../../Action/LoginAction";
import {useDispatch} from "react-redux";
import useGetCookies from "../../Hook/useGetCookies";

export default function Qrcode() {
    const gereateQRCode = (url) => {
       return(url)
    }

    return (
        <div className={"qrcode_container"}>
            <QRCode value="coucou" />
        </div>
    )
}
