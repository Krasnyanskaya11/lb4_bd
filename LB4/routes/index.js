const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.get("/", (req, res) => todoController.getAll(req, res)); 
router.post("/", (req, res) => todoController.getAll(req, res)); 
router.get("/done", (req, res) => todoController.getDone(req, res)); 
router.post("/done", (req, res) => todoController.getDone(req, res)); 
router.get("/no_done", (req, res) => todoController.getNoDone(req, res)); 
router.post("/no_done", (req, res) => todoController.getNoDone(req, res)); 
router.get("/basket", (req, res) => todoController.getBasket(req, res)); 
router.post("/basket", (req, res) => todoController.getBasket(req, res)); 

router.get("/task_ok/:id", (req, res) => todoController.task_ok(req, res)); 
router.get("/task_delete/:id", (req, res) => todoController.task_delete(req, res)); 
router.get("/task_return/:id", (req, res) => todoController.task_return(req, res)); 
router.post("/create", (req, res) => todoController.create(req, res));
router.post("/update", (req, res) => todoController.update(req, res));
router.post("/search", (req, res) => todoController.search(req, res));



module.exports = router;