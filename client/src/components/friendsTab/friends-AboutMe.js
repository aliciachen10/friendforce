import SubmitField from "./friends-SubmitField"


function AboutMe(props) {

  
  return (
    <div className = ""> 
      <div className = "text-lg leading-6 font-medium text-gray-900 mb-2 text-center border-b-4 border-dotted border-indigo-300">
        <h3 className="-mt-4 text-lg leading-6 font-medium text-gray-900">About Me</h3>
      </div>
      <div className="rounded-lg border-2 border-gray-200 m-4 p-4 indent-4 -ml-1 2xl:ml-4 ">
        {props.user.about_me}
      </div>
    </div> 
  )
}


export default AboutMe