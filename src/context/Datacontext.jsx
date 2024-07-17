import { createContext, useEffect } from "react";
import { useState } from "react";


export const Datacontext = createContext();

export const DataContextProvider = ({children}) => {
    let [entries, setEntries] = useState(()=>{
        const savedEntries = sessionStorage.getItem('entries')
        return savedEntries ? JSON.parse(savedEntries) : [];
    });
    let [index, setIndex] = useState(() =>{
        const savedIndex = sessionStorage.getItem('index');
        return savedIndex ? JSON.parse(savedIndex) : 0;
    });
    useEffect(()=>{
        sessionStorage.setItem('entries', JSON.stringify(entries));
    }, [entries]);
    useEffect(() =>{
        sessionStorage.setItem('index', JSON.stringify(index));
    }, [index]);
    function handleComplete(id){
        setEntries(entries.map(entry => 
            entry.id === id ? {...entry, completed : true} : entry
        ))
    }
    useEffect(()=>{
        console.log("new entry added")
    }, [entries]);
    let val = {
        entries,
        setEntries,
        index, 
        setIndex,
        handleComplete
    };
    return <Datacontext.Provider value={val}>{children}</Datacontext.Provider>
}