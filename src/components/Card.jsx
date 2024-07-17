import React from "react";
import { useContext } from "react";
import { Datacontext } from "../context/Datacontext";
import Entry from "./Entry";
function Card(props) {
    const tit = props.title;
    const des = props.descr;
    const compHandle= props.onComplete;
    const isCompleted = props.comp;
    const id = props.id;
    const d = props.date;
    const t = props.time;
    const {entries, setEntries} = useContext(Datacontext);
    console.log(tit, des, id, '\n');
    function handleDelete(){
      
      const filtered = entries.filter((ent) =>{
        return (ent.id != id)
      })
      setEntries(filtered);
      
    }
  return (
    <div className={`bg-white/20 flex flex-row w-3/5 my-6 rounded-lg mx-auto p-2 ${isCompleted ? 'bg-white/10' : ''} max-lg:w-full`}>
      <div className="flex flex-col w-4/5 text-left justify-between">
        <h4 className={`text-slate-400 font-semibold text-3xl underline ${isCompleted ? 'line-through' : ''}`}> {tit}</h4>

        <h5 className={` ${isCompleted ? 'line-through' : ''}`}> {des}</h5>
        <div className="relative bottom-0 mt-2 underline text-xs text-left p-0 ">{d} {t}</div>
      </div>
      <div className="text-right">
        <button className={`my-4 relative right-0 bg-slate-400 text-sm ${isCompleted ? 'hidden' : ''}max-lg:scale-75 ${isCompleted ? 'hidden' : ''}`} id="markComp" onClick={compHandle}>
          mark completed
        </button>
        <button className=" bg-red-800 text-sm relative mr-0 max-lg:scale-75" onClick={handleDelete}> delete</button>
      </div>
    </div>
  );
}
export default Card;
