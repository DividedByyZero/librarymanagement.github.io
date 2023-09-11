let submited = document.getElementById('submission');
submited.addEventListener('click',storeData);
document.addEventListener('DOMContentLoaded',getInfo);
function getInfo(e){
    let data;
    if(localStorage.getItem('data')===null){
        data = [];
    }
    else{
        data = JSON.parse(localStorage.getItem('data'));
    }
    data.forEach(task => {
        let table = document.getElementById('table');
        table.innerHTML+=task;
    });
}
function storeData(e){
    let name = document.getElementById('fullname').value;
    let roll = document.getElementById('rollnumber').value;
    let session = document.getElementById('session').value;
    let bookname = document.getElementById('bookname').value;
    let bookid = document.getElementById('bookid').value;
    let data =[];
    // data.push(bookid);
    // data.push(name);
    // data.push(roll);
    // data.push(bookname);
    // data.push(session);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // data.push(dateTime);
    // data.push('<th><a herf="">x</a></th>')
    let text = `<tr>
    <th>${bookid}</th>
    <th>${name}</th>
    <th>${roll}</th>
    <th>${bookname}</th>
    <th>${session}</th>
    <th>${dateTime}</th>
    <th><a href="#">x</a></th>
</tr>`;
    let table = document.getElementById('table');
    table.innerHTML+=text;
    if(localStorage.getItem('data')===null){
        data = [];
    }
    else{
        data = JSON.parse(localStorage.getItem('data'));
    }
    data.push(text);
    localStorage.setItem('data',JSON.stringify(data));
    console.log(data);
}