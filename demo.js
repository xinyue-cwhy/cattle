var nowtime = document.querySelector('h4');
var nowdate = new Date();
nowtime.innerHTML = '当前时间为：<br>' + dtime(nowdate)


//获取日历控件日期
var button = document.querySelector('button');
button.addEventListener('click', () => {
  var olddate1 = document.querySelector('input').value;
  var olddate = Date.parse(new Date(olddate1.replace(/-/g, "/")))
  var newtime = document.querySelector('.newtime');
  var newdate = new Date(olddate + 284 * 24 * 60 * 60 * 1000);
  newtime.innerHTML = newdate;
  newtime.innerHTML = '预计生产时间为：<br>' + dtime(newdate)
  //倒计时
  var timer = document.querySelector('.timer');
  timer.innerHTML = GetNumberOfDays(nowdate, newdate)
})


function GetNumberOfDays(date1, date2) {//获得天数
  //date1：开始日期，date2结束日期
  var a1 = Date.parse(new Date(date1));
  var a2 = Date.parse(new Date(date2));
  var day = parseInt((a2 - a1) / (1000 * 60 * 60 * 24));//核心：时间戳相减，然后除以天数
  return '倒计时：<br>' + day + '天' + '（不含生产当天）';
};

function dtime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var week = date.getDay();
  if (week == 0) {
    str = "星期日";
  } else if (week == 1) {
    str = "星期一";
  } else if (week == 2) {
    str = "星期二";
  } else if (week == 3) {
    str = "星期三";
  } else if (week == 4) {
    str = "星期四";
  } else if (week == 5) {
    str = "星期五";
  } else if (week == 6) {
    str = "星期六";
  }
  var time = year + '年-' + month + '月-' + day + '日' + '\n' + str;
  return time;
}
