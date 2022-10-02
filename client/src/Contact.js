import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", email: "", phone: "", city: "", concern: "" });

   

    const handleInputs = (e) => {

        const name = e.target.name;

        const value = e.target.value;

        setUserData({ ...userData, [name]: value });




    }



    // checking is email valid(more email valid)
    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if (atSymbol < 1) return false;
        var dot = emailVal.lastIndexOf('.');
        if (dot <= atSymbol + 2) return false;
        if (dot === emailVal.length - 1) return false;
        return true;


    }

    const validatefunc = () => {
        const usernameVal = userData.name.trim();
        const emailVal = userData.email.trim();
        const phoneVal = userData.phone.trim();
        const cityVal = userData.city.trim();
        const concernVal = userData.concern.trim();

        //validate username
        const username = document.getElementById('username');
        if (usernameVal === "") {
            setErrorMsg(username, 'Username cannot be blank');
        } else if (usernameVal.length <= 2) {

            setErrorMsg(username, 'User should include full name');

        } else {
            setSuccessMsg(username);
          
        }

        const email = document.getElementById('email');
        //validate email
        if (emailVal === "") {
            setErrorMsg(email, 'Email cannot be blank');
        } else if (!isEmail(emailVal)) {

            setErrorMsg(email, 'Not a valid Email');

        } else {
            setSuccessMsg(email);
           

        }


        //validate phone
        const phone = document.getElementById('phone');
        if (phoneVal === "") {
            setErrorMsg(phone, 'Phone number cannot be blank');
        } else if (phoneVal.length != 10) {

            setErrorMsg(phone, 'Not a valid Phone number');

        } else {
            setSuccessMsg(phone);
            

        }



        //validate cityname
        const city = document.getElementById('city');
        if (cityVal === "") {
            setErrorMsg(city, 'Name of the city cannot be blank');
        } else {
            setSuccessMsg(city);
          

        }

        //validate concern val
        const concern = document.getElementById('concern');
        if (concernVal === "") {
            setErrorMsg(concern, 'Message cannot be blank');
        } else {
            setSuccessMsg(concern);
          

        }




    }



    useEffect(() => {
        if(userData.name!="" || userData.email!="" || userData.phone!="" || userData.city!="" || userData.concern!="")
        {
            validatefunc();
        }

    },[userData]);


  



    const submitform = async(e) => {
        e.preventDefault();
        var a=document.getElementsByClassName('success');
        if(a.length==5)
        {
            const{name,email,phone,city,concern} = userData;

            const res = await fetch('/contact',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,phone,city,concern
                })
            })
            const data = res.json();
            if(!data || res.status===404 || res.status!=201){
                Swal.fire({
                    icon: 'error',
                    title: 'Server is Sleeping',
                    text: 'Something went wrong!'
                  })
              }
              else{
                Swal.fire({
                    icon: 'success',
                    title: 'Sucessfully sent!!',
                    text: 'Thank you for your views!!'
                  })
               
                  setTimeout(() => {
                    window.location.href="/contactjs";
                  },3000)
        
                  
              }


        }
        else{
            Swal.fire({
                icon: 'question',
                title: 'Please fill all the Details',
                text: 'Something went wrong!'
              })
            
        }
     
     




    }


    function setErrorMsg(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-controlf error";
        small.innerText = errormsgs;


    }


    function setSuccessMsg(input) {

        const formControl = input.parentElement;

        formControl.className = "form-controlf success";


    }


    return (
        <>
            <Navbar />
            <section className="contact-section mt-4">
                <div className="contact-container">
                    <div className="header">
                        <h2 className="font-h">Contact Us</h2>
                    </div>
                    <form className="form" id="form">
                        <div className="form-controlf">
                            <label className="blu-font">Username</label>
                            <input type="text" name="name" id="username" onChange={handleInputs} placeholder="Enter you full name" autocomplete="off" />
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error mssg</small>
                        </div>
                        <div className="form-controlf">
                            <label>Email</label>
                            <input type="text" name="email" id="email" onChange={handleInputs} placeholder="Enter your full email" autocomplete="off" />
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error mssg</small>
                        </div> <div className="form-controlf">
                            <label>Mobile Number</label>
                            <input type="number" name="phone" id="phone" onChange={handleInputs} placeholder="Enter you mobile number" autocomplete="off" />
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error mssg</small>
                        </div> <div className="form-controlf">
                            <label>City</label>
                            <input type="text" name="city" id="city" onChange={handleInputs} placeholder="Enter you Live Location" autocomplete="off" />
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error mssg</small>
                        </div> <div className="form-controlf">
                            <label>Your Concern</label>
                            <textarea type="text" name="concern" onChange={handleInputs} id="concern" className="input-concern" placeholder="Type Your Concern here..." autocomplete="off"></textarea>
                            <i class="fas fa-check-circle"></i>
                            <i class="fas fa-exclamation-circle"></i>
                            <small>Error mssg</small>
                        </div>
                        <input type="submit" name="" onClick={submitform} value="Submit" className="btn-s blu-font" />

                    </form>

                </div>


            </section>
            <Footer />
        </>
    )
}


export default Contact;