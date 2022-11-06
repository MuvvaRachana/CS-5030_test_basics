

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    
    test("add_todo", () => {
        todo_service.add_todo({"id":1,"title":"Do some assignments","done": false});
        todo_service.add_todo({"id":2,"title":"Revise for exams","done": false});
        todo_service.add_todo({"id":3,"title":"Go for a walk","done": false});
        todo_service.add_todo({"id":4,"title":"Present my project","done": false});
        
        expect(todo_service.get_todos().todo.length).toEqual(7);
    }
         
    test("delete_todo", () => {
        todo_service.delete_todo(4);
        expect(todo_service.get_todos().todo.length).toEqual(6);
    }
    
    test("update_todo", () => {
        todo_service.update_todo(2, {"id":2, "title":"Revise for midterms", "done": false});
        const objx = todo_service.get_todos().todo.findIndex((obj) => obj.id === 2);
        expect(todo_service.get_todos().todo[objx].title).toEqual("Revise for midterms");
    }


});
