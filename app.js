let command = "";

const print = function() {
    let htmlStr = '';
    for (let i = 0; i < employeeList.length; i++) {
        htmlStr += `<div class="card"><p> ${employeeList[i].name}</p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div>`;
        }
    render(htmlStr);
}
 
const add = function() {
    const userName = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
    employeeList.push({
        name: userName,
        officeNum: officeNum,
        phoneNum: phoneNum
    })
    print();    
}

const update = function() {
    const userName = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
    // let htmlStr = `<div class="card"><h5> No ${userName} Does Not Exists</h5>`;
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList[i].officeNum = officeNum;
            employeeList[i].phoneNum = phoneNum;
        }else{
            // console.log(htmlStr)
        }
    } 
    // render(htmlStr); 
    // console.log(htmlStr);     
    print();    
}

const verify = function() {
    const userName = $('#name').val();
    let htmlStr = `<div class="card"><h5> No ${userName} Does Not Exists</h5>`;
    for (let i = 0; i < employeeList.length; i++) { 
        if (employeeList[i].name === userName) {
            htmlStr = `<div class="card verify"><h5> ${employeeList[i].name} exists</h5>`;
        }
    }
    render(htmlStr);
}

const remove = function() {
    const userName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === userName) {
            employeeList.splice(i, 1);
        }
    }
    print();
}

const runCommand = function(event) {
    // console.log('add');
    event.preventDefault();
    switch (command) {
        case 'add':
            add();
            break;
        case 'verify':
            verify();
            break;
        case 'update':
            update();
            break;
        case 'delete':
            remove();
            break;
    }
}

const setView = function() {
    $('#list').empty();
    command = '';
    $('form').hide();
    print();
}

const setAdd = function() {
    $('#list').empty();
    command = 'add';
    $('form').show();
    $('.extra-inputs').show();
}

const setVerify = function() {
    $('#list').empty();
    command = 'verify';
    $('form').show();
    $('.extra-inputs').hide();
}

const setUpdate = function() {
    $('#list').empty()
    command = 'update';
    $('form').show();
    $('.extra-inputs').show();
}

const setDelete = function() {
    $('#list').empty();
    command = 'delete';
    $('form').show();
    $('.extra-inputs').hide();
}

const render = function(htmlStr) {
    $('#list').html(htmlStr);
}

$('#view').on('click', setView);
$('#add').on('click', setAdd);
$('#verify').on('click', setVerify);
$('#update').on('click', setUpdate);
$('#delete').on('click', setDelete);
$('#submit').on('click', runCommand);
