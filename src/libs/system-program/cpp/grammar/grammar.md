---
title: C++ 语法
categories: 
  - 编程语言
tags:
  - Cpp
date: 2025-06-02
---

## 基本语法

## 数据类型

## 控制结构

- 顺序结构
- [选择结构](######选择结构)
- [循环结构](######循环结构)

###### 选择结构

- **if语句**

```c++
if (expression)
	statement
else
	statement
```

- **switch语句**

```c++
switch (expression) {
	case numericalValue:
		statement;
	case numericalValue:
		statement;
		...
	default:
		statement;
}
```

###### 循环结构

- **while语句**

```c++
while (expression)
	statement
```

循环语句每次开始判断`expression`的值,如为`true`则循环继续,反之结束循环.

- **do...while**

```c++
do
	statement
while (expression);
```

此为先执行一遍循环体内表达式,在进行判断,即确定`expression`的值.如为`true`则循环继续,反之结束循环

- **for语句**

```c++
for (expression1; expression2; expression3)
	statement
```

执行`expression1`求解`expression2`用于判断是否继续循环.执行`expression3`后返回第二部

## 数据结构

- 数组
- 字符串

###### 数组

数组为一组数据类型相同的变量的有序集合, 使用数组名标识, 数组中所包含的每个变量, 即数组元素, 通过此变量在数组中的相对位置,
即下标来区分和引用

- 一维数组

```c++
dataType Array [IntegerConstantExpression];
```

- 多维数组

###### 字符串

## 函数

C/C++ 语言提供3种类型的函数

- 主函数`main()`
- 标准库函数
- 自定义函数

使用自定义函数时，需先定义该函数，格式为：

```c++
[functionTypes] [functionName] ([Types Parameters]) {
	[statements];
	
	return [expressions];
}
```

`functionTypes`函数类型为调用该函数所得到结果的数值类型，即返回值类型，由`return`返回。
`functionName`函数名称

## 面向对象