$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;

    var millisecsPerDay = 24*60*60*1000;
    let ooo = `<tr style='border:1px solid red'>`;
    for(var x=0;x<topicCount;x++){
        
        if(x%2==0){
            ooo=`<tr style='border:1px solid red'>`;
            console.log(ooo);
        }
        $("#courseTable").append(ooo);
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
});