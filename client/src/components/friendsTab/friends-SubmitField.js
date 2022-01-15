import { PencilAltIcon } from '@heroicons/react/solid';
import { SaveAsIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';


function SubmitField (props) {

    const [canUpdate, setUpdate] = useState(false)

        const updatePalette = "";
        const savedPallete = "";

        function handleToUpdateClick(canUpdate) {
            setUpdate(!canUpdate);
        }

        function handleToSavedClick(canUpdate) {


            setUpdate(!canUpdate)
        }


        function swapUpdateModeButton(canUpdate) {
            if(!canUpdate) {
                return (<PencilAltIcon onClick = {() => handleToUpdateClick(canUpdate)} className="w-6 h-auto opacity-50 hover:cursor-pointer"/>)
            }
            else {
                return (<SaveAsIcon onClick = {() => handleToSavedClick(canUpdate)} className= "w-6 h-auto opacity-50 hover:cursor-pointer"/>);
            }

        }
    
        return (
            <div className = "flex flex-col">
                <div>{props.name}</div>
                <div className = {`flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1`}>
                    <input className = "w-full bg-opacity-100" disabled = {!canUpdate} type = "text"></input>
                    {swapUpdateModeButton(canUpdate)}
                </div>
            </div>
        )
}

export default SubmitField;