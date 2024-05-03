import { TbCurrencyNaira } from "react-icons/tb"
import { SlOptions } from "react-icons/sl";
import { MdOutlineSavings } from "react-icons/md";
import { PiBowlFoodBold } from "react-icons/pi";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function Budget(){
    return(
        <div className="budget_container">
          <h2>Budget</h2>
          <div className="naira_constainer">
            <div className="naira">
            <TbCurrencyNaira color="#0466C8" fontSize="1.1em"/>
            </div>             
            <section>Monthly budget</section>
          </div>
          <div className="balance_container">
          <TbCurrencyNaira color="black" fontSize="2em"/>
           <h2> 120,000</h2>
          </div>
          <div className="months">
                <div className="grey">Last Month</div>
            <div className="blue">This Month</div>
            <div className="options"><SlOptions color="grey" fontSize="1em"/></div>            
          </div>
          <div className="progressbar">
            <div className="progress-container">
                <CircularProgress className="progress"  value={49} size='112px' thickness='6px'>
                <CircularProgressLabel  ><h3 className="pro-value">49%</h3></CircularProgressLabel>
          </CircularProgress>
            </div>     
               
          </div>
          <div>
                <p>Amount spent so far</p>
                <div className="amontspent"><TbCurrencyNaira color="#0466C8" fontSize="1.3em"/>50,000/<div style={{color:'rgb( 4, 102, 200, .6)'}}>120,000</div></div>
            </div> 
        <div className="categories">
            <div className="h4">Category Breakdown</div>
            <div className="card">
                <div className="progress_back">
                <CircularProgress value={40} color='#C89104' size='40px' thickness='5px' />
                <div ><PiBowlFoodBold className="card-icon" color="#C89104" fontSize="1.3em"/></div>
                </div>
                <div className="expence">
                    <div style={{ fontWeight:"bold"}}>Food and Drink</div>
                    <div style={{fontSize:"12px"}}>40%</div>
                </div>
                <div>
                <div className="amontspent2"><TbCurrencyNaira color="#001233" fontSize="1em"/>50,000/<div style={{color:'rgb(0,18,51,.6)'}}>120,000</div></div>
                </div>

            </div>



            <div className="card">
                <div className="progress_back2">
                <CircularProgress value={20} color='#056608 ' size='40px' thickness='5px' />
                <div ><MdOutlineSavings className="card-icon" color="#056608 " fontSize="1.3em"/></div>
                </div>
                <div className="expence">
                    <div style={{ fontWeight:"bold"}}>Savings</div>
                    <div style={{fontSize:"12px"}}>20%</div>
                </div>
                <div>
                <div className="amontspent2"><TbCurrencyNaira color="#001233" fontSize="1em"/>10,000/<div style={{color:'rgb(0,18,51,.6)'}}>24,000</div></div>
                </div>

            </div>


            
        </div>

        </div>
    )
}
