function FriendGroups(props) {
    let dbGroups = props.user.groups;

    return(
    <div> 
        <div className = "mb-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Active Groups</h3>
        </div>

      <ul role="list" className="divide-y divide-gray-200 bg-white  rounded-lg border-2 border-gray-200">
        {dbGroups.map((group) => (
          <li key={`fg_` + group.email} className="py-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{group.name}</p>
              <p className="text-sm text-gray-500">{group.description.slice(0,80) + (group.description.length >= 80 ? '...' : '')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div> 
    );
}

export default FriendGroups;