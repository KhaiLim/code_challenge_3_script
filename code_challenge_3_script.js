function calculateTips(bills){
    var percentage;
    if (bills < 50){
        percentage = 0.2;
    }else if (bills >= 50 && bills <= 200){
        percentage = 0.15;
    }else if (bills > 200){
        percentage = 0.1;
    }
    return bills * percentage;
}

var bill = [124,48,268];
var tips = new Array();
var totalAmount = new Array();
for (var i = 0; i < bill.length; i++){
    tips.push(calculateTips(bill[i]));
    totalAmount.push(bill[i] + tips[i]);
}
console.log(tips);
console.log(totalAmount);