// import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import ApiList from './ApiList'

export default function ApiMessage(messagedata) {
    const sendername = messagedata.sendername
    const senderidentity = messagedata.senderidentity
    const messagesubject = messagedata.messagesubject
    const message = messagedata.message

    try {
        Axios.post(`${ApiList.messagePost}`, {
            sendername: sendername,
            senderidentity: senderidentity,
            messagesubject: messagesubject,
            message: message,
        }).then((response) => {
            console.log(response)
            // alert(response.data)
            window.location.reload();
        })
    }
    catch (err) {
        console.log(err)
    }

}
