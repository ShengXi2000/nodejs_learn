# 终端命令查看npm包所安装的包列表

### 查看局部包列表

> npm list

或yarn

> yarn list

### 查看全局包列表

> npm list -g

或yarn

> yarn list -g

### 查看顶层局部包列表

> npm list --depth=0

或yarn

> yarn list --depth=0

### 查看顶层全局包列表

> npm list -g --depth 0

### 查看指定包的版本

> npm list cowsay

### 查看指定包在npm仓库中的最新版本

npm view [packName] version

> npm view cowsay version

### 查看指定包在npm仓库中的所有版本记录

npm view [packName] versions

> npm view cowsay versions