$(function(){

  /* 登录判断 */
    var loginDl = $('.login_zh');
    var loginMM = $('.login_mm');
    var loginTj = $('.login_tj');

    var reg = new RegExp('^[a-zA-Z\u4e00-\u9fa5]+$');//账户
    loginTj.on('click',function(){
        if(loginDl.val() === '' || loginMM.val() === ''){
            alert('账户密码不能为空');
        }else if(loginDl.val().length < 2 || loginDl.val().length > 16 || reg.test(loginDl.val()) === false){
            alert('用户名必须为中文/英文(2-16字符)');
        }else if(loginMM.val().length < 6 || loginMM.val().length >16){
            alert('密码长度为6-16位');
        }
    });

    /* 首页类型状态 */
    var headchangeLi = $('.head_change>ul').find('li');
    var headChangeAll = $('.head_change_all');
    var headChangeAllD = headChangeAll.children('div');
    var headZin = '';
    var headChangeTxtLi = '';
    $('.head_change_lx_txt ul').each(function(){
        headChangeTxtLi = $(this).children('li');
        headChangeTxtLi.eq(0).css({
            borderColor : '#962B30',
            color : '#962B30'
        });
        headChangeTxtLi.on('click',function(){
            $(this).css({
                borderColor : '#962B30',
                color : '#962B30'
            }).siblings('li').css({
                borderColor : '#ccc',
                color : '#000'
            });
            headchangeLi.eq(headZin).find('span').text($(this).text());
            $(this).parents('.head_change_all').hide();
        });
        /*/!* 首页筛选类型 *!/
        var conLx = $('.con_lx');
        var conZt = $('.con_zt');
        var conTxt = $(this).text();

        changeS(conLx);
        function changeS(obj){
            obj.each(function(){
                var conLxTxt = $(this).text();
                if(conLxTxt !== conTxt){
                    $(this).parents('li').hide();
                }else{
                    $(this).parents('li').show();
                }
            })
        }*/
    });

    headchangeLi.on('click',function(){
        headZin = $(this).index();
        headChangeAll.show();
        headChangeAllD.eq(headZin).show().siblings().hide();
    });

    /** 消费记录 **/
    var xfRrecordate = $('.xf_record_date');
    xfRrecordate.each(function(){
        var xfRecordxj = $(this).find('.xf_record_xj:last-child');
        xfRecordxj.find('.xf_record_s').hide();
        xfRecordxj.find('.xf_record_xjbd').addClass('ml');
    });

    var conExpenseLi = $('.con_expense ul').children('li');

/* 添加消费类别 */
    var xfexpense1Lx = $('.xf_expense1_txt1_lx ul').find('li');
    var xfexpense1Txt1 = $('.xf_expense1_txt1');

    xfexpense1Lx.on('click',function(){
        var xfexpense1LxTxt = $(this).text();
        xfexpense1Txt1.text(xfexpense1LxTxt);
        $(this).css({
            borderColor : '#962B30',
            color : '#962B30'
        }).siblings('li').css({
            borderColor : '#ccc',
            color : '#666'
        });
    });
//关闭增加消费记录 分析综述
    var xfexpenseGb = $('.xf_expense1 h1').find('a');
    var xfExpense1 = $('.xf_expense1');
    var xfExpense = $('.xf_expense');
    var fxZsI = $('.fx_zs').find('.expense_jia');
    var fxzsA = $('.fx_zsB h1').find('a');

    expensDB(xfexpenseGb,xfExpense1,xfExpense);
    expensDB($('.expense_jia'),xfExpense,xfExpense1);
    expensDB(fxZsI,$('.fx_zsT'),$('.fx_zsB'));
    expensDB(fxzsA,$('.fx_zsB'),$('.fx_zsT'));

    function expensDB(obj,obj1,obj2){
        obj.on('click',function(){
            obj1.hide();
            obj2.show();
        });
    }
    //顾客详情
    var cusD_tpLi = $('.cusD_tp ul').find('li');
    var cusD_bpD = $('.cusD_bp').children('div');

    cusD_tpLi.eq(0).css('color','#962B30');
    cusD_tpLi.on('click',function(){
        var cusD_tpLiZ = $(this).index();
        cusD_bpD.eq(cusD_tpLiZ).show().siblings().hide();
        $(this).css('color','#962B30').siblings().css('color','#000');
    });

    /* 显示修改页面 */
    var changeHt = $('.expense_jia');
    var gkxq1A = $('.gkxq1 h1').find('a');
    var changeJcxx = $('.change_jcxx');
    var gkxq = $('.gkxq');
    var fxzsB = $('.fx_zsB');
    var addLljl = $('.add_lljl');
    var changeXm = $('.change_xm');
    var removeXm1 = $('.remove_xm1');
    var xgLljl = $('.xg_lljl');
    var gkxq1A1 = $('.xg_lljl h1').find('a');
    var addXgt = $('.add_xgt');
    var changeLleff = $('.change_lleff');
    var gkxq1A2 = $('.add_xgt1 h1').find('a');
    var addXgt1 = $('.add_xgt1');
    var ck_bigImg = $('.ck_bigImg');
    var ck_bigImgA = ck_bigImg.find('h1 a');

    cht(changeHt.eq(0),changeJcxx,'.gkxq');
    cht(gkxq1A,gkxq,'.change_jcxx');
    cht(changeHt.eq(1),fxzsB,'.gkxq');
    cht(gkxq1A,gkxq,'.fx_zsB');
    cht(changeHt.eq(2),addLljl,'.gkxq');
    cht(gkxq1A,gkxq,'.add_lljl');
    cht(changeXm,xgLljl,'.gkxq');
    cht(gkxq1A1,gkxq,'.xg_lljl');
    cht(changeHt.eq(3),addXgt,'.gkxq');
    cht(gkxq1A,gkxq,'.add_xgt');
    cht(changeLleff,addXgt1,'.gkxq');
    cht(gkxq1A2,gkxq,'.add_xgt1');
    cht(ck_bigImgA,addXgt1,'.ck_bigImg');
    function cht(obj,obj1,obj2){
        obj.on('click',function(){
            $(this).parents(obj2).hide();
            obj1.show();
        })
    }
    /* 删除 */
    removeXm1.on('click',function(){
        $(this).parents('.con_box1_txt').remove();
    });

    //切换
    var axbB = $('.axb_b');
    var axbT = $('.axb_t');

    axbT.each(function(){
        var llqXg = $(this).find('.llq_xg');
        llqXg.eq(0).find('input').attr('checked','checked');
        llqXg.on('click',function(){
            var llqXgZ = $(this).index();
            axbB.each(function(){
                var axbB1 = $(this).children('div');
                axbB1.eq(llqXgZ).show().siblings().hide();
            })
        });
    });
    //获取屏幕高度
    if($('.ck_bigImg').is(':visible') === true){
        window.addEventListener('resize',function(){
            location.reload();
        })
    }
    var ww = window.screen.height;
    $('.ck_bigImg').css('height',ww);

    //查看大图
    var addXgt1 = $('.add_xgt1').find('.axb_b1');
    var addXgtImg = addXgt1.find('ul li').children('img');
    var ckbigImgBox = $('.ck_bigImg_box');
    addXgtImg.each(function(){
        var addXgtImgSrc = $(this).attr('src');
        $(this).on('click',function(){
            $(this).parents('.add_xgt1').hide();
            $('.ck_bigImg').show();
            ckbigImgBox.append('<img src='+ addXgtImgSrc +'>');
        })
    });

    //删除搜索栏目
    var dlSc = $('.dl_sc');
    var dlLi = $('.datalist ul').find('li');
    var cl_llju = $('.cl_llju');
    dlSc.each(function(){
        $(this).click(function(){
            $(this).parents('li').remove();
        })
    });
    if(dlLi.length === 0){
        cl_llju.hide();
    }else{
        cl_llju.show();
    }
    //清除历史记录
    cl_llju.click(function(){
        var scTs = $('.sc_ts');
        var sctsBox = $('.sc_ts_box').find('input');
        scTs.fadeIn();
        sctsBox.eq(0).click(function(){
            $(this).parents('.sc_ts').fadeOut();
        });
        sctsBox.eq(1).click(function(){
            $(this).parents('.sc_ts').fadeOut();
            dlLi.remove();
            $('.datalist').hide();
        })
    })
});