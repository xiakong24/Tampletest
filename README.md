# TSHL使用教程
Mathematica中，多元函数的导数看起来太多冗杂，不够简介，因此笔者写了一套替换代码，用于实验函数的简化表达，例如
![rvokj0p5 mjv](https://github.com/user-attachments/assets/16ec15e6-53e1-497c-9dd7-03d580b99718)
## 实现的功能
1.自动识别自变量，将[]中的自变量自动转化为角标
2.最多支持四个自变量
3.支持白名单,输入`TSHLKeyword`，可以查看白名单列表
## 目前的问题
1.替换后无法逆变换回导数

2.替换后可能出现诸如下图问题，请自行甄别，或提交反馈！

![slu41htv jco](https://github.com/user-attachments/assets/82687951-84f8-481b-af8b-53bcdb092403)

## 安装教程

1.下载TSHL文件至文件夹，然后输入`<<文件夹/TSHL`.

2. 或直接输入`<< https://github.com/xiakong24/Tampletest/raw/refs/heads/none/TSHL`.
   
4. 可选，打开软件自动加载：在

$BaseDirectory/Kernel :内核初始化代码, 适用于所有用户

$UserBaseDirectory/Kernel: 内核初始化代码, 用于当前登录的用户

文件夹中的`init.m`文件中，添加`<< https://github.com/xiakong24/Tampletest/raw/refs/heads/none/TSHL`代码，即可
