---
title: C++ 案例
categories: 
  - 编程语言
tags:
  - Cpp
date: 2025-06-02
---

###### HelloWorld

控制台输出`hello world!

```c++
#include <iostream>

int main() {
	std::cout << "hello world!" << std::endl;
	
	return 0;
}
```

###### 算术计算器

实现两个数值运算

```c++
#include <iostream>

int main() {
	double x, y;
	std::cout << "请输入待运算的数: " << std::endl;
	std::cin >> x >> y;
	
	double sum = x + y;  
	double sub = x - y;  
	double mult = x * y;  
	double div = x / y;  
	  
	std::cout << "和为" << sum;  
	std::cout << "差为" << sub;  
	std::cout << "积为" << sub;  
	std::cout << "商为" << sub;
	
	return 0;
}

```

###### 勾股定理应用

已知直角三角形的两个直角边`a`和`b`求斜边`c`

```c++
#include <iostream>
#include <cmath>

int main() {
	double a, b;  
	  
	std::cout << "输入两个直角边长: " << std::endl;  
	std::cin >> a >> b;  
	  
	double c = sqrt(a * a + b * b);  
	std::cout << "斜边长为: " << c << std::endl;
	
	return 0;
}
```

###### 成绩统计

由学期内表现, 和考试的每一项占总成绩的比例, 算出某学生的最终成绩

###### 重量单位换算

###### 三个人的排序

输入3个任意大小的整数,将其大小排序后正序输出

```c++
#include <iostream>

int main() {
	int a, b, c, temp;
	std::cout << "请输入三个整数" << std:endl;
	
	if (a > b) {  
	    temp = b;  
	    b = a;  
	    a = temp;  
	}  
	if (a > c) {  
	    temp = c;  
	    c = a;  
	    a = temp;  
	}  
	if (b > c) {  
	    temp = c;  
	    c = b;  
	    b = temp;  
	}
	
	std::cout << a << b  << c << std::endl;
	
}
```

- 选择结构
- 交换算法
- 排序算法

