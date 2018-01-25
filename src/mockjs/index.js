import Mock from 'mockjs'       // 引入mockjs库

// 定义请求时间在 500至3000毫秒之间
Mock.setup({
    timeout: '500-3000'
});

// 登陆请求接口
Mock.mock('/login', 'post', options => {
    let option = JSON.parse(options.body);
    let params = '';
    if (option.userName === 'xiaobai' && option.userPwd === '123456') {
        params = {
            token: Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32),
            error: ''
        }
    } else {
        params = {
            token: '',
            error: '账号或密码错误'
        }
    }
    return params;
});

// 聊天列表请求接口
Mock.mock('/chatList', 'get', {
    'list|15-20': [{
        'header': '@increment(1)',    // 头像
        'name': '@cname',    // 姓名
        'chatInfo|5-20': [{
            'msgThose': '@natural(0,1)',        // 0：表示为对方的消息，1：表示为我方的消息
            'msgDatetime': '@datetime(yyyy-MM-dd HH:mm)',       // 消息发送时间
            'msgInfo': '@csentence(1,20)'       // 消息内容
        }]
    }]
});

// 对话聊天请求接口
Mock.mock('/dialogue', 'get', {
    'msgThose': '0',
    'msgDatetime': '@now(yyyy-MM-dd HH:mm)',
    'msgInfo': '@csentence(1,20)'
});

// 通讯录请求接口
Mock.mock('/book', 'get', {
    'nameList|120-150':['@cname']
});