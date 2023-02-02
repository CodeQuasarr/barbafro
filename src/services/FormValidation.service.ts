

const validateEmail = (value: string) => {
    // if the field is empty
    if (!value) { return "L'email est obligatoire"; }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) { return 'Ce champ doit être une adresse électronique valide'; }
    return true;
}

const validateFirstName = (value: string) => {
    // if the field is empty
    if (!value) { return "Le nom est requis"; }
    // if the field is not a valid name
    if (!(value && value.length <= 255 && value.length > 2)) { return 'Le nom doit contenir au moins 3 caractères'; }
    return true;
}

const validateLastName = (value: string) => {
    // if the field is empty
    if (!value) { return "Le prénom est requis"; }
    // if the field is not a valid name
    if (!(value && value.length <= 255 && value.length > 2)) { return 'Le prénom doit contenir au moins 3 caractères'; }
    return true;
}

const validatePassword = (value: string) => {
    // regex password special characters
    const regex = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    // if the field is empty
    if (!value) { return "Le mot de passe est requis"; }
    // if the field is not a valid password
    if (!(value && value.length <= 255 && value.length > 6)) { return 'Le mot de passe doit contenir au moins 7 caractères'; }
    // if the field is not a valid password
    if (!regex.test(value)) { return 'Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre et 1 caractère spécial'; }
    return true;
}


const validatePhone = (value: string) => {
    // if the field is empty
    if (!value) { return "Le numéro de téléphone est requis"; }
    // if the field is not a valid phone number
    if (!(value && value.length <= 255 && value.length > 2)) { return 'Le numéro de téléphone doit contenir au moins 3 caractères'; }
    return true;
}

const validateAddress = (value: string) => {
    // if the field is not a valid address
    if ((value && value.length <= 255 && value.length > 2)) { return 'L\'adresse doit contenir au moins 3 caractères'; }
    return true;
}

const validateAddressNum = (value: string) => {
    // if the field is empty
    // if (!value) { return "Le numéro de rue est requis"; }
    // if the field is not a valid address number
    return true;
}

const validatePostalCode = (value: string) => {
    // if the field is empty
    // if (!value) { return "Le code postal est requis"; }
    // if the field is not a valid zip code
    return true;
}

const validateBirthday = (value: string) => {
    // if the field is empty
    // if (!value) { return "La date de naissance est requise"; }
    // if the field is not a valid birthday
    return true;
}

const validateContractStartDate = (value: string) => {
    // if the field is empty
    if (!value) { return "La date de début de contrat est requise"; }
    // if the field is not a valid contract start date
    return true;
}

const validateNationality = (value: string) => {
    // if the field is empty
    if (!value) { return "La nationalité est requise"; }
    // if the field is not a valid
    return true
}

const validateContractType = (value: string) => {
    // if the field is empty
    if (!value) { return "Le type de contrat est requis"; }
    // if the field is not a valid
    return true
}


export const FormValidationService = {
    validateEmail,
    validateFirstName,
    validateLastName,
    validatePassword,
    validatePhone,
    validateAddress,
    validatePostalCode,
    validateBirthday,
    validateContractStartDate,
    validateAddressNum,
    validateNationality,
    validateContractType,
}
