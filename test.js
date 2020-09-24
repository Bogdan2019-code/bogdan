var languages = {
    en: {
        title: 'MEOW TV',
        streams: 'STREAMS',
        community: 'COMMUNITY',
        profile: 'PROFILE',

        greetingTitle: 'MEOW TV - your best friend!',

        greetingText: 'Sign in and start playing with our streamers,<br>be streamer and get rewards!<br>Our platform reward your activities<br>and give you a lot of features<br>',

        popularTitle: 'Popular games',

        dota2: 'DOTA 2',
        csgo: 'CS:GO',
        fortnite: 'FORTNITE',
        pubg: 'PUBG',
        lol: 'LoL',
        overwatch: 'Overwatch',

        allGames: 'ALL GAMES',
        streamsTitle: 'Streams online',
        online: 'online',

        seeMore: 'SEE MORE',

        footerTitle: 'MEOW TV',

        contact: 'CONTACT',
        faq: 'FAQ',
        tos: 'ToS',

        age: '18+',

        credits: 'MEOW TV.COM © 2019 | All rights reserved | Made by Shinki',

        dialogTitle: 'Are you have 18 years old?',
        dialogConfirm: 'Yes, I have 18 years old and accept ToS',
        dialogEnter: 'Enter',
        dialogExit: 'Exit',
		Attention: 'Attention!',
		Ysba: 'You should be authorized to do this.',
		Login: 'Login',
		SignIn: 'Sign Up',
		NePovezloUUUPS: 'Server undermaintence.',
		NePovezloUUUPS2: 'Contact with administration!',
		TrySteam: 'Try to login through Steam',
		SomeThingWrong: 'Invalid data',
		MOR: 'Mail or password is wrong or account does not exists.',
		FCYS: 'FINALLY CONNECT YOUR STEAM',
		connectorsteam: 'Connect your Steam',
		regablyad: 'REGISTRATION',
		Attention: 'ATTENTION!',
		market: 'MARKET',
		freecase: 'FREE CASE',
		open: 'Open'
		
		
    },
    cn: {
        streams: '流',
        community: '社区',
        profile: '侧面像',

        greetingTitle: 'MEOW TV - 你的荣幸',

        greetingText: '登录并开始使用我们的彩带,<br>成为流光并获得奖励！<br>我们的平台奖励您的活动<br>给你很多功能<br>',

        popularTitle: '热门游戏',

        dota2: 'DOTA 2',
        csgo: 'CS:GO',
        fortnite: 'FORTNITE',
        pubg: 'PUBG',
        lol: 'LoL',
        overwatch: 'Overwatch',

        allGames: '所有游戏',
        streamsTitle: '流 online',
        online: 'online',

        seeMore: '查看更多',

        contact: '联系',
        faq: '常问问题',
        tos: '服务条款',

        age: '18+',

        dialogTitle: '你今年18岁吗？',
        dialogConfirm: '是的，我已经18岁并接受服务条款',
		
		dialogEnter: '输入',
        dialogExit: '退出',
		
        credits: 'MEOW TV.COM © 2020 | All rights reserved | Made with love',	
		Attention: '注意！',
		Ysba: '您应该有权这样做。',
		Login: '登录',
		SignIn: '注册',
		NePovezloUUUPS: '服务器正在维护中。',
		NePovezloUUUPS2: '联系管理！',
		TrySteam: '尝试通过Steam登录',
		SomeThingWrong: '无效数据',
		MOR: '邮件或密码错误或帐户不存在。',
		FCYS: '最后连接你的蒸汽',
		connectorsteam: '连接您的蒸汽',
		regablyad: '登记',
		Attention: '立正！',
		market: '禄谩卤',
		freecase: '免费宝藏',
		open: '打开'		
    }
};


function setLanguage(lang) {
    if(!languages.hasOwnProperty(lang)) return false;
    var local = languages[lang];

    var items = document.querySelectorAll(".lang");

    for(var i = 0; i < items.length; i++)
    {
        if(items[i].dataset.hasOwnProperty("lang"))
        {
            var key = items[i].dataset.lang;

            var chfont = lang == 'cn';


            

            if(local.hasOwnProperty(key)) {
                items[i].style.fontFamily = chfont ? 'Chinese' : '';
                items[i].innerHTML = local[key];
            }
        }
    }
    return true;
}
