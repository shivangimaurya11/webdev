const Card=(props)=>{
    return(
            
<div className="card">
    <h1 className="title">{props.title}</h1>
    <h2 className="title2">You have consumed {props.title2} cals today</h2>
</div>

    );
};
export default Card;