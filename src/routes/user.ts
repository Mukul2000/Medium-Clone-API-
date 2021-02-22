import {Router} from 'express';


const route = Router();


//GET /user get current user
route.get("/", (req,res) => {
    res.send("GET /user hsdhsoadh");
})

//PUT /user update current user
route.put("/", (req,res) => {
    
});

export const userRoute = route;