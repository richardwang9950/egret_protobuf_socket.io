class TestProtobuf {
    private socket;
    constructor(data){
        this.socket=io.connect("http://localhost:3000/");
        this.socket.on("receive",function (data) {
            let arr=new Uint8Array(data);
            console.log("Uint8Array: ",   arr);
            console.log(test.SearchRespond.decode(arr))
        });
        this.socket.emit("send",data)
    }

}
