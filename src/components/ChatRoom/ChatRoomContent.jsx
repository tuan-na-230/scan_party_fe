import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import io from "socket.io-client"
import { FastField, Form, Formik } from 'formik';
import { Button, Grid } from '@material-ui/core';
import { SPTextField } from '../form_field';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Activity } from 'react-feather';
const socket = io.connect(`http://localhost:5000/`);

function ChatRoomContent({ chatId, aliasName, leaveRoom, isShowSideBar }) {
    const { t } = useTranslation();
    const [dataRoomChat, setDataRoomChat] = useState([]);
    const bottomRef = useRef();

    useEffect(() => {
        socket.emit("getListChat", chatId);
    }, [chatId])

    useEffect(() => {
        leaveRoom && scrollToBottom()
    }, [dataRoomChat])

    function test(value, { resetForm }) {
        //emit message to server
        resetForm({})
        return socket.emit("updateListMessage", chatId, { ...value, user: aliasName, createdAt: new Date() })
    }

    socket.on("listChat", (newData) => {
        setDataRoomChat(newData)
    })

    function displayConversation() {
        return dataRoomChat?.messages?.map(ele => (
            <div class="message">
                <p class="meta">{ele.user} <span>{moment(ele?.createdAt).format('DD-MM-YYYY HH:mm A')}</span></p>
                <p class="text">
                    {ele.message}
                </p>
            </div>
        ))
    }

    function scrollToBottom() {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div class="chat-container">
            <header class="chat-header">
                <h1><i class="fas fa-smile"></i> ChatRoom</h1>
                {leaveRoom && <a class="btn" onClick={leaveRoom}>Leave Room</a>}
            </header>
            <main class={isShowSideBar ? "chat-main" : ''}>
                {isShowSideBar && <div class="chat-sidebar">
                    <h3><i class="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name">{dataRoomChat?.name}</h2>
                    <h3><i class="fas fa-users"></i> Users</h3>
                    <ul id="users">
                        <li style={{ fontWeight: 'bold', fontSize: '18px' }}><Activity /> {aliasName}</li>
                    </ul>
                </div>}
                <div class="chat-messages" style={{width: '100%'}}>
                    {displayConversation()}
                    <span style={{ float: 'right' }}>{dataRoomChat?.messages?.length} msg</span>
                    <div ref={bottomRef} className="list-bottom"></div>
                </div>
            </main>
            <div class="chat-form-container">
                <Formik
                    initialValues={{ message: '' }}
                    onSubmit={test}
                >
                    {formikProps => {
                        const { isSubmitting } = formikProps;
                        return (
                            <Form>
                                <FastField
                                    name="message"
                                    component={SPTextField}
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    style={{ backgroundColor: 'white', borderRadius: '5px' }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ width: "100px" }}
                                    disabled={isSubmitting}
                                >
                                    Send
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div >
    )
}

ChatRoomContent.defaultProps = {
    isShowSideBar: true
}

export default ChatRoomContent;