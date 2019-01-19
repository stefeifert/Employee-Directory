$(".pagecontainer").addClass("hidden");


const showAll = function(){
    $(".pagecontainer").addClass("hidden");
    $("#empList").removeClass("hidden");
};

$("#showNames").on("click", showAll);

const showAddEmp = function(){
    $(".pagecontainer").addClass("hidden");
    $("#addEmp").removeClass("hidden");
};

$("#addName").on("click", showAddEmp);

const verifyEmp = function(){
    $(".pagecontainer").addClass("hidden");
    $("#verifyEmp").removeClass("hidden");
};

$("#verifyName").on("click", verifyEmp);