var models = require('../db');
var express = require('express');
var router = express.Router();
var formidable = require('formidable'); //上传功能的插件
var path = require('path');
var fs = require('fs');
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

router.post('/Uploadimg', (req, res, next) => {
    //上传文件只能通过这个插件来接收   file是上传文件 fields是其他的
    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../../static');//文件保存的临时目录为static文件夹
    //form.maxFieldsSize = 1*1024*1024;//用户上传的照片大小限制为1M
    form.keepExtensions = true;//使用文件的原扩展名
    form.parse(req, function(err,fields,file) {
        var filePath = '';
        //如果提交文件的form 中将上传文件的input名设置为tmpFile,就从tmpFile中取上传文件。否则取for in循环第一个上传的文件。
        if(file.tmpFile) {
            filePath = file.tmpFile.path;

        } else {
            for (var key in file) {
                if(file[key].path && filePath === '') {
                    filePath = file[key].path;
                    break;
                }
            }
        }
        //文件移动的目录文件夹，不存在时创建目标文件夹
        var  targetDir = path.join(__dirname, '../../static/uploads');
        if (!fs.existsSync(targetDir)) {
            fs.mkdir(targetDir)
        }
        var fileExt = filePath.substring(filePath.lastIndexOf('.'));
        if (('.jpg.jpeg.png.gif').indexOf(fileExt.toLowerCase()) === -1) {
           // var err = new Error('此文件类型不允许上传');
            res.json({
                code: -1,
                message: '此文件类型不允许上传'
            });
        } else {
            //已当前时间戳对上传文件进行重命名
            var fileName = new Date().getTime() + fileExt;
            var targetFile = path.join(targetDir, fileName);
            //var finalFile = '../../static/uploads' + fileName
            //移动文件
            fs.rename(filePath, targetFile, function(err) {
                if (err) {
                    console.info(err);
                    res.json({
                        code: -1,
                        message: '操作失败'
                    });
                } else {
                    console.log("success");
                    var sql = $sql.imgUrl.add;
                    var id = 4;
                    conn.query(sql,[id,targetDir],function(req,res) {
                        if(err) {
                            console.log(err)
                        }
                        console.log("store success")
                    });
                    var subsql = $sql.subimgurl.add;
                    conn.query(sql,[targetDir,fileName],function(req,res) {
                        if(err) {
                            console.log(err)
                        }
                        console.log("sub store success")
                    })
                   res.json({
                       code: 0,
                       imgUrl: fileName
                   })
                }
            });
        }
    })
});

module.exports = router;

