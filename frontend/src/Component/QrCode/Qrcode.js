import QRCode from "react-qr-code";

import './qrcode_style.scss'
import {DarkModeAction} from "../../Action/DrakModeAction";

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
