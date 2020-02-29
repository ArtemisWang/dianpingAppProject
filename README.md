# 点评app项目构建
-- 基于react redux react-router

## 1-Mock数据的使用
1. cd到json文件的文件夹内，运行serve，通过访问地址/xxx.json即可访问到该数据，通过配置package.json文件夹中的proxy可以访问到对应的数据
2. 直接将数据放到public文件夹内的mock文件夹，可以通过网址/mock/xxx.json访问到数据

## 2-组件划分原则
1. 解耦
2. 复用
3. 组件颗粒度适度

## 3-State
1. 代表UI完整且最小的状态集合
2. 父组件props传入的不是State
3. 会随着时间、交互操作而变化
4. 不可以通过其他state或者props计算得到

## 4-State保存位置
1. 确定每一个组件依赖的state
2. 当多个组件依赖同一个state，寻找它们共同的父组件

## 5-增加交互行为
1. 父组件中设置方法，通过props传递给子组件，子组件调用实现对数据的修改，添加反向数据流

## 6-Redux优点
1. 能够管理复杂的状态：api数据、本地数据、ui状态
2. 将视图和状态解耦，视图使用React，状态使用Redux

## 7-