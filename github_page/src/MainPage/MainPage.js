import React from "react";
import { useNavigate } from 'react-router-dom';

const MainPage = () =>{
    const navigate = useNavigate();

    const click = (link) =>{
        navigate(link);
    };

    return(
        <div className="Fly_Chicken_Fly!">
            <p>This is Unity Project</p>
        </div>
    );
}

export default MainPage;