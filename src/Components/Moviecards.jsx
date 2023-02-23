import './Moviecards.css'
 import { FaShareAlt,FaHeart,FaCommentAlt } from 'react-icons/fa';
function Moviecards(props){
    return(
        <div className="cards" style = {{backgroundImage:`url(${props.bg})`}}>
            <div className="maincontainer">
            <div className="rightcontent">
                <div className="upperright">
                    <div className="imagecon">
                        <img src={props.profile} alt="" />

                    </div>
                    <div className="imagedetails">
                        <h1>{props.name}</h1>
                        <small>{props.year},{props.dir}</small>
                        <div className="timegenre">
                            <div className="time">
                           <span> {props.time}</span>
                            </div>
                            <p>{props.genre}</p>
                           


                        </div>

                    </div>
                </div>
                <div className="lowerright">
                <p>{props.details}</p>

                <div className="icons"> 
                    <FaShareAlt />
                    <FaHeart/>
                    <FaCommentAlt/>
                     
                </div>

                </div>

            </div>
            <div className="leftcontent" >

            </div>
            </div>
        </div>
    )
}
export default Moviecards;