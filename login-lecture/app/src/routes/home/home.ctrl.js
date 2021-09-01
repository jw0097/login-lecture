const users = {
    id: ['kim', 'lee', 'park'],
    psword: ['qwerty', '123456', '가나다라']
};

const views = {
    home: function(req, res){
        res.render('./home/index');
    },

    login: function(req, res){
        res.render('./home/login');
    }
};

const process = {
    login: function(req, res){
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)){
            const index = users.id.indexOf(id);
            if(users.psword[index] === psword){
                return res.json({
                    success: true
                });
            }
        }
        return res.json({
            success: false,
            msg: '로그인 실패.'
        });
    }

    
};

module.exports = {
    views,
    process
};