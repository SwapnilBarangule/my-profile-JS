function fun1() {
    let a = 5;
    //console.log(a);
    function fun2() {
        //let a = 6;
        console.log(a);
    }
    return fun2;
}
const abc= fun1();
abc();