## MIUI的ROM下载
https://xiaomirom.com


[Redmi 9红米9一键刷入面具22.1版本 - 吾爱破解 - 52pojie.cn](https://www.52pojie.cn/thread-1421027-1-1.html)

miflash下载，不要用2019年后的版本，有bug

    文件名称：MiFlash2018-5-28-0.zip
    文件大小：50.0 MB
    发布时间：2018-06-01 14:31:32
    MD5指纹：87c313381db7a7320ca6027c08f6829f
    更新内容：修复已知错误，改善稳定性
    下载地址：https://bigota.d.miui.com/tools/MiFlash2018-5-28-0.zip
    备用下载：https://file.miuiver.com/d/MiFlash/MiFlash2018-5-28-0.zip

### macOS 使用 adb 给手机刷 recovery

先下载 adb 命令行工具


刷第三方 recovery 

举例子：将第三方recovery文件如 LOS_Recovery.img 放到 platform-tools 目录下，终端进入 platform-tools 目录，手机重启到 fastboot 模式下(需要已经解锁bl)，然后执行如下命令，即可刷入：

```bash
./fastboot flash recovery LOS_Recovery.img
```

联发科取消 vb 验证，防止无限重启，需要刷入 vbmeta.img 文件，执行如下命令

```bash
./fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

成功刷入第三方 recovery 后，重启进入 recovery ，执行如下命令，即可进入

```bash
./fastboot reboot recovery
```




[不登陆小米账号启用 MIUI 的 ADB 调试（安全设置）和 ADB 应用安装 - 哔哩哔哩](https://www.bilibili.com/read/cv21517358/)

```txt
    <boolean name="permcenter_install_intercept_enabled" value="false" />
    <boolean name="security_adb_install_enable" value="true" />
```



