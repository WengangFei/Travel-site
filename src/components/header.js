export default function Headers({ image }){
    return (
        <div className="header">
            <img src={image} alt='logo' className="logo"/>
            <h4>My Travel Journal</h4>
        </div>
    )
}