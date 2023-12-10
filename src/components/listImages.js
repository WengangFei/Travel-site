export default function Images({ data }){
    
    function layout({
        title,location,googleMapLink,startDate,
        endDate,description,imageURL,imgPath 
    }){
        return (
            <div className="imageList">
                <img src={ imgPath } alt='myImage' className="image-section2"/>
                <div className="rightInfo">
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="location">{ location }</span>
                    <a className="googleLink" href="www.google.com">View on { googleMapLink } </a>
                    <h1>{ title }</h1>
                    <h5>{ startDate } - { endDate }</h5>
                    <p>{ description }</p>
                    <a href={imageURL}>Image url</a>
                </div>
                
            </div>
        );
      
    }

    let show = data.map((item)=>layout(item));
    
    return <div>{ show }</div>;
}