import dbConnect from "../../../utils/mongoConnection";
import multer from "multer";
import nextConnect from 'next-connect';


// export default async function handler(req,res){

//     const {method, query:{id}}= req;
//     await dbConnect();


       // if (method === 'POST'){

    //         const storage = multer.diskStorage({
    //              destination: (req,file,cb)=>{
    //              cb(null, '/public/images');
    //     },
    //              filename: (req,file,cb)=>{
    //              cb(null, req.body.name);
    //     }
    // });

    //         const upload  = multer({storage: storage});
            
    //     try {

    //         console.log(req.body);

    //          upload.single('file');
    //                 res.json({
    //                     status: 201,
    //                     message: 'Image Uploaded',
    //                     response: req.file.path
                        
    //                 })
                

    //         }catch(err){
    //                 res.json({
    //                     status: 500,
    //                     message: 'internal server error image not uploaded'
    //                 })
    //         }
    //     }
//}

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, req.body.name),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('file'));

apiRoute.post((req, res) => {
    console.log(req.body)
  res.status(200).json({ data: 'success'});
  //console.log('filePath: ',req.file.path)
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};




