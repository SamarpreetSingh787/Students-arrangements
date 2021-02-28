students_array=[]


function submit() {
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;

    students_array.push(name1);
    students_array.push(name2);
    students_array.push(name3);
    students_array.push(name4);

    console.log(students_array);
    document.getElementById("display").innerHTML=students_array;
    document.getElementById("submit").style.display= "none";
    document.getElementById("sort").style.display= "inline-block";
}

function sorting(){
    students_array.sort();
    console.log(students_array);
    document.getElementById("display").innerHTML=students_array;
}