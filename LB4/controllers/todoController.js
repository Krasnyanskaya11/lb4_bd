const Todo = require("../db/models/todo");
class todoController
{
    static async create(req, res) {
        const task = new Todo (req.body); 
        task.if_ok = false;
        task.if_delete = false;
        try {
            await task.save();
        } catch (err) {
        return res.status (500).json({
            success: false,
            message: err.message, 
            data: null
        });
        }
        return res.redirect("/");
    }


    static async update(req, res){
        let task = null;
        try{
        tasks = await Todo.findById(req.body.id);
        if (!task){
            return res.status(404).json({
                success: false,
                message: err.message, 
                data: null
            });
        }
        task.name = req.body.name;
        task.description = req.body.description;
        if (req.body.deadline != "")
        {
        task.deadline = req.body.deadline;
        } await task.save();
        return res.redirect("/");
        } catch(error){}
    }


    static async search(req, res){
        let dateFrom = req.body.dateFrom;
        let query = {};
        if(dateFrom != "" && dateFrom !== undefined){
            query["deadline"] = new Date(dateFrom);
        }

        let tasks = null;
        try{
        tasks = await Todo.find(query);
        res.render("index", {
            success: true,
            message: 'List of ToDo', 
            data: tasks
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "No tasks in DB", 
            data: null
        });
    }
    }

    //+
    static async getAll(req, res){
        let tasks = null;
        let query = {};
        query["if_delete"] = false;
        try{
        tasks = await Todo.find(query);
        res.render("index", {
            success: true,
            message: 'List of ToDo', 
            data: tasks
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "No tasks in DB", 
            data: null
        });
    }
    }


    static async getDone(req, res){
        let query = {};
        query["if_ok"] = true;
        query["if_delete"] = false;
        let tasks = null;
        try{
        tasks = await Todo.find(query);
        res.render("index", {
            success: true,
            message: 'List of ToDo', 
            data: tasks
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "No tasks in DB", 
            data: null
        });
    }
    }


    static async getNoDone(req, res){
        let query = {};
        query["if_ok"] = false;
        query["if_delete"] = false;
        let tasks = null;
        try{
        tasks = await Todo.find(query);
        res.render("index", {
            success: true,
            message: 'List of ToDo', 
            data: tasks
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "No tasks in DB", 
            data: null
        });
    }
    }


    static async getBasket(req, res){
        let query = {};
        query["if_delete"] = true;
        let tasks = null;
        try{
        tasks = await Todo.find(query);
        res.render("index", {
            success: true,
            message: 'List of ToDo', 
            data: tasks
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "No tasks in DB", 
            data: null
        });
    }
    }


    static async task_ok(req, res){
        let task = null;
        try{
        task = await Todo.findById(req.params.id);
        if(!task){
            return res.status(500).json({
                success: false,
                message: "No such task", 
                data: null
            });
        }
        task.if_ok = !task.if_ok;
        let dd = new Date();
        let str = task.description + " Завершено: " + dd.getDate() + "." + (dd.getMonth()+1) + "." + dd.getFullYear();
        task.description = str;
        await task.save();
        } catch(arror){
            return res.status(500).json({
                success: false,
                message: err.message, 
                data: null
            })
        }
        res.redirect("/");
    } 


    static async task_delete(req, res){
        let task = null;
        try{
        task = await Todo.findById(req.params.id);
        if(!task){
            return res.status(500).json({
                success: false,
                message: "No such task", 
                data: null
            });
        }
        task.if_delete = !task.if_delete;
        await task.save();
        } catch(arror){
            return res.status(500).json({
                success: false,
                message: err.message, 
                data: null
            })
        }
        res.redirect("/");
    } 


    static async task_return(req, res){
        let task = null;
        try{
        task = await Todo.findById(req.params.id);
        if(!task){
            return res.status(500).json({
                success: false,
                message: "No such task", 
                data: null
            });
        }
        task.if_delete = !task.if_delete;
        await task.save();
        } catch(arror){
            return res.status(500).json({
                success: false,
                message: err.message, 
                data: null
            })
        }
        res.redirect("/");
    } 
    
}

module.exports = todoController;