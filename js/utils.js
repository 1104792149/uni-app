export default {

    validateIDCard (id) {
        // 1 "验证通过!", 0 //校验不通过
        var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
        //号码规则校验
        if(!format.test(id)){
            return {'status':0,'msg':'身份证号码不合规'};
        }
        //区位码校验
        //出生年月日校验   前正则限制起始年份为1900;
        var year = id.substr(6,4),//身份证年
            month = id.substr(10,2),//身份证月
            date = id.substr(12,2),//身份证日
            time = Date.parse(month+'-'+date+'-'+year),//身份证日期时间戳date
            now_time = Date.parse(new Date()),//当前时间戳
            dates = (new Date(year,month,0)).getDate();//身份证当月天数
        if(time>now_time||date>dates){
            return {'status':0,'msg':'出生日期不合规'}
        }
        //校验码判断
        var c = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);   //系数
        var b = ['1','0','X','9','8','7','6','5','4','3','2'];  //校验码对照表
        var id_array = id.split("");
        var sum = 0;
        for(var k=0;k<17;k++){
            sum+=parseInt(id_array[k])*parseInt(c[k]);
        }
        if(id_array[17].toUpperCase() != b[sum%11].toUpperCase()){
            return {'status':0,'msg':'身份证校验码不合规'}
        }
        return {'status':1,'msg':'校验通过'}
    },

    addChineseUnit (number, decimalDigit) {
        var addWan = function(integer, number, mutiple, decimalDigit) {
            var digit = getDigit(integer);
            if (digit > 3) {
                var remainder = digit % 8;
                if (remainder >= 5) {   // ‘十万’、‘百万’、‘千万’显示为‘万’
                    remainder = 4;
                }
                return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
            } else {
                return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
            }
        };

        var getDigit = function(integer) {
            var digit = -1;
            while (integer >= 1) {
                digit++;
                integer = integer / 10;
            }
            return digit;
        };

        decimalDigit = decimalDigit == null ? 2 : decimalDigit;
        var integer = Math.floor(number);
        var digit = getDigit(integer);
        // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
        var unit = [];
        if (digit > 3) {
            var multiple = Math.floor(digit / 8);
            if (multiple >= 1) {
                var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
                unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
                for (var i = 0; i < multiple; i++) {
                    unit.push('亿');
                }
                return unit.join('');
            } else {
                return addWan(integer, number, 0, decimalDigit);
            }
        } else {
            return number;
        }
    }

}