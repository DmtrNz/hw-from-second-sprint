import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any DONE
    addUserCallback: (name: string) => void // need to fix any DONE
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback: (name: string) => void) => {
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

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { 
    if(!name.trim()){
        setError("Ошибка! Введите имя!")
    }
}// если имя пустое - показать ошибку DONE

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { 
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
