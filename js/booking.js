//=======================================================================================
//  appointment booking form :
//=========================================================================================

                     document.querySelector('form').addEventListener('submit', function (e) {
                        e.preventDefault();
                    sendEmailAppointment();
    });

                    function sendEmailAppointment() {
        var params = {
                        name: document.getElementById("name").value,
                    email: document.getElementById("email").value,
                    mobileNo: document.getElementById("mobileNo").value,
                    service: document.getElementById("service").value,
                    appointmentDate: document.getElementById("date").value,
                    specialRequest: document.getElementById("specialRequest").value,
        };

                    const serviceID = "service_gz8xho6";
                    const templateID = "template_8r24ogf";

                    emailjs.send(serviceID, templateID, params)
            .then((res) => {
                        document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("mobileNo").value = "";
                    document.getElementById("service").value = "";
                    document.getElementById("date").value = "";
                    document.getElementById("specialRequest").value = "";
                    console.log(res);
                    alert("Your Request for appointment sent successfully!" );

                                        
                    // Delayed alert after 2 seconds
                    setTimeout(() => {
                         alert("Will confirm your appoinment request shortly , THANK YOU !");
                       }, 2000);
         })

            .catch((err) => {
                        console.log(err);
                    console.log("There was an error sending the message.");
            });
    }