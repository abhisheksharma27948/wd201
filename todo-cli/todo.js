const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }
    const overdue = () => {
        const today = new Date();
        const overdueItems = all.filter(
            (item) =>
                !item.completed && new Date(item.dueDate) < new Date(today.toISOString().split("T")[0])
        );
        return overdueItems;
    };
    const dueToday = () => {
        const today = new Date();
        const todayItems = all.filter(
            (item) =>
                !item.completed && new Date(item.dueDate).toISOString().split("T")[0] === today.toISOString().split("T")[0]
        );
        return todayItems;
    };
    const dueLater = () => {
        const today = new Date();
        const laterItems = all.filter(
            (item) =>
                !item.completed && new Date(item.dueDate) > new Date(today.toISOString().split("T")[0])
        );
        return laterItems;
    };
    const toDisplayableList = (list) => {
        return list
            .map(
                (item, index) =>
                    `[${item.completed ? "x" : " "}] ${item.title} - ${item.dueDate}`
            )
            .join("\n");
    };
    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
