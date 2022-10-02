import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { srcinfo, destinfo } from './Body';

const Res = () => {
       
    if(srcinfo.temp_c==="" || destinfo.temp_c==="")
    {
        window.location.href="/errorpg";
    }

    const isday = () => {
        if(srcinfo.is_day==1)
        {
       return(
         
            <p className="text-center sun res-bodyt blu-font">Day Light <i class="fas  fa-sun"></i></p>
          
            );

       }
       else{
           return(
            <p className="text-center moon res-bodyt blu-font">Moon Light <i class="far fa-moon"></i></p>

           );
       }

    }


    const conditionsrc = () => {
      
        const a=srcinfo.condition.text;
       
       
       if(a=="Sunny" || a=="Dusty")
       {
           return(
            <i class="fas text-white ps-2 fa-sun"></i>
           );

       }
       else if(a=="Mist" || a=="Light rain")
       {
           return(
            <i class="fas ps-2 text-white fa-cloud-sun-rain"></i>

           );
       
       }
       else if(a=="Rain" || a=="Heavy rain")
       {
           return(
            <i class="fas ps-2 text-white fa-cloud-showers-heavy"></i>
           );
       }
       else{

        return(
            <i class="fas ps-2 text-white fa-cloud-sun"></i>


        );
        

       }

    }




    const conditiondest = () => {
      
        const b=destinfo.condition.text;
       
       
       if(b=="Sunny" || b=="Dusty")
       {
           return(
            <i class="fas ps-2 text-white fa-sun"></i>
           );

       }
       else if(b=="Mist" || b=="Light rain")
       {
           return(
            <i class="fas ps-2 text-white fa-cloud-sun-rain"></i>

           );
       
       }
       else if(b=="Rain" || b=="Heavy rain")
       {
           return(
            <i class="fas ps-2 text-white fa-cloud-showers-heavy"></i>
           );
       }
       else{

        return(
            <i class="fas ps-2 text-white fa-cloud-sun"></i>


        );
        

       }

    }




    return (
        <>
            <Navbar />
            <section className="respart my-2 text-white">
              
                <div className="container src res mt-4">
                    <div className="row">
                        <p className="text-center  py-2 res-mainh blu-font"> {srcinfo.name}
                        <i class="far ps-2 fa-arrow-alt-circle-down"></i></p>
                        <div className="col-lg-4">
                          
                            {isday()}
                           
                           
                           
                         
                        </div>
                        <div className="col-lg-4">
                            <p className="text-center temp-c res-bodyt blu-font">Temp: {srcinfo.temp_c}&#8451;</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="text-center temp-f res-bodyt blu-font">Temp: {srcinfo.temp_f} F </p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text-center wind res-bodyt blu-font">Wind Speed {srcinfo.wind_kph} kph</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-center condt res-bodyt blu-font">Condition: {srcinfo.condition.text}
                            {conditionsrc()}
                            

                            
                            </p>
                           
                        </div>
                    </div>
                </div>



                <div className="container dest mt-4 res">
                    <div className="row">
                        <p className="text-center py-2 res-mainh"> {destinfo.name}
                        <i class="far ps-2 fa-arrow-alt-circle-up"></i></p>
                        <div className="col-lg-4">
                          {isday()}
                        </div>
                        <div className="col-lg-4">
                            <p className="text-center temp-c res-bodyt">Temp: {destinfo.temp_c}&#8451;</p>
                        </div>
                        <div className="col-lg-4">
                            <p className="text-center temp-f res-bodyt">Temp: {destinfo.temp_f} F</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="text-center wind res-bodyt">Wind Speed {destinfo.wind_kph} kph</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-center condt res-bodyt">Condition: {destinfo.condition.text}
                            {conditiondest()}</p>
                        </div>
                    </div>
                </div>



            </section>
            <Footer />


        </>
    );
};


export default Res;