//sql语句
var sqlMap = {
    //用户
    user: {
        add: 'insert into user(id, username, password) values (0, ?, ?)',
        select_name: 'select * from user where username = ?',
        select_password: 'select * from user where password = ?'
    },
    imgUrl: {
        add: 'insert into imgUrl(userid, Url) values (?, ?)',
        select_Url: 'select * from imgUrl where userid = ?'
    },
    subimgurl: {
        add: 'insert into subimgurl(imgUrl, url) values (?, ?)',
        select_url: 'select * from imgurl where imgUrl = ?'
    }
}
module.exports = sqlMap;