import "./Product.css";

function Product(){
    return(
            <div className="product">
                <img className="HomeProductImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIv7ovmQFeO5YOIpaacwmyWcZdIErnAw1ncogppknYsjFbLaReHS254Hnne1OQo6vxuU&usqp=CAU" alt="Product"></img>
                <p className="HomeProductTitle">تفاوت بینگ و Chat GPT4</p>
                <p className="HomeProductDescription"> نگاه اول به نظر می‌رسد که چت GPT و بینگ از لحاظ تعبیه‌ سیستم چت بات مبتنی بر هوش مصنوعی شبیه هم هستند. اما تفاوت هایی با یکدیگر دارند.</p>
                <button className="HomeProductBtn">ادامه مقاله</button>
            </div>
    )
};

export default Product;