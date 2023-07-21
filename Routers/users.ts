import { Router } from "express";
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { updateUsers, consulUsers,   deleteUsers,  saveUsers, consultUserById } from "../Controllers/users";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const randomName = uuidv4(); 
      cb(null, `${randomName}.${file.mimetype.split( "/")[1]}`)
    }
  })
  
  const upload = multer({ storage: storage })

const routerUsers = Router();

routerUsers.get ('/consulUsers', consulUsers);
routerUsers.get ('/consulUser/:id',consultUserById);
routerUsers.post('/saveUsers',upload.single('file'), saveUsers);
routerUsers.put('/updateUsers', updateUsers);
routerUsers.delete('/deleteUsers/:id', deleteUsers );

routerUsers.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not fount'
    })
})

export default routerUsers;
