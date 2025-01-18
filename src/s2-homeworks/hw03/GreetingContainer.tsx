import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
/*
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов DONE
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error DONE
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) DONE
*/

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any DONE
    addUserCallback: (name: string) => void // need to fix any DONE
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: any) => {
    if (name.trim()) {
        addUserCallback(name);
        setError("");
        setName("");
    } else {
        setError("Ошибка! Введите имя!");
        if (name !== "") {
            setName(name);
        }
    }
}// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут DONE

export const pureOnBlur = (name: string, setError: any) => { 
    if(!name.trim()){
        setError("Ошибка! Введите имя!")
    }
}// если имя пустое - показать ошибку DONE

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { 
    if(e.key==="Enter" ){
        addUser()
    }
}// если нажата кнопка Enter - добавить DONE


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any DONE
    const [error, setError] = useState<string>('') // need to fix any DONE

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any DONE
        setName(e.currentTarget.value) // need to fix DONE
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix DONE
    const lastUserName = users.length > 0 ? users[users.length - 1].name : '' // need to fix DONE

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
