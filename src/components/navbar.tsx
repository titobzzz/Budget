
import { VscHome } from "react-icons/vsc";
import { TbFileReport } from "react-icons/tb";
import { TbSteeringWheel } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Navbar(){
    return(
        <div className="navbar">
            
                    <div>
                    < VscHome color="grey" fontSize="1.7em"/>
                    <div className="text">Home</div>
                </div>
                <div>
                    < TbFileReport color="grey" fontSize="1.7em"/>
                    <div className="text">Report</div>
                </div>
                <div>
                    < TbSteeringWheel color="grey" fontSize="1.7em"/>
                    <div className="text">Chart</div>
                </div>
                <div>
                    < IoStatsChartSharp color="#0466C8" fontSize="1.7em"/>
                    <div className="text2">Budget</div>
                </div>
                <div>
                    < CgProfile color="grey" fontSize="1.7em"/>
                    <div className="text">Profile</div>
                </div>        
  
    </div>
    )   
}