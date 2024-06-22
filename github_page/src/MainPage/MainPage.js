import React ,{useState,useEffect} from "react";
// import { useNavigate } from 'react-router-dom';
import {Homepage,Cutscene,Tutorial,Rank,Gaming} from "./Image/fly-chicken-fly"
import { img1,img2,img3,img4,img5 } from "./Image/eventease";
import left_arrow from "./Image/left_arrow.png"
import right_arrow from "./Image/right_arrow.png"
import "./MainPage.css"

const chicken_images = [Homepage,Cutscene,Tutorial,Rank,Gaming];
const event_images = [img1,img2,img3,img4,img5];
const image_length = 5;
const page_length = 2;
let image_index = 0;
let page_index = 0;

const MainPage = () =>{
    // const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(chicken_images[image_index]);
    const [currentPage, setCurrentPage] = useState(0);

    //hanle to change the image inside the image container
    const handleImageChange = (direction) => {
        setTimeout(()=>{    //Add time for smooth fade in to change image
            if (direction === 'left') {
                image_index = (image_index - 1) < 0 ? image_length - 1 : image_index - 1;
            } else if (direction === 'right') {
                image_index=(image_index+1)%image_length;
            }
            setupImg(image_index)
            
        },100); 
    };

    const handlePageChange = (direction) =>{
        if (direction === "up"){
            page_index = page_index-1 <0 ? 0 : page_index - 1;
        }else if (direction === "down"){
            page_index = page_index+1 >= page_length ? page_length : page_index+1;
        }
        setCurrentPage(page_index);
        setupImg(0)
    }

    const setupImg = (img_index) =>{
        switch (page_index) {
            case 0:
                setCurrentImage(chicken_images[img_index]);
                break;
            case 1:
                setCurrentImage(event_images[img_index]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY < 0) {
                handlePageChange("up");
            } else if (event.deltaY > 0) {
                handlePageChange("down");
            }
        };

        window.addEventListener('wheel', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return(
        <div className="home_page">
            <h1 className="header">Welcome to my Github Page!</h1>

                {/* <img src={left_arrow} alt="left arrow" className="section_left" onClick={()=>handleImageChange("none")}></img> */}
                {currentPage === 0 &&(
                <div className="fly-chicken-fly" >
                    <p className="title" >Fly Chicken Fly!</p>
                    <div className="body">
                        <div className="content"> This is the game me and my team made for my Winter 2024 course project. 
                            <p>
                            In this game, you are the chicken escape from the hell farm. 
                            Keep jumping and flying to escape from the farmer! And practice to be more talented, reach a higher score! 
                            </p>
                            <p>Itch.io: <a href="https://saveqaq.itch.io/gold-release" className="content" >Click here to play online</a></p>
                            <p>Github: <a href="https://github.com/Project250-SkyForm/Fly-Chicken-Fly" className="content" >Click here to view github repository</a></p>
                        </div>
                        <div className="image_container">
                            <div className="bluring_left">
                                <img src={left_arrow} alt="left arrow" className="image_left" onClick={()=>handleImageChange("left")}></img>
                            </div>
                            <div className="bluring_right">
                                <img src={right_arrow} alt="right arrow" className="image_right" onClick={()=>handleImageChange("right")}></img>
                            </div>
                            <img src={currentImage} alt="error to display" className="chicken_img"></img>
                        </div>
                    </div>
                </div>
                )}
                {currentPage === 1 && (
                <div className="event_ease">
                    <p className="title" >EventEase</p>
                    <div className="body">
                        <div className="content"> This is an app me and my team made for my Winter 2024 course project. 
                            <p>
                                The app is implemented by Andriod Studio, based on MVC pattern and use various APIs such as google firebase.
                            <p>
                                The users can use this app to organize, view, and attend events.
                            </p>
                            </p>
                            <p>Github: <a href="https://github.com/CMPUT301W24T12/SyntaxSquad" className="content" >Click here to view github repository</a></p>
                        </div>
                        <div className="event_image_container">
                            <div className="bluring_left">
                                <img src={left_arrow} alt="left arrow" className="image_left" onClick={()=>handleImageChange("left")}></img>
                            </div>
                            <div className="bluring_right">
                                <img src={right_arrow} alt="right arrow" className="event_image_right" onClick={()=>handleImageChange("right")}></img>
                            </div>
                            <img src={currentImage} alt="error to display" className="event_img"></img>
                        </div>
                    </div>
                </div>
            )}
                {/* <img src={right_arrow} alt="right arrow" className="section_right" onClick={()=>(handleImageChange("none"))}></img> */}

        </div>
    );
}

export default MainPage;