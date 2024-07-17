import React, { useContext, useEffect } from 'react'
import { Datacontext } from '../context/Datacontext'
import Card from './Card';
function Todos() {
    const {entries, handleComplete} = useContext(Datacontext);
    
    return (
        <div>
            {entries.map((task) => {
                
                return (
                    <Card 
                        key={task.id} 
                        id={task.id} 
                        title={task.title} 
                        descr={task.descr} 
                        comp={task.completed} 
                        onComplete={() => handleComplete(task.id)} 
                        time = {task.addTime}
                        date = {task.addDate}
                    />
                );
            })}
        </div>
    );
}

export default Todos