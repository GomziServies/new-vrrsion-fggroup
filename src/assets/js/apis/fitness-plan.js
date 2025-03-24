function minusQuantity() {
    let quantity = parseInt(document.getElementById('txt_quantity').value);
    let quantity1 = parseInt(document.getElementById('txt_quantity1').value);
    let price = 2999; // Price for 3 months
    let decreasePrice = 999; // Price to add when quantity is increased

    if (quantity > 3 || quantity1 > 3) {
        quantity--;
        quantity1--;
        document.getElementById('txt_quantity').value = quantity;
        document.getElementById('txt_quantity1').value = quantity;

        // Calculate the new price
        let totalPrice = price + (decreasePrice * (quantity - 3));

        document.getElementById('priceChange1').innerHTML = '₹' + totalPrice + '/-';
        document.getElementById('priceChange').innerHTML = '₹' + totalPrice + '/-';
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Min 3 Month plan required for Purchase!',
            icon: 'error',
        });
    }
}

function plusQuantity() {
    let quantity = parseInt(document.getElementById('txt_quantity').value);
    let quantity1 = parseInt(document.getElementById('txt_quantity1').value);
    let price = 2999; // Price for 3 months
    let incrementPrice = 999; // Price to add when quantity is increased

    if (quantity < 12 || quantity1 < 12) {
        quantity++;
        quantity1++;
        document.getElementById('txt_quantity').value = quantity;
        document.getElementById('txt_quantity1').value = quantity;

        // Calculate the new price
        let totalPrice = price + (incrementPrice * (quantity - 3));

        document.getElementById('priceChange1').innerHTML = '₹' + totalPrice + '/-';
        document.getElementById('priceChange').innerHTML = '₹' + totalPrice + '/-';
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Max limit is 12 Month plan required for Purchase!',
            icon: 'error',
        });
    }
}


function createPaymentBook(plan_id) {

    let quantity = $('#txt_quantity').val()

    createBookOrder(plan_id, quantity);
}

function createBookOrder(plan_id, quantity = 1) {
    if (!plan_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Plan ID is required.',
            icon: 'error',
        })
    }

    if (quantity == undefined || isNaN(parseInt(quantity)) || parseInt(quantity) < 1) {
        return Swal.fire({
            title: 'Error',
            text: 'Min 1 Month plan required for Purchase!',
            icon: 'error',
        })
    }

    let payload = {
        plan_id,
        quantity: parseInt(quantity),
    }


    // Will use after authentication
    localStorage.setItem('tmp_BookPurchasePayload', JSON.stringify({ ...payload, expire: new Date().getTime() + (1000 * 60 * 60 * 5) }))

    // Check Authentication
    if (localStorage.getItem("fg_group_user_authorization") == null || localStorage.getItem("user_info") == null) {
        localStorage.removeItem('fg_group_user_authorization')
        localStorage.removeItem('user_info')

        // Store Payload in Local Storage
        // expire in 5h
        return modalLogin('directBuyBook')
    }

    $.post({
        url: BASE_URL + '/books/create-order',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.data) {
                result.data.handler = () => {
                    localStorage.removeItem('tmp_BookPurchasePayload')
                    return Swal.fire({
                        title: 'Success',
                        text: 'Please check your email for invoice.',
                        icon: 'success',
                    }).then(() => {
                        $('#txt_pincode,#txt_address,#txt_city').val('')
                        $('#txt_quantity').val(1)


                        let user_info = localStorage.getItem('user_info')

                        if (user_info) {
                            user_info = JSON.parse(user_info)
                        }

                        if (user_info && ((user_info.first_name).toLowerCase()).trim() == "fg" || ((user_info.last_name).toLowerCase()).trim() == "user") {
                            return window.location.href = '../account/profile.html'
                        }
                        // Redirect to Order Page
                        return window.location.href = 'health-and-wellness-books-orders.html'
                    })
                };

                result.data.hidden = {
                    contact: false,
                    email: false
                }
                new Razorpay(result.data).open()
            }
        },
        error: error => {
            error = error.responseJSON

            try {
                if (error && error.status && (error.status == 401)) {
                    return modalLogin(`directBuyBook`)
                }
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return modalLogin(`directBuyBook`)
            }
        }
    })
}