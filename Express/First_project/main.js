const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const shortid = require('shortid');

// app.get('/todos',(req,res)=>{
//     res.send('<ul><li>Item</li></ul>')
// })
// const items=[
//     {id: 1,todo: 'Đi chợ'},
//     {id: 2,todo: 'Nấu cơm'},
//     {id: 3,todo: 'Rửa bát'},
//     {id: 4,todo: 'Học code tại CodersX'}
// ];
// render items
app.get('/todos',(req,res)=>{
    res.render('todos/index',{
        items: db.get('todos').value()
    });
});
// find items
app.get('/todos/search',(req,res)=>{
    let q=req.query.searchKey;
    let findItem = db.get('todos').value().filter(item=> nonAccentVietnamese(item.text).indexOf(nonAccentVietnamese(q)) !==-1);
    res.render('todos/index',{
        items: findItem,
        searchKey: q
    });
});
// Add items
app.get('/todos/create',(req,res)=>{
    res.render('todos/create');
})
app.post('/todos/create',(req,res)=>{
    // items.push(req.body);
    req.body.id=shortid.generate();
    db.get('todos').push(req.body).write();
    res.redirect('back');
})
// Delete items
app.get('/todos/:id/delete',(req,res)=>{
    let id=req.params.id;
    db.get('todos').remove({id : id}).write();
    res.redirect('back');
})





app.listen(port,()=>{
    console.log('Server listening on port ' + port);
});
function nonAccentVietnamese(str) {
    str = str.toLowerCase();
//     We can also use this instead of from line 11 to line 17
//     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
//     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
//     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
//     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
//     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
//     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
//     str = str.replace(/\u0111/g, "d");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}