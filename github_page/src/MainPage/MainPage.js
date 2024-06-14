import React from "react";
import { useNavigate } from 'react-router-dom';
import chicken_homepage from "./Image/chicken_homepage.png"
import "./MainPage.css"
const MainPage = () =>{
    const navigate = useNavigate();

    const click = (link) =>{
        navigate(link);
    };

    return(
        <div className="home_page">
            <h1 className="header">Welcome to my Github Page!</h1>
            <div className="fly-chicken-fly">
                <p className="title" >Fly Chicken Fly!</p>
                <div className="body">
                    <div className="content"> This is the game me and my team made for my Winter 2024 course project. 
                        <p>
                        In this game, you are the chicken
                        escape from the hell farm. Keep jumping and flying to escape from the farmer! And practice to be more talented, reach a higher score! 
                        </p>
                        <p>Itch.io: <a href="https://saveqaq.itch.io/gold-release" className="content" >Click here to play online</a></p>
                        <p>Github: <a href="https://github.com/Project250-SkyForm/Fly-Chicken-Fly" className="content" >Click here to view github repository</a></p>
                    </div>
                    <img src={chicken_homepage} alt="error to display" className="chicken_img"></img>
                </div>
            </div>
            {/* <div className="EventEase">
                <p>EventEase</p>
            </div> */}
        </div>
    );
}

export default MainPage;