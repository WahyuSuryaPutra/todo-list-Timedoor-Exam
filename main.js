/**
 * Color 1 : #607EAA
 * Color 2 : #AC7088
 * Color 3 : #EED180
 * Color 4 : #F37878
 * Color 5 : #90C8AC
 * Color 6 : #D8CCA3
 * Color 7 : #82A284
 */


let todoList = [
    {
        id: 1,
        date: "2022-08-10",
        time: "11:30",
        todo: "Belanja Mingguan",
        color: "#90C8AC"
    },
    {
        id: 2,
        date: "2022-08-10",
        time: "10:30",
        todo: "Memasak makanan",
        color: "#F37878"
    },
    {
        id: 3,
        date: "2022-08-20",
        time: "17:30",
        todo: "Belajar Coding",
        color: "#EED180"
    },
    {
        id: 4,
        date: "2022-08-13",
        time: "14:30",
        todo: "Bersih-bersih rumah",
        color: "#82A284"
    },
    {
        id: 5,
        date: "2022-08-16",
        time: "10:30",
        todo: "Mencuci Baju",
        color: "#607EAA"
    }
]


const listTodo =  (data) => {
    let listWrapper = ''
      data.forEach(element => {
        listWrapper += `
         <div class="card card-todo" style="background: ${element.color}">
                <div class="">
                    <h6 class="">${element.todo}</h6>
                    <p class="bg-white text-danger mt-3">${element.time}</p>
                </div>
                <div class="mt-auto">
                    <h6 class="">${element.date}</h6>
                    <button onclick="deleteTodo(${element.id})" class="text-white bg-transparent p-0 border-0">Hapus</button>
                </div>
            </div>  
        `
    })

    document.getElementById("list-todo").innerHTML = listWrapper
}

listTodo(todoList)

const ascendingData = () => {
    const timeSort = todoList.sort(function (a, b) {return a.time.localeCompare(b.time)})

    const dateSort = todoList.sort(function (a, b) {return a.date.localeCompare(b.date)});

    listTodo(todoList)


}


const descendingData = () => {
    const timeSort = todoList.sort(function (a, b) {return b.time.localeCompare(a.time)})

    const dateSort = todoList.sort(function (a, b) {return b.date.localeCompare(a.date)});

    listTodo(todoList)

}

const searchData = () => {

        let text = document.getElementById("search").value.toLowerCase();
        const result = todoList.filter(element => element.todo.toLowerCase().indexOf(text) !== -1);
        listTodo(result);

}

const clearData = () => {
    todo.value = ""
    date.value = ""
    time.value = ""

};

const createData = () => {
    let dateInput = document.getElementById("inputDate").value
    let timeInput = document.getElementById("inputTime").value
    let todoInput = document.getElementById("inputTodo").value
    let colorInput = document.querySelector('[name="colorOption"]:checked')

    if (dateInput == '' || timeInput == '' || todoInput == '' || colorInput == '') {
        confirm("isi lah data nya")
    } else {
        todoList.push({ todo: todoInput, color: colorInput.value, id: todoList.length+1, date: dateInput, time:timeInput });
        listTodo(todoList)
        clearData()
    }
}

const deleteTodo = (id) => {

        todoList.forEach((element, index) => {
            if (id === element.id) {
                if (confirm("yakin mau hapus?")) {
                todoList.splice(index, 1);
                }
            }
        })
    listTodo(todoList);



};


