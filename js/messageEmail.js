
// email.js chat GPT generated code...

function messageMail(event) {
                            event.preventDefault();

                            var params = {
                                name: document.getElementById("name").value,
                                email: document.getElementById("email").value,
                                subject: document.getElementById("subject").value,
                                yourmessage: document.getElementById("yourmessage").value,
                            };

                            const serviceID = "service_gz8xho6";
                            const templateID = "template_gb4xl1o";

                            emailjs.send(serviceID, templateID, params)
                                .then((res) => {
                                    document.getElementById("name").value = "";
                                    document.getElementById("email").value = "";
                                    document.getElementById("subject").value = "";
                                    document.getElementById("yourmessage").value = "";
                                    console.log(res);
                                    alert("Your message sent successfully!");
                                    console.log("Your message sent successfully! ");
                                })
                                .catch((err) => {
                                    console.log(err);
                                    console.log("There was an error sending the message.");
                                });
                        }

                        document.addEventListener("DOMContentLoaded", () => {
                            const form = document.querySelector("form");
                            form.addEventListener("submit", messageMail);
                        });


//=======================================================================================
//  appointment booking form :
//=========================================================================================

/*

function  sendEmailAppointment(e)
{
    e.preventDefault();

             var fullName = document.getElementById("fname").value + " " + document.getElementById("lname").value;

             var params = {
             fullname: fullName,
             email: document.getElementById("email").value,
             mobileNo: document.getElementById("mobileNo").value,
             service: document.getElementById("service").value,
             appointmentDate: document.getElementById("appointmentDate").value,
             SpecialRequest: document.getElementById("specialRequest").value,
         };

         const serviceID = "service_gz8xho6";
         const templateID = "template_8r24ogf";

         emailjs.send(serviceID, templateID, params)
             .then((res) => {
                 fullname = "";
                 document.getElementById("email").value = "";
                 document.getElementById("mobileNo").value = "";
                 document.getElementById("service").value = "";
                 document.getElementById("appointmentDate").value = "";
                 document.getElementById("specialRequest").value = "";
                 console.log(res);
                 alert("Your message sent successfully!");
                 console.log("Your message sent successfully! ");
             })
             .catch((err) => {
                 console.log(err);
                 console.log("There was an error sending the message.");
             });

        }    

        */