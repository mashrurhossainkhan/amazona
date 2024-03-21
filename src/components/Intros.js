import backImg from './images_shopType/EIDBanner1.jpeg'
const Intros = (props) => {
    var dokanNameWithoutSpace = props.shopName.replace(/ /g,"_");
    return(
        <div style={{backgroundImage:`url(${backImg})`, padding: "10px"}} className="shopTypeHeader">
            <div className="flexNoWrap">
                <div className="ShoppingMallIntro">
                    <p>Shopping Mall</p>
                    <hr/>
                    <h2>{props.shopName}</h2>
                    <button className="btn_marchant_account">Follow</button>
                </div>
                <div className="ShoppingMallImage">
                <img className="medium2" src={`/images/dokans/${dokanNameWithoutSpace}.png`} alt={props.shopName}/>
                </div>
            </div>
            
        </div>
    )
}

export default Intros;