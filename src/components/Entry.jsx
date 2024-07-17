import { useContext } from "react";
import React from "react";
import { Datacontext } from "../context/Datacontext";



function Entry() {
    const { entries, setEntries, index, setIndex, handleComplete } = useContext(Datacontext);
    function handleAddTask(target){

        let titleVal = document.querySelector('#title').value;
        if(titleVal === ""){
          alert("make an entry first");
          return ;
        }
        let descVal = document.querySelector('#desc').value;
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString();
        const time = currentDate.toLocaleTimeString();
        setEntries([...entries, {id : index , title : titleVal, descr : descVal,
          addDate : date ,addTime: time, completed: false }])
        setIndex(index+1);
        
    }
  return (
    <>
      <div className="bg-white/20 flex flex-row w-3/5 my-6 rounded-lg mx-auto justify-center p-2 max-lg:w-full p-0">
        <div className="flex flex-col w-4/5">
          <div className="flex flex-row mx-6 my-2 max-lg:mx-4">
            <label> Title</label>
            <input
              className="bg-white/20 mx-20 rounded-lg max-lg:mx-8"
              type="text"
              id="title"
            ></input>
          </div>

          <div className="flex flex-row mx-6 my-2 max-lg:mx-4 ">
            <label> Description</label>
            <textarea
              className="bg-white/20 w-3/4 mx-8 rounded-lg max-lg:mx-2"
              type="text"
              id="desc"
            ></textarea>
          </div>
        </div>
        <div>
          <button className="relative top-1/2 bg-slate-400 text-sm max-lg:scale-75" onClick={handleAddTask} id="addbtn"> Add Task</button>
        </div>
      </div>
    </>
    
  );
}




export default Entry;
