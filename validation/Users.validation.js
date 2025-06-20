const isEmpty = require ('./isEmpty')
const validator = require ('validator')
module.exports= function ValidateUser(data){
    let errors={}
    data.Email = !isEmpty(data.Email)? data.Email : ""
    data.LastName = !isEmpty(data.LastName)? data.LastName: ""
    data.FirstName = !isEmpty(data.FirstName)? data.FirstName : ""
    data.Age = !isEmpty(data.Age)? data.Age : ""

    if(validator.isEmpty(data.Email)){//verifie si chaine est vide 
        errors.Email="required Email" // si vide on ajoute une erreur dans errors.Email
    }
    if(validator.isEmpty(data.LastName)){
        errors.LastName="required Lastname"
    }
    if(validator.isEmpty(data.FirstName)){
        errors.FirstName="required Firstname"
    }
    if(validator.isEmpty(data.Age)){
        errors.Age="required Age"
    }
    
    return {
        errors,
        isValid:isEmpty(errors)// si pas d'errors return true sinon false 
    }
}
