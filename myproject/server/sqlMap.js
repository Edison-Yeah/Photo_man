//sql语句
var sqlMap = {
    //用户
    user: {
        add: 'insert into user(id, username, password) values (0, ?, ?)',
        select_name: 'select * from user where username = ?',
        select_password: 'select * from user where password = ?'
    }
}
module.exports = sqlMap;