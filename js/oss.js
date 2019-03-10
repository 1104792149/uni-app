import {Base64} from 'js-base64';
import encBase64 from 'crypto-js/enc-base64';
import HMAC from "crypto-js/hmac-sha1";
import format from 'date-fns/format';
import config from '@/js/config'

const host = 'http://myplanets-user.oss-cn-hangzhou.aliyuncs.com';

function randomString(len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

export default {

    getHost () {
        return `${config.HOST}/user/uploadImage`
    },

    getUploadParams () {
        var accessid= 'LTAI2cLvRRujDxMc';
        var accesskey= 'eqLz55IWtquCI2FHuNSmOtqg1G5uGC';
        var host = 'http://myplanets-user.oss-cn-hangzhou.aliyuncs.com';
        var policyText = {
            "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
            "conditions": [
                ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
            ]
        };
        var policyBase64 = Base64.encode(JSON.stringify(policyText))
        var bytes = HMAC(policyBase64, accesskey, { asBytes: true }) ;
        var signature = encBase64.stringify(bytes);

        const fileName = `${format(new Date(), 'YYYY-MM-DD-HH-mm-')}${randomString(16)}`

        return {
            // 'key' : `${fileName}`,
            // 'policy': policyBase64,
            // 'OSSAccessKeyId': accessid,
            // 'success_action_status' : '200',
            // 'signature': signature,
        }
    }

}