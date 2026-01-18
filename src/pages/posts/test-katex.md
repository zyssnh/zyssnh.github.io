---
layout: ../../layouts/MarkdownPostLayout.astro
title: '测试-KaTeX'
author: 'Astro 学习者'
description: "这篇文章会自己出现在列表中！"
image:
  url: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
#   alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-08
tags: ["学习", "测试", "数学", "KaTex"]
---

本文档用于展示 **Astro + KaTeX（remark-math + rehype-katex）** 在 Markdown 中支持的常见数学公式写法。  所有公式均在 **构建阶段渲染**，适用于博客、文档站点与知识库。



#### 爱因斯坦质能方程
$$
    E = mc^2
$$

#### 上下标
$$
    x^2 + x_1 + x_{i,j}
$$

#### 分数

$$
\frac{a+b}{c+d}
$$

#### 根号

$$
\sqrt{x}, \quad \sqrt[n]{x}
$$

#### 求和 & 求积

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\prod_{k=1}^{n} k = n!
$$

#### 积分

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

#### 希腊字母

$$
\alpha, \beta, \gamma, \Delta, \Omega
$$

#### 数学符号

$$
\forall x \in \mathbb{R}, \quad x^2 \ge 0
$$

$$
a \neq b,\quad a \le b,\quad a \ge b
$$

#### 集合及其运算

$$
A \cap B,\quad A \cup B,\quad A \subseteq B
$$

$$
x \in A,\quad x \notin B
$$

#### 矩阵

$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

#### 对其公式

$$
\begin{aligned}
a^2 + b^2 &= c^2 \\
e^{i\pi} + 1 &= 0
\end{aligned}
$$

#### 函数与极限

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
f(x) = \ln x
$$
