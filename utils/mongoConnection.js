import mongoose from 'mongoose'
const dbConnect = async () =>{
   await mongoose.connect("mongodb+srv://shamshad-hussain:Mubarak98@cluster0.x09j1.mongodb.net/S_AND_Database?retryWrites=true&w=majority",{
       
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    }).then( ()=>{
        console.log("Database Connected");
    }).catch((err)=>{
        console.log('Failed to Connect Databse: '+err);
    });

}

export default dbConnect