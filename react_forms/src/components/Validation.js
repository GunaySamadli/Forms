const Validation = (values) => {
    let errors = {}
    if (!values.firstName) {
        errors.firstName = "First name is required"
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required"
    }
    if (!values.email) {
        errors.email = "Wrong email address"
    }
    if (!values.number) {
        errors.number = "Mobile is required"
    }
    if (!values.select) {
        errors.select = "Application type is required"
    }
    if (!values.message) {
        errors.message = "Message is required"
    }
    
    return errors
}

export default Validation