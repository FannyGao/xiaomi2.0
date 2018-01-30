/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
//  banner
    let div=document.querySelector('.banner');
    let banner=document.querySelectorAll('ul.img_box li');
    let left=document.querySelector('.banner_jiantou_left');
    let right=document.querySelector('.banner_jiantou_right');
    let circle=document.querySelectorAll('ul.lunbodian li')
    let n=0;
    let flag=true;
    function move() {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n++;
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    left.onclick=function () {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        n--;
        if(n<0){
            n=banner.length-1;
        }
        banner.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        banner[n].className='active';
        circle[n].classList.add('act');
    }
    circle.forEach(function (value,index) {
        // if(!flag){
        //     return;
        // }
        // flag=false;
        value.onclick=function () {
            circle.forEach(function (val,ind) {
                val.classList.remove('act');
                banner[ind].classList.remove('active');
            })
            this.classList.add('act');
            banner[index].classList.add('active');
        }
    })
    // banner.forEach(function (value) {
    //     value.addEventListener('transitionend',function () {
    //         flag=true;
    //     })
    // })



//   change
    function change(a,b) {
        let chose=document.querySelectorAll(a);
        let main=document.querySelectorAll(b);
        chose.forEach(function (dom,index) {
            dom.onmouseover=function () {
                chose.forEach(function (val,ind) {
                    val.classList.remove('active_');
                    main[ind].classList.remove('active_');
                })
                this.classList.add('active_');
                main[index].classList.add('active_');
            }
        })
    }
    change('.top_right .right_remen','.jiadain .jiadian_bottom .bottom_right');
    change('.zhineng_right .znright_remen','#zhineng .bottom_right');
    change('.dapei_right a','#dapei .bottom_right');
    change('.peijian_right a','#peijian .bottom_right')
    change('.zhoubian a','#zhoubian .bottom_right')

//明星单品
    let now_1=0;
    let next_1=0;
    let main=document.querySelector('.danpin_main');
    let star=document.querySelectorAll('.danpin_main .danpin_bottom');
    let width_1=parseInt(getComputedStyle(main,null).width);
    let jt=document.querySelectorAll('div.jiantou div');
    function Star() {
        next_1=now_1+1;
        if(next_1>=star.length)
        {
            next_1=0;
        }
        star[next_1].style.left='100%';
        animate(star[now_1],{left:-width_1},1000);
        animate(star[next_1],{left:0},1000);
        jt.forEach(function (value) {
            value.classList.remove('action');
        })
        jt[next_1].classList.add('action');
        now_1=next_1;
    }
    let t=setInterval(Star,4000);
    main.onmouseenter=function () {
        clearInterval(t);
    }
    main.onmouseleave=function () {
        t=setInterval(Star,4000);
    }



//内容
    function Star_(b,l,c,le,ri,c_a) {
        let now=0;
        let next=0;
        let box=document.querySelector(b);
        let lis=document.querySelectorAll(l);
        let width=parseInt(window.getComputedStyle(box,null).width);
        let circle=document.querySelectorAll(c)
        let flag=true;
        let time=setInterval(move,2000);
        box.onmouseenter=function () {
            clearInterval(time);
        }
        box.onmouseleave=function () {
            time=setInterval(move,2000);
        }
        document.querySelector(ri).onclick=function () {
            next=now+1;
            if(!flag){
                return;
            }
            flag=false;
            if(next>=lis.length){
                next=0;
            }
            lis[next].style.left='100%';
            animate(lis[now],{left:-width});
            animate(lis[next],{left:0},function () {
                flag=true;
            });
            circle[now].classList.remove(c_a);
            circle[next].classList.add(c_a);
            now=next;
        }
        document.querySelector(le).onclick=function () {
            next=now-1;
            if(!flag){
                return;
            }
            flag=false;
            if(next<0){
                next=lis.length-1;
            }
            lis[next].style.left='-100%';
            animate(lis[now],{left:width});
            animate(lis[next],{left:0},function () {
                flag=true;
            });
            circle[now].classList.remove(c_a);
            circle[next].classList.add(c_a);
            now=next;
        }
        for(let i=0;i<circle.length;i++){
            circle[i].onclick=function () {
                next=i;
                if(next>now){
                    next=now+1;
                    if(!flag){
                        return;
                    }
                    flag=false;
                    if(next>=lis.length){
                        next=0;
                    }
                    lis[next].style.left='100%';
                    animate(lis[now],{left:-width});
                    animate(lis[next],{left:0},function () {
                        flag=true;
                    });
                    circle[now].classList.remove(c_a);
                    circle[next].classList.add(c_a);
                    now=next;
                }
                else if(next<now){
                    next=now-1;
                    if(!flag){
                        return;
                    }
                    flag=false;
                    if(next<0){
                        next=lis.length-1;
                    }
                    lis[next].style.left='-100%';
                    animate(lis[now],{left:width});
                    animate(lis[next],{left:0},function () {
                        flag=true;
                    });
                    circle[now].classList.remove(c_a);
                    circle[next].classList.add(c_a);
                    now=next;
                }
                else {
                    flag=true;
                }
            }
        }

    }
    Star_('#contain_list_1','#contain_list_1 .list_1','#contain_list_1 .yuandian .yd','#contain_list_1 .neirong_left','#contain_list_1 .neirong_right','yuan');
    Star_('#contain_list_2','#contain_list_2 .list_2','#contain_list_2 .yuandian .yd','#contain_list_2 .neirong_left','#contain_list_2 .neirong_right','yuan');
    Star_('#contain_list_3','#contain_list_3 .list_3','#contain_list_3 .yuandian .yd','#contain_list_3 .neirong_left','#contain_list_3 .neirong_right','yuan');
    Star_('#contain_list_4','#contain_list_4 .list_4','#contain_list_4 .yuandian .yd','#contain_list_4 .neirong_left','#contain_list_4 .neirong_right','yuan');


}
