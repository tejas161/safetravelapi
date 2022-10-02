import React,{useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Swal from 'sweetalert2';


const srcinfo={name:"",is_day:"",temp_c:"",temp_f:"",condition:"",wind_kph:""};
const destinfo={name:"",is_day:"",temp_c:"",temp_f:"",condition:"",wind_kph:""};
const Body = () => {
    const[location,setUserLocation]=useState({source:"",destination:""});
 

    const saveData = (e) => {
        const s1 = e.target.name;
        const s2 = e.target.value;
        setUserLocation({...location,[s1]:s2})
        
        
    }


     const callApi = () => {
        
         if(location.source=="" ||  location.destination=="")
         {
             
             Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Source and Destination cannot be empty'
              })
             
         }
         else{
           
            var a = document.getElementById('start');
            a.className="hide";

            var c=document.getElementById('sync');
            c.className="sync-class";

        fetch(`https://api.weatherapi.com/v1/current.json?key=337eaa8e8d0647e9b62122153210412&q=${location.source}`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"

            }

        }).then((res) => {
            const data = res.json();
           data.then((content) => {
           
            srcinfo.name=location.source;
            srcinfo.is_day=content.current.is_day;
            srcinfo.temp_c=content.current.temp_c;
            srcinfo.temp_f=content.current.temp_f;
            srcinfo.condition=content.current.condition;
            srcinfo.wind_kph=content.current.wind_kph;
            console.log(srcinfo);


           }).catch((err) => {
               
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Source location invalid'
              })
               
              setTimeout(()=> {
                window.location.href="/";

              },2000);
               
           })
            
            

        })



        fetch(`https://api.weatherapi.com/v1/current.json?key=337eaa8e8d0647e9b62122153210412&q=${location.destination}`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"

            }

        }).then((res) => {
            const data = res.json();
           data.then((content) => {
               destinfo.name=location.destination;
            destinfo.is_day=content.current.is_day;
            destinfo.temp_c=content.current.temp_c;
            destinfo.temp_f=content.current.temp_f;
            destinfo.condition=content.current.condition;
            destinfo.wind_kph=content.current.wind_kph;
            console.log(destinfo);

           }).catch((err) => {
              
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Destination location invalid'
              })
               
              setTimeout(()=> {
                window.location.href="/";

              },2000);
               
          
            
        })
            
            

        });

       
        setTimeout(() => {

           
            c.className="hide";
        
            var b = document.getElementById('done');
            b.className="show-class";

        },4000)
    
    
       
       
        

    }
    };

    



    return (
        <>
            <section className="sect-body">
                <div className="div-body bg-dark mx-auto p-4">
                    <div className="search-heading text-center pt-4">
                        <h3 className="blu-font text-white">Kindly Type Your...</h3>
                    </div>
                    <div className="search-body text-center mt-4">
                        <input onChange={saveData} name="source" type="text" className="blu-font ps-2" placeholder="  Source" />
                        <h4 className="pt-2 blu-font text-white">TO</h4>
                        <input onChange={saveData} name="destination" type="text" className="blu-font ps-2" placeholder="  Destination" />
                        <div className="res-btn pt-4">
                        <button onClick={callApi} id="start" className="btn-body text-white" type="submit">GET LIVE STATUS</button>
                        <button id="sync" className="hide btn-body text-white">Syncing Data  ...</button>
                      
                       <button id="done" className="hide btn-body"> <NavLink className="text-white text-decoration-none" to="result">Check results !!</NavLink></button>

                        
                        
                           </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Body;
export {srcinfo,destinfo};
