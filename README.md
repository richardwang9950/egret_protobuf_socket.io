# egret_protobuf_socket.io
## client 中添加protobuf库
### 下载库

...
npm install protobufjs@6.8.4 -g
npm install @egret/protobuf -g
...

### 添加到egret中
...
pb-egret add
...


创建.proto 文件


...
syntax = "proto3";
package test;
message SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
  enum Corpus {
    UNIVERSAL = 0;
    WEB = 1;
    IMAGES = 2;
    LOCAL = 3;
    NEWS = 4;
    PRODUCTS = 5;
    VIDEO = 6;
  }
  Corpus corpus = 4;
}
message SearchRespond {
  string name = 1;
  int32 id = 2;
  int32 score = 3;

}
...

编译生成js

...
pb-egret generate
...

