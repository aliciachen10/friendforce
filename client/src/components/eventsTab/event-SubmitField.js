import { PencilAltIcon } from '@heroicons/react/solid';
import { SaveAsIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';


function SubmitEventField (props) {

    const [canEdit, setEdit] = useState(false);

    const editPalette = "";
    const savedPalette = "";

    function handleToEditClick(canEdit) {
        let field = document.querySelector("#" + props.name + "Field");
        setEdit(!canEdit);
    }

    function handleToSavedClick(canEdit) {
        let field = document.querySelector("#" + props.name + "Field");
        if(field.value === "") {
            setEdit(!canEdit);
        }
        else {
            props.stateSetter(document.querySelector("#" + props.name + "Field").value);
            setEdit(!canEdit);
        }
    }

    function swapEditModeButton(canEdit) {
        if(!canEdit) {
            return (<PencilAltIcon onClick = {() => handleToEditClick(canEdit)} className= "w-6 h-auto opacity-50 hover:cursor-pointer"/>)
        }
        else {
            return (<SaveAsIcon onClick = {() => handleToSavedClick(canEdit)} className= "w-6 h-auto opacity-50 hover:cursor-pointer"/>);
        }
    }

    return(
        <div className = "flex flex-col">
            <div>{props.name}</div>
            <div className = {`flex justify-between bg-gray-100 border-gray-200 border-2 rounded-md p-1`}>
                <input id = {props.name + "Field"} placeholder = {props.savedVal} className = "w-full p-1" disabled = {!canEdit} type = "text"></input>
                {swapEditModeButton(canEdit)}
            </div>
        </div>
    )

}

export default SubmitEventField;