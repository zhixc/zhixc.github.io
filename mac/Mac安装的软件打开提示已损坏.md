# Mac安装的软件打开提示已损坏

> 不是从 appstore 下载的软件很多存在这种问题，按照下面的步骤操作后，大部分可以正常运行

## 1.开启任意来源
打开终端，输入以下命令
```bash
sudo spctl --master-disable
```
按回车后，需要输入电脑的锁屏解锁密码，注意：输入密码时，密码不会显示

这时候可以尝试打开app，如果还是提示已损坏，那么进行下面步骤2

## 2.取消app的验证
打开终端，输入命令
```bash
xattr -r -d com.apple.quarantine 
```

然后将打不开的app拖动到终端窗口里面，再按回车键，如果需要密码，那么就输入密码，与步骤1类似

接下来可以尝试打开app了，正常情况下应该能够打开了，如果还是不行，那么百度/谷歌搜索解决吧。
