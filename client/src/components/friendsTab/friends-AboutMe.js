import SubmitField from "./friends-SubmitField"
import {useState} from "react";

function AboutMe(props) {

  return (
    <div className = "flex flex-col"> 
      <div className = "-mt-4">
        <h3 className="text-lg border-b-2 border-gray-200 pb-2 leading-6 font-medium text-gray-900">About Me</h3>
      </div>
      <div className="p-4 leading-12 indent-4 -ml-1 2xl:ml-4 ">
        {props.user.about_me}
      </div>
    </div> 
  )
}


export default AboutMe