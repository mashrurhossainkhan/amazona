import React from "react";
import {Link} from 'react-router-dom'


const DokanList = (props) => {
    const {dokan} = props;

    if (dokan.name != null) {
      var dokanName= dokan.name;
      var dokanNameWithoutSpace = dokanName.replace(/ /g,"_");
 }
    return(
        <div key={dokan._id} className="DokanListcard">
        <div >
      
          <Link style={{margin: "0 auto"}} to={`/shoptype/${dokan.name}/99`}>
            
                <img className="dokanHomeImg" src={`/images/dokans/${dokanNameWithoutSpace}.png`?
                  `/images/dokans/${dokanNameWithoutSpace}.png`
                  :'/images/shopImages.jpeg'} alt={dokan.name}/>


            </Link>
          
        </div>

      <div className="card-body">       
         <div>
           <Link className="TypeDisable" to={`/shoptype/${dokan.name}/99`}>
          </Link> 
        </div>

        
        <Link to={`/shoptype/${dokan.name}/99`} style={{color: "#808080"}}>
            <div className="row">
            <div className="DokanName">{dokanName}</div>
            
            </div>
        </Link>
        
        </div>
       </div> 
        );
}

export default DokanList;