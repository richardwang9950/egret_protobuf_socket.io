var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TestProtobuf = (function () {
    function TestProtobuf(data) {
        this.socket = io.connect("http://localhost:3000/");
        this.socket.on("receive", function (data) {
            console.log("receive message: ", data);
            var arr = new Uint8Array(data);
            console.log("Uint8Array: ", arr);
            console.log(test.SearchRespond.decode(arr));
        });
        this.socket.emit("send", data);
    }
    return TestProtobuf;
}());
__reflect(TestProtobuf.prototype, "TestProtobuf");
