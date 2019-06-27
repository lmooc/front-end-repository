

猴子都能懂的Git入门
https://backlog.com/git-tutorial/cn/


建立分支 git branch issue1

查看分支 git branch

切换分支 git checkout issue1

合并分支 git merge issue1

删除分支 git branch -d issue1

解决合并的冲突

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup2_7_2.png)


### 标签
标签是为了更方便地参考提交而给它标上易懂的名称。

Git可以使用2种标签：轻标签和注解标签。打上的标签是固定的，不能像分支那样可以移动位置。

+ 轻标签
   + 添加名称
+ 注解标签
   + 添加名称
   + 添加注解
   + 添加签名

一般情况下，发布标签是采用注解标签来添加注解或签名的。轻标签是为了在本地暂时使用或一次性使用。

1. 添加轻标签
使用tag命令来添加标签，在<tagname>执行标签的名称。
`
$ git tag <tagname>
`
在HEAD指向的提交里添加名为apple的标签，请执行以下的命令。
`
$ git tag apple
`
如果没有使用参数而执行tag，可以显示标签列表。
```
$ git tag

 apple
```

如果在log命令添加 --decorate选项执行，可以显示包含标签资料的历史记录。
`
$ git log --decorate
`
```
commit e7978c94d2104e3e0e6e4a5b4a8467b1d2a2ba19 (HEAD, tag: apple, master)
Author: yourname <yourname@yourmail.com>
Date:   Wed Jul 18 16:43:27 2012 +0900

    first commit
```

2. 添加注解标签
若要添加注解标签，可以在tag命令指定 -a选项执行。执行后会启动编辑区，请输入注解，也可以指定-m选项来添加注解。
`
$ git tag -a <tagname>
`
在HEAD指向的提交里添加名为banana的标签，请执行以下的命令。
`
$ git tag -am "连猴子都懂的Git" banana
`
如果在tag命令指定-n选项执行，可以显示标签的列表和注解。
```
$ git tag -n

apple           first commit
banana          连猴子都懂的Git
```

3. 删除标签
若要删除标签，在tag命令指定 -d选项执行。
`
$ git tag -d <tagname>
`

### 改写提交

1. 修改最近的提交
 指定amend选项执行提交的话，可以修改同一个分支最近的提交内容和注解。

主要使用的场合：
+ 添加最近提交时漏掉的档案
+ 修改最近提交的注解

2. 取消过去的提交
 revert可以取消指定的提交内容。使用rebase -i或reset也可以删除提交。但是，不能随便删除已经发布的提交，这时需要通过revert创建要否定的提交。

 主要使用的场合：
+ 安全地取消过去发布的提交

3. 遗弃提交, reset可以遗弃不再使用的提交。执行遗弃时，需要根据影响的范围而指定不同的模式，可以指定是否复原索引或工作树的内容。

模式名称|HEAD的位置|索引|工作树
---|:--:|:--:|---:
soft|修改|不修改|不修改
mixed|修改|修改|不修改
hard|修改|修改|修改

主要使用的场合：
   + 复原修改过的索引的状态(mixed)
   + 彻底取消最近的提交(hard)
   + 只取消提交(soft)

4. 提取提交
cherry-pick，从其他分支复制指定的提交，然后导入到现在的分支。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup6_4_1.png)

主要使用的场合：

+ 把弄错分支的提交移动到正确的地方
+ 把其他分支的提交添加到现在的分支

5. 改写提交的历史记录
rebase指定i选项，可以改写、替换、删除或合并提交。

主要使用的场合：
+ 在push之前，重新输入正确的提交注解
+ 清楚地汇合内容含义相同的提交。
+ 添加最近提交时漏掉的档案

6. 汇合分支上的提交，然后一同合并到分支
merge的特殊选项：squash,用这个选项指定分支的合并，就可以把所有汇合的提交添加到分支上。

主要使用的场合：
+ 汇合主题分支的提交，然后合并提交到目标分支。