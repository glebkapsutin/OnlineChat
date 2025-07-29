import { Button, Heading, Input, Text } from "@chakra-ui/react";

import { useState } from "react";

export const WaitingRoom = ({ joinChat }) => {
    const [userName, setUserName] = useState();
    const [chatRoom, setChatRoom] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(userName,chatRoom);
    }
    return (
        <form onSubmit={onSubmit } className="max-w-sm w-full bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <Heading className="mb-6 text-gray-900 text-center">Онлайн чат</Heading>
            <div className="mb-4">
                <Text fontSize={"sm"} className="text-gray-700">Имя пользователя</Text>
                <Input onChange={(e) => setUserName(e.target.value) } name="userName" placeholder="Введите ваше имя" className="mt-1 text-gray-900" focusBorderColor="blue.400"/>
            </div>
            <div className="mb-4">
                <Text fontSize={"sm"} className="text-gray-700">Название чата</Text>
                <Input onChange={(e) => setChatRoom(e.target.value)}  name="userName" placeholder="Введите название чата" className="mt-1 text-gray-900" focusBorderColor="blue.400" />
            </div>
            <Button color="blue" type="submit"  width="full" >Присоединиться</Button>
        </form>
    )
}