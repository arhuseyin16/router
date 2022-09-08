import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
            setUser(res.data);
        }).catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [id])
    return(
        <div style={{paddingLeft: '15px'}}>
            {isLoading &&
                <div>Loading...</div>
            }
            <h1>User Detail</h1>
            {!isLoading && <code>{JSON.stringify(user)}</code>}
            <br/>
            <br/>
           <Link to={`/users/${parseInt(id) + 1}`}>Next user ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User;