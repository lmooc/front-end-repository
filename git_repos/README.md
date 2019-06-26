## git使用
Git是一个分布式版本管理系统，是为了更好地管理Linux内核开发而创立的。

Git可以在任何时间点，把文档的状态作为更新记录保存起来。因此可以把编辑过的文档复原到以前的状态，也可以显示编辑前后的内容差异。

1. Git数据库 (Repository) 
是记录文件或目录状态的地方，存储着内容修改的历史记录。在数据库的管理下，把文件和目录修改的历史记录放在对应的目录下。

Git的数据库分为远程数据库和本地数据库的两种。

+ 远程数据库: 配有专用的服务器，为了多人共享而建立的数据库。
+ 本地数据库: 为了方便用户个人使用，在自己的机器上配置的数据库。

![avatar](https://backlog.com/git-tutorial/cn/img/post/intro/capture_intro1_2_2.png)

2. 修改记录的提交
若要把文件或目录的添加和变更保存到数据库，就需要进行提交。

执行提交后，数据库中会生成上次提交的状态与当前状态的差异记录（也被称为revision）。

> 不同类别的修改 (如：Bug修复和功能添加) 要尽量分开提交，以方便以后从历史记录里查找特定的修改内容。

执行提交时，系统会要求输入提交信息,Git的标准注解：
```
第1行：提交修改内容的摘要
第2行：空行
第3行以后：修改的理由
```

3. 工作树和索引

在Git管理下，实际操作的目录被称为工作树。

在数据库和工作树之间有索引，索引是为了向数据库提交作准备的区域。

![pic](https://backlog.com/git-tutorial/cn/img/post/intro/capture_intro1_4_1.png)

Git在执行提交的时候，不是直接将工作树的状态保存到数据库，而是将设置在中间索引区域的状态保存到数据库。因此，要提交文件，首先需要把文件加入到索引区域中。

4. 分支 (branch)

分支是为了将修改记录的整体流程分叉保存。分叉后的分支不受其他分支的影响，所以在同一个数据库里可以同时进行多个修改。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_2_1.png)

+ HEAD
+ stash
还未提交的修改内容以及新添加的文件，留在索引区域或工作树的情况下切换到其他的分支时，修改内容会从原来的分支移动到目标分支。
但是如果在checkout的目标分支中相同的文件也有修改，checkout会失败的。这时要么先提交修改内容，要么用stash暂时保存修改内容后再checkout。

5. 分支的合并
合并分支有2种方法：使用merge或rebase
+ merge
使用merge可以合并多个历史记录的流程


   + bugfix分支是从master分支分叉出来的。
!['分支'](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_1.png)
合并 bugfix分支到master分支时，如果master分支的状态没有被更改过，那么这个合并是非常简单的。 bugfix分支的历史记录包含master分支所有的历史记录，所以通过把master分支的位置移动到bugfix的最新分支上，Git 就会合并。这样的合并被称为fast-forward（快进）合并。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_2.png)


   + master分支的历史记录有可能在bugfix分支分叉出去后有新的更新。这种情况下，要把master分支的修改内容和bugfix分支的修改内容汇合起来。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_3.png)
合并两个修改会生成一个提交。这时，master分支的HEAD会移动到该提交上。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_4.png)


+ rebase

如下图所示，bugfix分支是从master分支分叉出来的
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_6.png)
如果使用rebase方法进行分支合并，会出现下图所显示的历史记录。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_7.png)
首先，rebase bugfix分支到master分支, bugfix分支的历史记录会添加在master分支的后面。如图所示，历史记录成一条线，相当整洁。

rebase之后，master的HEAD位置不变。因此，要合并master分支和bugfix分支，即是将master的HEAD移动到bugfix的HEAD这里。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_9.png)

Merge和rebase都是合并历史记录，但是各自的特征不同,
+ merge
保持修改内容的历史记录，但是历史记录会很复杂。
+ rebase
历史记录简单，是在原有提交的基础上将差异内容反映进去。
因此，可能导致原本的提交内容无法正常运行。



## Git的分支的用例

http://nvie.com/posts/a-successful-git-branching-model/

主要分为
+ 主分支
+ 特性分支
+ release分支
+ hotFix分支

分别使用4个种类的分支来进行开发的。
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_5_6.png)

>主分支
主分支有两种：master分支和develop分支

+ master
master分支只负责管理发布的状态。在提交时使用标签记录发布版本号。
+ develop
develop分支是针对发布的日常开发分支。有合并分支的功用。

>特性分支

这个分支是针对新功能的开发，在bug修正的时候从develop分支分叉出来的。基本上不需要共享特性分支的操作，所以不需要远端控制。完成开发后，把分支合并回develop分支后发布。

>release分支
release分支是为release做准备的。通常会在分支名称的最前面加上release-。release前需要在这个分支进行最后的调整，而且为了下一版release开发用develop分支的上游分支。

一般的开发是在develop分支上进行的，到了可以发布的状态时再创建release分支，为release做最后的bug修正。

到了可以release的状态时，把release分支合并到master分支，并且在合并提交里添加release版本号的标签。

要导入在release分支所作的修改，也要合并回develop分支。

>hotFix分支
hotFix分支是在发布的产品需要紧急修正时，从master分支创建的分支。通常会在分支名称的最前面加上 hotfix-。

例如，在develop分支上的开发还不完整时，需要紧急修改。这个时候在develop分支创建可以发布的版本要花许多的时间，所以最好选择从master分支直接创建分支进行修改，然后合并分支。

修改时创建的hotFix分支要合并回develop分支。