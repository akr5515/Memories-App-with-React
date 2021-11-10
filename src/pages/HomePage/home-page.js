import React from 'react'

import './home-page.scss'
import { useSelector } from 'react-redux';

const HomePage=()=>{
    const user=useSelector(state=>state.user.username);
    return(
        <div className="home">
            {user && <h1 className="welcome">Welcome {user}</h1>}
            <h1>This is Home</h1>
            <p>Duis non amet non culpa voluptate. Et ut duis laborum nulla cillum irure nostrud commodo eiusmod aliqua aliquip sit id Lorem. Commodo aliquip velit pariatur ea aliquip est incididunt.

Proident sunt enim in quis laborum ullamco est exercitation. Incididunt nostrud ipsum magna minim excepteur in ex labore. Aliquip deserunt in quis quis nisi commodo voluptate ea.

Mollit esse culpa magna eiusmod do et eu enim magna deserunt ea labore aute veniam. Reprehenderit aliquip enim officia consequat voluptate duis qui consequat sint mollit ullamco elit ea. Eiusmod ullamco aliquip exercitation tempor sunt non dolore. Velit non quis est consequat in irure ullamco proident reprehenderit.</p>
        
        
        </div>
    )
}

export default HomePage;