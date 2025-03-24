try {
    if (BASE_URL) {}
} catch (error) {
    Swal.fire({
        icon: 'error',
        title: 'Unexpected Error',
        text: error.message || 'report this issue'
    })
}

// Get Profile
function http_getProfile() {
    return $.getJSON(BASE_URL + '/account/profile')
}