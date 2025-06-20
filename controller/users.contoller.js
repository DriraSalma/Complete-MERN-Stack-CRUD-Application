const Users = require ('../models/users.model')
const ValidateUser = require ('../validation/Users.validation')

const AddUser =async (req,res)=> {
        const {errors,isValid}=ValidateUser(req.body)
        try {
            if (!isValid){
                res.status(404).json(errors)
            }
            else{
                await Users.findOne({Email:req.body.Email})
                .then(async(exist)=>{
                    if (exist){
                        errors.Email="user exist";
                        res.status(404).json(errors);
    
                    }else{
                        console.log(req.body)
                        await Users.create(req.body) 
                        res.status(200).json({message:'user added with succes'})
                    }
                })
            }     
        } catch (error) {
            console.log(error)
        }
        
    }
const FindAllUsers =async (req,res)=> {
    //res.send('find all user')
    try {
       
        const data =  await Users.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        
    }

}
const FindSinglUser =async (req,res)=> {
    //res.send('find one user')
    try {
        const user = await Users.findOne({_id:req.params.id})
        res.status(200).json(user)

    } catch (error) {
        console.log(error.message);
    }

}
const UpdateUser =async (req,res)=> {
    //res.send('update user')
    //necisste 3 parametres
    const {errors,isValid}=ValidateUser(req.body)

    try {
        if (!isValid){
                res.status(404).json(errors)          
        }
        else{
            const user = await Users.findOneAndUpdate (
                {_id:req.params.id},
                req.body,//contient les nouvelles données 
                {new:true}//new update
            )
            res.status(200).json(user)
    
        }
        
    } catch (error) {
        console.log(error.message);
    }


}
const DeleteUser =async (req,res)=> {
    //res.send('delete user')
    try {
        const user = await Users.deleteOne (
            {_id:req.params.id}
        )
        res.status(200).json({message:`user est supprimé`})

    } catch (error) {
        console.log(error.message);
    }

}
module.exports= {
    AddUser,
    FindAllUsers,
    FindSinglUser,
    UpdateUser,
    DeleteUser,
}