function minusQuantity(element) {
    if (!element) {
        element = document.getElementById('txt_quantity')
    }

    let quantity = document.getElementById('txt_quantity').value;
    if (quantity > 1) {
        quantity--;
        document.getElementById('txt_quantity').value = quantity;
    } else {
        return Swal.fire({
            title: 'Error',
            text: 'Min 1 book required for order!',
            icon: 'error',
        })
    }
}

function plusQuantity(element) {
    if (!element) {
        element = document.getElementById('txt_quantity')
    }

    let quantity = element.value;
    if (quantity < 10) {
        quantity++;
        element.value = quantity;
    } else {
        return Swal.fire({
            title: 'Error',
            text: 'Max limit is 10 books per order!',
            icon: 'error',
        })
    }

}

let productSearchParams = new URLSearchParams(window.location.search);

if (productSearchParams.has('action') && productSearchParams.get('action') == 'directBuyProduct') {
    let findPayload = localStorage.getItem('tmp_MealProductPurchasePayload');
    if (findPayload) {
        try {
            findPayload = JSON.parse(findPayload);
            createProductOrder(findPayload.product_id, findPayload.quantity, {
                address_line_1: findPayload.address_line_1,
                address_line_2: findPayload.address_line_2,
                city: findPayload.city,
                pin_code: findPayload.pin_code,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

function generateOrder(product_id) {

    let quantity = $('#txt_quantity').val() || $(`#txt_quantity_${product_id}`).val()

    let address = {
        address_line_1: $('#txt_address').val() || $('#txt_address_' + product_id).val(),
        address_line_2: $('#txt_address_2').val() || $('#txt_address_2_' + product_id).val(),
        city: $('#txt_city').val() || $('#txt_city_' + product_id).val(),
        pin_code: $('#txt_pincode').val() || $('#txt_pincode_' + product_id).val(),
    }

    createProductOrder(product_id, quantity, address);
}

function createProductOrder(product_id, quantity = 1, address) {
    if (!product_id) {
        return Swal.fire({
            title: 'Error',
            text: 'Product ID is required.',
            icon: 'error',
        })
    }

    if (!address) {
        return Swal.fire({
            title: 'Error',
            text: 'Address, city and pin code are required!',
            icon: 'error',
        })
    }

    if (quantity == undefined || isNaN(parseInt(quantity)) || parseInt(quantity) < 1) {
        return Swal.fire({
            title: 'Error',
            text: 'Min 1 Product required for order!',
            icon: 'error',
        })
    }

    let { address_line_1, address_line_2, city, pin_code } = address

    let payload = {
        product_id,
        quantity: parseInt(quantity),
    }

    if (address_line_1 && city && pin_code) {
        address_line_1 = String(address_line_1).trim()
        city = String(city).trim()
        pin_code = String(pin_code).trim()

        if (address_line_1.length == 0) {
            return Swal.fire({
                title: 'Error',
                text: 'Address Line 1 is required!',
                icon: 'error',
            })
        }

        if (city.length == 0) {
            return Swal.fire({
                title: 'Error',
                text: 'City name is invalid!',
                icon: 'error',
            })
        }

        if (isNaN(parseInt(pin_code)) || pin_code.length != 6) {
            return Swal.fire({
                title: 'Error',
                text: 'Pin Code is invalid!',
                icon: 'error',
            })
        }

        payload.address_line_1 = address_line_1
        payload.city = city
        payload.pin_code = pin_code
    }

    if (address_line_2) {
        payload.address_line_2 = String(address_line_2).trim()
    }

    // Will use after authentication
    localStorage.setItem('tmp_MealProductPurchasePayload', JSON.stringify({ ...payload, expire: new Date().getTime() + (1000 * 60 * 60 * 5) }))

    // Check Authentication
    if (localStorage.getItem("fg_group_user_authorization") == null || localStorage.getItem("user_info") == null) {
        localStorage.removeItem('fg_group_user_authorization')
        localStorage.removeItem('user_info')

        // Store Payload in Local Storage
        // expire in 5h
        return modalLogin('directBuyProduct')
    }

    $.post({
        url: BASE_URL + '/meals/create-order',
        method: 'POST',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        success: result => {
            if (result && result.data) {
                result.data.handler = () => {
                    localStorage.removeItem('tmp_MealProductPurchasePayload')
                    return Swal.fire({
                        title: 'Success',
                        text: 'Please check your email for invoice.',
                        icon: 'success',
                    }).then(() => {
                        $('#txt_pincode,#txt_address,#txt_city').val('')
                        $('#txt_quantity').val(1)

                        // Redirect to Order Page
                        window.location.href = 'orders.html'
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
                if (error && error.status && error.status == 401) {
                    return modalLogin(`directBuyProduct`)
                }
                return Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                })
            } catch (error) {
                return modalLogin(`directBuyProduct`)
            }
        }
    })
}