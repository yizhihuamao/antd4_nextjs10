### antd4_nextjs10
#### 说明
1. 由于需要支持`SEO`，所以使用了`nextjs`
2. 本项目兼容`css/less import`直接引用和`css model`共用
3. 使用业界常用的`eslint`及`prettier`配置
4. 使用`Ant Design 4.x`作为`UI`

#### 开发
1. `3888/3889`端口不要占用，需要修改的在`package.json`修改
2. 开发：`yarn dev`

#### 部署
1. 将项目上传/`git clone`到服务器
2. 服务器安装依赖：`yarn/npm i`
3. 构建：`yarn build`
4. 启动服务：`yarn start`，默认端口已经改为`3889`