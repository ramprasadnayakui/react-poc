import React, {useState, useEffect} from "react"

function Practice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  
  return(
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ul>
        {users.map(item => (
          <li>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Practice;