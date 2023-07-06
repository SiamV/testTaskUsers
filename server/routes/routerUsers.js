import Router from 'express';
import {User} from  "../server.js";
import * as argon2 from "argon2";

const routerUsers = new Router();

routerUsers.get("/user-list", async (req, res) => {
    const users = await User.find({})
    res.send(users)
})

routerUsers.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOne({_id: id})
        if (!id) {
            res.status(400)
            res.send({message: 'id не указан'})
        }
        res.send(user)
    } catch (e) {
        res.status(500)
        res.send({error: e})
    }
})

routerUsers.post("/user", async (req, res) => {
    try{
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: await argon2.hash(req.body.password),
            register_date: new Date().toLocaleDateString(),
        })
        user.save()
        res.send(user)
    }
    catch (e) {
        res.status(500)
        res.send({error: e})
    }

})

routerUsers.delete("/user/delete/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOneAndDelete({_id: id})
        res.send(user)
    } catch {
        res.status(404)
        res.send({error: "User doesn't exist!"})
    }
})

export default routerUsers
