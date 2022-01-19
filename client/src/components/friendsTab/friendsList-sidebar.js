function FriendSidebar(props) {

    
    return(
       <div className="col-span-1 max-h-screen "> 
            <nav className="h-full overflow-y-auto">
                {Object.keys(props.directory).map((letter) => (
                    <div key={letter} className="relative">
                        <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-slate-200 px-6 py-1 text-sm font-medium text-gray-500">
                            <h3>{letter}</h3>
                        </div>
                        <ul role="list" className="relative z-0 divide-y divide-gray-200">
                            {props.directory[letter].map((person) => (
                            <li key={person.id} className="bg-white">
                                <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <a href="#" className="focus:outline-none">
                                        {/* Extend touch target to entire panel */}
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                        <p className="text-sm text-gray-500 truncate">{person.role}</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default FriendSidebar