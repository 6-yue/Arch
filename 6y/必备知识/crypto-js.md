## crypto-js是什么

crypto-js 是一个纯 javascript 写的加密算法类库 ，可以非常方便地在 javascript 进行 MD5、SHA1、SHA2、SHA3、RIPEMD-160 哈希散列，进行 AES、DES、Rabbit、RC4、Triple DES 加解密。

GitHub：https://github.com/brix/crypto-js
## 安装
```bash
npm install crypto-js
```
## 使用
ES6模块引入方法：
```bash
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
```
模块加载引入方法：
```bash
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
```
页面标签引入方法：
```bash
<script type="text/javascript" src="path-to/bower_components/crypto-js/crypto-js.js"></script>
<script type="text/javascript">
	var encrypted = CryptoJS.AES(...);
	var encrypted = CryptoJS.SHA256(...);
</script>
```
