var reqBody = {
 amount: 5000,
 currency: "INR",
 receipt: "xyz"
}

// alert('hi');

// const req = fetch('https://api.razorpay.com/v1/orders', {
//     method: 'POST',
//     headers: 'content-type:application/json',
//     body: JSON.stringify(reqBody)
// })

// req.then((val)=>console.log(val));

function onBtn(){
    console.log('onBtn called...');
    var amt = document.getElementById('amount').value;
    var name = document.getElementById('name').value;
    var options = {
        "key": "rzp_test_J6HNNhDA3s1kPo",
        "amount": amt*100, // Example: 2000 paise = INR 20
        "name": name,
        "description": "description",
       
        "handler": function (response) {
            console.log(response);
            // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
        },
        "prefill": {
            "name": "ABC", // pass customer name
            "email": 'A@A.COM',// customer email
            "contact": '+919123456780' //customer phone no.
        },
        "notes": {
            "address": "address" //customer address 
        },
        "theme": {
            "color": "#15b8f3" // screen color
        }
    };
    console.log(options);
    var propay = new Razorpay(options);
    propay.open();
}

document.getElementById('pay').addEventListener('click', onBtn);